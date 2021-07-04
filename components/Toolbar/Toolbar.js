import Text from "../includes/Text";
import Toolbars from "../includes/Toolbars";
import TemplateToolbar from "../includes/TemplateToolbar";
import { useSelector } from "react-redux";
const Toolbar = (props) => {
   const text = useSelector((state) => state.nav.textToggle);
   const toolToggle = useSelector((state) => state.nav.toolToggle);
   const ref = useSelector((state) => state.index.canvasRef);
   return (
      <div className="main_container--toolbar">
         {text ? (
            <Text />
         ) : toolToggle ? (
            <Toolbars canvasRef={ref.current} />
         ) : (
            <TemplateToolbar canvasRef={ref.current} />
         )}
      </div>
   );
};

export default Toolbar;
