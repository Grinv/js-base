const query = {
    search: 'Вася',
    take: 10,
};

function queryStringify(query) {
    const queriesArray = [];
    for (const key in query) {
        queriesArray.push(`${key}=${query[key]}`);
    }
    return queriesArray.join('&');
}

console.log(queryStringify(query));
