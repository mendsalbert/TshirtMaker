import React, { useContext } from "react";
import { CanvasContext } from "../includes/CanvasContext";

const Template = (props) => {
  const canvasContext = useContext(CanvasContext);

  const showShortSlevesHandler = () => {
    props.canvasRef.style.backgroundImage = "url('/images/canvas-bg.png')";
    canvasContext.setShirt("tshirt");
  };
  const showLongSlevesHandler = () => {
    props.canvasRef.style.backgroundImage = "url('/images/long-bg.png')";
    canvasContext.setShirt("long");
  };

  return (
    <>
      <div className="sidebar-menu-side-template">
        <div
          className="sidebar-menu-side-template-grid"
          onClick={() => {
            showShortSlevesHandler();
          }}
        >
          <img
            src="/images/short.png"
            className="sidebar-menu-side-template-grid-image"
          />
        </div>
        <div
          className="sidebar-menu-side-template-grid"
          onClick={() => {
            showLongSlevesHandler();
          }}
        >
          <img
            src="/images/long.png"
            className="sidebar-menu-side-template-grid-image"
          />
        </div>
      </div>
    </>
  );
};

export default Template;
