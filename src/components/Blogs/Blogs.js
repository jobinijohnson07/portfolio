import React from "react";
import "./Blogs.scss";

const blogPosts = [
  {
    title: "Mother’s Day isn’t about grand gestures it’s about gratitude",
    date: "May 11",
    image: "/mothersDay.png",
    link: "https://medium.com/@jobinijohnson981/mothers-day-isnt-about-grand-gestures-its-about-gratitude-xxx", // replace with actual
  },
  {
    title: "The Joy of Pursuing Your Passions in Your Career",
    date: "Sep 6, 2023",
    image: "/blog-assets/passion-career.png",
    link: "https://medium.com/@jobinijohnson981/the-joy-of-pursuing-your-passions-in-your-career-xxx",
  },
  {
    title: "How to Destroy Your Comfort Zone",
    date: "Aug 27, 2023",
    image: "/blog-assets/comfort-zone.png",
    link: "https://medium.com/@jobinijohnson981/how-to-destroy-your-comfort-zone-xxx",
  },
  {
    title: "Is Pure Consciousness the Same as the Unified Field?",
    date: "Aug 26, 2023",
    image: "/blog-assets/unified-field.png",
    link: "https://medium.com/@jobinijohnson981/is-pure-consciousness-the-same-as-the-unified-field-xxx",
  },
  {
    title: "The Power of a 26-Minute Nap—Boost Your Energy and Productivity!",
    date: "Aug 22, 2023",
    image: "/blog-assets/nap-power.png",
    link: "https://medium.com/@jobinijohnson981/the-power-of-a-26-minute-nap-xxx",
  },
  {
    title: "A Day in the Life of Being a Developer",
    date: "Aug 22, 2023",
    image: "/blog-assets/dev-life.png",
    link: "https://medium.com/@jobinijohnson981/a-day-in-the-life-of-being-a-developer-xxx",
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
