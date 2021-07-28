import React, { useState, useContext } from "react";
import { CanvasContext } from "../includes/CanvasContext";

const Text = (props) => {
   // console.log(props);
   const canvasContext = useContext(CanvasContext);
   const buttons = [
      {
         className: "shirt-colors shirt-colors-black",
         urlShort: `url('/images/short-black.png')`,
         urlLong: `url('/images/long-black.png')`,
      },
      {
         className: "shirt-colors shirt-colors-white",
         urlShort: `url('/images/3dshirtshort.png')`,
         urlLong: `url('/images/3dshirt.jpg.png')`,
      },
      {
         className: "shirt-colors shirt-colors-blueBlack",
         urlShort: `url('/images/short-blueBlack.png')`,
         urlLong: `url('/images/long-blueBlack.png')`,
      },
      {
         className: "shirt-colors shirt-colors-pink",
         urlShort: `url('/images/short-pink.png')`,
         urlLong: `url('/images/long-pink.png')`,
      },
      {
         className: "shirt-colors shirt-colors-orange",
         urlShort: `url('/images/short-orange.png')`,
         urlLong: `url('/images/long-orange.png')`,
      },
   ];
   let shirtType = canvasContext.shirtType;
   const [toggleShirt, setToggleShirt] = useState(false);
   const showBack = () => {
      setToggleShirt(!toggleShirt);

      if (shirtType === "tshirt") {
         // props.canvasRef.style.backgroundImage =
         // "url('/images/colors-front/short-white-back.png')";
      }
   };

   return (
      <>
         {buttons.map((btns, i) => (
            <button
               className={btns.className}
               onClick={() => {
                  if (shirtType === "tshirt") {
                     props.canvasRef.style.backgroundImage = btns.urlShort;
                  } else if (shirtType === "long") {
                     props.canvasRef.style.backgroundImage = btns.urlLong;
                  }
               }}
            ></button>
         ))}

         {/* <button onClick={() => showBack()}>Show Back</button> */}
      </>
   );
};

export default Text;
