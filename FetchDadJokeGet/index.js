const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })

  const dataDadJoke = await response.json()
  console.log(dataDadJoke)
}

getDadJoke()
