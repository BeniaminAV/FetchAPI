//Get Joke
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
  const fetchData = await response.json()
  console.log(fetchData)
}

getDadJoke()

//Post Joke
let ObjectJoke = {
  id: "PZgyPmjb2ob",
  joke: "What do you get when you cross a snowman with a vampire? Frostbite.",
}

const postDadJoke = async () => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ObjectJoke),
  })
  const postData = await response.json()
  console.log(postData)
}

postDadJoke()
