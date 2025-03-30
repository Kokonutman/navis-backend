import axios from "axios";

const BASE_URL = "http://localhost:5000/api/items";

// 1. Get all items
export const getItems = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// 2. Create a new item
export const createItem = async (item) => {
  const res = await axios.post(BASE_URL, item);
  return res.data;
};

// 3. Update an item
export const updateItem = async (id, updatedItem) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedItem);
  return res.data;
};

// 4. Delete an item
export const deleteItem = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
