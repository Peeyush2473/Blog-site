'use client';
import Image from "next/image";
import FeaturedBlog from "./components/FeaturedBlog";
import ArrowBttn from "./components/ArrowBttn";
import Navbar from './components/Navbar';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from './data/blog';
import CategoryCard from './components/CategoryCard';
import { categories } from './data/categories';
import BlogCard from './components/BlogCard'; // You'll need to create this component

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to showing all blogs
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);
  
  return (
    <>
      <Navbar />
      <div className='relative w-full h-[93vh]'>
        <Image src='/placeHolder.svg' layout='fill' objectFit='cover' alt='Blog Image' />
      </div>
      {/* Featured Blogs */}
      <div className='absolute bottom-17 left-1/8 w-37/100 h-[500px] z-10 bg-white pt-12 px-6'>
        <AnimatePresence mode="wait">
          <motion.div
            key={blogs[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <FeaturedBlog blog={blogs[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute right-[-64px] top-0 flex w-32 h-16">
          <div className="bg-black text-white w-1/2 h-full flex justify-center items-center transform hover:scale-110 hover:translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-300 ease-in-out">
            <ArrowBttn imageUrl="/leftArrow.svg" action="previous" onClick={handlePrevious} />
          </div>
          <div className="bg-white text-black w-1/2 h-full flex justify-center items-center transform hover:scale-110 hover:translate-y-0.5 hover:translate-x-0.5 transition-transform duration-300 ease-in-out">
            <ArrowBttn imageUrl="/rightArrow.svg" action="next" onClick={handleNext} />
          </div>
        </div>
      </div>
      
      {/* Explore by Category */}
      <div className='h-auto relative left-1/8 w-7/8 my-24'>
        <div className="text-3xl font-bold flex justify-between">
          <span>Explore By Category</span>
          <div></div>
        </div>
        <div className="-translate-x-8 h-auto flex overflow-x-auto gap-12 mt-8 py-4">
          {/* Add "All" category at the beginning */}
          <div 
            className="flex-shrink-0 mb-10 transform hover:translate-y-2 hover:z-10 duration-500 ml-8"
          >
            <CategoryCard 
              category="All" 
              onClick={handleCategorySelect}
              isSelected={selectedCategory === "All"}
            />
          </div>
          
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex-shrink-0 mb-10 transform hover:translate-y-2 hover:z-10 duration-500`}
            >
              <CategoryCard 
                category={category} 
                onClick={handleCategorySelect}
                isSelected={selectedCategory === category}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Filtered Blogs Section */}
      <div className='h-auto relative left-1/8 w-7/8 mb-24'>
        <div className="text-3xl font-bold mb-8">
          {selectedCategory === "All" ? "All Blogs" : selectedCategory}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No blogs found in this category.
            </div>
          )}
        </div>
      </div>
    </>
  );
}