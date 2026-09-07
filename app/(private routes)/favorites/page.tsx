"use client";
import { useAuthStore } from "@/lib/firebase/auth";
import { getFavorites } from "@/lib/firebase/favorites";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPsychologist } from "@/lib/api/api";
import { FavoritePsychologist, Psychologist } from "@/types/psychologist";
import PsyCard from "@/app/components/PsyCard/PsyCard";
import AppointmentModal from "@/app/components/Modal/AppointmentModal/AppointmentModal";
import Filter from "@/app/components/Filter/Filter";
import FilteredPsychologist from "@/lib/filters/filters";
import css from "./page.module.css";

export default function FavoritesPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const [psychologists, setPsychologists] = useState<FavoritePsychologist[]>(
    [],
  );
  const [filter, setFilter] = useState<string>("A to Z");
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist | null>(null);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
    async function fetchPsychologists() {
      const res = await getPsychologist(null);

      const favorites = await getFavorites();
      const favoriteIndexes = Object.keys(favorites);
      setPsychologists(
        res.psychologist
          .map((psychologist, index) => ({
            psychologist: psychologist,
            index: index,
          }))
          .filter((item) => favoriteIndexes.includes(item.index.toString())),
      );
    }
    fetchPsychologists();
  }, [isAuthenticated, router]);
  if (!isAuthenticated) {
    return null;
  }
  const filteredPsychologist = FilteredPsychologist(
    psychologists.map((item) => item.psychologist),
    filter,
  );
  // const handleRemoweFavorite = async (index: number) => {
  //   await removeFromFavorites(index);
  //   setPsychologists((prev) => prev.filter((item) => item.index !== index));
  // };
  return (
    <main className={css.container}>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredPsychologist.map((psychologist, index) => (
        <PsyCard
          key={index}
          psychologist={psychologist}
          index={index}
          onAppointment={setSelectedPsychologist}
        />
      ))}
      {selectedPsychologist && (
        <AppointmentModal
          onClose={() => setSelectedPsychologist(null)}
          psychologist={selectedPsychologist}
        />
      )}
    </main>
  );
}
