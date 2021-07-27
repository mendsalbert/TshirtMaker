import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { useSelector, useDispatch } from "react-redux";
import { ChromePicker } from "react-color";
import * as textActions from "../../store/actions/text_actions";
const Text = () => {
   const dispatch = useDispatch();
   const canvas = useSelector((state) => state.index.canvas);
   // const canvas2 = useSelector((state) => state.index.canvasBack);

   const stroke = useSelector((state) => state.text.stroke);
   const fontSize = useSelector((state) => state.text.fontSize);
   const lineHeight = useSelector((state) => state.text.lineHeight);
   const bold = useSelector((state) => state.text.bold);
   const italic = useSelector((state) => state.text.italic);
   const underline = useSelector((state) => state.text.underline);
   const linethrough = useSelector((state) => state.text.linethrough);
   const overline = useSelector((state) => state.text.overline);
   const background = useSelector((state) => state.text.background);
   const isDialog = useSelector((state) => state.text.isDialog);
   const isTypo = useSelector((state) => state.text.isTypo);
   const isColor = useSelector((state) => state.text.isColor);
   const fontFamily = useSelector((state) => state.text.fontFamily);
   const alRight = useSelector((state) => state.text.alRight);
   const alJustify = useSelector((state) => state.text.alJustify);
   const alCenter = useSelector((state) => state.text.alCenter);
   const alLeft = useSelector((state) => state.text.alLeft);

   const colorRef = useRef();

   const initText = () => {
      var text = new fabric.Textbox("hello world", {
         editable: true,
         left: 50,
         top: 50,
         fontSize: 12,
         fontFamily: "arial black",
         fontWeight: "",
         // stroke: "black",
      });

      canvas.add(text).setActiveObject(text);
      canvas.centerObject(text);
      canvas.renderAll();
   };
   useEffect(() => {
      initText();
   }, []);

   //global delete key
   window.addEventListener("keydown", (e) => {
      if (e.key === "Delete") {
         canvas.remove(canvas.getActiveObject());
      }
   });

   //alignment array
   const alignmentItems = [
      {
         state: alRight,
         class: "icons icons-alight-right",
         activeClass: "icons icons-active icons-alight-right",
         icon: "fal fa-align-right",
         action: changeAlignment,
         value: "right",
      },
      {
         state: alJustify,
         class: "icons icons-alight-justify",
         activeClass: "icons icons-active icons-alight-justify",
         icon: "fal fa-align-justify",
         action: changeAlignment,
         value: "justify",
      },
      {
         state: alCenter,
         class: "icons icons-alight-center",
         activeClass: "icons icons-active icons-alight-center",
         icon: "fal fa-align-center",
         action: changeAlignment,
         value: "center",
      },
      {
         state: alLeft,
         class: "icons icons-alight-left",
         activeClass: "icons icons-active icons-alight-left",
         icon: "fal fa-align-left",
         action: changeAlignment,
         value: "left",
      },
   ];
   //function to change alignment of text (right,center,justify and right)
   function changeAlignment(state, value) {
      dispatch(
         textActions.setAlignmentRightState(value === "right" ? !state : false)
      );
      dispatch(
         textActions.setAlignmentJustifyState(
            value === "justify" ? !state : false
         )
      );
      dispatch(
         textActions.setAlignmentCenterState(
            value === "center" ? !state : false
         )
      );
      dispatch(
         textActions.setAlignmentLeftState(value === "left" ? !state : false)
      );
      const textLayer = canvas.getActiveObject();
      if (textLayer.isEditing) {
         textLayer.setSelectionStyles({ textAlign: !state ? value : "" });
      } else {
         textLayer.set({ textAlign: !state ? value : "" });
      }
      canvas.renderAll();
   }

   //font size and line height controls
   const fontControlsItems = [
      {
         icon: "fal fa-text-size",
         action: actionHandler,
         type: "font-size",
         value: fontSize,
         change: changeHandler,
      },
      {
         icon: "fal fa-line-height",
         action: actionHandler,
         type: "line-height",
         value: lineHeight,
         change: changeHandler,
      },
   ];

   var fs = fontSize;
   var lh = lineHeight;
   //action to increase of decrease font or line height
   function actionHandler(sym, type) {
      if (type === "font-size") {
         if (sym === "minus") {
            if (fs <= 1) {
               fs = 1;
               // setFontSize(1);
               dispatch(textActions.setFontSizeState(1));
            }
            // setFontSize(--fs);
            dispatch(textActions.setFontSizeState(--fs));
            const textLayer = canvas.getActiveObject();
            if (textLayer.isEditing) {
               textLayer.setSelectionStyles({ fontSize: Number(fontSize) });
            } else {
               textLayer.set({ fontSize: Number(fontSize) });
            }
            canvas.renderAll();
         } else if (sym === "plus") {
            if (fs > 120) {
               fs = 12;
               // setFontSize(12);
               dispatch(textActions.setFontSizeState(12));
            }
            // setFontSize(++fs);
            dispatch(textActions.setFontSizeState(++fs));
            const textLayer = canvas.getActiveObject();
            if (textLayer.isEditing) {
               textLayer.setSelectionStyles({ fontSize: Number(fontSize) });
            } else {
               textLayer.set({ fontSize: Number(fontSize) });
            }
            canvas.renderAll();
         }
      } else if (type === "line-height") {
         if (sym === "minus") {
            if (lh <= 1) {
               lh = 1;
               // setLineHeight(1);
               dispatch(textActions.setLineHeightState(1));
            }
            // setLineHeight(--lh);
            dispatch(textActions.setLineHeightState(--lh));
            const textLayer = canvas.getActiveObject();
            if (textLayer.isEditing) {
               textLayer.setSelectionStyles({ lineHeight: Number(lineHeight) });
            } else {
               textLayer.set({ lineHeight: Number(lineHeight) });
            }
            canvas.renderAll();
         } else if (sym === "plus") {
            if (lh >= 4) {
               lh = 4;
               // setLineHeight(4);
               dispatch(textActions.setLineHeightState(4));
            }
            // setLineHeight(++lh);
            dispatch(textActions.setLineHeightState(++lh));
            const textLayer = canvas.getActiveObject();
            if (textLayer.isEditing) {
               textLayer.setSelectionStyles({ lineHeight: Number(lineHeight) });
            } else {
               textLayer.set({ lineHeight: Number(lineHeight) });
            }
            canvas.renderAll();
         }
      }
   }

   function changeHandler(e, type) {
      if (type === "font-size") {
         dispatch(textActions.setFontSizeState(e.target.value));
         // setFontSize(e.target.value);
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({ fontSize: Number(e.target.value) });
         } else {
            textLayer.set({ fontSize: Number(e.target.value) });
         }
         canvas.renderAll();
      } else if (type === "line-height") {
         // setLineHeight(e.target.value);
         dispatch(textActions.setLineHeight(e.target.value));
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({
               lineHeight: Number(e.target.value),
            });
         } else {
            textLayer.set({ lineHeight: Number(e.target.value) });
         }
         canvas.renderAll();
      }
   }

   const simple = (c, e) => {
      dispatch(textActions.setBackgroundState(c.hex));
      // setBackground(c.hex);
      // console.log(c.hex);
   };

   const changeFontColor = (c, e) => {
      colorRef.current.style.background = c.hex;
      dispatch(textActions.setBackgroundState(c.hex));
      // setBackground(c.hex);
      const textLayer = canvas.getActiveObject();
      if (textLayer.isEditing) {
         textLayer.setSelectionStyles({ fill: c.hex });
      } else {
         textLayer.set({ fill: c.hex });
      }
      canvas.renderAll();
   };

   const changeFontFamily = (e) => {
      // setFontFamily(e.target.value);
      dispatch(textActions.setFontFamilyState(e.target.value));
      const textLayer = canvas.getActiveObject();
      if (textLayer.isEditing) {
         textLayer.setSelectionStyles({ fontFamily: e.target.value });
      } else {
         textLayer.set({ fontFamily: e.target.value });
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

   //text format items
   const textFormatItems = [
      {
         state: bold,
         value: "bold",
         action: changeFormat,
         icon: "fal fa-bold",
         class: "icons  icons-alight-bold",
         classActive: "icons icons-active icons-alight-bold",
      },
      {
         state: italic,
         value: "italic",
         action: changeFormat,
         icon: "fal fa-italic",
         class: "icons  icons-alight-italic",
         classActive: "icons icons-active icons-alight-italic",
      },
      {
         state: linethrough,
         value: "linethrough",
         action: changeFormat,
         icon: "fal fa-strikethrough",
         class: "icons  icons-alight-linethrough",
         classActive: "icons icons-active icons-alight-linethrough",
      },
      {
         state: underline,
         value: "underline",
         action: changeFormat,
         icon: "fal fa-underline",
         class: "icons  icons-alight-underline",
         classActive: "icons icons-active icons-alight-underline",
      },
      {
         state: overline,
         value: "overline",
         action: changeFormat,
         icon: "fal fa-overline",
         class: "icons  icons-alight-overline",
         classActive: "icons icons-active icons-alight-overline",
      },
   ];

   function changeFormat(state, value) {
      const textLayer = canvas.getActiveObject();
      if (value === "italic") {
         dispatch(textActions.setItalicState(!italic));
         // setItalic(!italic);
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({
               fontStyle: !italic ? "italic" : "",
            });
         } else {
            textLayer.set({ fontStyle: !italic ? "italic" : "" });
         }
      } else if (value === "bold") {
         dispatch(textActions.setBoldState(!bold));
         // setBold(!bold);
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({ fontWeight: !bold ? "bold" : "" });
         } else {
            textLayer.set({ fontWeight: !bold ? "bold" : "" });
         }
      } else if (value === "underline") {
         dispatch(textActions.setUnderlineState(!underline));
         // setUnderline(!underline);
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({
               underline: !underline,
            });
         } else {
            textLayer.set({ underline: !underline });
         }
      } else if (value === "linethrough") {
         dispatch(textActions.setLineThroughState(!linethrough));
         console.log(linethrough);
         // setLinethrough(!linethrough);
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({
               linethrough: !linethrough,
            });
         } else {
            textLayer.set({ linethrough: !linethrough });
         }
      } else if (value === "overline") {
         dispatch(textActions.setOverlineState(!overline));
         // setOverline(!overline);
         const textLayer = canvas.getActiveObject();
         if (textLayer.isEditing) {
            textLayer.setSelectionStyles({
               overline: !overline,
            });
         } else {
            textLayer.set({ overline: !overline });
         }
      }
      canvas.renderAll();
   }

   function showTextDialog() {
      if (isColor) {
         return (
            <>
               <ChromePicker
                  disableAlpha={false}
                  color={background}
                  onChange={(c, e) => {
                     changeFontColor(c, e);
                  }}
               />
               <div className="stroke-mt">
                  <span className="stroke-text">Stroke</span>
                  <hr />
                  <div className="stroke-container">
                     <input
                        type="range"
                        min="0.1"
                        max="20"
                        onChange={(e) => {
                           dispatch(textActions.setStrokeState(e.target.value));
                           // setStroke(e.target.value);
                           changeStrokeWidth(e);
                        }}
                        value={stroke}
                     />
                     <input
                        type="color"
                        onChange={(e) => {
                           changeStrokeColor(e);
                        }}
                     />
                  </div>
               </div>
               <hr></hr>
               <div className="stroke-container">
                  <span className="stroke-text">Background color</span>
                  <input
                     type="color"
                     onChange={(e) => changeBackgroundColor(e)}
                  />
               </div>
               <hr></hr>
               <div className="stroke-container">
                  <span className="stroke-text">Background Text color</span>
                  <input
                     type="color"
                     onChange={(e) => changeBackgroundTextColor(e)}
                  />
               </div>
            </>
         );
      } else if (isTypo) {
         return (
            <select
               id="font-family"
               onChange={(e) => {
                  changeFontFamily(e);
               }}
            >
               <option value="arial">Arial</option>
               <option value="helvetica" selected>
                  Helvetica
               </option>
               <option value="myriad pro">Myriad Pro</option>
               <option value="delicious">Delicious</option>
               <option value="verdana">Verdana</option>
               <option value="georgia">Georgia</option>
               <option value="courier">Courier</option>
               <option value="comic sans ms">Comic Sans MS</option>
               <option value="impact">Impact</option>
               <option value="monaco">Monaco</option>
               <option value="optima">Optima</option>
               <option value="hoefler text">Hoefler Text</option>
               <option value="plaster">Plaster</option>
               <option value="engagement">Engagement</option>
            </select>
         );
      }
   }

   return (
      <>
         {isDialog ? (
            <div className="color-container">{showTextDialog()}</div>
         ) : (
            ""
         )}

         <div className="icon-container">
            <div
               className="icons icons-addText"
               onClick={() => {
                  initText();
               }}
            >
               <i class="fal fa-text"></i>
            </div>
            <div
               className="icons icons-addColor"
               ref={colorRef}
               onClick={() => {
                  dispatch(textActions.setDialogState(!isColor));
                  dispatch(textActions.setColorState(!isColor));
                  dispatch(textActions.setTypoState(false));
                  showTextDialog("color");
               }}
            >
               <span></span>
            </div>
            <div
               className="icons-fontFamily fontFamily-btn"
               onClick={() => {
                  dispatch(textActions.setDialogState(!isTypo));
                  dispatch(textActions.setColorState(false));
                  dispatch(textActions.setTypoState(!isTypo));
                  showTextDialog("typography");
               }}
            >
               <span>{fontFamily}</span> <i class="fal fa-chevron-down"></i>
            </div>

            {alignmentItems.map((alignItem, i) => (
               <div
                  className={
                     !alignItem.state
                        ? `${alignItem.class}`
                        : `${alignItem.activeClass}`
                  }
                  onClick={() => {
                     alignItem.action(alignItem.state, alignItem.value);
                  }}
               >
                  <i class={alignItem.icon}></i>
               </div>
            ))}
            {fontControlsItems.map((fontControlsItem) => (
               <>
                  <div className=" controls-btns">
                     <button
                        className="controls-btn"
                        onClick={() =>
                           fontControlsItem.action(
                              "minus",
                              fontControlsItem.type
                           )
                        }
                     >
                        <i class="fal fa-minus"></i>
                     </button>
                     <input
                        className="controls-input"
                        type="text"
                        value={fontControlsItem.value}
                        onChange={(e) =>
                           changeHandler(e, fontControlsItem.type)
                        }
                     />
                     <button
                        className="controls-btn"
                        onClick={() =>
                           fontControlsItem.action(
                              "plus",
                              fontControlsItem.type
                           )
                        }
                     >
                        <i class="fal fa-plus"></i>
                     </button>
                  </div>
                  <div className="icons icons-font-size">
                     <i class={fontControlsItem.icon}></i>
                  </div>
               </>
            ))}
            {textFormatItems.map((textFormatItem) => (
               <div
                  className={
                     !textFormatItem.state
                        ? `${textFormatItem.class}`
                        : `${textFormatItem.classActive}`
                  }
                  onClick={() => {
                     textFormatItem.action(
                        textFormatItem.state,
                        textFormatItem.value
                     );
                  }}
               >
                  <i class={textFormatItem.icon}></i>
               </div>
            ))}
         </div>
      </>
   );
};
export default Text;

//shadow
//letter spacing
//gradient color and many more
