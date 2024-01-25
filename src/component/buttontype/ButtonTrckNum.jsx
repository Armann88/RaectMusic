import arrowUP from "../../icon/ArrowUp.svg";
import arrowb from "../../icon/ArrowB.svg";

export default function TrckNum() {
  return (
    <>
      <div className="bg-button rounded flex justify-evenly items-center ml-[10px] w-[180px] h-[50px] border-solid border-[1px] border-sky-500 mr-[40px]">
        <button>
          <img className="w-[20px] h-[20px]" src={arrowUP} alt="" />
        </button>
        <button>Track Nu... </button>
        <button>
          <img className="w-[20px] h-[20px]" src={arrowb} alt="" />
        </button>
      </div>
    </>
  );
}
