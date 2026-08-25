import { Psychologist } from "@/types/psychologist";

export default function FilteredPsychologist(
  psychologists: Psychologist[],
  filter: string,
) {
  switch (filter) {
    case "A to Z":
      return [...psychologists].sort((a, b) => a.name.localeCompare(b.name));
    case "Z to A":
      return [...psychologists].sort((a, b) => b.name.localeCompare(a.name));
    case "Less than 10$":
      return [...psychologists].sort(
        (a, b) => a.price_per_hour - b.price_per_hour,
      );
    case "Greater than 10$":
      return [...psychologists].sort(
        (a, b) => b.price_per_hour - a.price_per_hour,
      );
    case "Popular":
      return [...psychologists].sort((a, b) => b.rating - a.rating);
    case "Not popular":
      return [...psychologists].sort((a, b) => a.rating - b.rating);
    case "Show all":
      return psychologists;
  }
  return psychologists;
}
