import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "gn1vvhyt");
    axios
      .post("https://api.cloudinary.com/v1_1/h465141h/image/upload", formData)
      .then((res) => {
        console.log(res);
      });
    // setIsFilePicked(true);
  };

  const handleSubmission = () => {};
  console.log(selectedFile);

  return (
    <div className="App">
      <div>
        <input
          type="file"
          name="file"
          onChange={(e) => uploadImage(e.target.files)}
        />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {/* {selectedFile.lastModifiedDate.toLocaleDateString()} */}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
