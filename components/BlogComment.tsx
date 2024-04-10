import axios from "axios";

const fetchData = async (id: String) => {
  const data = axios
    .get(`http://localhost:3000/api/comments/${id}`)
    .then((res) => res.data);
  return data;
};

const BlogComment = async ({ id }: { id: String }) => {
  try {
    const response = await fetchData(id).then((res) => res.data);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="flex mt-10 justify-start gap-10 w-1/2 border border-gray-800 h-">
      <div>Username: </div>
      <div>Comment </div>
    </div>
  );
};

export default BlogComment;
