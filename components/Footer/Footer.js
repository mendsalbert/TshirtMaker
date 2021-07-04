import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
   const canvas = useSelector((state) => state.index.canvas);
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
   return (
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
   );
};

export default Footer;
