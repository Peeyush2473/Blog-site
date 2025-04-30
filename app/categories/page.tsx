import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReadMore from "../components/ReadMore";
import blogs from "../data/blog.json"; 
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  categories: string[];
  excerpt: string;
  date: string;
  image: string;
  author: string;
  featured: boolean;
  content: string;
}

const CategoriesPage = () => {
  const categories = blogs.reduce((acc: { [key: string]: Blog[] }, blog: Blog) => {
    blog.categories?.forEach((category) => {
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(blog);
      });      
    return acc;
  }, {});

  return (
    <>
      <Navbar />

      <div className="my-40  relative left-1/8 w-7/8">
        <h1 className="text-6xl font-bold mb-20">Categories</h1>

        {Object.entries(categories).map(([category, blogs]) => (
          <div key={category} className="mb-20">
            <h2 className="text-3xl mb-8">{category}</h2>
            <div className="flex gap-8 overflow-x-auto pr-10">
              {blogs.map((blog) => (
                <div key={`${blog.id}-${category}`} className="min-w-[300px] w-1/4 h-[500px] overflow-hidden relative">
                  <div className="relative w-full h-50">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className='flex items-center'>
                        <span className='text-gray-400'>#{category}</span>
                        <div className='mx-3 w-1 h-1 rounded-full bg-gray-400'></div>
                        <span className='text-gray-400'>{blog.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold">{blog.title}</h3>
                    <p className="mt-2 text-gray-600 text-lg">{blog.excerpt}</p>
                  </div>

                  <div className='absolute bottom-0 p-4'>
                      <ReadMore title={blog.title}></ReadMore>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default CategoriesPage
