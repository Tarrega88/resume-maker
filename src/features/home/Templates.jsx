import { useDispatch } from "react-redux";
import { templates } from "../../data/templates/templates";
import SquareHomeButton from "./SquareHomeButton";

const templateNames = templates.map((e) => e.name);

//        dispatch({ type: "LOAD_STATE", payload: parsedState });

function Templates({ setShowTemplates, handleNavigate }) {
  const dispatch = useDispatch();

  function loadTemplate(name) {
    const parsedState = templates.find((e) => e.name === name).data;
    dispatch({ type: "LOAD_STATE", payload: parsedState });
    handleNavigate();
  }

  return (
    <div className="flex flex-wrap items-center gap-8">
      <SquareHomeButton text="Back" onClick={() => setShowTemplates(false)} />
      {templateNames.map((e, i) => (
        <SquareHomeButton key={i} text={e} onClick={() => loadTemplate(e)} />
      ))}
    </div>
  );
}

export default Templates;
