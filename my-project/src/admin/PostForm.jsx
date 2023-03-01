import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PostForm = () => {
  const apiUrl = 'http://localhost:8000/api';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (title.trim() === '' || longDescription.trim() === '' || shortDescription.trim() === '' || category.trim() === '' || files.length === 0) {
      setError(true);
      setErrorText('Please fill all fields and upload at least one image');
    } else {
      setError(false);
      setLoading(true);
  
      try {
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
        setFiles([]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedTypes = ['image/jpeg', 'image/png'];

    const filteredFiles = selectedFiles.filter((file) => allowedTypes.includes(file.type));

    if (filteredFiles.length !== selectedFiles.length) {
      setError(true);
      setErrorText('Please select only JPEG or PNG files.');
    } else {
      setFiles(selectedFiles);
      setError(false);
      setErrorText('');

      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('long_description', longDescription);
      formData.append('short_description', shortDescription);

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('image[]', selectedFiles[i]);
      }

      setFormData(formData);
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
    <form onSubmit={handleSubmit} className="admin-form">
      <div className='my-2'>
        <label htmlFor='title'>Title </label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Post title...'
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
        />
      </div>

      <div className='my-2'>
        <label htmlFor='shortDescription'>Short Description </label>
        <input
          id='shortDescription'
          type='text'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder='Short Description...'
        />
      </div>

      <div className='my-2'>
        <label htmlFor='longDescription'>Description</label>
        <CKEditor
          editor={ClassicEditor}
          data={longDescription}
          onChange={(event, editor) => {
            const data = editor.getData();
            setLongDescription(data);
          }}
        />
      </div>

      <div className='my-2'>
        <label htmlFor='image'>Upload Images</label>
        <input id='image' type='file' multiple onChange={handleFileChange} accept='image/jpeg, image/png' />
      </div>

      <button className='my-2' type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  </div>
);
        }
              
              export default PostForm;