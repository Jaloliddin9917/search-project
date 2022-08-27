import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import Sidebar from '../../Components/Layout/sidebar/Sidebar';
import classes from "./Agreement.module.scss";
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
                    <h1 className={classes.title}>Договор</h1>
                    <div className={classes.breadCrumb}>
                        <Link to="/">Главная</Link>
                        <img src={arrowRight} alt="image" />
                        <Link to="#">Договор</Link>
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
                                    name="bank"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Банк" />}
                                />
                                <Controller
                                    name="fullname"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="МФО" />}
                                />
                                <Controller
                                    name="serviceBank"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Офис банковских услуг " />}
                                />
                                <Controller
                                    name="codeClient"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Код клиента " />}
                                />
                                <Controller
                                    name="uniqueAgree"
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field }) => <TextField {...field} type="search" variant="outlined" label="Уникальный номер договора" />}
                                />

                            </Box>
                            <div className={classes.button}>
                                <Button style={{ backgroundColor: "#0f4d8b" }} type='submit' variant="contained">Search</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Container>

    )
};

export default Borrower;