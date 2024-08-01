import { IoIosPower } from "react-icons/io";

function OnOffSwitch({ on, flipSwitch }) {
  return (
    <div
      className={`absolute -top-5 right-0 w-10 cursor-pointer bg-slate-600 px-2 pb-[5.2px] pt-2 ${on ? "text-green-400 hover:text-green-300" : "text-neutral-900 hover:text-green-700"} rounded-sm transition-all duration-300`}
      onClick={flipSwitch}
    >
      <div className={`flex items-center justify-center`}>
        <IoIosPower />
      </div>
    </div>
  );
}

export default OnOffSwitch;
