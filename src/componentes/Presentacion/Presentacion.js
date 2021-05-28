import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import "./Presentacion.css";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import utils from "../utils";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Presentacion(){

        const dic_final = localStorage.getItem('idioma')==="ESP" ? utils.data.esp.presentacion :utils.data.eng.presentacion;

        return (
            <div className="container_presentacion">
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" component="h3" className="titulo" style={{letterSpacing: "0.18em", fontFamily:"Roboto",color: "#000000"}}>
                        {dic_final.titulo}
                    </Typography>
                    <Card className="card_text" style={{ backgroundColor: '#7280FD'}}>
                        <CardContent>

                            <Typography variant="h6" component="h6" className="text" style={{fontFamily:"DM Serif Display",color: "#FFFFFF", fontWeight: "bold"}}>
                                {dic_final.texto}
                            </Typography>
                        </CardContent>
                    </Card>
                </ThemeProvider>

            </div>
        )
    }
