import BlogCard from "@/components/BlogCard";
import axios from "axios";

interface Blog {
  id: Number;
  title: String;
  body: String;
  userId: Number;
  tags: String[];
  reactions: Number;
}

const fetchData = async () => {
  const reponse = await axios
    .get("http://localhost:3000/api/blogs")
    .then((res) => res.data);

  return reponse;
};
const page = async () => {
  const data = await fetchData();
  return (
    <div className="flex flex-row flex-wrap gap-6 mt-4 p-4 justify-center">
      {data.data.posts.map((blog: Blog) => {
        return (
          <div
            key={`${blog.id}`}
            className="object-contain hover:scale-105 duration-300"
          >
            <BlogCard
              id={blog.id}
              title={blog.title}
              body={blog.body}
              reactions={blog.reactions}
              tags={blog.tags}
              userId={blog.userId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default page;
