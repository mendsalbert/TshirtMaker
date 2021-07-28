import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
   // const initHistory = () => {
   // canvas.on("object:added", function () {
   //    if (!isRedoing) {
   //       h = [];
   //    }
   //    isRedoing = false;
   // });

   // var isRedoing = false;
   // var h = [];
   const canvas = useSelector((state) => state.index.canvas);

   // useEffect(() => {
      // canvas.on("object:added", function () {
      //    if (!isRedoing) {
      //       h = [];
      //    }
      //    isRedoing = false;
      // });
      var isRedoing = false;
      var h = [];
   // }, []);

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
         <div className="header--nav_right">
            <button className="header-btn"><span><i class="fal fa-save"></i></span>SAVE</button>
            <button className="header-btn" onClick={()=>{
            //  canvas.deactivateAll().renderAll();  
            
            // fabric.Image.fromURL('/images/3dshirtshort.png', 
            //    function(img) {
            //       canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            //             scaleX: canvas.width / img.width,
            //             scaleY: canvas.height / img.height
            //          });
            // },  { crossOrigin: 'Anonymous' });

            function download() {
             canvas.crossorigin="anonymous";
             window.open(canvas.toDataURL('image/jpeg')); 
               // var dt = canvas.toDataURL('image/jpeg');
            
               // this.href = dt;
            };
            //  canvas.renderAll();
            download();

            }}>
               <span><i class="fal fa-arrow-circle-down"></i></span>DOWNLOAD
            </button>
           
            <span><i class="fad fa-share-square"></i></span>
         </div>
      </div>
   );
};

export default Header;
