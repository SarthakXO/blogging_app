import ContactUsForm from "@/components/ContactUsForm";

const page = () => {
  return (
    <div className="flex justify-center items-center text-center ">
      <div className="w-[600px] h-[800px] mt-10 border border-gray-800 object-contain rounded-xl p-8">
        <h1 className="text-3xl">Contact Us</h1>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default page;
