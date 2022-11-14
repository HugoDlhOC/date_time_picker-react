//tester le rendu des composants : éléments de navigations (home, next, previous, selects), corps du calendrier
//tests sur les années maximales
//test sur la langue
//test sur le format
//test de disparition de la flèche droite quand l'année max et le mois max est arrivé (de même pour minimum)
//test contenu dans input quand date cliquée
//test de fermeture du calendrier quand date cliquée
//test ouverture calendrier quand input cliqué

import { render as reduxRender } from "@testing-library/react";
import Calendar from "../components/Calendar";
import { Provider } from "react-redux";
import { store } from "../app/store";

const render = (component) =>
  reduxRender(<Provider store={store}>{component}</Provider>);

test("test de rendu app", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={1990}
      yearMax={2080}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector(".calendar");

  expect(element).not.toBeNull();
});
/*
test("si l'année minimum est supérieur à année actuelle + 1000, alors on doit avoir une erreur affichée", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={1990}
      yearMax={new Date().getFullYear() + 2000}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector(".calendar");

  expect(element).not.toBeNull();
});

test("si l'année minimum est supérieur à année actuelle - 1000, alors on doit avoir une erreur affichée", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={new Date().getFullYear() - 2000}
      yearMax={2080}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector(".calendar");

  expect(element).not.toBeNull();
});

test("si la langue choisi n'est pas disponible dans les langues proposées, alors une erreur de date-fns est affichée", () => {
  render(
    <Calendar
      languageChoice={"france"}
      yearMin={1990}
      yearMax={2080}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector(".calendar");

  expect(element).not.toBeNull();
});

test("si le format voulu par l'utilisateur n'est pas disponible dans date-fns, alors une erreur de date-fns est affichée", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={1990}
      yearMax={2080}
      returnFormat={"jj/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector(".calendar");

  expect(element).not.toBeNull();
});

//.toThrow(error?) ---> https://jestjs.io/fr/docs/expect#tothrowerror on voit si la fonction de date-fns lève bien une exception

test("si l'utilisateur arrive au dernier mois et à la dernière année disponible, alors la flèche droite ne doit plus être affichée", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={1990}
      yearMax={2080}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector("#button-next-arrow");

  //faire la manip de l'utilisateur qui choisi le dernier élément du select mois et le dernier élément du select année

  expect(element).toBeNull();
});

test("si l'utilisateur arrive au premier mois et à la première année disponible, alors la flèche gauche ne doit plus être affichée", () => {
  render(
    <Calendar
      languageChoice={"fr"}
      yearMin={1990}
      yearMax={2080}
      returnFormat={"dd/MM/yyyy"}
      classToggle={"calendar"}
      defaultDate={new Date()}
    />
  );
  const element = document.querySelector("#button-previous-arrow");

  //faire la manip de l'utilisateur qui choisi le premier élément du select mois et le premier élément du select année

  expect(element).toBeNull();
});*/
