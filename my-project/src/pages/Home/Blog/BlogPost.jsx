import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import BlogList from './BlogList'

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  // get post
  const Api_url = 'http://localhost:8000/api/';

  const getPost = async (id) => {
    try {
      const response = await axios.get(`${Api_url}posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  return (
    <div className='my-5 py-5'>
      <div className='container'>
      <div className='single-post p-5'>
        <div className='row text-center'>
        <h2>{post.title}</h2>
        <div className='col-8'>
          <p>Category: {post.category}</p>
        </div>
        </div>
        <p>{post.short_description}</p>
      </div>
      <h4>Please leave a comment.</h4>
          </div>
          <div className="col-auto">
    <BlogList />
          </div>
        </div>
  )
}

export default BlogPost
