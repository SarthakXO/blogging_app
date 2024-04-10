import axios from "axios";

interface Comment {
  id: Number;
  body: String;
  postId: Number;
  user: {
    id: Number;
    username: String;
  };
}
const fetchData = async (id: String) => {
  const data = axios
    .get(`http://localhost:3000/api/comments/${id}`)
    .then((res) => res.data);
  return data;
};

const BlogComment = async ({ id }: { id: String }) => {
  let response;
  try {
    response = await fetchData(id).then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="grid grid-cols-1 place-items-center w-full mb-10 pb-4 pt-4">
      <div className="text-2xl underline"> COMMENTS</div>
      {response.comments.map((comment: Comment) => {
        return (
          <div
            className="flex mt-10 justify-start gap-10 w-1/2 items-center  "
            key={`${comment.id}`}
          >
            <div className="text-gray-500 hover:underline duration-300 cursor-pointer">
              @{comment.user.username}:{" "}
            </div>
            <div>{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogComment;
