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


const apikey = "91b846fa29024eeeb25f63b30ea0291b";
const apiURL = `https://newsapi.org/v2/top-headlines?q=war&pageSize=10&apiKey=${apikey}`;
const blogCtr = document.getElementsByClassName("blog-ctr");


async function fetchNews() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch {
    console.log("Error fetching news.", error);
    return [];
  }
}

function displayBlogs(articles) {
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

  const cardImg5 = document.getElementById("card5-img");
  const cardTitle5 = document.getElementById("card5-title");
  const cardDesc5 = document.getElementById("card5-desc");
  const cardHref5 = document.getElementById("card5-href");
  cardImg5.src = articles[5].urlToImage;
  cardImg5.alt = articles[5].title;
  cardTitle5.textContent = articles[5].title;
  cardDesc5.textContent = articles[5].description;
  cardHref5.href = articles[5].url;

  const cardImg6 = document.getElementById("card6-img");
  const cardTitle6 = document.getElementById("card6-title");
  const cardDesc6 = document.getElementById("card6-desc");
  const cardHref6 = document.getElementById("card6-href");
  cardImg6.src = articles[7].urlToImage;
  cardImg6.alt = articles[7].title;
  cardTitle6.textContent = articles[7].title;
  cardDesc6.textContent = articles[7].description;
  cardHref6.href = articles[7].url;



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

(async () => {
  try {
    const news = await fetchNews();
    console.log(news);
    displayBlogs(news);
  } catch (err) {
    console.log("Error fetching news.", err)
  }
})();

fetchNews();