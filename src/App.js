import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
    <div className="App">
      <div>
        <h1>Life is a Trip</h1>
      </div>
      <input
        className="search-bar"
        onChange={e => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button className="submit_button" onClick={postImage}>
        Submit
      </button>
      <button>Delete</button>
      <div className="image">
        <div>{uploadSucess}</div>
        {inputImages.map(inputImage => {
          return <img className="pic" src={inputImage.image} alt="" />;
        })}
      </div>
    </div>
  );
}

export default App;
