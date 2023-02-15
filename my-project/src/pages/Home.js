import React from 'react';





const Home = () => {
  return (
    <div className='home-page'>
      <h1> Search for you favorite recipe</h1>
      <div className='search'>
      
          <input className='search-bar' type="text" id="recipesearch" placeholder="Search for Recipe" />
             <button id="searchBtn">Search</button>
      </div>

      <div className='categories container text-center'>
          <h4>Categories</h4>
          <div className="row justify-content-start categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
          </div>
            <div className="row justify-content-center categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
            </div>
            <div className="row justify-content-end categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
            </div>
            <div className="row justify-content-around categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
            </div>
            <div className="row justify-content-between categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
            </div>
            <div className="row justify-content-evenly categories-content">
              <div className="col-4">
                One of two columns
              </div>
              <div className="col-4">
                One of two columns
              </div>
            </div>

         
         
      </div>
        
        <div>
          <h1>hello</h1>
        </div>
        
    </div>
  )
}

export default Home;
