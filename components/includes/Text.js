import React, { useEffect, useContext, useState } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "../includes/CanvasContext";
import { ChromePicker } from "react-color";
const Text = (props) => {
  const canvasContext = useContext(CanvasContext);
  const canvas = canvasContext.canvas;
  const [stroke, setStroke] = useState(1);
  const [fontSize, setFontSize] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [linethrough, setLinethrough] = useState(false);
  const [overline, setOverline] = useState(false);
  const [background, setBackground] = useState("#fff");

  const [alRight, setAlRight] = useState(false);
  const [alJustify, setJustify] = useState(false);
  const [alCenter, setCenter] = useState(false);
  const [alLeft, setLeft] = useState(false);

  const initText = () => {
    var text = new fabric.Textbox("hello world", {
      editable: true,
      left: 50,
      top: 50,
      fontFamily: "arial black",
      fontWeight: "",
      stroke: "",
    });
    canvas.add(text).setActiveObject(text);
    canvas.centerObject(text);
    canvas.renderAll();
  };
  useEffect(() => {
    initText();
  }, []);

  // console.log(color.hex);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Delete") {
      canvas.remove(canvas.getActiveObject());
    }
  });

  const simple = (c, e) => {
    setBackground(c.hex);
    console.log(c.hex);
  };

  //text alignments*************************************
  const changeAlignmentRight = () => {
    setAlRight(!alRight);
    setJustify(false);
    setCenter(false);
    setLeft(false);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textAlign: !alRight ? "right" : "" });
    } else {
      textLayer.set({ textAlign: !alRight ? "right" : "" });
    }
    canvas.renderAll();
  };

  const changeAlignmentJustify = () => {
    setAlRight(false);
    setJustify(!alJustify);
    setCenter(false);
    setLeft(false);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textAlign: !alJustify ? "justify" : "" });
    } else {
      textLayer.set({ textAlign: !alJustify ? "justify" : "" });
    }
    canvas.renderAll();
  };

  const changeAlignmentCenter = () => {
    setAlRight(false);
    setJustify(false);
    setCenter(!alCenter);
    setLeft(false);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textAlign: !alCenter ? "center" : "" });
    } else {
      textLayer.set({ textAlign: !alCenter ? "center" : "" });
    }
    canvas.renderAll();
  };

  const changeAlignmentLeft = () => {
    setAlRight(false);
    setJustify(false);
    setCenter(false);
    setLeft(!alLeft);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textAlign: !alLeft ? "left" : "" });
    } else {
      textLayer.set({ textAlign: !alLeft ? "left" : "" });
    }
    canvas.renderAll();
  };
  //end text alignments**********************************

  const changeFontColor = (e) => {
    console.log(e.hex);
    // setColor();
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ fill: e.hex });
    } else {
      textLayer.set({ fill: e.hex });
    }
    canvas.renderAll();
  };

  const changeFontFamily = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ fontFamily: e.target.value });
    } else {
      textLayer.set({ fontFamily: e.target.value });
    }
    canvas.renderAll();
  };

  const changeFontAlignment = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textAlign: e.target.value });
    } else {
      textLayer.set({ textAlign: e.target.value });
    }
    canvas.renderAll();
  };

  const changeBackgroundColor = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ backgroundColor: e.target.value });
    } else {
      textLayer.set({ backgroundColor: e.target.value });
    }
    canvas.renderAll();
  };

  const changeBackgroundTextColor = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ textBackgroundColor: e.target.value });
    } else {
      textLayer.set({ textBackgroundColor: e.target.value });
    }
    canvas.renderAll();
  };

  const changeStrokeColor = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ stroke: e.target.value });
    } else {
      textLayer.set({ stroke: e.target.value });
    }
    canvas.renderAll();
  };

  const changeStrokeWidth = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ strokeWidth: Number(e.target.value) });
    } else {
      textLayer.set({ strokeWidth: Number(e.target.value) });
    }
    canvas.renderAll();
  };

  const changeFontSize = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ fontSize: Number(e.target.value) });
    } else {
      textLayer.set({ fontSize: Number(e.target.value) });
    }
    canvas.renderAll();
  };

  const changeLineHeight = (e) => {
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ lineHeight: Number(e.target.value) });
    } else {
      textLayer.set({ lineHeight: Number(e.target.value) });
    }
    canvas.renderAll();
  };

  const changeItalic = () => {
    setItalic(!italic);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ fontStyle: !italic ? "italic" : "" });
    } else {
      textLayer.set({ fontStyle: !italic ? "italic" : "" });
    }
    canvas.renderAll();
  };

  const changeBold = () => {
    setBold(!bold);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({ fontWeight: !bold ? "bold" : "" });
    } else {
      textLayer.set({ fontWeight: !bold ? "bold" : "" });
    }
    canvas.renderAll();
  };

  const changeUnderline = () => {
    setUnderline(!underline);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({
        underline: !underline,
      });
    } else {
      textLayer.set({ underline: !underline });
    }
    canvas.renderAll();
  };

  const changeLinethrough = () => {
    setLinethrough(!linethrough);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({
        linethrough: !linethrough,
      });
    } else {
      textLayer.set({ linethrough: !linethrough });
    }
    canvas.renderAll();
  };

  const changeOverline = () => {
    setOverline(!overline);
    const textLayer = canvas.getActiveObject();
    if (textLayer.isEditing) {
      textLayer.setSelectionStyles({
        overline: !overline,
      });
    } else {
      textLayer.set({ overline: !overline });
    }
    canvas.renderAll();
  };
  return (
    <>
      <div className="icon-container">
        <div
          className="icons icons-addText"
          onClick={() => {
            initText();
          }}
        >
          <i class="fal fa-text"></i>
        </div>
        <div className="icons icons-addColor">
          <span></span>
        </div>
        <div className="icons-fontFamily fontFamily-btn">
          <span>Ariel</span> <i class="fal fa-chevron-down"></i>
        </div>
        <div
          className={
            !alRight
              ? "icons  icons-alight-right"
              : "icons icons-active icons-alight-right"
          }
          onClick={() => {
            changeAlignmentRight();
          }}
        >
          <i class="fal fa-align-right"></i>
        </div>
        <div
          className={
            !alJustify
              ? "icons  icons-alight-justify"
              : "icons icons-active icons-alight-justify"
          }
          onClick={() => {
            changeAlignmentJustify();
          }}
        >
          <i class="fal fa-align-justify"></i>
        </div>
        <div
          className={
            !alCenter
              ? "icons  icons-alight-center"
              : "icons icons-active icons-alight-center"
          }
          onClick={() => {
            changeAlignmentCenter();
          }}
        >
          <i class="fal fa-align-center"></i>
        </div>
        <div
          className={
            !alLeft
              ? "icons  icons-alight-left"
              : "icons icons-active icons-alight-left"
          }
          onClick={() => {
            changeAlignmentLeft();
          }}
        >
          <i class="fal fa-align-left"></i>
        </div>

        <div className="icons icons-font-size">
          <i class="fal fa-text-size"></i>
        </div>
        <div className="icons icons-line-height">
          <i class="fal fa-line-height"></i>
        </div>
        <div className="icons icons-bold">
          <i class="fal fa-bold"></i>
        </div>
        <div className="icons icons-italic">
          <i class="fal fa-italic"></i>
        </div>
        <div className="icons icons-underline">
          <i class="fal fa-underline"></i>
        </div>
        <div className="icons icons-linethrough">
          <i class="fal fa-strikethrough"></i>
        </div>
        <div className="icons icons-overline">
          <i class="fal fa-overline"></i>
        </div>
      </div>
    </>
  );
};

export default Text;

// color
// font family
// background color
// backgrouund text color
// stroke color
// stroke width -slider
// font sise  -slider
// line hight - slider
// bold - toggle
// italic - toggle
// underline -toggle
// linethrough -toggle
// overline - toggle
// shadow
