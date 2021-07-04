import React, { useState, useEffect, useContext, useRef } from "react";
import Template from "../components/includes/Template";
import Tools from "../components/includes/Tools";
import Element from "../components/includes/Element";
import Text from "../components/includes/Text";
import TemplateToolbar from "../components/includes/TemplateToolbar";
import { fabric } from "fabric";
import { CanvasContext } from "../components/includes/CanvasContext";
import Toolbars from "../components/includes/Toolbars";
import Upload from "../components/includes/Upload";
export default function index() {
   const [elementToggle, setElementToggle] = useState(false);
   const [toolToggle, setToolToggle] = useState(false);
   const [templateToggle, setTemplateToggle] = useState(false);
   const [uploadToggle, setUploadToggle] = useState(false);
   const [displayMenu, setDisplayMenu] = useState(false);
   const [text, setText] = useState(false);
   const canvasContext = useContext(CanvasContext);
   const canvas = canvasContext.canvas;
   const canvasRef = useRef();
   var SCALE_FACTOR = 1.2;
   var canvasScale = 1;
   function zoomIn() {
      // TODO limit the max canvas zoom in

      canvasScale = canvasScale * SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
      canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

      var objects = canvas.getObjects();
      for (var i in objects) {
         var scaleX = objects[i].scaleX;
         var scaleY = objects[i].scaleY;
         var left = objects[i].left;
         var top = objects[i].top;

         var tempScaleX = scaleX * SCALE_FACTOR;
         var tempScaleY = scaleY * SCALE_FACTOR;
         var tempLeft = left * SCALE_FACTOR;
         var tempTop = top * SCALE_FACTOR;

         objects[i].scaleX = tempScaleX;
         objects[i].scaleY = tempScaleY;
         objects[i].left = tempLeft;
         objects[i].top = tempTop;

         objects[i].setCoords();
      }

      canvas.renderAll();
   }

   function zoomOut() {
      // TODO limit max cavas zoom out

      canvasScale = canvasScale / SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
      canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

      var objects = canvas.getObjects();
      for (var i in objects) {
         var scaleX = objects[i].scaleX;
         var scaleY = objects[i].scaleY;
         var left = objects[i].left;
         var top = objects[i].top;

         var tempScaleX = scaleX * (1 / SCALE_FACTOR);
         var tempScaleY = scaleY * (1 / SCALE_FACTOR);
         var tempLeft = left * (1 / SCALE_FACTOR);
         var tempTop = top * (1 / SCALE_FACTOR);

         objects[i].scaleX = tempScaleX;
         objects[i].scaleY = tempScaleY;
         objects[i].left = tempLeft;
         objects[i].top = tempTop;

         objects[i].setCoords();
      }

      canvas.renderAll();
   }

   function resetZoom() {
      canvas.setHeight(canvas.getHeight() * (1 / canvasScale));
      canvas.setWidth(canvas.getWidth() * (1 / canvasScale));

      var objects = canvas.getObjects();
      for (var i in objects) {
         var scaleX = objects[i].scaleX;
         var scaleY = objects[i].scaleY;
         var left = objects[i].left;
         var top = objects[i].top;

         var tempScaleX = scaleX * (1 / canvasScale);
         var tempScaleY = scaleY * (1 / canvasScale);
         var tempLeft = left * (1 / canvasScale);
         var tempTop = top * (1 / canvasScale);

         objects[i].scaleX = tempScaleX;
         objects[i].scaleY = tempScaleY;
         objects[i].left = tempLeft;
         objects[i].top = tempTop;

         objects[i].setCoords();
      }

      canvas.renderAll();

      canvasScale = 1;
   }
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

   const onShowMenu = (type) => {
      switch (type) {
         case "elements":
            setElementToggle(!elementToggle);
            setToolToggle(false);
            setTemplateToggle(false);
            setDisplayMenu(!elementToggle);
            setUploadToggle(false);
            setText(false);
            break;
         case "tools":
            setToolToggle(!toolToggle);
            setElementToggle(false);
            setTemplateToggle(false);
            setUploadToggle(false);
            setDisplayMenu(!toolToggle);
            setText(false);
            break;

         case "template":
            setTemplateToggle(!templateToggle);
            setToolToggle(false);
            setElementToggle(false);
            setText(false);
            setUploadToggle(false);
            setDisplayMenu(!templateToggle);
            break;
         case "upload":
            setUploadToggle(!uploadToggle);
            setToolToggle(false);
            setElementToggle(false);
            setText(false);
            setDisplayMenu(!uploadToggle);
         default:
            break;
      }
   };

   const showText = () => {
      setText(!text);
      setToolToggle(false);
      setElementToggle(false);
      setTemplateToggle(false);
      setUploadToggle(false);
   };

   const showSideMenu = () => {
      if (elementToggle) {
         return <Element />;
      } else if (toolToggle) {
         return <Tools />;
      } else if (templateToggle) {
         return <Template canvasRef={canvasRef.current} />;
      } else if (uploadToggle) {
         return <Upload />;
      }
   };

   return (
      <>
         <div className="main_container">
            <div className="main_container--header">
               <div className="header--nav_left">
                  <h4 className="header--nav-h4">Home</h4>
                  <span className="header--nav-icon">
                     <ion-icon name="arrow-undo-outline"></ion-icon>
                  </span>
                  <span className="header--nav-icon">
                     <ion-icon name="arrow-redo-outline"></ion-icon>
                  </span>
               </div>
               <div className="header-nav_right">
                  <button className="header-btn">SHARE</button>
                  <button className="header-btn">
                     <span>[!]</span>DOWNLOAD
                  </button>
               </div>
            </div>
            <div className="main_container--toolbar">
               {text ? (
                  <Text />
               ) : toolToggle ? (
                  <Toolbars canvasRef={canvasRef.current} />
               ) : (
                  <TemplateToolbar canvasRef={canvasRef.current} />
               )}
            </div>
            <div className="main_container--sidebar">
               <div className="sidebar-menu-container">
                  <div
                     className={
                        templateToggle
                           ? "sidebar-menu-item sidebar-menu-item-active"
                           : "sidebar-menu-item"
                     }
                     onClick={() => onShowMenu("template")}
                  >
                     <span className="sidebar-menu-icon">
                        <ion-icon name="shirt-outline"></ion-icon>
                     </span>
                     <span className="sidebar-menu-text">Template</span>
                  </div>

                  <div
                     className={
                        elementToggle
                           ? "sidebar-menu-item sidebar-menu-item-active"
                           : "sidebar-menu-item"
                     }
                     onClick={() => onShowMenu("elements")}
                  >
                     <span className="sidebar-menu-icon">
                        <ion-icon name="shapes-outline"></ion-icon>
                     </span>
                     <span className="sidebar-menu-text">Elements</span>
                  </div>

                  <div
                     className={
                        toolToggle
                           ? "sidebar-menu-item sidebar-menu-item-active"
                           : "sidebar-menu-item"
                     }
                     onClick={() => onShowMenu("tools")}
                  >
                     <span className="sidebar-menu-icon">
                        <ion-icon name="square-outline"></ion-icon>
                     </span>
                     <span className="sidebar-menu-text">Tools</span>
                  </div>

                  <div
                     className={
                        text
                           ? "sidebar-menu-item sidebar-menu-item-active"
                           : "sidebar-menu-item"
                     }
                     onClick={() => {
                        showText();
                     }}
                  >
                     <span className="sidebar-menu-icon">
                        <ion-icon name="text-outline"></ion-icon>
                     </span>

                     <span className="sidebar-menu-text">Text</span>
                  </div>

                  <div
                     className={
                        uploadToggle
                           ? "sidebar-menu-item sidebar-menu-item-active"
                           : "sidebar-menu-item"
                     }
                     onClick={() => onShowMenu("upload")}
                  >
                     <span className="sidebar-menu-icon">
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                     </span>
                     <span className="sidebar-menu-text">Upload</span>
                  </div>
               </div>
            </div>
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
                  // width={canvasContext.shirtType === "long" ? 400 : 450}
                  // height={canvasContext.shirtType === "long" ? 410 : 410}
                  width="450"
                  height="450"
                  className="canvas"
                  ref={canvasRef}
               />
            </div>
            <div className="main_container--toolbar_footer">
               <span
                  onClick={() => {
                     zoomIn();
                  }}
               >
                  <i class="fad fa-search-plus"></i>
               </span>
               <span
                  onClick={() => {
                     zoomOut();
                  }}
               >
                  <i class="fad fa-search-minus"></i>
               </span>
               <span
                  onClick={() => {
                     resetZoom();
                  }}
               >
                  <i class="fad fa-sync"></i>
               </span>
            </div>
         </div>
      </>
   );
}
