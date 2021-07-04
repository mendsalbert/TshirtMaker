import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as navActions from "../../store/actions/navbar_action";
const SideBar = () => {
   const elementToggle = useSelector((state) => state.nav.elementToggle);
   const toolToggle = useSelector((state) => state.nav.toolToggle);
   const templateToggle = useSelector((state) => state.nav.templateToggle);
   const uploadToggle = useSelector((state) => state.nav.uploadToggle);
   const text = useSelector((state) => state.nav.textToggle);
   const dispatch = useDispatch();

   const onShowMenu = (type) => {
      switch (type) {
         case "elements":
            dispatch(navActions.setElementToggle(!elementToggle));
            dispatch(navActions.setToolToggle(false));
            dispatch(navActions.setTemplateToggle(false));
            dispatch(navActions.setTextToggle(false));
            dispatch(navActions.setUploadToggle(false));
            dispatch(navActions.setDisplayToggle(!elementToggle));
            break;
         case "tools":
            dispatch(navActions.setElementToggle(false));
            dispatch(navActions.setToolToggle(!toolToggle));
            dispatch(navActions.setTemplateToggle(false));
            dispatch(navActions.setTextToggle(false));
            dispatch(navActions.setUploadToggle(false));
            dispatch(navActions.setDisplayToggle(!toolToggle));
            break;

         case "template":
            dispatch(navActions.setElementToggle(false));
            dispatch(navActions.setToolToggle(false));
            dispatch(navActions.setTemplateToggle(!templateToggle));
            dispatch(navActions.setTextToggle(false));
            dispatch(navActions.setUploadToggle(false));
            dispatch(navActions.setDisplayToggle(!templateToggle));
            break;
         case "upload":
            dispatch(navActions.setElementToggle(false));
            dispatch(navActions.setToolToggle(false));
            dispatch(navActions.setTemplateToggle(false));
            dispatch(navActions.setTextToggle(false));
            dispatch(navActions.setUploadToggle(!uploadToggle));
            dispatch(navActions.setDisplayToggle(!uploadToggle));
         default:
            break;
      }
   };

   const showText = () => {
      dispatch(navActions.setElementToggle(false));
      dispatch(navActions.setToolToggle(false));
      dispatch(navActions.setTemplateToggle(false));
      dispatch(navActions.setTextToggle(!text));
      dispatch(navActions.setUploadToggle(false));
      // dispatch(navActions.setDisplayToggle(!text));
   };

   return (
      <div className="main_container--sidebar">
         <div className="sidebar-menu-container">
            <div
               className={
                  templateToggle
                     ? "sidebar-menu-item sidebar-menu-item-active"
                     : "sidebar-menu-item"
               }
               onClick={() => {
                  onShowMenu("template");
               }}
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
   );
};

export default SideBar;
