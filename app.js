const navSlide = () => {
  // navSlide function
      
      const lines = document.querySelector('.nav-lines-ctr');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');
      // variables defined by HTML selectors: navbar-lines-container, navbar-links, navbar-links li
      
      lines.addEventListener('click', () => {
      // function for lines when clicked
      
              nav.classList.toggle('nav-active');
              // toggle nav-active class
      
          navLinks.forEach((link, index) => {
          // function for the animation, take each link
  
              if (link.style.animation) {
                  link.style.animation = '';
              } else {
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                  // add animation styles
              }
          });
      });
}
  
navSlide();
  // call navSlide function


// const apikey = "91b846fa29024eeeb25f63b30ea0291b";
const apikey = "49edfbb8ae16463f9631e292bd1eb17c";
const apiURL1 = `https://newsapi.org/v2/top-headlines?q=war&pageSize=10&apiKey=${apikey}`;
const apiURL2 = `https://newsapi.org/v2/top-headlines?q=sports&pageSize=10&apiKey=${apikey}`;
const apiURL3 = `https://newsapi.org/v2/top-headlines?q=politics&pageSize=10&apiKey=${apikey}`;

// const blogCtr = document.getElementsByClassName("blog-ctr");

async function fetchTopStories() {
  try {
    const response = await fetch(apiURL1);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch {
    console.log("Error fetching news.", error);
    return [];
  }
}

(async () => {
  try {
    const news = await fetchTopStories();
    console.log(news);
    displayTopStories(news);
  } catch (err) {
    console.log("Error fetching news.", err)
  }
})();

async function fetchSports() {
  try {
    const response = await fetch(apiURL2);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch {
    console.log("Error fetching news.", error);
    return [];
  }
}

(async () => {
  try {
    const news = await fetchSports();
    console.log(news);
    displaySports(news);
  } catch (err) {
    console.log("Error fetching news.", err)
  }
})();

async function fetchPolitics() {
  try {
    const response = await fetch(apiURL3);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch {
    console.log("Error fetching news.", error);
    return [];
  }
}

(async () => {
  try {
    const news = await fetchPolitics();
    console.log(news);
    displayPolitics(news);
  } catch (err) {
    console.log("Error fetching news.", err)
  }
})();

function displayTopStories(articles) {
  const cardImg1 = document.getElementById("card1-img");
  const cardTitle1 = document.getElementById("card1-title");
  const cardDesc1 = document.getElementById("card1-desc");
  const cardHref1 = document.getElementById("card1-href");
  cardImg1.src = articles[0].urlToImage;
  cardImg1.alt = articles[0].title;
  cardTitle1.textContent = articles[0].title;
  cardDesc1.textContent = articles[0].description;
  cardHref1.href = articles[0].url;

  const cardImg2 = document.getElementById("card2-img");
  const cardTitle2 = document.getElementById("card2-title");
  const cardDesc2 = document.getElementById("card2-desc");
  const cardHref2 = document.getElementById("card2-href");
  cardImg2.src = articles[1].urlToImage;
  cardImg2.alt = articles[1].title;
  cardTitle2.textContent = articles[1].title;
  cardDesc2.textContent = articles[1].description;
  cardHref2.href = articles[1].url;

  const cardImg3 = document.getElementById("card3-img");
  const cardTitle3 = document.getElementById("card3-title");
  const cardDesc3 = document.getElementById("card3-desc");
  const cardHref3 = document.getElementById("card3-href");
  cardImg3.src = articles[2].urlToImage;
  cardImg3.alt = articles[2].title;
  cardTitle3.textContent = articles[2].title;
  cardDesc3.textContent = articles[2].description;
  cardHref3.href = articles[2].url;

  const cardImg4 = document.getElementById("card4-img");
  const cardTitle4 = document.getElementById("card4-title");
  const cardDesc4 = document.getElementById("card4-desc");
  const cardHref4 = document.getElementById("card4-href");
  cardImg4.src = articles[4].urlToImage;
  cardImg4.alt = articles[4].title;
  cardTitle4.textContent = articles[4].title;
  cardDesc4.textContent = articles[4].description;
  cardHref4.href = articles[4].url;

  // blogCtr.innerHTML = ""
  // articles.forEach((article) => {
  //   const blogColumn = document.createElement("div");
  //   blogColumn.classList.add("column");


  //   const blogCard = document.createElement("div");
  //   blogCard.classList.add("card");
  //   const blogImg = document.createElement("img");
  //   blogImg.src = article.urlToImage;
  //   blogImg.alt = article.title;
  //   const title = document.createElement("h1");
  //   title.textContent = article.title;
  //   const desc = document.createElement("p");
  //   desc.textContent = article.description;

  //   blogColumn.appendChild(blogCard);
  //   blogCard.appendChild(blogImg);
  //   blogCard.appendChild(title);
  //   blogCard.appendChild(desc);

  //   blogCtr.appendChild(blogCard);
  // })
}

function displaySports(articles) {
  const cardImg5 = document.getElementById("card5-img");
  const cardTitle5 = document.getElementById("card5-title");
  const cardDesc5 = document.getElementById("card5-desc");
  const cardHref5 = document.getElementById("card5-href");
  cardImg5.src = articles[0].urlToImage;
  cardImg5.alt = articles[0].title;
  cardTitle5.textContent = articles[0].title;
  cardDesc5.textContent = articles[0].description;
  cardHref5.href = articles[0].url;

  const cardImg6 = document.getElementById("card6-img");
  const cardTitle6 = document.getElementById("card6-title");
  const cardDesc6 = document.getElementById("card6-desc");
  const cardHref6 = document.getElementById("card6-href");
  cardImg6.src = articles[1].urlToImage;
  cardImg6.alt = articles[1].title;
  cardTitle6.textContent = articles[1].title;
  cardDesc6.textContent = articles[1].description;
  cardHref6.href = articles[1].url;

  const cardImg7 = document.getElementById("card7-img");
  const cardTitle7 = document.getElementById("card7-title");
  const cardDesc7 = document.getElementById("card7-desc");
  const cardHref7 = document.getElementById("card7-href");
  cardImg7.src = articles[2].urlToImage;
  cardImg7.alt = articles[2].title;
  cardTitle7.textContent = articles[2].title;
  cardDesc7.textContent = articles[2].description;
  cardHref7.href = articles[2].url;

  const cardImg8 = document.getElementById("card8-img");
  const cardTitle8 = document.getElementById("card8-title");
  const cardDesc8 = document.getElementById("card8-desc");
  const cardHref8 = document.getElementById("card8-href");
  cardImg8.src = articles[4].urlToImage;
  cardImg8.alt = articles[4].title;
  cardTitle8.textContent = articles[4].title;
  cardDesc8.textContent = articles[4].description;
  cardHref8.href = articles[4].url;
}

function displayPolitics(articles) {
  const cardImg9 = document.getElementById("card9-img");
  const cardTitle9 = document.getElementById("card9-title");
  const cardDesc9 = document.getElementById("card9-desc");
  const cardHref9 = document.getElementById("card9-href");
  cardImg9.src = articles[0].urlToImage;
  cardImg9.alt = articles[0].title;
  cardTitle9.textContent = articles[0].title;
  cardDesc9.textContent = articles[0].description;
  cardHref9.href = articles[0].url;

  const cardImg10 = document.getElementById("card10-img");
  const cardTitle10 = document.getElementById("card10-title");
  const cardDesc10 = document.getElementById("card10-desc");
  const cardHref10 = document.getElementById("card10-href");
  cardImg10.src = articles[1].urlToImage;
  cardImg10.alt = articles[1].title;
  cardTitle10.textContent = articles[1].title;
  cardDesc10.textContent = articles[1].description;
  cardHref10.href = articles[1].url;

  const cardImg11 = document.getElementById("card11-img");
  const cardTitle11 = document.getElementById("card11-title");
  const cardDesc11 = document.getElementById("card11-desc");
  const cardHref11 = document.getElementById("card11-href");
  cardImg11.src = articles[2].urlToImage;
  cardImg11.alt = articles[2].title;
  cardTitle11.textContent = articles[2].title;
  cardDesc11.textContent = articles[2].description;
  cardHref11.href = articles[2].url;

  const cardImg12 = document.getElementById("card12-img");
  const cardTitle12 = document.getElementById("card12-title");
  const cardDesc12 = document.getElementById("card12-desc");
  const cardHref12 = document.getElementById("card12-href");
  cardImg12.src = articles[4].urlToImage;
  cardImg12.alt = articles[4].title;
  cardTitle12.textContent = articles[4].title;
  cardDesc12.textContent = articles[4].description;
  cardHref12.href = articles[4].url;
}