import React, { useState } from "react";
import clos from "../../icon/Clos.svg";

const MusicUpLoad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleDiv = () => {
    setIsOpen(true);
  };

  const closeDiv = () => {
    setIsOpen(false);
    setErrorMessage(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected File:", file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (songName.length < 3 || artistName.length < 3) {
      setErrorMessage("least 3 characters long.");
    } else if (!selectedFile) {
      setErrorMessage("Please choose a file to upload.");
    } else {
      setErrorMessage(null);

//<<ChatGPT>>\\

      // Construct a query string from form data
      const queryString = `?songName=${encodeURIComponent(songName)}&artistName=${encodeURIComponent(artistName)}`;

      // Encode the file name to prevent issues with special characters
      const encodedFileName = encodeURIComponent(selectedFile.name);

      // Create a new URL with the constructed query string and redirect
      const fileLocation = `/your-server-endpoint${queryString}&fileName=${encodedFileName}`;
      window.location.href = fileLocation;
    }
  };
//
  return (
    <div>
      <div className="flex items-center h-[70px] bg-gradient-to-b from-button to-customs mt-8 mb-8 rounded-md">
        <button
          className="bg-button ml-[10px] w-[120px] h-[50px] border-solid border-[1px] border-sky-500 rounded"
          onClick={toggleDiv}
        >
          MusicUpLoad
        </button>
      </div>

      {isOpen && (
        <div className="flex justify-center items-center w-[400px] bg-gradient-to-b from-button to-customs mt-8 mb-8 rounded-md">
          <form method="get">
            <button
              className="bg-button w-[40px] h-[40px] border-solid border-[1px] border-sky-500 rounded"
              onClick={closeDiv}
            >
              <img className="w-[40px] h-[40px]" src={clos} alt="Close" />
            </button>
            <div className="mb-4">
              <label htmlFor="songName" className="block text-sm font-medium text-gray-700">
                Song Name
              </label>
              <input
                type="text"
                id="songName"
                name="songName"
                className="mt-1 p-2 border rounded-md w-[200px]"
                minLength={3}
                maxLength={50}
                pattern="[a-zA-Z0-9 ]*"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-700">
                Artist Name
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                className="mt-1 p-2 border rounded-md w-[200px]"
                minLength={3}
                maxLength={50}
                pattern="[a-zA-Z0-9 ]*"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                Choose File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".mp3, .wav"
                onChange={handleFileChange}
              />
            </div>
            {errorMessage && <h1 className="text-texterror w-[200px] h-[30px]">{errorMessage}</h1>}

            <button className="bg-button  w-[80px] h-[40px] border-solid border-[1px] border-sky-500 rounded" type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MusicUpLoad;
