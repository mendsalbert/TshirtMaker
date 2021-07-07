import React, { useContext } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "../includes/CanvasContext";

const Tools = () => {
   const canvasContext = useContext(CanvasContext);
   const canvas = canvasContext.canvas;
   // function dragStart(ev) {
   //   console.log("drag start");
   //   ev.dataTransfer.setData("elem", ev.target.src);
   // }

   const showCircle = () => {
      var circle = new fabric.Circle({
         radius: 40,
         fill: "black",
      });
      canvas.add(circle).setActiveObject(circle);
      canvas.centerObject(circle);
      canvas.renderAll();
   };

   const showLine = () => {
      var line = new fabric.Line([1, 1, 1], {
         top: 180,
         left: 200,
         fill: "",
         stroke: "blue",
         strokeWidth: 2,
      });
      canvas.add(line).setActiveObject(line);
      canvas.centerObject(line);
      canvas.renderAll();
   };

   const showRec = () => {
      var rec = new fabric.Rect({
         width: 100,
         height: 80,
         fill: "black",
      });
      canvas.add(rec).setActiveObject(rec);
      canvas.centerObject(rec);
      canvas.renderAll();
   };

   const showTriangle = () => {
      var tri = new fabric.Triangle({
         width: 200,
         height: 100,
         fill: "black",
      });

      canvas.add(tri).setActiveObject(tri);
      canvas.centerObject(tri);
      canvas.renderAll();
   };

   return (
      <div className="sidebar-menu-side-tools">
         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fas fa-circle"></i>
            </span>
            {/* <img
               onClick={() => {
                 showCircle();
                }}
                src="https://img.icons8.com/ios-filled/40/000000/filled-circle.png"
                className="sidebar-menu-side-grid-icon"
              /> */}
         </div>

         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fas fa-horizontal-rule"></i>
            </span>
            {/* <img
               onClick={() => {
                  showLine();
               }}
               src="https://img.icons8.com/ios-glyphs/50/000000/line.png"
               className="sidebar-menu-side-grid-icon"
            /> */}
         </div>

         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fas fa-rectangle-landscape"></i>
            </span>
            {/* <img
               onClick={() => {
                  showRec();
               }}
               src="https://img.icons8.com/ios-glyphs/50/000000/rectangle.png"
               className="sidebar-menu-side-grid-icon"
            /> */}
         </div>
         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fas fa-triangle"></i>
            </span>
            {/* <img
               onClick={() => {
                  showTriangle();
               }}
               src="https://img.icons8.com/fluent-systems-filled/50/000000/triangle.png"
               className="sidebar-menu-side-grid-icon"
            /> */}
         </div>
         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fad fa-pen"></i>
            </span>
            {/* <img
               onClick={() => {
                  showTriangle();
               }}
               src="https://img.icons8.com/fluent-systems-filled/50/000000/triangle.png"
               className="sidebar-menu-side-grid-icon"
            /> */}
         </div>
         <div className="sidebar-menu-side-grid">
            <span>
               <i class="fad fa-eraser"></i>
            </span>
            {/* <img
               onClick={() => {
                  showTriangle();
               }}
               src="https://img.icons8.com/fluent-systems-filled/50/000000/triangle.png"
               className="sidebar-menu-side-grid-icon"
            /> */}
         </div>
      </div>
   );
};

export default Tools;
