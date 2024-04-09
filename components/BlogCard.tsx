interface Blog {
  id: Number;
  title: String;
  body: String;
  userId: Number;
  tags: String[];
  reactions: Number;
}

const BlogCard = (props: Blog) => {
  return (
    <div className="">
      <div className="max-w-sm overflow-hidden shadow-lg border border-gray-700 rounded-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-200 text-base">
            {`${props.body.slice(0, 350)}..`}
            <br />
            <span className="text-blue-500 hover:underline duration-300">
              Know More
            </span>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex">
          {props.tags.map((tag, index) => {
            return (
              <div key={`${index}`} className="  ">
                <span className=" hover:bg-gray-500 duration-300 hover:text-white flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
