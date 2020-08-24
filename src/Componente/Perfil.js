import React, { PureComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));



class Perfil extends PureComponent {




    render() {
        const l = {
            
            title: {
                fontFamily: "Arial",
                margin: "10%",

            },
            root: {
                flexGrow: '1',
                marginTop:'20px',
              },
              paper: {
                padding: '20px',
                margin: 'auto',
                maxWidth: 500,
              },
              image: {
                width: 128,
                height: 128,
              },
              img: {
                objectFit: 'cover',
                resizeMode: "contain",
                height: "100px",
                width: "100px"
              },
        }

        return (
//"https://okdiario.com/img/2020/05/05/j-balvin.jpg"
            <div style={l.root}>
            <Paper style={l.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={l.image}>
                    <img style={l.img} alt="JBALVIN" src={this.props.imagen} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {this.props.tit}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Correo: 
                        {this.props.Correo}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                          Nombre usuario: 
                      {this.props.user}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Cerrar sesión
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Médícó</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        )
    }
}

export default Perfil