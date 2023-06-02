import React, { useState } from "react";
import showNothing from "../assets/shownothing.png";
import { bigimgUrl, imageName, imageUrl } from "../constants/imageUrl";
import "./main.css";
import syou3 from "../assets/01右手/_you3.jpg";
export default function SelectPanel(props) {
  const size = props.size;

  const [lid, setLid] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: size.flg ? "row" : "column",
      }}
    >
      <div
        style={{
          width: size.flg ? "200px" : "auto",
          padding: "10px",
          // height: "600px",
          height: size.flg ? size.w1 : "auto",
          display: "flex",
          flexDirection: size.flg ? "column" : "row",
          overflow: "auto",
        }}
        className="buttons"
      >
        {imageName.map((item, index) => {
          return (
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
          width: size.flg ? "570px" : "auto",
          // height: "600px",
          // width: "80%",
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          overflow: "auto",
          // marginLeft: "20px",
          marginTop: size.flg ? "0px" : "20px",
          alignContent: "flex-start",
          marginLeft: size.flg ? "20px" : "0px",
          // justifyContent: "center",
          padding: "5px",
          // backgroundColor: "#f9f9f9",
        }}
      >
        {bigimgUrl[lid].map((item, index) => {
          return (
            <div
              style={{
                width: size.flg ? "100px" : "70px",
                height: size.flg ? "100px" : "70px",
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
                  width: size.flg ? "100px" : "70px",
                  height: size.flg ? "100px" : "70px",
                }}
              />
            </div>
          );
        })}

        <div
          style={{
            width: size.flg ? "100px" : "70px",
            height: size.flg ? "100px" : "70px",
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
              width: size.flg ? "50px" : "35px",
              height: size.flg ? "50px" : "35px",
            }}
          />
        </div>
      </div>
      {!size.flg && <div style={{ height: "500px" }}></div>}
    </div>
  );
}
