export const useRunJob = () => {
    const runJob = async (repositoryName,slug) => {
        return fetch(
            import.meta.env.VITE_API_URL+"/student/assignments"+slug+"/run-job",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("authToken")
                },
                body: JSON.stringify({"source_repository_name":repositoryName})
            }
        ).then(response => {
            return response.json();
        });
    }
    return {runJob}
}