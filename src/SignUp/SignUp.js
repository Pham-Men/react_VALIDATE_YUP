
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"

const validateSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'email is not valid'),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('bcd')
})

export function SignUp () {

    return (
        <>
            <h2>Sign Up</h2>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword:''
                }}
                validationSchema={validateSchema}
                onSubmit={(value) => {
                    console.log(value)
                    if(
                        value.name && 
                        value.email &&
                        value.password &&
                        value.confirmPassword
                        ) {
                            alert('Sign up successfully!!!')
                        } else {
                            alert('Please fill out all the fields!!!')
                        }
                }}
            >
                <Form>
                    <Field name='name'></Field>
                    <ErrorMessage name='name'></ErrorMessage>
                    <Field name='email'></Field>
                    <ErrorMessage name='email'></ErrorMessage>
                    <Field name='password'></Field>
                    <ErrorMessage name='password'></ErrorMessage>
                    <Field name='confirmPassword'></Field>
                    <ErrorMessage name='confirmPassword'></ErrorMessage>
                    <button type='submit'>Login</button>
                </Form>

            </Formik>
        </>
    )
}