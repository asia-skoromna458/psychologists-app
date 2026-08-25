import { useState } from "react";
import css from "./Filter.module.css";
import { IoIosArrowUp } from "react-icons/io";
export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("A to Z");

  return (
    <div className={css.container}>
      <p className={css.filter}>Filters</p>
      <button
        className={css.dropdownBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
        <IoIosArrowUp className={`${css.icon} ${isOpen ? css.active : ""}`} />
      </button>
      {isOpen && (
        <ul className={css.filterList}>
          <li
            className={`${css.filterItem} ${selected === "A to Z" ? css.active : ""}`}
            onClick={() => setSelected("A to Z")}
          >
            A to Z
          </li>
          <li
            className={`${css.filterItem} ${selected === "Z to A" ? css.active : ""}`}
            onClick={() => setSelected("Z to A")}
          >
            Z to A
          </li>
          <li
            className={`${css.filterItem} ${selected === "Less than 10$" ? css.active : ""}`}
            onClick={() => setSelected("Less than 10$")}
          >
            Less than 10$
          </li>
          <li
            className={`${css.filterItem} ${selected === "Greater than 10$" ? css.active : ""}`}
            onClick={() => setSelected("Greater than 10$")}
          >
            Greater than 10$
          </li>
          <li
            className={`${css.filterItem} ${selected === "Popular" ? css.active : ""}`}
            onClick={() => setSelected("Popular")}
          >
            Popular
          </li>
          <li
            className={`${css.filterItem} ${selected === "Not popular" ? css.active : ""}`}
            onClick={() => setSelected("Not popular")}
          >
            Not popular
          </li>
          <li
            className={`${css.filterItem} ${selected === "Show all" ? css.active : ""}`}
            onClick={() => setSelected("Show all")}
          >
            Show all
          </li>
        </ul>
      )}
    </div>
  );
}
