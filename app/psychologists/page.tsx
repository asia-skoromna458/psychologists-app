"use client";
import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { getPsychologist } from "@/lib/api/api";
import PsyCard from "../components/PsyCard/PsyCard";
import css from "./page.module.css";
import Filter from "../components/Filter/Filter";
import FilteredPsychologist from "@/lib/filters/filters";
import AppointmentModal from "../components/Modal/AppointmentModal/AppointmentModal";

export default function PsychologistsPage() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("A to Z");
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist | null>(null);

  useEffect(() => {
    async function fetchPsychologists() {
      const res = await getPsychologist(null);
      setPsychologists(res.psychologist);
      setLastKey(res.lastKey);
    }
    fetchPsychologists();
  }, []);
  async function LoadMore() {
    const res = await getPsychologist(lastKey);
    setPsychologists((prev) => [...prev, ...res.psychologist]);
    setLastKey(res.lastKey);
  }
  console.log("filter:", filter);
  const filteredPsychologist = FilteredPsychologist(psychologists, filter);
  return (
    <main>
      <div className={css.container}>
        <Filter filter={filter} setFilter={setFilter} />
        {filteredPsychologist.map((psychologist, index) => (
          <PsyCard
            key={index}
            psychologist={psychologist}
            onAppointment={setSelectedPsychologist}
          />
        ))}
        <button onClick={LoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      </div>
      {selectedPsychologist && (
        <AppointmentModal
          onClose={() => setSelectedPsychologist(null)}
          psychologist={selectedPsychologist}
        />
      )}
    </main>
  );
}
