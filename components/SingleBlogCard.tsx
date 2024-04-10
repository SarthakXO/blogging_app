interface Blog {
  id: Number;
  title: String;
  body: String;
  userID: Number;
  tags: String[];
  reactions: Number;
}

const SingleBlogCard = (props: Blog) => {
  return (
    <div className="flex flex-wrap gap-16 justify-center border border-gray-800 rounded-3xl p-4 w-1/2">
      <div className="grid grid-cols-1 gap-10 place-items-center">
        <div className="text-5xl underline">{`Blog No.${props.id}`}</div>
        <div className="text-4xl italic">&apos;{props.title}&apos;</div>
        <div className="text-xl w-1/2">{props.body}</div>
      </div>
      <div className="flex flex-row flex-wrap gap-36">
        <div className="text-2xl">{`${props.reactions}`}</div>
        <div className="text-lg flex gap-10">
          {props.tags.map((tag) => {
            return (
              <div
                className="hover:text-gray-300 duration-300 text-gray-600"
                key={`${tag}`}
              >
                #{tag}
              </div>
            );
          })}
        </div>
        <div className="text-md">{` by user ${props.userID}`}</div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
