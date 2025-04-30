'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedBlog from './FeaturedBlog';
import ArrowBttn from './ArrowBttn';
import CategoryCard from './CategoryCard';
import BlogCard from './BlogCard';

interface Blog {
    id: number;
    categories: string[];
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    featured?: boolean;
  }
  

interface HomeClientProps {
  blogs: Blog[];
  categories: string[];
}

export default function HomeClient({ blogs, categories }: HomeClientProps) {
  const featuredBlogs = blogs.filter(blog => blog.featured);
  const blogsToFeature = featuredBlogs.length > 0 ? featuredBlogs : blogs.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogsToFeature.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogsToFeature.length) % blogsToFeature.length);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.categories.some(category => category === selectedCategory));

  return (
    <>
      {/* Featured Blogs */}
      <div className='absolute bottom-[7vh] left-1/8 w-37/100 h-[500px] z-10 bg-white pt-12 px-6'>
        <AnimatePresence mode="wait">
          <motion.div
            key={blogsToFeature[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <FeaturedBlog blog={blogsToFeature[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-[-64px] top-0 flex w-32 h-16">
          <div className="bg-black text-white w-1/2 h-full flex justify-center items-center hover:scale-110 hover:translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-300 ease-in-out">
            <ArrowBttn imageUrl="/leftArrow.svg" action="previous" onClick={handlePrevious} />
          </div>
          <div className="bg-white text-black w-1/2 h-full flex justify-center items-center hover:scale-110 hover:translate-y-0.5 hover:translate-x-0.5 transition-transform duration-300 ease-in-out">
            <ArrowBttn imageUrl="/rightArrow.svg" action="next" onClick={handleNext} />
          </div>
        </div>
      </div>

      {/* Explore by Category */}
      <div className='h-auto relative left-1/8 w-7/8 my-24'>
        <div className="text-3xl font-bold flex justify-between">
          <span>Explore By Category</span>
        </div>
        <div className="-translate-x-8 h-auto flex overflow-x-auto gap-12 mt-8 py-4">
          {/* "All" category */}
          <div 
            className="flex-shrink-0 mb-10 transform hover:translate-y-2 hover:z-10 duration-500 ml-8"
          >
            <CategoryCard 
              category="All" 
              onClick={handleCategorySelect}
              isSelected={selectedCategory === "All"}
            />
          </div>

          {
          [...categories].sort((a, b) => a.localeCompare(b)).map((category, index) => (
            <div key={index} className="flex-shrink-0 mb-10 transform hover:translate-y-2 hover:z-10 duration-500">
              <CategoryCard 
                category={category} 
                onClick={handleCategorySelect}
                isSelected={selectedCategory === category}
              />
            </div>
          ))}
        </div>
      </div>
        
    
      <div className='h-auto  relative flex left-1/8 w-1/2 my-24'>
          {/* Filtered Blogs Section */}
            <div className='w-full mx-auto mb-24'>
                <div className="text-3xl font-bold mb-8">
                    {selectedCategory === "All" ? "Recent Articles" : selectedCategory}
                </div>
                <div className='h-auto w-full flex flex-col gap-10'>
                    {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} selected={selectedCategory}/>
                    ))
                    ) : (
                    <div className="w-full text-center py-12 text-gray-500">
                        No blogs found in this category.
                    </div>
                    )}
                </div>
            </div>    
      </div>
    </>
  );
}
