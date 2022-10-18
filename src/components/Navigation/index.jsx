import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FakeComponent from "../FakeComponent";

const Navigation = () => {
  const months = [
    {
      label: "January",
      value: 1,
    },
    {
      label: "February",
      value: 2,
    },
    {
      label: "March",
      value: 3,
    },
    {
      label: "April",
      value: 4,
    },
    {
      label: "May",
      value: 5,
    },
    {
      label: "June",
      value: 6,
    },
    {
      label: "July",
      value: 7,
    },
    {
      label: "August",
      value: 8,
    },
    {
      label: "September",
      value: 9,
    },
    {
      label: "October",
      value: 10,
    },
    {
      label: "November",
      value: 11,
    },
    {
      label: "December",
      value: 12,
    },
  ];

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const date = new Date();

  //date actuelle
  const currentDayYear = date.getFullYear();

  //mois actuel
  const currentDayMonth = date.getMonth() + 1;

  //années, établissement d'une plage de 100 ans à l'utilisateur
  const years = [];
  //+1 pour afficher l'année actuelle :
  for (let i = currentDayYear - 100; i <= currentDayYear; i++) {
    years.push({ label: i, value: i });
  }

  return (
    <nav className={"navigation-datepicker"}>
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className={"navigation-datepicker--icon"}
        size={"5x"}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faHome}
        className={"navigation-datepicker--icon"}
        size={"5x"}
      ></FontAwesomeIcon>
      <Select
        defaultValue={months.filter((item) => item.value === currentDayMonth)}
        onChange={setMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
      />
      <Select
        defaultValue={years.filter((item) => item.value === currentDayYear)}
        onChange={setYear}
        options={years}
        isSearchable={false}
        isClearable={false}
      />
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className={"navigation-datepicker--icon"}
        size={"5x"}
      ></FontAwesomeIcon>
    </nav>
  );
};

export default Navigation;
