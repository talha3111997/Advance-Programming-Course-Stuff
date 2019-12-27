const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=79af8a0825ba4443adf9c1f76f8913cb";

  var category = 'technology';
  const topicUrl = 'https://newsapi.org/v2/everything?' +
  'q='+category+'&'+
  'from=2019-12-20&' +
  'sortBy=popularity&' +
  'apiKey=1afc0bcb33d342e181b30802b3368c76';


export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

