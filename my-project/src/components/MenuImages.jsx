import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const MenuImages = ({ handleCategoryClick }) => {

  const location = useLocation();
  const category = location.pathname.split('/')[2]; // get the category from the URL

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch the posts for the specified category and set the state

    fetch(`http://localhost:8000/api/posts?category=${category}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [category]);

  return (
    <div className='container-fluid'>
    <h1 className='page-title'>Recipes</h1>
    <main>
    <div className="recipe-page">
    <div className="row text-center">
      <div className="col-lg-2">
      <Link to="/category/pork">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Pork</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/beef">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Beef</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/fish">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Fish</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/chicken">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Chicken</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/vegetables">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Vegetables</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/desserts">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Desserts</h2></Link>
        </div>

    </div>
    </div>
    </main>
    </div>

  )
}

export default MenuImages;

