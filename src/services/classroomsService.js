import axios from "axios";

async function findAll() {
    return axios.get(
        import.meta.env.VITE_API_URL+"/classrooms",
        {
                headers: {
                    "Content-Type": "application/json",
                }
            }
    ).then(response => {
        return response.data;
    });
}

export default {
    findAll
}