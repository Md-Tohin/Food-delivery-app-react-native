import axios from "axios";
import ApiContents from "~/contants/ApiContents";
import {authHeader} from '../utils/Generator';
// import {getToken} from '../Store';

const getRestaurants = async () => {
  console.log(`RestaurantsService | getRestaurants`);
  
  try { 
    
    const { getToken } = await import('../Store');

     let restaurantResponse = await axios.get(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.RESTAURANT}`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data,
      }
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      }
    }

  } catch (error) {
    console.log(error);
    return { status: false, message: 'Opps! Something went wrong!' };
  }
};

const getOneRestaurantById = async (restaurantId) => {
  console.log(`RestaurantsService | getOneRestaurantById`);
  
  try { 
    
    const { getToken } = await import('../Store');

     let restaurantResponse = await axios.get(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.RESTAURANT}/${restaurantId}`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data?.data,
      }
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      }
    }

  } catch (error) {
    console.log(error);
    return { status: false, message: 'Restaurant data not found!' };
  }
};

export default { getRestaurants, getOneRestaurantById };