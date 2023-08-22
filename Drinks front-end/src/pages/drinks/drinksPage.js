import React, { useState, useEffect } from 'react';
import serviceApi from '../../services/Api'; // Import your serviceApi
import Slider from 'react-slick';
import Drink from '../../components/DrinkCard';

import "../../pages/drinks/drinks.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Carousel from 'react-bootstrap/Carousel'
import loupeImage from '../../images/loupe.png'

const App = () => {
  
  const [drinks, setDrinks] = useState([]);
  const [drinkCateg, setDrinkCateg]= useState([])
  const [searchTerm, setSearchTerm] = useState(''); // New state for the search term
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768

  useEffect(()=>{
    
  })
  
  const fetchDrinks = () => {
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

const [activeSlide, setActiveSlide]=useState(0)

  const carouselSettings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3, // Number of drinks shown at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint based on design and device
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      </div>
      
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
    </div>
  );
};

export default App;
