import React, { useContext, useRef } from "react";
import { CanvasContext } from "../includes/CanvasContext";
import { useSelector, useDispatch } from "react-redux";
import * as toolActions from "../../store/actions/tool_actions";
import { ChromePicker } from "react-color";
const Toolbars = (props) => {
   const canvasContext = useContext(CanvasContext);
   const canvas = canvasContext.canvas;
   // const canvas = useSelector((state) => state.index.canvas);
   // const canvas = useSelector((state) => state.index.canvas);
   const current = useSelector((state) => state.tool.current);
   const isDialog = useSelector((state) => state.tool.isDialog);
   const strokeValue = useSelector((state) => state.tool.strokeValue);
   // console.log(strokeValue);
   const dispatch = useDispatch();
   const colorRef = useRef();
   // console.log(canvas);
   // const [strokeValue, setStrokeValue] = useState("");
   // const [current, setCurrent] = useState("blacK");
   const changeColor = (c, e) => {
      colorRef.current.style.background = c.hex;
      dispatch(toolActions.changeCurrentColor(c.hex));
      canvas.getActiveObject().set("fill", c.hex);
      canvas.renderAll();
   };

   const showColorPanel = () => {
      dispatch(toolActions.setIsDialog(!isDialog));
   };
   const stroke = (e) => {
      canvas.getActiveObject().set({ fill: "" });
      canvas.renderAll();
   };

   const setStroke = (e) => {
      dispatch(toolActions.setStroke(e.target.value));
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
         {isDialog ? (
            <div className="color-container">
               <ChromePicker
                  disableAlpha={false}
                  color={current}
                  onChange={(c, e) => {
                     changeColor(c, e);
                  }}
               />

               <div className="stroke-mt">
                  <span className="stroke-text">Stroke</span>
                  <hr />
                  <div className="stroke-container">
                     <input
                        type="range"
                        min="1"
                        max="30"
                        onChange={(e) => {
                           setStroke(e);
                        }}
                        value={strokeValue}
                     />

                     <input
                        type="color"
                        onChange={(e) => {
                           changeStrokeColor(e);
                        }}
                     />
                  </div>
               </div>

               <div className="stroke-mt">
                  <span className="stroke-text">Drop Shadow</span>
                  <hr />
                  <div className="stroke-container">
                     {/* <input
                        type="range"
                        min="1"
                        max="30"
                        onChange={(e) => {
                           setStroke(e);
                        }}
                        value={strokeValue}
                     />

                     <input
                        type="color"
                        onChange={(e) => {
                           changeStrokeColor(e);
                        }}
                     /> */}
                  </div>
               </div>
            </div>
         ) : (
            ""
         )}
         <div className="tools-container">
            <div
               className="icons icons-addColor"
               ref={colorRef}
               onClick={() => {
                  showColorPanel();
               }}
            ></div>

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
