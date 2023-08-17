// services/Api.js
import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

const getAll = async () => {
  try {
    const response = await axios.get(`${baseURL}/search.php?s=%`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};

const getCategory = async () => {
  try {
    const response = await axios.get(`${baseURL}/list.php?c=list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};

const searchDrinksCateg = async (search) => {
  try {
    const response = await axios.get(`${baseURL}/filter.php?c={search}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};


const searchDrinks = async (searchTerm) => {
  try {
    const response = await axios.get(`${baseURL}/search.php?s=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};

const getFiltered = async (searchTerm) => {
  try {
    const response = await axios.get(`${baseURL}/${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};

export default { 
  getAll,
  searchDrinks,
  getCategory,
  searchDrinksCateg,
  getFiltered
};
