import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
export const CanvasContext = React.createContext({
  canvas: new fabric.Canvas("canvas"),
  shirtType: "t-shirt",
});

const CanvasContextProvider = (props) => {
  const [canvas, setCanvas] = useState("");
  // const [canvas2, setCanvas2] = useState("");
  const [shirtType, setShirtType] = useState("tshirt");
  const initCanvas = () => new fabric.Canvas("canvas");
  // const initCanvas2 = () => new fabric.Canvas("canvas2");
  useEffect(() => {
    setCanvas(initCanvas());
    // setCanvas2(initCanvas2());
  }, []);

  const setShirt = (type) => {
    setShirtType(type);
  };
  return (
    <CanvasContext.Provider
      value={{
        canvas: canvas,
        shirtType: shirtType,
        setShirt: setShirt,
      }}
    >
      {props.children}
    </CanvasContext.Provider>
  );
};

export default CanvasContextProvider;
