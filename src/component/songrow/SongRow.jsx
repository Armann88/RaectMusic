import React, { useEffect, useState } from "react";
import play from "../../icon/Play.svg";
import newP from "../../icon/NewP.svg";
import heart from "../../icon/Heart.svg";
import check from "../../icon/Check.svg";
import arrow from "../../icon/Arrow.svg";
import arrowb from "../../icon/ArrowB.svg";
import Search from "../buttontype/Search";
import PlayAll from "../buttontype/ButtonPAll";
import Add from "../buttontype/ButtonAdd";
import TrckNum from "../buttontype/ButtonTrckNum";

export default function SongRow({ data }) {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch fake JSON data when the component mounts
    fetch("./fakesong.json")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching fake songs:", error));
  }, []);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  // Check if data is defined before filtering
  const filteredData = data
    ? data.filter(
        (item) =>
          item &&
          item.songName &&
          item.songName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="flex justify-between h-[70px] bg-gradient-to-b from-customs to-button mt-8 rounded-md">
        <div className="flex items-center">
          <PlayAll />
          <Add />
        </div>
        <div className="flex items-center">
          <TrckNum />
          <Search handleSearchChange={handleSearchChange} />
        </div>
      </div>

      <div className="flex justify-center mt-[40px]">
        <div className="flex justify-center w-[100px] h-[70px] bg-custom"></div>
        <div className=" w-[475px] h-[70px] bg-custom ml-1 flex items-center ps-2">
          <p>songName</p>
        </div>
        <div className=" w-[475px] h-[70px] bg-custom ml-1 flex items-center ps-2">
          <p>artistName</p>
        </div>
        <div className=" w-[120px] h-[70px] bg-custom ml-1 flex items-center ps-2">
          <p>track</p>
        </div>
        <div className=" w-[200px] h-[70px] bg-custom ml-1"></div>
      </div>
      {/* Display the filtered data */}
      <div>
        {filteredData.map((item) => (
          <div key={item.Track} className="flex justify-center">
            <div className="flex border-b-2 border-custom w-[100%px] items-center h-[60px]">
              <div className="w-100 flex">
                <img
                  className="ml-[30px] w-[20px] h-[20px]"
                  src={newP}
                  alt=""
                />
                <img
                  className="ml-[20px] w-[20px] h-[20px]"
                  src={play}
                  alt=""
                />
              </div>

              <p className="ml-[25px] w-[475px]">{item.songName}</p>
              <p className="w-[475px]">{item.artistName}</p>
              <p className="w-[115px]">{item.track}</p>

              <div className="w-[200px] flex">
                <img
                  className=" ml-[35px] w-[20px] h-[20px]"
                  src={heart}
                  alt=""
                />
                <img
                  className="ml-[15px] w-[20px] h-[20px]"
                  src={check}
                  alt=""
                />
                <img
                  className="ml-[15px] w-[20px] h-[20px]"
                  src={arrow}
                  alt=""
                />
                <img
                  className="ml-[15px] w-[20px] h-[20px]"
                  src={arrowb}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
