import BlogCard from "@/components/BlogCard";
import axios from "axios";

const fetchData = async () => {
  const data = await axios
    .get("http://localhost:3000/blogs")
    .then((res) => res.data);

  return data;
};
const page = async () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-4 p-4">
      <div>
        <BlogCard />
      </div>
      <div>
        <BlogCard />
      </div>
      <div>
        <BlogCard />
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
};

export default page;
