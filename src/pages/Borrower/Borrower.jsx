import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import Sidebar from '../../Components/Layout/sidebar/Sidebar';
import classes from "./Borrower.module.scss";
import arrowRight from "../../assets/svg/arrow-right.svg";
import { useForm, Controller } from 'react-hook-form';
import Container from "../../Components/Container"

import { Link } from "react-router-dom";


const Borrower = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <div className={classes.container}>
                <Sidebar />
                <div className={classes.mainContant}>
                    <h1 className={classes.title}>Заёмщик</h1>
                    <div className={classes.breadCrumb}>
                        <Link to="/">Главная</Link>
                        <img src={arrowRight} alt="image"/>
                        <Link to="#">Заёмщик</Link>
                    </div>
                    <div className={classes.forms}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Controller
                                    name="pin"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="ПИНФЛ" />}
                                />
                                <Controller
                                    name="number"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Серия и номер документа" />}
                                />
                                <Controller
                                    name="surename"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Фамилия" />}
                                />
                                <Controller
                                    name="name"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Имя" />}
                                />
                                <Controller
                                    name="fatherName"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Отчество" />}
                                />
                                <Controller
                                    name="inn"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="ИНН" />}
                                />
                                <Controller
                                    name="secondName"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Наименование" />}
                                />
                                <Controller
                                    name="region"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Область" />}
                                />

                            </Box>
                            <div className={classes.button}>
                                <Button style={{ backgroundColor: "#0f4d8b"}} type='submit' variant="contained">Search</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Container>

    )
};

export default Borrower;