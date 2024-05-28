import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <a href={`/blog/${blog.id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;


