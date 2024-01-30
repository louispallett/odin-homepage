import "../scss/styles.scss";
// import { token } from "/token";

// const repoNameElement = document.querySelector(".description");

// const fetch_repo_data = async (repo_name) => {
//     try {
//         const apiURL = "https://api.github.com/repos/louispallett/" + repo_name;
//         const response = await fetch(apiURL, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         if(!response.ok) {
//             const error = await response.text();
//             throw new Error(error);
//         }
//         const repo_data = await response.json();
//         return repo_data;
//     } catch(error) {
//         console.log(error);
//     }
// }

// const repos = ["odin-weather-app", "odin-todo-list", "odin-battleship"];

// fetch_repo_data(repos[0])
// .then((repoData) => {
//     console.log(repoData);
//     repoNameElement.textContent = repoData.description;
//     const language_data = fetch_language_data(repoData)
//     .then((language_data) => {
//         // const languages = Object.keys(language_data);
//         // for(let i = 0; i < languages.length; i++) {
//         //     const key = languages[i];
//         //     const value = languages[key];
//         // }
//     })
//     // console.log(repoData.languages_url);
// })
// .catch((error) => console.log(error));

// const fetch_language_data = async (repoData) => {
//     try {
//         const response = await fetch(repoData.languages_url, {mode: 'cors'});
//         if(!response.ok) {
//             const error = await response.text();
//             throw new Error(error);
//         }
//         const language_data = await response.json();
//         // return language_data;
//         console.log(language_data)
//     } catch(error) {
//         console.log(error);
//     }
// }

// const writeLanguageData = (language_data) => {

// }