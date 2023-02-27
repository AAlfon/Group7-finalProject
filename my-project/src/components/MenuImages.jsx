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
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://www.lutongbahayrecipe.com/wp-content/uploads/2019/02/lutong-bahay-recipe-pork-hamonado-1-1200x1039.png" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Pork</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/beef">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://www.lutongbahayrecipe.com/wp-content/uploads/2019/03/lutong-bahay-recipe-beef-brocolli-1200x838.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Beef</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/fish">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://panlasangpinoy.com/wp-content/uploads/2021/04/air-fried-fish-sinigang-sa-miso-recipe.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Fish</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/chicken">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://recipeforus.com/wp-content/uploads/2021/01/Chicken-Tinola.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Chicken</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/vegetables">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://cdn.tastephilippines.com/wp-content/uploads/2022/06/pinakbet-vegetable-dish-from-the-Philippines.jpg?strip=all&lossy=1&resize=720%2C720&ssl=1" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Vegetables</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/desserts">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://www.chatelaine.com/wp-content/uploads/2021/07/Filipino-desserts_1280x960.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Desserts</h2></Link>
        </div>

    </div>
    </div>
    </main>
    </div>

  )
}

export default MenuImages;

