fetch("https://localhost:3030/counter/")
  .then((response) => response.json())
  .then((data) => console.log(data));
