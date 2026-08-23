"use client";
import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { getPsychologist } from "@/lib/api/api";
import PsyCard from "../components/PsyCard/PsyCard";
import css from "./page.module.css";

export default function PsychologistsPage() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  useEffect(() => {
    async function fetchPsychologists() {
      const res = await getPsychologist(null); //потім змінити на lastKey
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

  return (
    <main>
      <div className={css.container}>
        {psychologists.map((psychologist, index) => (
          <PsyCard key={index} psychologist={psychologist} />
        ))}
        <button onClick={LoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      </div>
    </main>
  );
}
