import { IoMdCheckmark } from "react-icons/io";

function TopRightConfirmButton({ text = "Confirm", onClick }) {
  return (
    <div className="absolute right-12 top-2">
      <button
        className="flex w-36 items-center justify-evenly gap-2 border-2 bg-green-600 text-green-200 duration-100 hover:scale-105 hover:bg-green-500 hover:text-green-100 active:bg-green-400 active:text-green-50"
        onClick={onClick}
      >
        <div>{text}</div>
        <IoMdCheckmark />
      </button>
    </div>
  );
}

export default TopRightConfirmButton;
