"use client";
import { Formik, Field, ErrorMessage, FormikProps, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const ContactUsForm = () => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name is too short")
      .max(50, "Name is too Long"),
    email: Yup.string().email("Invalid email").required(),
    phone: Yup.string()
      .min(10, "Invalid Number")
      .max(14, "Invalid Number")
      .required("This is required"),
  });
  const [done, setDone] = useState<boolean>();
  return (
    <div>
      <Formik
        initialValues={{ name: " ", email: " ", phone: " " }}
        onSubmit={async (values) => {
          try {
            await axios.post("http://localhost:3000/api/contactUs", values);
            setDone(true);
          } catch {
            setDone(false);
          }
          await axios.post("http://localhost:3000/api/contactUs", values);
          setDone;
        }}
        validationSchema={contactSchema}
      >
        <Form className="text-white mt-10 grid grid-cols-1 gap-20">
          <div className="flex gap-6">
            <label htmlFor="name">Name:</label>
            <div> </div>
            <Field
              className="bg-black w-full text-white border hover:scale-105 border-gray-800 hover:border-gray-500 duration-300 rounded-lg ml-4"
              name="name"
              type="text"
            />
          </div>
          <ErrorMessage name="name" />

          <div className="flex gap-6">
            <label>Email:</label>
            <div> </div>
            <Field
              className="bg-black w-full text-white border hover:scale-105 border-gray-800 hover:border-gray-500 duration-300 rounded-lg ml-4"
              name="email"
              type="text"
            />
          </div>
          <ErrorMessage name="email" />

          <div className="flex gap-6">
            <label>Phone:</label>
            <div> </div>
            <Field
              className="bg-black w-full text-white border border-gray-800 hover:scale-105 hover:border-gray-500 duration-300 rounded-lg ml-4"
              name="phone"
              type="text"
            />
          </div>
          <ErrorMessage className="text-white" name="phone" />
          <div className="flex justify-center">
            <button
              className="border border-gray-800 w-[200px] rounded-lg hover:scale-105 hover:bg-slate-700 duration-300 "
              type="submit"
            >
              Submit
            </button>
          </div>
          <span className="text-gray-500 ">
            We Will reach out to you within 5-10 business days
          </span>
          {done ? (
            <span className="text-gray-500">Details Sent</span>
          ) : (
            <span className="text-gray-500">invalid Details</span>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUsForm;
