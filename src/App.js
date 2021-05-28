import './App.css';
import GetNavBar from "./componentes/Navbar/Navbar";
import Presentacion from './componentes/Presentacion/Presentacion';
import Divider from "@material-ui/core/Divider";
import Education from "./componentes/Educacion/Education";
import Experiencia from "./componentes/Experiencia_Profesional/Experiencias";
import Typography from '@material-ui/core/Typography';
import Certificaciones from "./componentes/Certificaciones/Certificaciones";
import Utils from "./componentes/utils";

function App() {
  const cond = localStorage.getItem("idioma") ==="ESP";

  return (
    <div className="App">
    <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
        <GetNavBar />
        <Presentacion />
        <Divider/>

        <Education id="Educacion"></Education>
        <Divider/>

        <Typography variant="h3" component="h3" className="titulo" 
        style={{ letterSpacing: "0.18em", fontFamily: "Roboto", color: "#000000", textAlign:"left", paddingTop:30, paddingLeft:25}}>
                        {cond ? "Experiencia profesional": "Profesional experience"}
                    </Typography>
        <Experiencia card_color="#D8DCFF" id="practicas_empresariales" dic={Utils.data.experiencias.practicas_empresariales}/>
        <Experiencia card_color="#EAFFFA" id="agroSmart" dic={Utils.data.experiencias.agroSmart}/>
        <Experiencia card_color="#70F2D3" id="proyecto_integrador" dic={Utils.data.experiencias.ia}/>
        <Experiencia card_color="#EAECFD" id="practicas_comunitarias" dic={Utils.data.experiencias.practicas_comunitarias}/>
        <Divider/>

        <Certificaciones card_color="#9bcc57" dic={Utils.data.certificaciones.tabla}/>
    </div>
  );
}

export default App;
