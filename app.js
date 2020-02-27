// Node's standard path module
// See https://nodejs.org/api/path.html
let path = require('path');

// The Express web application framework
// See http://expressjs.com/
let express = require('express');

// Library for nicer logging of HTTP requests
// See https://github.com/expressjs/morgan
let logger = require('morgan');

let app = express();

// Tell Express to load static files from the public/ directory
app.use(express.static(path.join(__dirname, 'public')));

// Tell Express to log HTTP requests in the 'dev' format
// See the Morgan documentation for what that looks like
app.use(logger('dev'));

function getLayoutHTML(content) {
  // Template strings can span multiple lines, making them
  // well-suited for, well, acting as templates.
  let html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Hello, world!</title>

        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
        <section id="content">
          ${content}
        </section>
      </body>
    </html>
  `;

  return html;
}

app.get('/', (request, response) => {
  let adjacentQuote = `
    <p>“Our goal is to enhance — not to replace — a liberal arts education and enable more students to access a broader range of opportunities in an economy that is increasingly driven by innovation and technology” - Anh Nguyen, CEO Adjacent<p>`;

  let content = `
    <section id=menu>Menu
      <ul>
        <li><a href="/About-us" id="about-us">Meet the cohort</a></li>
        <li><a href="/projects" id="projects">Projects and Networking</a></li>
      </ul>
    </section>
    <section id="companyInfo">
      <h1>Adjacent Academies: Spring 2020</h1>
      <img src="adjacentGordonSpeaking.jpg" height="300px" width="400px">
      ${adjacentQuote}
    </section>
  `;

  let pageHtml = getLayoutHTML(content);

  response.send(pageHtml);
});

app.get('/about-us', (request, response) => {

  let content = `
  <head>
    <meta charset="utf-8">
    <title>Adjacent Academies</title>
    <link rel="stylesheet" href="stylesheets/main.css">
    <link rel="stylesheet"
    href="http://fonts.googleapis.com/css?family=Lato:100,300,400">
  </head>
    <header>
      <h1 class="logo">
        <a href="adjacent.hmtl">Adjacent Academies Experience</a>
      </h1>
      <h3 class="semester">Spring 2020</h3>
    </header>
    <h2> Come explore the tech world with incredible experiences and amazing people!</h2>
  <p>Davidson in Silicon Valley has been a great study abroad experience. You get to get out of the campus environment and step into a real world active working environment. From living at the heart of San Francisco to working in the financial district. Nothing has ever felt so relatable to the real world experience as before. </p>
  <p> On a daily basis from Monday to Friday, we go through a 9 am - 5 pm shedule. There are multiple activities we do during the day including:
    <ul>
      <li>Table discussions</li>
        <li>Goal settings</li>
        <li>Weekend reflections</li>
        <li>Coding classes</li>
        <li>Personal coding projects</li>
        <li>Group projects</li>
        <li>Office visits</li>
        <li>Pitch and projects presentations</li>
        <li> English clasess</li>
      </li>
    </ul> </p>
  `;

  let pageHtml = getLayoutHTML(content);

  response.send(pageHtml);
});

app.get('/projects', (request, response) => {

  let content = `
    <a href="http://davidsoninsiliconvalley2020.com/">Back to homepage</a>
    <head>
      <meta charset="utf-8">
      <title>Projects and Companies</title>
      <link rel="stylesheet" href="main.css">
      <a href="images/AA.png"><img src = "images/AA.png" width="150px" height="150px" id="Adjacent"></a>
      <h1>Projects</h1>
      <p>During our time at adjacent academies, we have worked on
        various projects consisting of javascript, html, css, and so on.
        As a group, we have created: arcade games, fashion apps, dating apps,
        and much more!  Although they have been very challenging, the end result
        provides us all with a great feeling that is unmatched by any doubts or
        struggles we face in the process.
      </p>
      <a href="images/jl.jpg"><img src = "images/jl.jpg" width="300px" height="300px" id="JL"></a>
      <h2>Companies</h2>
    </head>
      <body>
      <p>
        One of the most exciting parts of our overall experience has definitely
        been the company tours we have taken.  Through these experiences, we
        have been able to gain insight into various real-world, fast-paced tech
        companies.  We also have been able to learn what exactly it takes to work
        for some of the top tech companies in Silicon Valley.  Some companies we
        have visted so far are: Entangled, Remind, and HoneyBook.
      </p>
     </body>
      <a href="images/entangled.png"><img src = "images/entangled.png" width="200px" height="100px" id="Entangled"></a>
      <h3>Learn more about <a href="https://www.entangled.group/"><strong>Entangled</strong></a></h3>
      <a href="images/remind.png"><img src = "images/remind.png" width="200px" height="100px" id="Remind"></a>
        <h4>Learn more about <a href="https://www.remind.com/"><strong>Remind</strong></a></h4>
        <a href="images/honeybook.jpeg"><img src = "images/honeybook.jpeg" width="200px" height="100px" id="Honeybook"></a>
        <h5>Learn more about <a href="https://www.honeybook.com/"><strong>HoneyBook</strong></a></h5>
  </html>
  `;

  let pageHtml = getLayoutHTML(content);

  response.send(pageHtml);
});

let SERVER_PORT = process.env.PORT || 3005;

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}...`);
  console.log('Visit this URL in your browser to see the web app:');
  console.log();
  console.log(`    http://localhost:${SERVER_PORT}`);
  console.log();
});
