import React, { useEffect,useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CanvasContext } from "../components/includes/CanvasContext";
import * as indexActions from "../store/actions/index_actions";
import Header from "../components/Header/Header";
import Toolbar from "../components/Toolbar/Toolbar";
import SideBar from "../components/Sidebar/SideBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import {fabric} from 'fabric'
export default function index(props) {
   const ref = useSelector((state) => state.index.canvasRef);
   const dispatch = useDispatch();
   // canvas = useSelector((state) => state.index.canvas);
  



  const canvasContext = useContext(CanvasContext);
  const canvas = canvasContext.canvas;
 
   useEffect(() => {
      dispatch(indexActions.loadCanvasObject());
   }, []);

   return (
      <>
         <div className="main_container">
            <Header />
            <Toolbar cRef={ref.current} />
            <SideBar />
            <Main />
            <Footer />
         </div>
      </>
   );
}
