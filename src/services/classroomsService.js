import axios from "axios";

async function findAll() {
    return axios.get(
        "http://localhost:8080/api/v1/classrooms",
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