import internals from './internals/index.js';

function request(url, data){
    internals.send(url, data);
    return internals.get();
}

request(1,2);