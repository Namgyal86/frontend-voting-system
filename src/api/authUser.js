import axios from 'axios'

const API_URL = 'http://localhost:8000';

console.log('API URL:', API_URL);

export const loginUser = async(credentials) =>{
    const response = await axios.post(`${API_URL}/user/login`,credentials);
    if(response.data.token){
        localStorage.setItem('token',response.data.token);
    }
    return response.data
};

export const logoutUser = () => {
    localStorage.removeItem('token');
};

export const registerUser = async (userData) => {
    try {
        console.log('Sending data:', userData); // Log the data being sent to the backend
        const response = await axios.post(`${API_URL}/user/add`, userData);
        return response.data; // Returning data received from the backend
    } catch (error) {
        console.error('Error response:', error.response); // Log the error response from the backend
        if (error.response) {
            return error.response.data; // Return the error message from the backend
        } else if (error.request) {
            return { message: "Network Error. Please try again." };
        } else {
            return { message: error.message };
        }
    }
};

export const getALLData = async () =>{
    const token = localStorage.getItem('token');
    const response = await axios.post('{$API_URL}/user',{
        headers:{Authorization:`Bearer ${token}`}
    })
};