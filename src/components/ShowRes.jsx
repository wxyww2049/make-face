import React, { useEffect, useRef, useState } from "react";
import "./ShowRes.css";
import "nes.css/css/nes.min.css";
import "./main.css";
import nothingImg from "../assets/nothing.png";
// import { rightHand } from "../constants/imageUrl";
import LoadingButton from "./LoadingButton";
export default function ShowRes(props) {
  const { size, images, randomImage } = props;
  const [imgurl, setImagUrl] = useState(nothingImg);
  const resultDiv = useRef(null);
  const [ld, setLd] = useState(false);
  useEffect(() => {
    setLd(false);
    const imagePaint = [];
    // console.log(images);
    const canvas = resultDiv.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 600);
    let loadedCount = 0;
    for (let i = images.length - 1; i >= 0; --i) {
      imagePaint[i] = new Image();
      imagePaint[i].setAttribute("crossorigin", "anonymous");
      imagePaint[i].src = images[i];
      imagePaint[i].onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          for (let j = images.length - 1; j >= 0; --j) {
            ctx.drawImage(imagePaint[j], 0, 0, 600, 600);
          }

          const img = canvas.toDataURL("image/png");
          setImagUrl(img);
          setLd(true);
        }
      };
    }
  }, [images, size]);

  const downloadPng = () => {
    const canvas = resultDiv.current;
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "result.png";
    link.href = img;
    // link.click();
    setImagUrl(img);
    var event = new MouseEvent("click");
    link.dispatchEvent(event);
  };
  return (
    <div
      style={{
        fontFamily: "zpix",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // marginTop: 30,
      }}
    >
      <div style={{ display: "none" }}>
        <canvas width={600} height={600} ref={resultDiv}></canvas>
      </div>
      <div
        style={{
          position: "relative",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <img
          style={{
            // margin: "20px 20px 0px 20px",
            width: "100%",
            display: "block",
          }}
          alt=""
          src={imgurl}
        ></img>
        <div
          style={{
            position: "absolute",
            // margin: "20px 20px 0px 20px",
            top: 0,
            width: "100%",
            height: "100%",
            display: ld ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingButton />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "0.9rem",
          marginBottom: "10px",
        }}
      >
        <div style={{ marginBottom: "0px", marginTop: 5 }}>
          图片作者：亚琼@学生在线
        </div>
        <div style={{ flex: 1 }}></div>
        <div style={{ color: "red", marginBottom: "0px", marginTop: 5 }}>
          *长按图片保存至相册
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* <button
          type="button"
          className="nes-btn is-primary"
          onClick={downloadPng}
          style={{
            marginRight: "20px",
          }}
        >
          保存为图片
        </button> */}

        <button
          type="button"
          className="nes-btn is-primary"
          onClick={randomImage}
        >
          随机一个
        </button>
      </div>
    </div>
  );
}
