'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
}

export default function PostDetail() {
  const params = useParams() as { id: string }; // Use useParams for fetching params
  const { id } = params;

  const post: Post | null = getPostById(id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: 'Aliza', comment: 'This is an amazing project!' },
    { name: 'Peterpiper', comment: 'Great job! Really inspiring.' },
    { name: 'Doreamon', comment: 'Love the design and functionality!' },
  ]);

  if (!post) {
    return (
      <div className="text-center text-white">
        <p>Post not found</p>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="max-w-full mx-auto p-6 relative bg-green-100 text-green-950">
      <article className="relative bg-green-100 text-green-950 shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-green-950">{post.title}</h2>
            <br />
            <p className="text-stone-800 text-sm">{post.date}</p>
            <div className="mt-6 text-stone-800">
              <p>{post.content}</p>
              <Link
                href={post.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-600 hover:text-lime-800 mt-4 inline-block font-semibold text-lg"
              >
                Visit Project..
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md border-4 border-lime-600"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-green-950">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 text-black border-lime-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 text-black border-lime-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-lime-800 border-2 border-lime-800 text-black px-6 py-2 rounded-lg shadow-md hover:bg-lime-800 transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-green-50 p-4 rounded-lg shadow-sm mb-4 border-2 border-stone-200"
              >
                <p className="text-lime-600 font-semibold">{comment.name}</p>
                <p className="text-stone-800">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

const getPostById = (id: string) => {
  const posts: Post[] = [
    {
      title: 'Project 1 - Burger Website',
      date: '',
      content: `I designed the burger Website to deliver a mouthwatering online experience for burger lovers. This site features an eye-catching layout and highlights exclusive offers, making it easy to explore delicious options. Customers can browse the menu, learn about discounts, and order their favorite burgers effortlessly. With a vibrant design and user-friendly interface, this project reflects my passion for blending creativity and functionality. Whether you are a burger enthusiast or a casual diner, this website ensures a seamless ordering process. I am proud to have created this platform to connect burger fans with the best flavors at their fingertips.`,
      imageUrl: '/images/burgeria.jpg',
      projectLink: 'https://nextjswebsite1.vercel.app/',
    },
        {
      title: 'Project 2 - Shopping Website',
      date: '',
      content: `The Educational Website is a comprehensive platform designed to inspire and inform. It offers resources for car enthusiasts, providing reviews, models, and insightful articles. This project stands out for its clean design and ease of navigation, ensuring users can quickly find relevant information. I aimed to create an engaging space where users can explore various learning opportunities and practical tips. With every detail, I focused on ensuring functionality and user satisfaction. I am proud to showcase this platform as a testament to my ability to create educational tools that bridge the gap between information and accessibility.`,
      imageUrl: '/images/rivo.jpg',
      projectLink: 'https://nextjsweb2.vercel.app/',
    },    
    {
      title: 'Project 3 - Portfolio Website',
      date: '',
      content: `My Portfolio Website is a creative hub where I showcase my expertise in web development and design. This project is crafted to reflect professionalism and personal branding. The sleek layout features my work, skills, and achievements in an organized and visually appealing manner. Visitors can easily navigate through sections like projects, expertise, and contact information. This site not only highlights my creative flair but also demonstrates my technical abilities in building responsive and user-centric websites. I am proud of this platform as it represents my journey, growth, and passion for crafting impactful digital experiences.`,
      imageUrl: '/images/perportl.jpg',
      projectLink: 'https://personal-portfolio-sigma-mauve.vercel.app/',
    },
  {
  title: 'Project 4 - Resume Builder Website',
  date: '',
  content: `The Resume Builder Website is a simple yet powerful tool for creating professional resumes. This platform enables users to enter their details like name, email, experience, and skills and instantly generate a clean, polished resume. My focus while creating this website was usability and simplicity, ensuring that even first-time users can navigate easily. This project highlights my problem-solving abilities and attention to user needs. I am proud to have built a platform that helps people confidently present themselves in the job market and achieve their career goals effortlessly.`,
  imageUrl: '/images/resume.jpg',
  projectLink: 'https://hackathon-resume-builder-nine.vercel.app/',
},
{
  title: 'Project 5 - Furniture Website',
  date: '',
  content: `I developed the Furniture Website to celebrate style and innovation. This sleek platform highlights latest collection, offering an immersive user experience with stunning visuals and engaging content. The site is designed to let users explore product details, discover features, and shop seamlessly. Every detail, from design to functionality, was carefully crafted to reflect modern aesthetics. I am proud of this project as it showcases my ability to create visually appealing and responsive e-commerce platforms that align with brand identity.`,
  imageUrl: '/images/avion.jpg',
  projectLink: 'https://aliza-figmahackathon.vercel.app/Products',
},

{
  title: 'Project 6 - Portfolio Website',
  date: '',
  content: `Welcome to my **Personal Portfolio Website**, a creative space where I showcase my skills, projects, and experiences as a **web developer**. Designed with a clean, modern look, this portfolio reflects my passion for coding, design, and continuous learning. Whether you're a potential employer, client, or fellow developer, my portfolio provides an overview of my work, technical abilities, and personal journey in the world of development.

 It is a creative project that highlights my expertise and professional growth. Designed with simplicity and elegance, this site showcases my skills, achievements, and personal branding. Visitors can explore sections like expertise, projects, and contact information. The dark-themed design adds a modern touch, ensuring a visually captivating user experience. This project serves as a portfolio of my technical and creative abilities`,
  imageUrl: '/images/alizapers.jpg',
  projectLink: 'https://personal-portfolio-css-nine.vercel.app/',
},
  ];

  return posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null;
};

