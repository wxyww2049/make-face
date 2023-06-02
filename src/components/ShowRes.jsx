import React, { useEffect, useRef, useState } from "react";
import "./ShowRes.css";
import "nes.css/css/nes.min.css";
import "./main.css";
// import { rightHand } from "../constants/imageUrl";

export default function ShowRes(props) {
  const { size, images, randomImage } = props;

  const resultDiv = useRef(null);

  useEffect(() => {
    const imagePaint = [];
    console.log(images);
    const canvas = resultDiv.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size.w1, size.w1);
    let loadedCount = 0;
    for (let i = images.length - 1; i >= 0; --i) {
      imagePaint[i] = new Image();
      imagePaint[i].src = images[i];
      imagePaint[i].onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          for (let j = images.length - 1; j >= 0; --j) {
            ctx.drawImage(imagePaint[j], 0, 0, size.w1, size.w1);
          }
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
    link.click();
  };
  return (
    <div
      style={{
        fontFamily: "zpix",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <canvas width={size.w1} height={size.w1} ref={resultDiv}></canvas>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={downloadPng}
          style={{
            marginRight: "20px",
          }}
        >
          保存为图片
        </button>
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
