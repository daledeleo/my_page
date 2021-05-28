import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import imagen from "../../imagenes/experiencia profesiona/Qr.PNG"

let theme = createTheme();
theme = responsiveFontSizes(theme);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

class Certificaciones extends React.Component {
    render() {
        var cond = localStorage.getItem('idioma') === "ESP";
        var dict_final = this.props.dic;
        return (
            <ThemeProvider theme={theme}>
                <Typography variant="h3" component="h3" style={{ letterSpacing: "0.18em", fontFamily: "Roboto", color: "#000000", textAlign:"left", paddingTop:30, paddingLeft:25}}>
                    {cond ? "Certificaciones": "Certifications"}
                </Typography>

                <Typography style={{ fontFamily: "DM Serif Display", fontSize: 13, paddingTop: 0, marginLeft: 40, color: "#756868" }}>
                    <img src={imagen} style={{width:100,height:100}} alt="qr"></img>
                    <a href="https://drive.google.com/drive/folders/1S_uT_eEmb3FWP100ancCNkq07PpkJpgz?usp=sharing">{cond ? "Certificados en Linea":"Online Certificates"} </a>
                </Typography>
                <Card style={{ backgroundColor: this.props.card_color, margin: 30 }}>
                    <CardContent>
                        <TableContainer style={{maxHeight:340}} component={Paper}>
                            <Table stickyHeader aria-label="sticky table">

                                <TableHead checkboxSelection>
                                    <TableRow>
                                        {Object.keys(dict_final.encabezados).map((encabezado, index) => (
                                            <StyledTableCell key={index} align="left">{cond ? dict_final.encabezados[encabezado].esp : dict_final.encabezados[encabezado].eng}</StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {Object.keys(dict_final.body).map((certificado, index1) => (
                                        <StyledTableRow component="th" scope="row" key={index1}>
                                            {Object.keys(dict_final.body[certificado]).map((info, index) => (

                                                <StyledTableCell align="left" key={index}>
                                                    {cond ? dict_final.body[certificado][info].esp : dict_final.body[certificado][info].eng}
                                                </StyledTableCell>

                                            ))}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>

                    </CardContent>
                </Card>
            </ThemeProvider>
        )
    }

}

export default Certificaciones;