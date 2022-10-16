import axios from 'axios';

const apiClient = () => {
    const defaultOptions = {
        baseURL: "http://localhost:8000",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return axios.create(defaultOptions);
};

export default apiClient();