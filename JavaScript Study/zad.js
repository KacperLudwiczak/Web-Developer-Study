// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resolved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("Resolved Second", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((er) => {
//     console.log("Error", er);
//   });

// const loadStarWars = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("Error!", e);
//   }
// };
// loadStarWars();

// const loadStarWars = async (id) => {
//   try {
//     const res = await fetch(`https://swapi.dev/api/people/${id}/`);
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log("Error!", e);
//   }
// };
// loadStarWars(1);
// loadStarWars(2);
// loadStarWars(3);

// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Response: ", res);
//   })
//   .catch((er) => {
//     console.log("Error: ", er);
//   });

// const loadStarWars = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("Error", e);
//   }
// };
// loadStarWars(1);
// loadStarWars(2);
// loadStarWars(3);

const jokesList = document.querySelector("#jokes");
const button = document.querySelector("button");
const addJoke = async () => {
  const textJoke = await dadJokes();
  const newLi = document.createElement("li");
  newLi.append(textJoke);
  jokesList.append(newLi);
};
const dadJokes = async () => {
  try {
    const headers = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    return res.data.joke;
  } catch (e) {
    return "No Joke available.";
  }
};
button.addEventListener("click", addJoke);
