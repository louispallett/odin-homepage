import "../scss/styles.scss";
import { token } from "./token";

const fetch_repo_data = async (repo_name) => {
    try {
        const apiURL = "https://api.github.com/repos/louispallett/" + repo_name;
        const response = await fetch(apiURL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }
        const repo_data = await response.json();
        return repo_data;
    } catch(error) {
        console.log(error);
    }
}

const repos = ["odin-weather-app", "odin-todo-list", "odin-battleship"];

fetch_repo_data(repos[0])
.then((repoData) => console.log(repoData))
.catch((error) => console.log(error));