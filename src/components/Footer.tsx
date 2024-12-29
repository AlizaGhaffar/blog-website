import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green-50 text-green-950 p-4  ">
      {" "}
      <hr className="h-1 bg-green-950" />{" "}
      <div className="container mx-auto text-center pt-6">
        {" "}
        <p>© 2024 AlizaBlog. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          {" "}
          <Link href={"/"} className="hover:text-lime-800">
            {" "}
            Home{" "}
          </Link>
          <Link href={"/posts/6"} className="hover:text-lime-800">
            {" "}
            About{" "}
          </Link>
          <Link href={"/posts"} className="hover:text-lime-800">
            {" "}
            Blog{" "}
          </Link>
          <Link href={"/posts/3"} className="hover:text-lime-800">
            {" "}
            Contact{" "}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
