const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
  const getDadData = await response.json()
  console.log(getDadData)
}

getDadJoke()
