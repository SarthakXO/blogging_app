const page = ({ params }: { params: { id: String } }) => {
  // console.log(params.id);
  return <div>Post: about blog {params.id}</div>;
};

export default page;
