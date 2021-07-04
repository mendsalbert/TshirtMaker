import React from "react";

const Element = () => {
   const elements = [
      { imageSrc: "/images/toy1.png" },
      { imageSrc: "/images/toy2.png" },
      { imageSrc: "/images/toy3.png" },
      { imageSrc: "/images/toy4.png" },
      { imageSrc: "/images/toy5.png" },
      { imageSrc: "/images/toy6.png" },
   ];

   function dragStart(ev) {
      console.log("drag start");
      ev.dataTransfer.setData("elem", ev.target.src);
   }

   return (
      <div className="sidebar-menu-side">
         {elements.map((el) => (
            <div className="sidebar-menu-side-grid">
               <img
                  src={el.imageSrc}
                  draggable="true"
                  onDragStart={(ev) => {
                     dragStart(ev);
                  }}
                  className="sidebar-menu-side-grid-image"
               />
            </div>
         ))}
      </div>
   );
};

export default Element;
