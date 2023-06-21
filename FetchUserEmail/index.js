const getAllUsersEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const userData = await response.json()

  const getUserEmail = userData.map((user) => {
    return user.email
  })

  postToWebPage(getUserEmail)
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUsersEmail()