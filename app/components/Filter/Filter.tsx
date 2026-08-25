import { useState } from "react";
import css from "./Filter.module.css";
import { IoIosArrowUp } from "react-icons/io";

interface FilterProps {
  filter: string;
  setFilter: (filtr: string) => void;
}
export default function Filter({ filter, setFilter }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          <li
            className={`${css.filterItem} ${filter === "A to Z" ? css.active : ""}`}
            onClick={() => setFilter("A to Z")}
          >
            A to Z
          </li>
          <li
            className={`${css.filterItem} ${filter === "Z to A" ? css.active : ""}`}
            onClick={() => setFilter("Z to A")}
          >
            Z to A
          </li>
          <li
            className={`${css.filterItem} ${filter === "Less than 10$" ? css.active : ""}`}
            onClick={() => setFilter("Less than 10$")}
          >
            Less than 10$
          </li>
          <li
            className={`${css.filterItem} ${filter === "Greater than 10$" ? css.active : ""}`}
            onClick={() => setFilter("Greater than 10$")}
          >
            Greater than 10$
          </li>
          <li
            className={`${css.filterItem} ${filter === "Popular" ? css.active : ""}`}
            onClick={() => setFilter("Popular")}
          >
            Popular
          </li>
          <li
            className={`${css.filterItem} ${filter === "Not popular" ? css.active : ""}`}
            onClick={() => setFilter("Not popular")}
          >
            Not popular
          </li>
          <li
            className={`${css.filterItem} ${filter === "Show all" ? css.active : ""}`}
            onClick={() => setFilter("Show all")}
          >
            Show all
          </li>
        </ul>
      )}
    </div>
  );
}
