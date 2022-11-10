//tester le rendu des composants : éléments de navigations (home, next, previous, selects), corps du calendrier
//tests sur les années maximales
//test sur la langue
//test sur le format
//test de disparition de la flèche droite quand l'année max et le mois max est arrivé (de même pour minimum)
//test contenu dans input quand date cliquée
//test de fermeture du calendrier quand date cliquée
//test ouverture calendrier quand input cliqué

import { render } from "@testing-library/react";
import Calendar from "../components/Calendar";

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
