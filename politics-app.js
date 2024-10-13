const navSlide = () => {
  // navSlide function

  const lines = document.querySelector(".nav-lines-ctr");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // variables defined by HTML selectors: navbar-lines-container, navbar-links, navbar-links li

  lines.addEventListener("click", () => {
    // function for lines when clicked

    nav.classList.toggle("nav-active");
    // toggle nav-active class

    navLinks.forEach((link, index) => {
      // function for the animation, take each link

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        // add animation styles
      }
    });
  });
};

navSlide();
// call navSlide function

const apikey = "6e9983fc689446508ad952f8cbb26b7b";
const apiURL = `https://newsapi.org/v2/everything?q=politics&apiKey=${apikey}`;
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

  const cardImg7 = document.getElementById("card7-img");
  const cardTitle7 = document.getElementById("card7-title");
  const cardDesc7 = document.getElementById("card7-desc");
  const cardHref7 = document.getElementById("card7-href");
  cardImg7.src = articles[8].urlToImage;
  cardImg7.alt = articles[8].title;
  cardTitle7.textContent = articles[8].title;
  cardDesc7.textContent = articles[8].description;
  cardHref7.href = articles[8].url;

  const cardImg8 = document.getElementById("card8-img");
  const cardTitle8 = document.getElementById("card8-title");
  const cardDesc8 = document.getElementById("card8-desc");
  const cardHref8 = document.getElementById("card8-href");
  cardImg8.src = articles[9].urlToImage;
  cardImg8.alt = articles[9].title;
  cardTitle8.textContent = articles[9].title;
  cardDesc8.textContent = articles[9].description;
  cardHref8.href = articles[9].url;

  const cardImg9 = document.getElementById("card9-img");
  const cardTitle9 = document.getElementById("card9-title");
  const cardDesc9 = document.getElementById("card9-desc");
  const cardHref9 = document.getElementById("card9-href");
  cardImg9.src = articles[10].urlToImage;
  cardImg9.alt = articles[10].title;
  cardTitle9.textContent = articles[10].title;
  cardDesc9.textContent = articles[10].description;
  cardHref9.href = articles[10].url;

  const cardImg10 = document.getElementById("card10-img");
  const cardTitle10 = document.getElementById("card10-title");
  const cardDesc10 = document.getElementById("card10-desc");
  const cardHref10 = document.getElementById("card10-href");
  cardImg10.src = articles[11].urlToImage;
  cardImg10.alt = articles[11].title;
  cardTitle10.textContent = articles[11].title;
  cardDesc10.textContent = articles[11].description;
  cardHref10.href = articles[11].url;

  const cardImg11 = document.getElementById("card11-img");
  const cardTitle11 = document.getElementById("card11-title");
  const cardDesc11 = document.getElementById("card11-desc");
  const cardHref11 = document.getElementById("card11-href");
  cardImg11.src = articles[12].urlToImage;
  cardImg11.alt = articles[12].title;
  cardTitle11.textContent = articles[12].title;
  cardDesc11.textContent = articles[12].description;
  cardHref11.href = articles[12].url;

  const cardImg12 = document.getElementById("card12-img");
  const cardTitle12 = document.getElementById("card12-title");
  const cardDesc12 = document.getElementById("card12-desc");
  const cardHref12 = document.getElementById("card12-href");
  cardImg12.src = articles[13].urlToImage;
  cardImg12.alt = articles[13].title;
  cardTitle12.textContent = articles[13].title;
  cardDesc12.textContent = articles[13].description;
  cardHref12.href = articles[13].url;
}

(async () => {
  try {
    const news = await fetchNews();
    console.log(news);
    displayBlogs(news);
  } catch (err) {
    console.log("Error fetching news.", err);
  }
})();

fetchNews();
