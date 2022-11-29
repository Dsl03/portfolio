/*
    will contain the JS for generating the project previews
*/

var projects = [
    {
        name: "Sentiment-19",
        date: "Spring 2022",
        description: "Developed interactive heat map of US States showing sentiment towards COVID-19 based on scraped Tweets ",
        link: "projects/pacecalc.html",
        image: "images/sentiment19.png",
        alt: "Picture of sentiment19  webpage"
    },
    {
        name: "2048 Game",
        date: "Winter 2022",
        description: "Developed a working copy of the 2048 game for my final project for CS 211 (Fundamentals of Programming II).",
        link: "projects/jointrack.html",
        image: "images/jointrack.JPG",
        alt: "Picture of jointrack.club homepage"
    },

    /* starting w two for now
    {
        name: "COVID MLB Fantasy League",
        date: "Summer 2020",
        description: "Developed a sign up page for NU Track Club"
    }
    */
    ];

    function generateProjects(projects, projectSelector) {
        var projectPlace = document.querySelector(projectSelector);
        if (projectPlace) {
            if (projects instanceof Array) {
                for (let project of projects) {
                    var html =
                    `<div class="project-entry-container">
                        <div class="project-entry-text">
                            <h2>${project.name}</h2>
                            <h3>${project.date}</h3>
                            <p>${project.description}</p>
                            <p><a href="${project.link}" class="read-more">Read More <i class="fas fa-long-arrow-alt-right"></i></a></p>
                        </div>
                        <div class="project-entry-img">
                            <img src="${project.image}" alt=${project.alt}>
                            <a href="${project.link}">Read More <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>`;
                    let container = document.createElement("div");
                    container.className="project-list";
                    container.innerHTML = html;
                    container.tabIndex = projects.indexOf(project);
                    projectPlace.append(container);
                }
            }
        }
    }