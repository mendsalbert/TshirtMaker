import React, { useContext, useState } from "react";
import { CanvasContext } from "../includes/CanvasContext";
import { useSelector, useDispatch } from "react-redux";
import * as toolActions from "../../store/actions/tool_actions";
const Toolbars = (props) => {
   const canvasContext = useContext(CanvasContext);
   const canvas = canvasContext.canvas;
   // const canvas = useSelector((state) => state.index.canvas);
   // const canvas = useSelector((state) => state.index.canvas);
   const current = useSelector((state) => state.tool.current);
   const dispatch = useDispatch();
   // console.log(canvas);
   // const [strokeValue, setStrokeValue] = useState("");
   // const [current, setCurrent] = useState("blacK");
   const changeColor = (e) => {
      dispatch(toolActions.changeCurrentColor(e));
      canvas.getActiveObject().set("fill", e.target.value);
      canvas.renderAll();
   };

   const stroke = (e) => {
      canvas.getActiveObject().set({ fill: "" });
      canvas.renderAll();
   };

   const setStroke = (e) => {
      canvas.getActiveObject().set({
         strokeWidth: Number(e.target.value),
      });
      canvas.renderAll();
   };

   const changeStrokeColor = (e) => {
      canvas.getActiveObject().set({ stroke: e.target.value });
      canvas.renderAll();
   };

   return (
      <>
         <div>
            <div
               className="icons icons-addColor"
               // ref={colorRef}
               onClick={() => {
                  // dispatch(textActions.setDialogState(!isColor));
                  // dispatch(textActions.setColorState(!isColor));
                  // dispatch(textActions.setTypoState(false));
                  // showTextDialog("color");
               }}
            >
               <span></span>
            </div>
            <div>
               <span>Forma t</span>
            </div>
            {/* <input
               id="create-color"
               className="toolbar-styles"
               type="color"
               onChange={(e) => {
                  changeColor(e);
               }}
            /> */}
         </div>

         {/* <button onClick={() => stroke()}>Stroke outline</button> */}
         {/* <input
            id="create-color"
            className="toolbar-styles"
            type="color"
            onChange={(e) => {
               changeStrokeColor(e);
            }}
         /> */}
         {/* <input
            type="range"
            min="1"
            max="10"
            id="text-stroke-width"
            onChange={(e) => setStroke(e)}
            value={strokeValue}
         /> */}
      </>
   );
};

export default Toolbars;
