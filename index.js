const fetch = require('node-fetch');
const qs = require('querystring');

const host = 'https://gnews.io/api/v4/';
let apiKey;

class GnewsApi {
    constructor(apikey) {
        apiKey = apikey;
    }

    //search news function, which returns news data based on query params
    //api key and atleast one query param is required q,lang or country
    searchNews=(params)=>{
        const queryParams=qs.stringify(params);
        const baseUrl=`${host}search?&token=${apiKey}&${queryParams}`;
        return getNewsData(baseUrl);
    }

    //get top headlines function return news data based on query params
    //api key is required
    getTopHeadLines = (params) => {
        const queryParams = qs.stringify(params);
        const baseUrl = `${host}top-headlines?&token=${apiKey}&${queryParams}`;
        return getNewsData(baseUrl);
    }
}

const getNewsData = (url) => {
    return fetch(url).then(
        response => {
            return response.json();
        }).then(
            data => {
                return data;
            })
}

module.exports=GnewsApi;





