"use client";
import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { getPsychologist } from "@/lib/api/api";
import PsyCard from "../components/PsyCard/PsyCard";
import css from "./page.module.css";
import Filter from "../components/Filter/Filter";
import FilteredPsychologist from "@/lib/filters/filters";
import AppointmentModal from "../components/Modal/AppointmentModal/AppointmentModal";
import LoginModal from "../components/Modal/LoginModal/LoginModal";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";

export default function PsychologistsPage() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("A to Z");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist | null>(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchPsychologists() {
      try {
        const res = await getPsychologist(null);
        setPsychologists(res.psychologist);
        setLastKey(res.lastKey);
      } catch {
        toast.error("Something went wrong! Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPsychologists();
  }, []);
  async function LoadMore() {
    setIsLoading(true);
    try {
      const res = await getPsychologist(lastKey);
      setPsychologists((prev) => [...prev, ...res.psychologist]);
      setLastKey(res.lastKey);
    } catch {
      toast.error("Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <Loader />;
  }

  const filteredPsychologist = FilteredPsychologist(psychologists, filter);
  return (
    <main className={css.container}>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredPsychologist.map((psychologist) => (
        <PsyCard
          key={psychologist.id}
          psychologist={psychologist}
          onAppointment={setSelectedPsychologist}
          openModal={setModal}
        />
      ))}
      {lastKey !== null && (
        <button onClick={LoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
      {selectedPsychologist && (
        <AppointmentModal
          onClose={() => setSelectedPsychologist(null)}
          psychologist={selectedPsychologist}
        />
      )}
      {modal && <LoginModal onClose={() => setModal(false)} />}
    </main>
  );
}
