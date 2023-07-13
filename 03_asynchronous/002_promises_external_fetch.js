const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
];

Promise.all(urls.map(async url => {
    const res = await fetch(url);
    return res.json();
})).then(results => {
    console.log(results);
}).catch(error => console.error(error));