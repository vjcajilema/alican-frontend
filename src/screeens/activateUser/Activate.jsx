import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//Apis
import UserAPI from '../../api/UserApi'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                ALICAN
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#0a3761',
    },
}));

function ActivateUser() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        code: "",

    });

    const handleChange = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };

    function onSubmit(e) {
        e.preventDefault();
        //llamado a la api de activar usuario

        UserAPI.Activate(state.code)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert(res.data.message);
                } else {
                    alert(res.data.message);
                }
            }).catch(err => {
                console.log(err)
                if (!err.response) {
                    alert('No se ha podido esablecer conexión con el servidor');
                }else{
                    alert(err.response.data.message);
                }
                //console.log(err.response)

            })

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Activar usuario
                </Typography>
                <Typography component="h4" variant="h6">
                    Ingrese la clave que fue enviada a su correo
                </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                value={state.code}
                                required
                                fullWidth
                                id="code"
                                label="Ingrese su clave de activación"
                                name="code"
                                autoComplete={false}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Activar
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
export default ActivateUser;