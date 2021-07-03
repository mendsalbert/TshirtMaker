import React, { useContext, useState } from "react";
import { CanvasContext } from "../includes/CanvasContext";

const Toolbars = (props) => {
  const canvasContext = useContext(CanvasContext);
  const canvas = canvasContext.canvas;
  const [strokeValue, setStrokeValue] = useState("");
  const [current, setCurrent] = useState("blacK");
  const changeColor = (e) => {
    setCurrent(e.target.value);
    canvas.getActiveObject().set("fill", e.target.value);
    canvas.renderAll();
  };

  const stroke = (e) => {
    // canvas.getActiveObject().set({ fill: "", stroke: "black", strokeWidth: 2 });
    // canvas.renderAll();
  };

  const setStroke = (e) => {
    // setStrokeValue(e.target.value);
    // console.log(e.target.value);
    // // console.log(strokeValue);
    // canvas.getActiveObject().set({
    //   fill: current,
    //   stroke: "blacl",
    //   strokeWidth: Number(e.target.value),
    // });
    // canvas.renderAll();
  };

  const changeStrokeColor = (e) => {
    // setCurrent(e.target.value);
    // canvas.getActiveObject().set({ fill: "", stroke: e.target.value });
    // canvas.renderAll();
  };

  return (
    <>
      <div>
        <input
          id="create-color"
          className="toolbar-styles"
          type="color"
          onChange={(e) => {
            changeColor(e);
          }}
        />
      </div>

      <button onClick={() => stroke()}>Stroke outline</button>
      <input
        id="create-color"
        className="toolbar-styles"
        type="color"
        onChange={(e) => {
          changeStrokeColor(e);
        }}
      />
      <input
        type="range"
        min="1"
        max="10"
        id="text-stroke-width"
        onChange={(e) => setStroke(e)}
        value={strokeValue}
      />
    </>
  );
};

export default Toolbars;
