import axios from "axios";

const fetchData = async (id: String) => {
  const response = await axios
    .get(`http://localhost:3000/api/blogs/${id}`)
    .then((res) => res.data);
  return response;
};

const page = async ({ params }: { params: { id: String } }) => {
  const response = await fetchData(params.id);
  // console.log(response);
  return (
    <div className="flex justify-center mt-10">
      <div className="text-5xl underline">Blog No. {response.data.id}</div>
    </div>
  );
};

export default page;
