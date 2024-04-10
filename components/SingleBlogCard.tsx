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
        <div className="text-2xl flex gap-4 items-center">
          <div className="hover:scale-125 duration-300">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>{`${props.reactions}`}</div>
        </div>
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
