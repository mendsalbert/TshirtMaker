import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import "fabric-history";
// import "fabric";
const Header = () => {
   // useEffect(() => {
   // if (typeof window !== "undefined") {
   // }
   // }, []);

   if (typeof window !== "undefined") {
      const canvas = useSelector((state) => state.index.canvas);

      // canvas.on("object:added", function () {
      //    if (!isRedoing) {
      //       h = [];
      //    }
      //    isRedoing = false;
      // });
   }
   var isRedoing = false;
   var h = [];

   const undoHandler = () => {
      if (canvas._objects.length > 0) {
         h.push(canvas._objects.pop());
         canvas.renderAll();
      }
   };

   const redoHandler = () => {
      if (h.length > 0) {
         isRedoing = true;
         canvas.add(h.pop());
      }
   };

   return (
      <div className="main_container--header">
         <div className="header--nav_left">
            <h4 className="header--nav-h4">Home</h4>
            <span
               className="header--nav-icon"
               onClick={() => {
                  undoHandler();
               }}
            >
               <i class="far fa-undo"></i>
               {/* <ion-icon name="arrow-undo-outline"></ion-icon> */}
            </span>
            <span
               className="header--nav-icon"
               onClick={() => {
                  redoHandler();
               }}
            >
               <i class="far fa-redo"></i>
            </span>
         </div>
         <div className="header-nav_right">
            <button className="header-btn">SHARE</button>
            <button className="header-btn">
               <span>[!]</span>DOWNLOAD
            </button>
         </div>
      </div>
   );
};

export default Header;
