import React, { useState, useEffect, useContext, useRef } from "react";
import Template from "../components/includes/Template";
import Tools from "../components/includes/Tools";
import Element from "../components/includes/Element";
import Text from "../components/includes/Text";
import TemplateToolbar from "../components/includes/TemplateToolbar";
import { fabric } from "fabric";
import { CanvasContext } from "../components/includes/CanvasContext";
import Toolbars from "../components/includes/Toolbars";
export default function index() {
  const [elementToggle, setElementToggle] = useState(false);
  const [toolToggle, setToolToggle] = useState(false);
  const [templateToggle, setTemplateToggle] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [text, setText] = useState(false);
  const canvasContext = useContext(CanvasContext);
  const canvas = canvasContext.canvas;

  //
  // canvasContext.setShirt("hoddie");
  // console.log(canvasContext.shirtType);
  //
  const canvasRef = useRef();

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
        setText(false);
        break;
      case "tools":
        setToolToggle(!toolToggle);
        setElementToggle(false);
        setTemplateToggle(false);
        setDisplayMenu(!toolToggle);
        setText(false);
        break;

      case "template":
        setTemplateToggle(!templateToggle);
        setToolToggle(false);
        setElementToggle(false);
        setText(false);
        setDisplayMenu(!templateToggle);
        break;
      default:
        break;
    }
  };

  const showText = () => {
    setText(!text);
    setToolToggle(false);
    setElementToggle(false);
    setTemplateToggle(false);
  };
  const showSideMenu = () => {
    if (elementToggle) {
      return <Element />;
    } else if (toolToggle) {
      return <Tools />;
    } else if (templateToggle) {
      return <Template canvasRef={canvasRef.current} />;
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

            <div className="sidebar-menu-item">
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
            width="490"
            height="490"
            className="canvas"
            ref={canvasRef}
          />
        </div>
        <div className="main_container--toolbar_footer">tool footer</div>
      </div>
    </>
  );
}
