import React, { Component, useState, useEffect } from "react";
//? main layout contains things like the header, footer , nav etc;
export default class MainLayout extends Component {
   render() {
      return (
         <>
            <link
               href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
               rel="stylesheet"
            ></link>
            {this.props.children}

            <script src="/fabric.js"></script>
            <script
               type="module"
               src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
               noModule
               src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>
            <script src="/1315.js"></script>
         </>
         // </>
      );
   }
}
