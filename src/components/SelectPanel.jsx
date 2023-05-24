import React, { useState } from "react";
import showNothing from "../assets/shownothing.png";
import { bigimgUrl, imageName, imageUrl } from "../constants/imageUrl";
import "./main.css";
import syou3 from "../assets/01右手/_you3.jpg";
export default function SelectPanel(props) {
  const [lid, setLid] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "200px",
          padding: "10px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
        className="buttons"
      >
        {imageName.map((item, index) => {
          return (
            // <div
            //   style={{
            //     marginBottom: "20px",
            //     width: "200px",
            //     display: "flex",
            //     flexDirection: "row",
            //     overflow: "auto",
            //     height: "50px",
            //   }}
            // >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
              }}
              className="buttons"
            >
              <button
                type="button"
                className={index === lid ? "nes-btn is-primary" : "nes-btn"}
                onClick={() => {
                  setLid(index);
                }}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div
        style={{
          // width: "570px",
          height: "600px",
          width: "80%",
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          overflow: "auto",
          marginLeft: "20px",
          alignContent: "flex-start",
          marginLeft: "20px",
          padding: "5px",
          // backgroundColor: "#f9f9f9",
        }}
      >
        {bigimgUrl[lid].map((item, index) => {
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                margin: "5px",
                // margin: "10px",
                backgroundColor:
                  props?.images[lid + 1] == imageUrl[lid][index]
                    ? "#d1f1b73b"
                    : "#f9f9f9",
              }}
              className="imgElements"
              onClick={() => props.updateImage(lid + 1, imageUrl[lid][index])}
            >
              <img
                src={item}
                // src={syou3}
                alt={item}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
          );
        })}
        <div
          style={{
            width: "100px",
            height: "100px",
            margin: "5px",
            // margin: "10px",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="imgElements"
          onClick={() => props.updateImage(lid + 1, -1)}
        >
          <img
            src={showNothing}
            // alt={item}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
