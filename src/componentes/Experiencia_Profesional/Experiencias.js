import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Experiencias.css';
import React from "react";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export class Experiencia extends React.Component {

    render() {

        const cond = localStorage.getItem('idioma') === "ESP"
        const dic_final = this.props.dic;
        const Icon = dic_final.icon;
        return (
            <div className="container_presentacion" id={this.props.id}>
                <ThemeProvider theme={theme}>
                    <Card className="card_text" style={{ backgroundColor: this.props.card_color }}>
                        <CardContent>
                            <Typography style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
                                <Icon /> {cond ? dic_final.nombres.esp : dic_final.nombres.eng}
                            </Typography>
                            <Typography style={{ fontFamily: "DM Serif Display", paddingTop: 15 }}>
                                {cond ? dic_final.texto.esp : dic_final.texto.eng}
                                {dic_final.documento ? <p>{cond ? dic_final.documento.text.esp: dic_final.documento.text.eng}
                                 <a href={dic_final.documento.link}>Clasificación del nivel de madurez del banano basado en transferencia de
                                    aprendizaje: desde datos virtuales a datos reales</a></p> : ''}
                            </Typography>
                            {Object.keys(dic_final.pruebas).map((object, i) => (
                                <div key={i + 1}>
                                    <Typography key={i + 2} style={{ fontFamily: "DM Serif Display", paddingTop: 10, marginLeft: 20, color: "#756868" }}>
                                        ⋆ {cond ? dic_final.pruebas[object].nombre.esp : dic_final.pruebas[object].nombre.eng}
                                    </Typography>
                                    <Typography key={i} style={{ fontFamily: "DM Serif Display", fontSize: 13, paddingTop: 0, marginLeft: 40, color: "#756868" }}>
                                        {cond ? dic_final.pruebas[object].subtext.esp : dic_final.pruebas[object].subtext.eng}
                                    </Typography>
                                    <ImageList
                                        gap={4}
                                        sx={{ width: "auto", height: 280, }} key={i + 3}
                                        style={{ marginTop: 10, backgroundColor: "#CCCEDD" }} >

                                        {dic_final.pruebas[object].imagenes.map((imagen_info, index) => (
                                            <ImageListItem key={index} sx={{ width: 350 }}
                                                cols={dic_final.pruebas[object].imagenes.length}
                                                style={{ content: "center", marginLeft: "auto", marginRight: "auto" }}>
                                                <img
                                                    src={imagen_info.imagen}
                                                    loading="lazy"
                                                    alt={cond ? imagen_info.nombres.esp : imagen_info.nombres.eng}
                                                    id="imagen"
                                                />
                                                <div style={{ overflow: "auto" }}>
                                                    <ImageListItemBar
                                                        title={cond ? imagen_info.nombres.esp : imagen_info.nombres.eng}
                                                        position="below"
                                                        id="subtitulos"
                                                        sx={{
                                                            fontSize: 3, fontFamily: "DM Serif Display",
                                                            color: "#211D1D",
                                                            textAlign: "center", overflow: "auto",
                                                            width: "auto"
                                                        }}
                                                    />
                                                </div>
                                            </ImageListItem>
                                        ))}

                                    </ImageList>

                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </ThemeProvider>
            </div>
        );
    }
}

export default Experiencia;
