"use client";
import { useAuthStore } from "@/lib/firebase/auth";
import { getFavorites, removeFromFavorites } from "@/lib/firebase/favorites";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPsychologist, getPsychologistById } from "@/lib/api/api";
import { Psychologist } from "@/types/psychologist";
import PsyCard from "@/app/components/PsyCard/PsyCard";
import AppointmentModal from "@/app/components/Modal/AppointmentModal/AppointmentModal";
import Filter from "@/app/components/Filter/Filter";
import FilteredPsychologist from "@/lib/filters/filters";
import css from "./page.module.css";

export default function FavoritesPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [filter, setFilter] = useState<string>("A to Z");
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
    async function fetchPsychologists() {
      const res = await getFavorites();

      const favoriteId = Object.keys(res ?? {});
      const psychologistData = await getPsychologistById(favoriteId);
      setPsychologists(psychologistData);
    }
    fetchPsychologists();
  }, [isAuthenticated, router]);
  if (!isAuthenticated) {
    return null;
  }
  const filteredPsychologist = FilteredPsychologist(psychologists, filter);
  const handleRemoveFavorite = async (id: string) => {
    await removeFromFavorites(id);
    setPsychologists((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <main className={css.container}>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredPsychologist.map((psychologist) => (
        <PsyCard
          key={psychologist.id}
          psychologist={psychologist}
          onAppointment={setSelectedPsychologist}
          removeFavorite={handleRemoveFavorite}
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
