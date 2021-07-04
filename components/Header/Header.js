import React from "react";

const Header = () => {
   return (
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
   );
};

export default Header;
