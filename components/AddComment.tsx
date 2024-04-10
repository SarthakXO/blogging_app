"use client";

import { Formik, Field, Form } from "formik";
interface CommentMade {
  comment: String;
  id: String;
  userId: Number;
}

const postComment = async (values: {}) => {};

const AddComment = ({ id }: { id: String }) => {
  return (
    <div className=" pb-6 w-[800px] m-4">
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={(values): void => {
          console.log(values);
        }}
      >
        <Form>
          <div className="flex gap-6 justify-start">
            <Field
              className="w-full text-white bg-black border border-gray-700 rounded-lg p-2 hover:scale-105 duration-300  "
              name="comment"
              placeholder="Type Your Comment"
            />
            <button
              className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddComment;
