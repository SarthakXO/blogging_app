import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky bg-black p-4">
      <div className="flex justify-around text-xl text-white">
        <Link href={"/"}>
          <div>Title</div>
        </Link>
        <div className="flex gap-14">
          <Link href={"/blogs"}>
            <div>Blogs</div>
          </Link>
          <Link href={"/about"}>
            <div>About</div>
          </Link>
          <Link href={"/contact"}>
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
