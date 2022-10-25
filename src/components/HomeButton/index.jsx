import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";

const HomeButton = () => {
  //context
  const { dispatch } = useContext(DateContext);

  //bouton home = permet de revenir à la date actuelle
  const handleHome = () => {
    const actualDate = new Date();

    dispatch({
      type: "CHANGE_DATE",
      date: {
        day: actualDate.getDate(),
        month: actualDate.getMonth(),
        year: actualDate.getFullYear(),
      },
    });
  };

  return (
    <div>
      <button onClick={handleHome} className={"button-navigation"}>
        <FontAwesomeIcon
          icon={faHome}
          className={"button-navigation--icon"}
          size={"2x"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default HomeButton;
