import http from 'http';

const req = http.request('http://www.google.com', res => {
    res.on('data', chunk => {
        console.log(`\n\n---- http.request res on data chunk is: \n${chunk}`)
    });

    res.on('end', () => {
        console.log(`\n\n---- http.request res on end`)
    });
});

req.end();