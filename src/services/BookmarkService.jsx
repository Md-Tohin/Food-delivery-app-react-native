
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import ApiContents from '~/contants/ApiContents';
// import {getToken} from '../Store';

const getBookmarks = async () => {
  console.log(`BookmarkService | getBookmarks`);
  try {
    const { getToken } = await import("../Store");
    const token = getToken();
    let response = await axios.get(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.BOOKMARK}`,
      {
        headers: authHeader(token),
      },
    );
    if (response?.status === 200) {
      return {
        status: true,
        message: `Bookmark data fetched`,
        data: response?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Bookmark data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Bookmark data not found`,
    };
  }
};

const addBookmark = async ({restaurantId}) => {
  console.log(`BookmarkService | addBookmark`);
  try {
    console.log(restaurantId);
    const { getToken } = await import("../Store");
    const token = getToken();
    let response = await axios.post( 
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.BOOKMARK}/${restaurantId}`,
      {},
      {
        headers: authHeader(token),
      },
    );
    if (response?.status === 200) {
      return {
        status: true,
        message: `Bookmark added successfully`,
        data: response?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Bookmark adding failed`,
      };
    }
  } catch (error) {
    console.log(error?.response);
    return {
      status: false,
      message: `Bookmark adding failed`,
    };
  }
};

const removeBookmark = async ({restaurantId}) => {
  console.log(`BookmarkService | removeBookmark`);
  try {
     const { getToken } = await import("../Store");
    const token = getToken();
    let response = await axios.delete(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.BOOKMARK}/${restaurantId}`,
      {
        headers: authHeader(token),
      },
    );
    if (response?.status === 200) {
      return {
        status: true,
        message: `Bookmark removed successfully`,
        data: response?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Bookmark removing failed`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Bookmark removing failed`,
    };
  }
};

export default {getBookmarks, addBookmark, removeBookmark};
