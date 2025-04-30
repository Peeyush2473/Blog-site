import ReadMore from "./ReadMore";

interface FeaturedBlogProps {
  blog: {
    id: number;
    categories: string[];
    title: string;
    excerpt: string;
    image: string;
  };
}


const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ blog }) => {

  return (
    <div className="relative p-8 h-full">
      <div className='text-lg text-neutral-500'>{blog.categories[0]}</div>
      <h2 className="font-bold py-6 text-6xl">{blog.title}</h2>
      <p className="text-lg mt-2 text-gray-400">{blog.excerpt}</p>
      <div className='absolute bottom-15'>
        <ReadMore title={blog.title} />
      </div>
    </div>
  );
};

export default FeaturedBlog;
