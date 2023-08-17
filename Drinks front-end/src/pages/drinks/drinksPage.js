import React, { useState, useEffect } from 'react';
import serviceApi from '../../services/Api'; // Import your serviceApi
import Slider from 'react-slick';
import Drink from '../../components/DrinkCard';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import "../../pages/drinks/drinks.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loupeImage from '../../images/loupe.png'

const App = () => {
  
  const [drinks, setDrinks] = useState([]);
  const [drinkCateg, setDrinkCateg]= useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // New state for the search term
  const [searchDrinkCategory, setSearchDrinkCategry]=useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const drinksPerPage = 20;
  const totalDrinks = 600; // Set the total number of drinks (if known)
  const breakpoint = 768
  
  

  const fetchDrinks = () => {
    
    // Use the serviceApi.searchDrinks function if a searchTerm is provided, otherwise, use serviceApi.getAll
    
    const apiCall = searchTerm ? serviceApi.searchDrinks(searchTerm) : serviceApi.getAll();

    apiCall
      .then((response) => {
        const newDrinks = response.drinks || [];
        setDrinks(newDrinks);
      })
      .catch((error) => {
        console.error('Error fetching drinks:', error);
        setDrinks([]);
      });
  };

    
useEffect(()=>{
  const apiCategory = serviceApi.getCategory()
  apiCategory
      .then((response) => {
        setDrinkCateg(response.drinks);
      })
      .catch((error) => {
        console.error('Error fetching drinks:', error);
        setDrinkCateg([]);
      });
},[])
   

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]); // Include currentPage and searchTerm in the dependency array

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of drinks shown at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint based on your design and device
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCategoryChange = (selectedCategory) => {
    const drinkCat = selectedCategory.replace(/\s+/g, '_')
    
    setSearchDrinkCategry(drinkCat);
    console.log(searchDrinkCategory)
    const fetchDrink = () => {
    
      const apiCall = serviceApi.searchDrinksCateg(searchDrinkCategory);
      
      apiCall
        .then((response) => {
          const newDrinks = response.drinks;
          console.log(response.drinks)
          setDrinks(newDrinks);
        })
        .catch((error) => {
          console.error('Error fetching drinks:', error);
          setDrinks([]);
        });
    };
   

  };

  return (
    <div className='drinksPage'>
      {/* Search input and button */}
      <div className='drink-search'>
        <input
          type="text"
          placeholder="Enter drink name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={loupeImage} alt="Search" className="search-icon" />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {drinkCateg.map((category) => (
            <Dropdown.Item
              key={category.strCategory}
              onClick={() => handleCategoryChange(category.strCategory)} // Handle category change
            >
              {category.strCategory}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
    </Dropdown>
      <div className={windowWidth >= breakpoint ? 'drink-container' : 'drink-carousel'}>
      {windowWidth < breakpoint ? ( // Check if the window width is greater than the breakpoint
        <Slider {...carouselSettings}>
          {drinks.map((drink, index) => (
              <Drink key={index} drink={drink} />
          ))}
        </Slider>
      ) : (
        // Render the regular layout when window width is smaller than or equal to the breakpoint
        drinks.map((drink, index) => (
          <Drink key={index} drink={drink} />
        ))
      )}
    </div>
    
      {/* <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(totalDrinks / drinksPerPage)}>
          Next Page
        </button>
      </div> */}
    </div>
  );
};

export default App;
