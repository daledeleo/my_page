import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Utils from "../utils";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Education(){
    const cond = localStorage.getItem('idioma')==="ESP"
    const dic_final = cond ? Utils.data.esp.educacion :Utils.data.eng.educacion;

    return(
    <div className="container_presentacion">
        <ThemeProvider theme={theme}>
        <Typography variant="h3" component="h3" className="titulo" style={{letterSpacing: "0.18em", fontFamily:"Roboto",color: "#000000"}}>
                        {dic_final.title}
                    </Typography>
                    <Card className="card_text" style={{ backgroundColor: '#DCDEEE'}}>
                        <CardContent>
                        {Object.keys(dic_final.titulos).map((object, i) =>
                        <div  key={i}>{i>0 ? '\n\n\n':''}
                        <Typography  key={i} variant="h6" component="h6" style={{fontFamily:"DM Serif Display",color: "#211D1D", fontWeight: "bold"}}> {(dic_final.titulos[object].titulo)}  &nbsp; &nbsp;&nbsp;
                            <i>{object}:</i> {(dic_final.titulos[object].nombre)} &nbsp;&nbsp;&nbsp;
                        <i>{cond ? "Año":"Year"}:</i>{(dic_final.titulos[object].anio)}</Typography></div> 
                        )}
                        </CardContent>
                    </Card>
        </ThemeProvider>
    </div>
    );
}


