const postJokeObject = {
  id: "HtcNuHJBQCd",
  joke: "How many kids with ADD does it take to change a lightbulb? Let's go ride bikes!",
}

const postDataJoke = async (postJokeObject) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(postJokeObject),
  })
  const fetchData = await response.json()
  console.log(fetchData)
}

postDataJoke()
