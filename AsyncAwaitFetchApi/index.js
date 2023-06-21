const MyFunctionApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const userData = await response.json()
  console.log(userData);
  return userData
}

MyFunctionApi()