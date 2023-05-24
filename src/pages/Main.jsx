import React, { useEffect, useState } from "react";
import ShowRes from "../components/ShowRes";
import { imageUrl } from "../constants/imageUrl";
import SelectPanel from "../components/SelectPanel";
import logoImg from "../assets/logo.png";
import nothingImg from "../assets/nothing.png";

export default function Main() {
  const [images, setImages] = useState([]);
  const randomImage = () => {
    const tmp = [];
    tmp.push(logoImg);
    for (let i = 0; i < imageUrl.length; i++) {
      tmp.push(imageUrl[i][Math.floor(Math.random() * imageUrl[i].length)]);
    }
    setImages(tmp);
  };
  const updateImage = (index, url) => {
    const tmp = [...images];
    if (url === -1) {
      tmp[index] = nothingImg;
    } else tmp[index] = url;
    setImages([...tmp]);
  };
  useEffect(() => {
    randomImage();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexFlow: "wrap",
        // alignItems: "center",
      }}
    >
      {/* 效果展示框 */}
      {/* <div
        style={{
          width: "40%",
          minWidth: "600px",
          margin: "30px 30px 0px 30px",
        }}
      > */}
      <ShowRes images={images} randomImage={randomImage} />
      {/* </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "30px",
          marginTop: "30px",
          minWidth: "400px",
        }}
      >
        <SelectPanel images={images} updateImage={updateImage} />
      </div>
    </div>
  );
}
