import { IoCheckmark } from "react-icons/io5";

function ApplySvgStylesButton({ onClick }) {
  return (
    <button
      className="flex h-20 w-36 items-center justify-center gap-2 border-2 bg-green-600 hover:bg-green-500 active:bg-green-400"
      onClick={onClick}
    >
      <div className="text-xl">Apply</div>
      <div className="text-4xl">
        <IoCheckmark />
      </div>
    </button>
  );
}

export default ApplySvgStylesButton;
