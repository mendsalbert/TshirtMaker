import React, { useState, useContext } from "react";
import { CanvasContext } from "../includes/CanvasContext";

const Text = (props) => {
   const canvasContext = useContext(CanvasContext);
   const buttons = [
      {
         className: "shirt-colors shirt-colors-black",
         urlShort: `url('/images/colors-front/short-black.png')`,
         urlLong: `url('/images/colors-front/long-black.png')`,
      },
      {
         className: "shirt-colors shirt-colors-white",
         urlShort: `url('/images/colors-front/short-white.png')`,
         urlLong: `url('/images/colors-front/long-white.png')`,
      },
      {
         className: "shirt-colors shirt-colors-blueBlack",
         urlShort: `url('/images/colors-front/short-blueBlack.png')`,
         urlLong: `url('/images/colors-front/long-blueblack.png')`,
      },
      {
         className: "shirt-colors shirt-colors-pink",
         urlShort: `url('/images/colors-front/short-pink.png')`,
         urlLong: `url('/images/colors-front/long-pink.png')`,
      },
      {
         className: "shirt-colors shirt-colors-orange",
         urlShort: `url('/images/colors-front/short-orange.png')`,
         urlLong: `url('/images/colors-front/long-orange.png')`,
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
