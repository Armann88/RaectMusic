import arrowb from "../../icon/ArrowB.svg";

export default function Add() {
    return(
        <>
        <button className="bg-button ml-[10px] w-[120px] h-[50px] border-solid border-[1px] border-sky-500 rounded-l">Add All</button>
        <button className="bg-button rounded-r flex justify-center items-center w-[50px] h-[50px] border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-sky-500">
            <img className="w-[20px] h-[20px]" src={arrowb} alt="" />
        </button>
        </>
    )
}