import { useState } from "react";
import css from "./Filter.module.css";
import { IoIosArrowUp } from "react-icons/io";

interface FilterProps {
  filter: string;
  setFilter: (filtr: string) => void;
}
export default function Filter({ filter, setFilter }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filters = [
    "A to Z",
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];
  const handleFilter = (value: string) => {
    setFilter(value);
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <p className={css.filter}>Filters</p>
      <button
        className={css.dropdownBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {filter}
        <IoIosArrowUp className={`${css.icon} ${isOpen ? css.active : ""}`} />
      </button>
      {isOpen && (
        <ul className={css.filterList}>
          {filters.map((item) => (
            <li
              key={item}
              className={`${css.filterItem} ${
                filter === item ? css.active : ""
              }`}
              onClick={() => handleFilter(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
