import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as indexActions from "../store/actions/index_actions";
import Header from "../components/Header/Header";
import Toolbar from "../components/Toolbar/Toolbar";
import SideBar from "../components/Sidebar/SideBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
export default function index(props) {
   const ref = useSelector((state) => state.index.canvasRef);
   const dispatch = useDispatch();
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
