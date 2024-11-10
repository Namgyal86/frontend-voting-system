import axios from 'axios'

API_URL = process.env.React_APP_API_URL


export const getCandidate = async() =>{
    const response = await axios.get(`${API_URL}/candidates`);
    return response.data
}

export const addCandidate = async(candidateData) =>{
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/candidates/add`,candidateData,{
        headers:{ Authorization: `Bearer ${token}` }
    });
    return response.data
}