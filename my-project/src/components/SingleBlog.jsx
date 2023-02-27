import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SingleBlog = () => {
  const [posts, setPosts] = useState([]);

  const Api_url = 'http://localhost:8000/api/';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(Api_url + 'posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className='section-header'>Latest Blog</h1>
        {posts.map((post) => (
        <div key={post.id} className="p-4 p-md-5 mb-4 text-dark rounded bg-warning">
          <div className='row'>
            <div className="col-md-6 px-0">
            <NavLink to={`/post/${post.id}`}>
              <h3 className="display-4 redirect">{post.title}</h3>
              <h3 className="d-inline-block mb-2 text-warning fw-bold">{post.category}</h3>
              </NavLink>
              <p className="lead my-3">{post.short_description}</p>
              <p className="lead mb-0 fw-bold"> <NavLink to={`/post/${post.id}`} className="stretch-link redirect">Continue reading... </NavLink></p>
            </div>
            <div className="col-6 d-none d-lg-block">
            <img src={post.image} className="w-100 h-100 rounded" />
            </div>
          </div>
        </div>
         ))} 
    </div>
        
  );
};

export default SingleBlog;
     





