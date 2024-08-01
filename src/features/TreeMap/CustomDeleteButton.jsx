import { useState } from "react";
import OptionButton from "./OptionButton";

function CustomDeleteButton({ text, icon, borderClass = "", handleDelete }) {
  const [showInput, setShowInput] = useState(false);
  // const [inputVal, setInputVal] = useState("");

  function handleInput(e) {
    if (e.target.value === "de") handleDelete();
  }

  return showInput ? (
    <input
      autoFocus
      className={`w-full bg-slate-500 outline-none ${borderClass}`}
      placeholder="type de"
      onBlur={() => setShowInput(false)}
      onChange={handleInput}
    ></input>
  ) : (
    <OptionButton
      text={text}
      icon={icon}
      onClick={() => setShowInput(true)}
      borderClass={borderClass}
    />
    // <button onClick={() => setShowInput(true)}>{text}</button>
  );
}

export default CustomDeleteButton;
