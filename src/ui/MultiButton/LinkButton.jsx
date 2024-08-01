import { FaLink } from "react-icons/fa6";

function LinkButton({ linkActive, toggleLink }) {
  return (
    <div
      className={`absolute -top-5 right-10 w-8 cursor-pointer bg-slate-600 px-2 pb-[5.2px] pt-2 ${linkActive ? "text-green-400 hover:text-green-300" : "text-neutral-900 hover:text-green-700"} duration-30 transition-all`}
      onClick={() => toggleLink((active) => !active)}
    >
      <FaLink />
    </div>
  );
}

export default LinkButton;
