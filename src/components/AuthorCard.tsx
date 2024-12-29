import React from 'react';
import Image from 'next/image';
import heroimg from '../../public/images/blogpost.webp';
import Link from 'next/link';

export default function AuthorCard() {
  return (
    <div className="flex flex-col md:flex-row bg-green-100 min-h-screen">
      <div className="font-bold px-8 md:px-20 w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-green-950 pt-8 md:pt-20 pb-4 md:pb-8 text-5xl md:text-8xl leading-tight md:leading-none">
          SEE <br /><span className="text-lime-800">BLOGS</span>
        </h1>
        <p className="font-light text-green-950 py-3 pb-6 text-lg md:text-xl">
          This amazing blog website is created with full focus and concentration by <span className="text-lime-800">Aliza Ghaffar.</span>
        </p>
        <Link href="/posts">
          <button className="inline-flex items-center bg-green-950 border-0 py-3 px-6 md:px-10 focus:outline-none hover:text-lime-800 rounded text-white mt-4 md:mt-0 transition-colors duration-300 text-lg md:text-2xl">
            See Blogs
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 pt-8 md:pt-12 px-4 md:px-16 mb-8 md:mb-0">
        <Link href="/posts">
          <Image src={heroimg} alt="blog image" className="rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300" />
        </Link>
      </div>
    </div>
  );
}
