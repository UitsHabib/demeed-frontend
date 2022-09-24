import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { RegisterSchema } from "../register.schrema";
import Image from './images/register_singup.png';
import { Icon } from '@iconify/react'; // For Icons

function Signup() {
    return (
        <section className="bg-secondary">
            <div className="container mx-auto md:flex">
                {/*========== Banner Image Left Area ========== */}
                <div className='w-5/12 hidden md:block relative'>
                    <img className='w-full h-full absolute' src={Image} alt="" />
                </div>

                {/*========== Register Right Area ========== */}
                <div className="md:w-7/12 md:pl-14 h-screen">
                    {/* ======= Header Area ======= */}
                    <header className="flex justify-end items-center gap-8 py-8">
                        <h3 className="text-main">Already have an Account?</h3>
                        <Link to="/customer/login" className="btn btnIn">LOGIN</Link>
                    </header>
                    {/* ======= Title Area ======= */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black text-gray">
                            Welcome to <span className="text-main">Demeed</span>
                        </h1>
                        <p className="text-silver text-md">Register your account !</p>
                    </div>
                    {/* ======================= From Area Start ======================= */}
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            repassword: "",
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={(valus, actions) => {
                            console.log(valus);
                            actions.setSubmitting(false);
                        }}
                    >
                        {(formikprops) => {
                            return (
                                <Form className="my-8 space-y-4">
                                    <div>
                                        <label htmlFor="name" className="text-gray">
                                            Full Name *
                                        </label>
                                        <span className="error-massage">
                                            <ErrorMessage name="name" />
                                        </span>
                                        <Field className="inputStyle" type="text" id="name" name="name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-gray">
                                            Email *
                                        </label>
                                        <span className="error-massage">
                                            <ErrorMessage name="email" />
                                        </span>
                                        <Field
                                            className="inputStyle"
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                    </div>

                                    {/* ===Password Area Start=== */}
                                    <div className="flex gap-4">
                                        <div className="md:w-6/12">
                                            <label htmlFor="password" className="text-gray">
                                                Password *
                                            </label>
                                            <span className="error-massage">
                                                <ErrorMessage name="password" />
                                            </span>
                                            <Field
                                                className="inputStyle"
                                                type="password"
                                                id="password"
                                                name="password"
                                            />
                                        </div>
                                        <div className="md:w-6/12">
                                            <label htmlFor="repassword" className="text-gray">
                                                Confirm Password *
                                            </label>
                                            <span className="error-massage">
                                                <ErrorMessage name="repassword" />
                                            </span>
                                            <Field
                                                className="inputStyle"
                                                type="password"
                                                id="repassword"
                                                name="repassword"
                                            />
                                        </div>
                                    </div>

                                    {/* ===checkbox area start === */}
                                    <div className="space-x-3">
                                        <input type="checkbox" id="checkbox" />
                                        <label htmlFor="checkbox" className="text-gray">
                                            I accept the <span className="text-main">terms of service</span>{" "}
                                            as well as <span className="text-main">Privacy Policy</span>.
                                        </label>
                                    </div>
                                    {/*=== === Register Button === ===*/}
                                    <Link type="submit" className="btn btnUp">
                                        REGISTER
                                    </Link>
                                </Form>
                            );
                        }}
                    </Formik>
                    {/*================= Futter Icons Area start ================= */}
                    <div className='flex justify-center gap-6 mt-10'>
                        <h3 className='text-main'>Create account with </h3>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="akar-icons:google-fill" color="#7336ff" /></span>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="ic:twotone-facebook" color="#7336ff" /></span>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="cib:linkedin-in" color="#7336ff" /></span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Signup;
