import axios from "axios";

export const fetchAllPosts = async () => axios.get('https://jsonplaceholder.typicode.com/posts')

export const fetchPostByID = async (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)