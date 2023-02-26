import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Menu = () => {

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
        <div className='container'>
            <h1 className='page-title'>Menu Page</h1>
            <main>

  <div className="container menu-page">

    <div className="row">
      <div className="col-lg-4">
      <img className="bd-placeholder-img rounded-circle" d-block fluid width="200" height="200" bg-danger src="https://cdn1.matadornetwork.com/blogs/1/2021/04/bananacue-filipino-desserts.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Banana Cue</h2>
        <p>Banana Cue is made of fried banana on bamboo skewers and the most consumed as a mid-afternoon snack.  
          People can’t resist this because aside from being delicious it is also nutritious and also considered as one of the all-time best selling street food.</p>
        <p><a className="btn" href="#">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img className="bd-placeholder-img rounded-circle" d-block fluid width="200" height="200" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/Puto-bumbong-filiipino-dessert.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Puto bumbong</h2>
        <p>Puto bumbong is a type of Filipino purple rice cake which is prepared by steaming ground purple rice mixture inside a bamboo tube. 
          The tube is referred to as “bumbong ng kawayan” in Filipino. This might have been the reason why this was named as such.</p>
        <p><a className="btn" href="#">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img className="bd-placeholder-img rounded-circle" d-block fluid width="200" height="200" src="https://cdn1.matadornetwork.com/blogs/1/2021/04/Ginataang-Bilo-Bilo-filipino-dessert.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Ginataang bilo-bilo</h2>
        <p>Ginataang Bilo-bilo with Langka is a Filipino snack dish. It is composed of glutinous rice balls (locally known as bilo-bilo), coconut cream, sugar, sago pearls, and ripe jackfruit. 
          Some people consider this as a simplified version of the Ginataang halo-halo.</p>
        <p><a className="btn" href="#">View details &raquo;</a></p>
      </div>
    </div>


    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Chunky Pininyahang Manok <span className="text-muted"></span></h2>
        <p className="lead">Learn how to cook pininyahang manok perfect for a special family meal. 
          Our pininyahang manok recipe is simple to make and tastes delicious! 
          If you're trying it for the first time, you're about to discover an amazing dish that your family will want over and over again.</p>
          <h6>Recipies:</h6>
          <ul>
            <li>2 Tbsp oil</li>
            <li>2 Tbsp ginger, cut into strips</li>
            <li>2 Tbsp garlic, crushed</li>
            <li>1/2 cup onion, white, sliced</li>
            <li>750 g chicken, parts, cut into serving portions</li>
            <li>2 1/2 Tbsp patis</li>
            <li>1/2 tsp peppercorn, black</li>
            <li>1/4 cup bell pepper, red, cut into cubes</li>
            <li>2/3 cup milk, evaporated</li>
          </ul>
      </div>
      <div className="col-md-5">
      <img src="https://panlasangpinoy.com/wp-content/uploads/2015/02/Pininyahang-Manok-sa-Gata.jpg" className="d-block w-100" alt="..." />

      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">Traditional Bistek<span className="text-muted"></span></h2>
        <p className="lead">The traditional bistek dish, which means beef steak in Filipino, is a local adaptation of the Spanish bistec made of thin slices of beef cooked with onions and spices. 
        However, the term has evolved in recent years to describe not only beef but also any meat or fish stewed in soy sauce, calamansi juice, and onions.</p>
        <h6>Recipies:</h6>
        <ul>
            <li>Pork– you can use pork chops, thinly sliced pork butt, or sirloin. Cut the meat across the grain for a more tender chew.</li> 
            <li>Calamansi fruits– fresh is best but frozen or bottled varieties are also good options. Make sure they’re pure calamansi juice, as the ones with sugar added are for making juices and not cooking. 
                In a pinch, you can substitute lemon or lime juice.
                </li>        
          </ul>
      </div>
      <div className="col-md-5 order-md-1">
      <img src="https://i0.wp.com/yummyfood.ph/wp-content/uploads/2021/08/Pork-Steak-Recipe.jpg?w=768&ssl=1" className="d-block w-100" alt="..." />

      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">BULALO <span className="text-muted">FILIPINO BEEF MARROW STEW</span></h2>
        <p className="lead">Bulalo is a light colored soup that is made by cooking beef shanks and bone marrow until the collagen and fat has been melted into the clear broth. 
        It typically includes leafy vegetables (like pechay or cabbage), corn on the cob, scallions, onions, garlic, ginger, and fish sauce. Potatoes, carrots, or taro can also be added. 
        It is commonly eaten on rice with soy sauce and calamansi on the side. Native to the Southern Luzon region of the Philippines,         
        particularly in the provinces of Batangas and Cavite.</p>
        <h6>Recipies:</h6>
        <ul>
          <li>4 beef marrow bones</li>
          <li>2 pound beef shank</li>
          <li>2 onion</li>
          <li>6 cloves garlic</li>
          <li>2 teaspoon black peppercorns</li>
          <li>4 tablespoons patis (fish sauce)</li>
          <li>salt (to taste)</li>
          <li>4 cobs corn (cut into 2-inch segments)</li>
          <li>2 chayote (peeled and cubed)</li>
          <li>6 baby bok choy</li>          
        </ul>
      </div>
      <div className="col-md-5">
      <img src="https://thecommhq.files.wordpress.com/2014/10/food8.png" className="d-block w-100" alt="..." />
      </div>
    </div>
    <hr className="featurette-divider" />
  </div>
</main>
        </div>
        
    );
}

export default Menu;