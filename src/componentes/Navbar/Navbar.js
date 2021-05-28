import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import React from 'react';
import image_icon from "../../imagenes/icono_imagen.jpeg";
import imagen_programas from "../../imagenes/aplicaciones.png";
import Grid from '@material-ui/core/Grid';
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from '@material-ui/core/NativeSelect';
import './Navbar.css';
import utils from "../utils";

export default function GetNavBar() {
    const [idioma, setIdioma] = React.useState('');
    console.log(idioma);
    const handleChange = (event) => {
        localStorage.setItem("idioma",event.target.value);
        setIdioma(event.target.value);
        window.location.reload();
    }
    const titulo = localStorage.getItem('idioma')==="ESP" ? utils.data.esp.navbar.titulo : utils.data.eng.navbar.titulo;
    return (
        <Grid container className="container_navbar">
        <Navbar className="Navbar" sticky="top">
            <Navbar.Brand href="#home">
                <Grid container spacing={0}>
                    <Grid item xs={8} sm={4}>
                        <Image
                            alt="imagen"
                            className="img"
                            src={image_icon}
                        />

                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <p className="nombre">
                            Danny Leonel De La A Yagual
                        </p>
                            <p className="especialidad">
                               {titulo}
                        </p>
                    </Grid>

                </Grid>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Grid item xs>
                    <Image
                        alt="imagen_aplicaciones"
                        src={imagen_programas}
                        className="imagen_aplicaciones"
                    />
                </Grid>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <InputLabel className="input_idioma">
                    <NativeSelect
                        className="text_select"
                        onChange={handleChange}
                        defaultValue={localStorage.getItem("idioma")}
                    >
                        <option value="ESP">Español</option>
                        <option value="ENG">English</option>
                    </NativeSelect>

                </InputLabel>
            </Navbar.Collapse>
        </Navbar>
        </Grid>
    );
}
