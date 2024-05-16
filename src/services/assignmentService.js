import axios from "axios";

async function findAll() {
    return axios.get(
        "http://localhost:8080/api/v1/student/assignments",
        {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("authToken")
                },
            }
    ).then(response => {
        return response.data;
    });
}

export default {
    findAll
}