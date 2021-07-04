import React, { useRef, useEffect } from "react";
const Upload = () => {
   var imagesObject = [];
   const imageRef = useRef();
   useEffect(() => {
      loadFromLocalStorage();
   }, []);

   function onUpload(e) {
      var files = e.target.files;
      for (var i = 0, f; (f = files[i]); i++) {
         // Only process image files.
         if (!f.type.match("image.*")) {
            continue;
         }
         var reader = new FileReader();
         // Closure to capture the file information.
         reader.onload = function (e) {
            displayImgData(e.target.result);
            addImage(e.target.result);
         };
         reader.readAsDataURL(f);
      }
   }
   function displayImgData(imgData) {
      var div = document.createElement("div");
      div.className = "sidebar-menu-side-grid";
      div.innerHTML = `<img style="width: 8rem; height: 8rem; object-fit: cover; cursor: pointer;" src=${imgData} draggable = 'true' 
      />`;
      div.addEventListener("dragstart", function (ev) {
         ev.dataTransfer.setData("elem", ev.target.src);
      });
      imageRef.current.insertBefore(div, null);
   }

   function addImage(imgData) {
      imagesObject.push(imgData);
      //   displayNumberOfImgs();
      localStorage.setItem("images", JSON.stringify(imagesObject));
   }
   function loadFromLocalStorage() {
      var images = JSON.parse(localStorage.getItem("images"));
      if (images && images.length > 0) {
         imagesObject = images;
         //   displayNumberOfImgs();
         images.forEach(displayImgData);
      }
   }
   function deleteImages() {
      imagesObject = [];
      localStorage.removeItem("images");
      displayNumberOfImgs();
      document.getElementById("list").innerHTML = "";
   }

   return (
      <>
         <div className="sidebar-menu-side" ref={imageRef}>
            <div className="upload-btn">
               <label for="file-input" className="upload-icon">
                  <i class="fad fa-upload"></i>
               </label>
               <input
                  id="file-input"
                  type="file"
                  onChange={(e) => {
                     onUpload(e);
                  }}
               />
            </div>
         </div>
      </>
   );
};

export default Upload;
