const dateText = document.getElementById("date");
const timeText = document.getElementById("time");
let date = new Date(Date.now());
let time = "";
let tdDate = "";
const categories = [
  "top-headlines?country=us&category=business",
  "top-headlines?sources=techcrunch",
  "everything?domains=wsj.com",
  "everything?q=tesla&from=2024-09-12&sortBy=publishedA",
  "everything?q=apple&from=2024-10-11&to=2024-10-11&sortBy=popularity",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

setInterval(() => {
  date = new Date(Date.now());
  hours = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  tdDate =
    days[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  dateText.innerHTML = tdDate;
  timeText.innerHTML = hours + " : " + min + " : " + sec;
}, 1000);

fetch(
  "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=hRjPLOiQ7dBDsyxQ2B8UziZ2Gh8B7x9h"
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      let ranIn = Math.floor(Math.random() * 12344);
      const stockSymbol = document.getElementById(`stock-${i + 1}-symbol`);
      const stockPrice = document.getElementById(`stock-${i + 1}-price`);
      const stockChange = document.getElementById(`stock-${i + 1}-change`);
      const stockDir = document.getElementById(`stock-${i + 1}-direction`);

      stockSymbol.innerHTML = data[ranIn].symbol;
      stockPrice.innerHTML = data[ranIn].price;
      stockChange.innerHTML = data[ranIn].change;

      if (data[ranIn].price - data[ranIn].previousClose > 0) {
        stockDir.src = "./assets/up.png";
      } else if (data[ranIn].price - data[ranIn].previousClose < 0) {
        stockDir.src = "./assets/down.png";
      } else {
        stockDir.src = "./assets/neutral.png";
      }
    }
  });

fetch(
  `https://newsapi.org/v2/${
    categories[Math.floor(Math.random() * 4)]
  }&apiKey=6e9983fc689446508ad952f8cbb26b7b`
)
  .then((response) => response.json())
  .then((data) => {
    const ranIn = Math.floor(Math.random() * data.articles.length);
    const storyImg = document.getElementById(`story-1-img`);
    const storyTitle = document.getElementById(`story-1-title`);

    storyImg.src = data.articles[ranIn].urlToImage;
    storyTitle.innerHTML = data.articles[ranIn].title;
    storyTitle.href = data.articles[ranIn].url;
  });
fetch(
  `https://newsapi.org/v2/${
    categories[Math.floor(Math.random() * 4)]
  }&apiKey=6e9983fc689446508ad952f8cbb26b7b`
)
  .then((response) => response.json())
  .then((data) => {
    const ranIn = Math.floor(Math.random() * data.articles.length);
    const storyImg = document.getElementById(`story-2-img`);
    const storyTitle = document.getElementById(`story-2-title`);

    storyImg.src = data.articles[ranIn].urlToImage;
    storyTitle.innerHTML = data.articles[ranIn].title;
    storyTitle.onclick = window.open(data.articles[ranIn].url);
  });
fetch(
  `https://newsapi.org/v2/${
    categories[Math.floor(Math.random() * 4)]
  }&apiKey=6e9983fc689446508ad952f8cbb26b7b`
)
  .then((response) => response.json())
  .then((data) => {
    const ranIn = Math.floor(Math.random() * data.articles.length);
    const storyImg = document.getElementById(`story-3-img`);
    const storyTitle = document.getElementById(`story-3-title`);

    storyImg.src = data.articles[ranIn].urlToImage;
    storyTitle.innerHTML = data.articles[ranIn].title;
    storyTitle.onclick = window.open(data.articles[ranIn].url);
  });
fetch(
  `https://newsapi.org/v2/${
    categories[Math.floor(Math.random() * 4)]
  }&apiKey=6e9983fc689446508ad952f8cbb26b7b`
)
  .then((response) => response.json())
  .then((data) => {
    const ranIn = Math.floor(Math.random() * data.articles.length);
    const storyImg = document.getElementById(`story-4-img`);
    const storyTitle = document.getElementById(`story-4-title`);

    storyImg.src = data.articles[ranIn].urlToImage;
    storyTitle.innerHTML = data.articles[ranIn].title;
    storyTitle.onclick = window.open(data.articles[ranIn].url);
  });
