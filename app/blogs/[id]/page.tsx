import BlogComment from "@/components/BlogComment";
import SingleBlogCard from "@/components/SingleBlogCard";
import axios from "axios";

const fetchData = async (id: String) => {
  const response = await axios
    .get(`http://localhost:3000/api/blogs/${id}`)
    .then((res) => res.data);
  return response;
};

const page = async ({ params }: { params: { id: String } }) => {
  const response = await fetchData(params.id).then((res) => res.data);
  // console.log(response);
  return (
    <div className="grid grid-cols-1 place-items-center mt-10 text-center w-full">
      <SingleBlogCard
        title={response.title}
        id={response.id}
        userID={response.userId}
        body={response.body}
        reactions={response.reactions}
        tags={response.tags}
      />
      <BlogComment />
    </div>
  );
};

export default page;
