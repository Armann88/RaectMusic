import MusicUpLoad from "../musicuploadform/MusicUploadForm";
import SongRow from "../songrow/SongRow";
import jsonData from "../../fakesong.json";

export default function SongList() {
  return (
    <div className="flex justify-center">
      <div>
        <div>
          <SongRow data={jsonData} />
          <MusicUpLoad />
        </div>
      </div>
    </div>
  );
}
