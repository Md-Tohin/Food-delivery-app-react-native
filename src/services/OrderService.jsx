import axios from "axios";
import ApiContents from "~/contants/ApiContents";
import { authHeader } from "../utils/Generator";

const placeOrder = async ({ items, totalAmount }) => {
     console.log(`OrderServicekService | placeOrderServiceks`);
  try {
    const { getToken } = await import("../Store");
    const token = getToken();

    const response = await axios.post(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.ORDER}`,
      { items, totalAmount },
      { headers: authHeader(token) }
    );

    return response.data;
  } catch (error) {
    return { status: false, message: "Order Failed!" };
  }
};

const getOrders = async () => {
  console.log(`OrderServicekService | getOrderServiceks`);
  try {
    const { getToken } = await import("../Store");
    const token = getToken();

    const response = await axios.get(
      `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.ORDER}`,
      { headers: authHeader(token) }
    );

    return response.data;
  } catch (error) {
    return { status: false, message: "Order Fetch Failed!" };
  }
};

export default { placeOrder, getOrders };