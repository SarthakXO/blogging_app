"use client";

import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

interface CommentMade {
  comment: String;
  id: String;
  userId: Number;
}

const postComment = async (values: {}) => {};

const AddComment = ({ id }: { id: String }) => {
  const [posted, setPosted] = useState<boolean>();
  useEffect(() => {
    setTimeout(() => {
      setPosted(false);
    }, 4000);
  }, [posted]);

  return (
    <div className=" pb-6 w-[800px] m-4">
      {posted ? (
        <div className="absolute duration-300">
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="font-medium">Success!</span> Comment posted
            Successfully.
          </div>
        </div>
      ) : (
        " "
      )}
      <Formik
        initialValues={{ body: "", postId: id, userId: 25 }}
        onSubmit={async (values) => {
          const response = await axios
            .post("http://localhost:3000/api/comments", values)
            .then((res) => res.data);
          if (response.success) {
            setPosted(true);
            console.log(response.success);
          }
        }}
      >
        <Form>
          <div className="flex gap-6 justify-start">
            <Field
              className="w-full text-white bg-black border border-gray-700 rounded-lg p-2 hover:scale-105 duration-300  "
              name="body"
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
