
const API_BASE_URL = 'http://localhost:8888/api';

const ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/login`,
    CREATE_ACCOUNT: `${API_BASE_URL}/register`,
    CATEGORY: `${API_BASE_URL}/categories`,
    USERS: `${API_BASE_URL}/users`,
    POSTS: `${API_BASE_URL}/posts`,
    REVIEWS: `${API_BASE_URL}/reviews`,
};

export default ENDPOINTS;
