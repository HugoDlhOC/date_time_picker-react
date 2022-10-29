import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { useDispatch } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const HomeButton = () => {
  //redux
  const dispatch = useDispatch();

  //context
  //const { setDate } = useContext(DateContext);

  //bouton home = permet de revenir à la date actuelle
  const handleHome = () => {
    const actualDate = new Date();

    dispatch(changeDate({ date: actualDate }));
    //setDate(actualDate);
  };

  return (
    <div>
      <button onClick={handleHome} className={"button-navigation"}>
        <FontAwesomeIcon
          icon={faHome}
          className={"button-navigation--icon"}
          size={"xl"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default HomeButton;
