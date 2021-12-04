import React from 'react'
import {Button, Paper, TextField} from "@mui/material";
import {FormikHelpers, useFormik} from "formik";

export const CustomerForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            } else if (!/^[a-zA-Z]*$/i.test(values.name)) {
                errors.name = 'Invalid name';
            }
            if (values.surname.length > 20) {
                errors.surname = 'Invalid surname(not be more 20 letters)';
            }
            if (values.address.length > 30) {
                errors.address = 'Invalid length address more in 30 letters';
            }
            if (!values.phone) {
                errors.phone = 'Required'
            } else if (values.phone.length !== 11) {
                errors.phone = 'telephone number may be 11 symbols'
            }
            return errors;
        },

        onSubmit: (values: FormValuesType, formikHelpers: FormikHelpers<FormValuesType>) => {

            console.log(values, formikHelpers)


            // formik.resetForm()
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Paper elevation={21} sx={{
                    height: 400,
                    display: 'grid',
                    padding: 3
                }}>

                    <>
                        <TextField
                            id="name"
                            label="name"
                            variant="standard"
                            margin="normal"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name &&
                        <div style={{color: 'red'}}>{formik.errors.name}</div>}
                    </>
                    <>
                        <TextField
                            id="surname"
                            label="surname"
                            variant="standard"
                            margin="normal"
                            {...formik.getFieldProps('surname')}
                        />
                        {formik.touched.surname && formik.errors.surname &&
                        <div style={{color: 'red'}}>{formik.errors.surname}</div>}
                    </>
                    <>
                        <TextField
                            id="address"
                            label="address"
                            variant="standard"
                            margin="normal"
                            {...formik.getFieldProps('address')}
                        />
                        {formik.touched.address && formik.errors.address &&
                        <div style={{color: 'red'}}>{formik.errors.address}</div>}
                    </>
                    <>
                        <TextField
                            id="phone"
                            label="phone"
                            variant="standard"
                            margin="normal"
                            {...formik.getFieldProps('phone')}
                        />
                        {formik.touched.phone && formik.errors.phone &&
                        <div style={{color: 'red'}}>{formik.errors.phone}</div>}
                    </>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>order</Button>

                </Paper>
            </form>

        </>
    )
}

type FormikErrorType = {
    name?: string
    surname?: string
    address?: string
    phone?: string
}
type FormValuesType = {
    name: string
    surname: string
    address: string
    phone: string
}

