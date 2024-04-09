import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky  p-4 border-b border-gray-700">
      <div className="flex justify-around text-xl ">
        <Link href={"/"}>
          <div className="hover:text-gray-400 duration-300 hover:scale-105">
            Blogger
          </div>
        </Link>
        <div className="flex gap-14">
          <Link href={"/blogs"}>
            <div className="hover:text-gray-400 duration-300 hover:scale-105">
              Blogs
            </div>
          </Link>
          <Link href={"/about"}>
            <div className="hover:text-gray-400 duration-300 hover:scale-105">
              About
            </div>
          </Link>
          <Link href={"/contact"}>
            <div className="hover:text-gray-400 duration-300 hover:scale-105">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
