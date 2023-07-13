const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
];

urls.map(async (url) => {
  const res = await fetch(url);
  result = await res.json();
  console.log(result);
});
