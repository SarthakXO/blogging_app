import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className=" bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg sm:text-lg text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
              Creating Next.JS applications. <br />
              <br />
              <span className="font-extrabold">Sarthak Bhatt,</span> Web
              developer
            </h2>
            <p className="mb-4 font-light">
              With over a year of professional experience and a robust portfolio
              of personal projects, I stand as a dedicated web developer
              specializing in Next.js. My journey in the world of web
              development is marked by a relentless pursuit of innovation and
              mastery in modern web technologies, with a particular focus on
              enhancing user experience and optimizing web performance
            </p>
            <p className="mb-4 font-medium">
              My expertise in Next.js, combined with a passion for crafting
              dynamic and responsive websites, enables me to deliver tailored
              solutions that meet the unique needs of each project. Through my
              work, I aim not only to meet but exceed expectations, pushing the
              boundaries of what is possible on the web.
            </p>
            <Link
              href="https://github.com/SarthakXO"
              target="_blank"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-300 duration-300"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
