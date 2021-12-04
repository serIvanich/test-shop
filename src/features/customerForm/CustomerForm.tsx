import React from 'react'
import {Button, Paper, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FormikHelpers, useFormik} from "formik";

export const CustomerForm: React.FC = () => {
    let navigate = useNavigate()
    const clickToReturnShopping = () => {
        navigate('/products')
    }

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
            } else if (!/^[A-Z a-z]{2,4}$/i.test(values.name)) {
                errors.name = 'Invalid name';
            }
// if (!values.surname) {
//                 errors.surname = 'Required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.surname)) {
//                 errors.surname = 'Invalid email address';
//             }
// if (!values.address) {
//                 errors.address = 'Required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.address)) {
//                 errors.address = 'Invalid email address';
//             }
            if (!values.phone) {
                errors.phone = 'Required'
            } else if (values.phone.length !== 11) {
                errors.phone = 'telephone number may be 11 simbol'
            }
            return errors;
        },

        onSubmit: async (values: FormValuesType, formikHelpers: FormikHelpers<FormValuesType>) => {

            // const resultAction = await dispatch(authActions.login(values))
            // if (authActions.login.rejected.match(resultAction)) {
            //     if (resultAction.payload?.fieldsErrors?.length) {
            //         const error = resultAction.payload?.fieldsErrors[0]
            //         formikHelpers.setFieldError(error.field, error.error)
            //     }
            // }


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
                    <Button>order</Button>

            </Paper>
        </form>
            <Button sx={{margin: '50px auto'}} onClick={clickToReturnShopping}>return to shopping</Button>
        </>
    )
}

// if (isLoggedIn) {
//     return <Redirect to={'/'}/>
// }
//
// return <Grid container justify="center">
//     <Grid item xs={4}>
//         <form onSubmit={formik.handleSubmit}>
//             <FormControl>
//                 <FormLabel>
//                     <p>To log in get registered
//                         <a href={'https://social-network.samuraijs.com/'}
//                            target={'_blank'}>here
//                         </a>
//                     </p>
//                     <p>or use common test account credentials:</p>
//                     <p>Email: free@samuraijs.com</p>
//                     <p>Password: free</p>
//                 </FormLabel>
//                 <FormGroup>
//                     <TextField
//                         label="Email"
//                         margin="normal"
//                         {...formik.getFieldProps('email')}
//                     />
//                     {formik.touched.email && formik.errors.email &&
//                     <div style={{color: 'red'}}>{formik.errors.email}</div>}
//                     <TextField
//                         type="password"
//                         label="Password"
//                         margin="normal"
//                         // name='password'
//                         // onChange={formik.handleChange}
//                         // onBlur={formik.handleBlur}
//                         // value={formik.values.password}
//                         {...formik.getFieldProps('password')}
//                     />
//                     {formik.touched.password && formik.errors.password &&
//                     <div style={{color: 'red'}}>{formik.errors.password}</div>}
//
//                     <FormControlLabel
//                         label={'Remember me'}
//                         control={<Checkbox/>}
//                         {...formik.getFieldProps('rememberMe')}
//                     />
//                     <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
//                 </FormGroup>
//             </FormControl>
//         </form>
//     </Grid>
// </Grid>
// }

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

