import React, {useEffect} from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import styles from "./AddPlayerForm.module.css";
import axios from 'axios';

const AddPlayerForm = (props) => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          position: '',
          sport: '',
          team: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            position: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            sport: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            team: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),

            // email: Yup.string().email('Invalid email address').required('Required'),
          }),
          onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values, "Form Submitted");
            axios.post("http://localhost:8000/api/player", {
                firstName: values.firstName,
                lastName: values.lastName,
                position: values.position,
                sport: values.sport,
                team: values.team,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            });
            formik.resetForm();
            alert("Player Successfully Submitted");
          },
        });


    return (
        <div className={styles.addPlayer}>
            <div className={styles.addPlayerForm}>
                <form onSubmit={formik.handleSubmit}>
                    {/* FIRST FIELD */}
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName 
                    ? 
                    (<div className={styles.formError}>{formik.errors.firstName}</div>) 
                    : 
                    null}

                    {/* SECOND FIELD */}
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName 
                    ? 
                    (<div className={styles.formError}>{formik.errors.lastName}</div>) 
                    : null}

                    {/* THIRD FIELD */}
                    <label htmlFor="position">Position</label>
                    <input
                        id="position"
                        name="position"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.position}
                    />
                    {formik.touched.position && formik.errors.position 
                    ? 
                    (<div className={styles.formError}>{formik.errors.position}</div>) 
                    : null}

                    {/* FOURTH FIELD */}
                    <label htmlFor="sport">Sport</label>
                    <input
                        id="sport"
                        name="sport"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sport}
                    />
                    {formik.touched.sport && formik.errors.sport 
                    ? 
                    (<div className={styles.formError}>{formik.errors.sport}</div>) 
                    : null}

                    {/* FIFTH FIELD */}
                    <label htmlFor="team">Team</label>
                    <input
                        id="team"
                        name="team"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.team}
                    />
                    {formik.touched.team && formik.errors.team 
                    ? 
                    (<div className={styles.formError}>{formik.errors.team}</div>) 
                    : null}

                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddPlayerForm;