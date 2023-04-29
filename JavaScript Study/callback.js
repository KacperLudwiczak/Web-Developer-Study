// setTimeout(() => {
//   document.body.style.backgroundColor = "blue";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//     }, 1000);
//   }, 1000);
// }, 1000);

// const colorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };
// colorChange("red", 1000, () => {
//   colorChange("purple", 1000, () => {
//     colorChange("blue", 1000);
//   });
// });

// const fakeRequestCallback = (url, succes, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection timeout.");
//     } else {
//       succes(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };
// fakeRequestCallback(
//   "books.com",
//   () => {
//     console.log("It work");
//   },
//   () => {
//     console.log("Error");
//   }
// );

// const fakeRequestCallback = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection timeout.");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };
// fakeRequestCallback("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("It worked");
//     console.log("PROMISE RESOLVED");
//     fakeRequestCallback("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked");
//         console.log("PROMISE RESOLVED 2");
//         fakeRequestCallback("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("It worked");
//             console.log("PROMISE RESOLVED 3");
//           })
//           .catch(() => {
//             console.log("Error");
//             console.log("PROMISE REJECTED");
//           });
//       })
//       .catch(() => {
//         console.log("Error");
//         console.log("PROMISE REJECTED");
//       });
//   })
//   .catch(() => {
//     console.log("Error");
//     console.log("PROMISE REJECTED");
//   });

// const fakeRequestCallback = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection timeout.");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };
// fakeRequestCallback("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("It worked (page 1)");
//     console.log(data);
//     return fakeRequestCallback("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("It worked (page 2)");
//     console.log(data);
//     return fakeRequestCallback("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("It worked (page 3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("Your fake data here");
//       }
//       reject("Rejsect error");
//     }, 1000);
//   });
// };
// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("Done with request");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("Error!", err);
//   });

// const colorChange = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, delay);
//   });
// };
// colorChange("red", 1000)
//   .then(() => colorChange("purple", 1000))
//   .then(() => colorChange("blue", 1000))
//   .then(() => colorChange("red", 1000))
//   .then(() => colorChange("purple", 1000))
//   .then(() => colorChange("blue", 1000))
//   .then(() => colorChange("red", 1000))
//   .then(() => colorChange("purple", 1000))
//   .then(() => colorChange("blue", 1000));

// async function hello() {}

// const hello = async () => {
//   throw "Oh No!";
//   return "HELLO!";
// };
// hello()
//   .then((data) => {
//     console.log("Promise Resolved with:", data);
//   })
//   .catch((err) => {
//     console.log("Promise Rejected!");
//     console.log(err);
//   });

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials";
//   if (password === "happy") return "Welcome";
//   throw "Invalid Passsword";
// };
// login("Kacper", "happy")
//   .then((msg) => {
//     console.log("Log In");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
// login("Kacper")
//   .then((msg) => {
//     console.log("Log In");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
// login("Kacper", "wrongPassword")
//   .then((msg) => {
//     console.log("Log In");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

// const colorChange = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, delay);
//   });
// };
// const rainbow = async () => {
//   await colorChange("red", 1000);
//   await colorChange("purple", 1000);
//   await colorChange("blue", 1000);
//   await colorChange("red", 1000);
//   await colorChange("purple", 1000);
//   await colorChange("blue", 1000);
//   await colorChange("red", 1000);
//   await colorChange("purple", 1000);
//   await colorChange("blue", 1000);
// };
// rainbow().then(() => {
//   console.log("END");
// });

const fakeRequestCallback = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection timeout.");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
async function makeRequest() {
  try {
    let data1 = await fakeRequestCallback("/page1");
    console.log(data1);
    let data2 = await fakeRequestCallback("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Error is", e);
  }
}
makeRequest();
