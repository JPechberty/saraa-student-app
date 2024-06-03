import axios from "axios";

async function findAll() {
    return axios.get(
        import.meta.env.VITE_API_URL+"/student/assignments",
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
        import.meta.env.VITE_API_URL+"/student/assignments/"+slug,
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
        import.meta.env.VITE_API_URL+"/student/assignments"+slug+"/run-job",
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