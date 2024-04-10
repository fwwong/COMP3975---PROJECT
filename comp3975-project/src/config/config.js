// src/api/apiConfig.js

const API_BASE_URL = 'http://localhost:8888/api';

const ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/login`,
    CREATE_ACCOUNT: `${API_BASE_URL}/register`,
    CATEGORY: `${API_BASE_URL}/category`,
};

export default ENDPOINTS;
