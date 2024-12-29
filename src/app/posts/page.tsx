'use client';
import Image from 'next/image';

const PostPage = () => {
  const posts = [
    {
      id: '1',
      title: 'Burger Website',
      date: '2024',
      description:
        'An engaging online platform offering delicious burgers with discounts, crafted by top chefs.',
      image: '/images/burgeria.jpg', // Replace with actual image paths
    },
    {
      id: '2',
      title: 'Shopping Website',
      date: '2024',
      description:
        ' A modern shopping hub for new trends clothing and resources, empowering fashion sense globally.',
      image: '/images/rivo.jpg',
    },
    {
      id: '3',
      title: 'Portfolio Website',
      date: '2024',
      description:
        'A vibrant showcase for personal skills and projects, reflecting creativity and expertise',
      image: '/images/perportl.jpg',
    },
    {
      id: '4',
      title: 'Resume Builder Website',
      date: '2024',
      description:
        'A user-friendly tool for creating professional resumes with fields for essential details',
      image: '/images/resume.jpg',
    },
    {
      id: '5',
      title: 'Furniture Website',
      date: '2024',
      description:
        'A stylish page highlighting premium furniture with an emphasis on comfort and design',
      image: '/images/avion.jpg',
    },
    {
      id: '6',
      title: 'Portfolio Website',
      date: '2024',
      description:
        'A sleek and professional personal portfolio with expertise and project highlights.',
      image: '/images/alizapers.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 text-green-950 px-4 py-8">
      <h1 className="text-center text-4xl font-bold mb-8">Latest Posts</h1>
      {/* <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Technology</button>
        <button className="bg-green-600 text-white py-2 px-4 rounded-full">Lifestyle</button>
        <button className="bg-pink-600 text-white py-2 px-4 rounded-full">Traveling</button>
      </div> */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-green-200 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover p-2"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-green-950 mb-4">{post.date}</p>
              <p className="text-stone-600 mb-4">{post.description}</p>
              <a
                href={`/posts/${post.id}`}
                className="text-lime-700 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
