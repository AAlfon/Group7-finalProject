import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const FeaturedPost = () => {
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
    <div className='container my-5 py-5'>
      <h1 className="page-title">Featured Post</h1>
      <div className="row">
      <div className="col-auto">
      <main className="container-fluid my-5">
        <div className="row mb-2">

          {posts.map((post) => (
            <div key={post.id} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden  p-3 flex-md-row mb-4 shadow-lg h-md-250 position-relative">
                
              <div className='row'>
            <div className="col-md-7 px-0">
                  <div>
                  <NavLink to={`/post/${post.id}`}><h4 className="mb-0">{post.title}</h4></NavLink>
                  <strong className="d-inline-block mb-2">{post.category}</strong>
                  <p className="my-3">{post.short_description}</p>
                  <NavLink to={`/post/${post.id}`}><p className="stretch-link redirect">Continue reading...</p></NavLink>
                </div>
                </div>
                <div className="col-5 d-none d-lg-block">
                <img src={post.image} className="d-block w-100 h-100 pb-2"/>
                </div>
              </div>
              </div>
              </div>
          ))}

        </div>
      </main>
      </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
