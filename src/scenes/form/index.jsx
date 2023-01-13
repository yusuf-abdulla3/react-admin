import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
}

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
})
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)")

  const handleFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        />
        {({ value, errors, touched, handleBlur, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box 
            display="grid" 
            gap="30px" 
            gridTemplateColumns="repeat(4, minmax(0, 1fr)"
            sx={{
              "& > div": { gridColumn:isNonMobile? undefined: "span 4"}
            }}
            >
              <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2"}}
              />

            </Box>
          </form>
        )
        }
    </Box>
  )
}