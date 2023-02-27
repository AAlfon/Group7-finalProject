import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = (props) => {
  const apiUrl = 'http://localhost:8000/api';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      title.trim() === '' ||
      longDescription.trim() === '' ||
      shortDescription.trim() === '' ||
      category.trim() === '' ||
      author.trim() === '' ||
      !image
    ) {
      setError(true);
      setErrorText('Please fill all fields and upload an image');
    } else {
      setError(false);
      setLoading(true);
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('short_description', shortDescription);
        formData.append('long_description', longDescription);
        formData.append('author', author);
        formData.append('image', image);
  
        const response = await axios.post(`${apiUrl}/posts/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log(response.data);
  
        setTitle('');
        setCategory('');
        setShortDescription('');
        setLongDescription('');
        setAuthor('');
        setImage(null);
  
        const imageUrl = response.data.imageUrl; // Get the URL of the uploaded image
  
        // Do something with the image URL, such as displaying it to the user or storing it in state
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage && (selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/png')) {
      setImage(selectedImage);
      setError(false);
      setErrorText('');
    } else {
      setError(true);
      setErrorText('Please select a valid image file (JPG or PNG)');
      setImage(null);
  }
};

  
  return (
    <div className='container w-100 h-50 pt-5 mt-5 sticky editor'>
      {error && (
        <div className='error_field'>
          <span className='error_text'>{errorText}</span>
        </div>
      )}
      <h1>Admin Form</h1>

      <form onSubmit={handleSubmit} className='admin-form' encType="multipart/form-data">
      <input type="hidden" name="_csrf" value={props.csrfToken} />


  <div className='my-2'>
    <label htmlFor='title'>Title </label>
    <input
      id='title'
      type='text'
      value={title}
      maxLength={40}
      onChange={(e) => setTitle(e.target.value)}
      placeholder='Post title...'
      name="title"
    />
  </div>

  <div className='my-2'>
    <label htmlFor='category'>Category </label>
    <input
      id='category'
      type='text'
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      placeholder='Post category...'
      name="category"
    />
  </div>

  <div className='my-2'>
    <label htmlFor='shortDescription'>Short Description </label>
    <input
      id='shortDescription'
      type='text'
      value={shortDescription}
      onChange={(e) => setShortDescription(e.target.value)}
      maxLength={70} placeholder='70 characters only'
      name="short_description"
    />
  </div>

  <div className='my-2'>
    <label htmlFor='longDescription'>Description</label>
    <div style={{ height: 'auto' }}>
      <ReactQuill
        value={longDescription}
        onChange={(value) => setLongDescription(value)}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        name="long_description"
      />
    </div>
  </div>

  <div className='my-2'>
    <label htmlFor='author'>Author</label>
    <input
      id='author'
      type='text'
      value={author}
      maxLength={30}
      onChange={(e) => setAuthor(e.target.value)}
      placeholder='Author...'
      name="author"
    />
  </div>

  <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {image && (
        <div>
          <img src={URL.createObjectURL(image)} alt="Selected image" />
        </div>
      )}

  <button className='my-2' type='submit' disabled={loading}>
    {loading ? 'Loading...' : 'Submit'}
  </button>
</form>


  </div>
);
  };      
              
              export default PostForm;