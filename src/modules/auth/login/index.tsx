import { Container, Typography, TextField } from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import '../css/auth.css'
import { PASSWORD_MIN_LENGTH } from "../../../utils/config";
import { SignInData } from "../../../../typings/formData";

import { useDispatch } from "react-redux";
import actions from "../../../state/actions";
import LoadingButton from "@mui/lab/LoadingButton";
const Login = (props: any) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is Required"),
    password: Yup.string()
      .min(PASSWORD_MIN_LENGTH, `Must be at least ${PASSWORD_MIN_LENGTH}`)
      .required("Password is required"),
  });

  const initialValues: SignInData = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      console.log(values)
    },
  });

  return (
    <Container className="App" component="main" maxWidth="xs">
      <header className="App-header">
        <div className="bg-color">
          <Typography component="h1" color={"gold"} variant="h4">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <div className="loginBtn">
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="loginBtn">
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                className=""
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className="loginBtn">
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                SUMBIT
              </LoadingButton>
            </div>
          </form>
        </div>
      </header>
    </Container>
  );
};

export default Login;
