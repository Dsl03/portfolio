/*
    will contain the JS for generating the project previews
*/

let projects = [
    {
        name: "Git-Meta Open Source",
        date: "Summer 2022",
        description: "Contributed to the Two Sigma Git-Meta Open Source Library as part of the Two Sigma College Mentor Connect Program.",
        link: "projects/gitmeta.html",
        image: "images/git-meta.png",
        alt: "Picture of git-meta github page"
    },

    {
        name: "Sentiment-19",
        date: "Spring 2022",
        description: "Developed interactive heat map of US States showing sentiment towards COVID-19 based on scraped Tweets ",
        link: "projects/sentiment19.html",
        image: "images/sentiment19.png",
        alt: "Picture of sentiment19 webpage"
    },

    ];

    function generateProjects(projects, projectSelector) {
        let projectPlace = document.querySelector(projectSelector);
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