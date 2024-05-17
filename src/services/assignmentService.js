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

async function find(slug) {
    return axios.get(
        "http://localhost:8080/api/v1/student/assignments/"+slug,
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

async function runJob(repositoryName,slug) {
    return axios.post(
        "http://localhost:8080/api/v1/student/assignments/"+slug+"/run-job",
        {"source_repository_name":repositoryName},
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
    findAll,
    find,
    runJob
}