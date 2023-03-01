import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const EditPost = ({ id, title, short_description, category, long_description, author, image, onUpdate }) => {
  const [post, setPost] = useState({ id, title, category, short_description,long_description, author, image });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: name === 'image' ? files[0] : value
    }));
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}`, post);
      onUpdate(post);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleImageChange = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
  
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/posts/upload-image',
        formData,
        config
      );
  
      setPost((prevPost) => ({ ...prevPost, image: response.data.image_url }));
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={post.title} onChange={handleInputChange} maxLength={40} />
      <input type="text" name="category" value={post.category} onChange={handleInputChange} />
      <textarea type="text" name="short_description" value={post.short_description} onChange={handleInputChange} cols="60" rows="4" maxLength={70} placeholder='70 characters only'></textarea>
      <textarea type="text" name="long_description" value={post.long_description} onChange={handleInputChange} cols="60" rows="10"></textarea>
      <input type="text" name="author" value={post.author} maxLength={30} onChange={handleInputChange} />
      <input type="file" onChange={handleImageChange} />
      {post.image && <img src={post.image} alt="Post image" className="w=10 h=10"/>}
      <button type="submit">Update</button>
    </form>
  );
  
};

const ListHome = () => {
  const [posts, setPosts] = useState([]);
  const Api_url = 'http://localhost:8000/api/';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(Api_url + 'posts');
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const deletePost = async (id) => {
    try {
      await axios.delete(Api_url + `posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };  
  

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container my-5'>
      <h1>Latest Post</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <NavLink to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
          </NavLink>
          <p>{post.category}</p>
          <p>{post.short_description}</p>
          <div>
            <img src={post.image} className="w-50 h-50" />
          </div>
          <button onClick={() => deletePost(post.id)} className="my-3">Delete</button>
          <br />
          <EditPost
            id={post.id}
            title={post.title}
            short_description={post.short_description}
            category={post.category}
            long_description={post.long_description}
            author={post.author}
            image={post.image} 
            onUpdate={updatePost} className="my-3"
          />
        </div>
      ))}
    </div>
  );
};

export default ListHome;
