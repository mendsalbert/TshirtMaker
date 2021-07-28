import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as indexActions from "../../store/actions/index_actions";
import Template from "../includes/Template";
import Tools from "../includes/Tools";
import Element from "../includes/Element";
import Upload from "../includes/Upload";
const Main = () => {
   const canvas = useSelector((state) => state.index.canvas);
   // const canvas2 = useSelector((state) => state.index.canvasBack);
   const canvasRef = useRef();
   // const canvasRef2 = useRef();
   const dispatch = useDispatch();
   const elementToggle = useSelector((state) => state.nav.elementToggle);
   const toolToggle = useSelector((state) => state.nav.toolToggle);
   const templateToggle = useSelector((state) => state.nav.templateToggle);
   const uploadToggle = useSelector((state) => state.nav.uploadToggle);
   const displayMenu = useSelector((state) => state.nav.displayMenu);

   dispatch(indexActions.loadCanvasRef(canvasRef));
   // dispatch(indexActions.loadCanvasBackRef(canvasRef));

   const ref = useSelector((state) => state.index.canvasRef);
   // const ref2 = useSelector((state) => state.index.canvasBackRef);

   function dragOverListener(ev) {
      ev.preventDefault();
   }

   function dragDropListener(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("elem");
      var image = fabric.Image.fromURL(data, function (oImg) {
         canvas.add(oImg).setActiveObject(oImg);
         oImg.scale(0.2);
         canvas.centerObject(oImg);
         canvas.renderAll();
      });
   }

   const showSideMenu = () => {
      if (elementToggle) {
         return <Element />;
      } else if (toolToggle) {
         return <Tools />;
      } else if (templateToggle) {
         return <Template canvasRef={ref.current} />;
      } else if (uploadToggle) {
         return <Upload />;
      }
   };

   return (
      <div
         className="main_container--main"
         id="draggable"
         onDragOver={(ev) => {
            dragOverListener(ev);
         }}
         onDrop={(ev) => {
            dragDropListener(ev);
         }}
      >
         <div>{displayMenu ? showSideMenu() : ""}</div>
         <canvas
            id="canvas"
            width="500"
            height="500"
            className="canvas"
            ref={canvasRef}
         />
         {/* <canvas
            id="canvas2"
            width="450"
            height="450"
            className="canvas2"
            ref={canvasRef2}
         /> */}
      </div>
   );
};

export default Main;
