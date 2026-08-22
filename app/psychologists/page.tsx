"use client";
import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { getPsychologist } from "@/lib/api/api";
import PsyCard from "../components/PsyCard/PsyCard";

export default function PsychologistsPage() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  useEffect(() => {
    async function fetchPsychologists() {
      const res = await getPsychologist();
      setPsychologists(res);
    }
    fetchPsychologists();
  }, []);
  return (
    <>
      {psychologists.map((psychologist, index) => (
        <PsyCard key={index} psychologist={psychologist} />
      ))}
    </>
  );
}
