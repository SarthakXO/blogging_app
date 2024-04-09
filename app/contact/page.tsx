"use client";
import { Formik, Field, ErrorMessage, FormikProps, Form } from "formik";
const page = () => {
  return (
    <div className="flex justify-center items-center text-center ">
      <div className="w-[600px] h-[600px] mt-10 border border-gray-800 rounded-xl p-8">
        <h1 className="text-3xl">Contact Us</h1>
        <Formik
          initialValues={{ name: " ", email: " ", phone: " " }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="text-white mt-10 grid grid-cols-1 gap-10">
            <div className="flex gap-6">
              <label>Name : </label>
              <div> </div>
              <Field
                className="bg-black w-[400px] text-white border border-gray-800 hover:border-gray-500 duration-300 rounded-lg ml-4"
                name="name"
                type="text"
              ></Field>
            </div>

            <div className="flex gap-6">
              <label>Email:</label>
              <div> </div>
              <Field
                className="bg-black w-[400px] text-white border border-gray-800 hover:border-gray-500 duration-300 rounded-lg ml-4"
                name="email"
                type="text"
              ></Field>
            </div>

            <div className="flex gap-6">
              <label>Phone:</label>
              <div> </div>
              <Field
                className="bg-black w-[400px] text-white border border-gray-800 hover:border-gray-500 duration-300 rounded-lg ml-4"
                name="phone"
                type="text"
              ></Field>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default page;
