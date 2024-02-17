
import axios from 'axios';

const ApiURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${ApiURL}/posts`);
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
