import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { async } from "q";

function App() {
  const [uploadSucess, setUploadSucess] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputImages, setInputImages] = useState([]);
  const postImage = async () => {
    try {
      const data = { image: inputText };
      console.log(data);
      const response = await axios({
        url: `http://localhost:2000/api/uploadimage`,
        data,
        method: "POST"
      });
      setUploadSucess("Your image was uploaded");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const images = await axios.get("http://localhost:2000/api/images");
      console.log(images);
      setInputImages(images.data);
    };
    getData();
  }, []);
  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button onClick={postImage}>Submit</button>
      <div>{uploadSucess}</div>
      {inputImages.map(inputImage => {
        return <img src={inputImage.image} />;
      })}
    </div>
  );
}

export default App;
