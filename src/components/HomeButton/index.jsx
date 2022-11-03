import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const HomeButton = () => {
  //redux
  const dispatch = useDispatch();

  //bouton home = permet de revenir à la date actuelle
  const handleHome = () => {
    const actualDate = new Date().toISOString();

    dispatch(changeDate({ date: actualDate }));
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
