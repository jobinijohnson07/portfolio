import React from "react";
import "./Blogs.scss";

const blogPosts = [
  {
    title: "Mother’s Day isn’t about grand gestures it’s about gratitude",
    date: "May 11",
    image: "/mothersDay.png",
    link: "https://medium.com/@jobinijohnson981/this-mothers-day-let-s-move-beyond-tributes-and-toward-true-support-cbf15543b837", 
  },
  {
    title: "The Joy of Pursuing Your Passions in Your Career",
    date: "Sep 6, 2023",
    image: "/carrer.png",
    link: "https://medium.com/@jobinijohnson981/the-power-of-doing-what-you-love-in-your-career-why-it-matters-for-a-happy-life-18f46382c11d",
  },
  {
    title: "How to Destroy Your Comfort Zone",
    date: "Aug 27, 2023",
    image: "/comfort.png",
    link: "https://medium.com/@jobinijohnson981/how-to-destroy-your-comfort-zone-9ed5d12d62cb",
  },
  {
    title: "Is Pure Consciousness the Same as the Unified Field?",
    date: "Aug 26, 2023",
    image: "/unifiedField.png",
    link: "https://medium.com/@jobinijohnson981/is-pure-consciousness-the-unified-field-2cbe2c81a0b9",
  },
  {
    title: "The Power of a 26-Minute Nap—Boost Your Energy and Productivity!",
    date: "Aug 22, 2023",
    image: "nap.png",
    link: "https://medium.com/@jobinijohnson981/the-power-of-a-26-minute-nap-boost-your-energy-and-productivity-97657dd35b7c",
  },
  {
    title: "A Day in the Life of Being a Developer",
    date: "Aug 22, 2023",
    image: "/developer.png",
    link: "https://medium.com/@jobinijohnson981/a-day-in-the-life-of-being-a-developer-c1cc8cda1f2c",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-section bg-white dark:bg-black text-black dark:text-white">
      <div className="blogs-heading text-neutral-700 dark:text-neutral-400">
        Latest Blogs
      </div>
      <div className="blogs-grid text-neutral-700 dark:text-neutral-400">
        {blogPosts.map((post, index) => (
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
