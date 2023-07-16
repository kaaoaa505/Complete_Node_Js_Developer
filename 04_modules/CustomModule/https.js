import send from './request.js';
import get from './response.js';

function request(url, data){
    send(url, data);
    return get();
}

request(1,2);