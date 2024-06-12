import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-dashed border-b-indigo-500 ">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between ">
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-1">
                <Image
                  src={`/book-store-logo.jpg`}
                  width={80}
                  height={80}
                  alt="book-logo-image"
                />
                <span className="text-4xl uppercase font-bold tracking-tight text-indigo-500">
                  Digigyan
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="h-10 rounded-md border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-500 transition-all hover:border-indigo-100 hover:bg-indigo-100 active:border-indigo-200 active:bg-indigo-200">
              Sign in
            </button>
            <button className="h-10 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-600 active:bg-indigo-700">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
