import BlogCard from "@/components/BlogCard";

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-4 p-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default page;
