import axios from "axios";
import ApiContents from "~/contants/ApiContents";
import {authHeader} from '../utils/Generator';
// import {getToken} from '../Store';

const getCartItems = async () => {
  console.log(`CartService | getCartItems`);
  
  try { 
    
    const { getToken } = await import('../Store');

     let response = await axios.get(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.CART}`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (response?.status === 200) {
      return {
        status: true,
        message: `Cart data fetched`,
        data: response?.data?.data,
      }
    } else {
      return {
        status: false,
        message: `Cart data not found`,
      }
    }

  } catch (error) {
    console.log(error);
    return { status: false, message: 'Cart Items fetch Failed!' };
  }
};

const addToCart = async () => {
  console.log(`CartService | addToCart`);
  
  try { 
    
    const { getToken } = await import('../Store');

     let response = await axios.post(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.CART}/${foodId}`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (response?.status === 200) {
      return {
        status: true,
        message: `Item added to Cart Successfully!`,
        data: response?.data?.data,
      }
    } else {
      return {
        status: false,
        message: `Item added to Cart Failed!`,
      }
    }

  } catch (error) {
    console.log(error);
    return { status: false, message: 'Item added to Cart Failed!' };
  }
};


const removeFromCart = async () => {
  console.log(`CartService | removeFromCart`);
  
  try { 
    
    const { getToken } = await import('../Store');

     let response = await axios.delete(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.CART}/${foodId}`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (response?.status === 200) {
      return {
        status: true,
        message: `Item removed from Cart Successfully!`,
        data: response?.data?.data,
      }
    } else {
      return {
        status: false,
        message: `Item removed from Cart Failed!`,
      }
    }

  } catch (error) {
    console.log(error);
    return { status: false, message: 'Item removed from Cart Failed!' };
  }
};

export default { getCartItems, addToCart, removeFromCart };