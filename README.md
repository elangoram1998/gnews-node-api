# gnews-node-api
Node module for Gnews Api from gnews.io

Top Headlines and search for articles from a variety of sources, including Google News.

you must need an API key from [https://gnews.io/](https://gnews.io/)

Please take a look at their [documentation](https://gnews.io/docs/v4#introduction) to know more about the gnews api.The convenience functions provided by this module
simply pass their querystring parameters to the REST API, so the [documentation](https://gnews.io/docs/v4#introduction)
is totally valid. There are some usage examples below to see how these querystring parameters should be passed in.

If you use this in a project, add a 'powered by' attribution link back to gnews.io

## Add to your project
```shell
$ npm i gnews-node-api
```

## Example usage

```js

const GnewsApi = require('gnews-node-api');
const newsApi = new GnewsApi('YOUR-API-KEY');

// to get the top headline news
// lang is must, other options are optional
newsApi.getTopHeadLines({
    topic: 'entertainment',
    lang: 'en',
    country: 'in'
}).then(
    data => {
        console.log(data);
        /*
        {
            totalArticles:"...",
            articles:[...]
        }
        */
    }
).catch(
    error=>{
        //Error message
    }
);

// to search for a news
//atleast one q is required, optional's (lang,country,from,to,sortby,nullable)
newsApi.searchNews({
    q: 'apple microsoft',
    lang: 'en',
    country: 'in',
    from: '2020-09-01',
    to: '2020-10-01',
    sortby: 'relevance',
    nullable: ''
}).then(
    data => {
        console.log(data);
        /*
        {
            totalArticles:"...",
            articles:[...]
        }
        */
    }
).catch(
    error=>{
        //Error message
    }
);
```
 
