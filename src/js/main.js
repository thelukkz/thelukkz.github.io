"use strict";

// place your code below
console.log("");

const list = document.querySelector('.projects__list--js');

fetch("https://api.github.com/users/thelukkz/repos?sort=updated&direction=desc")
.then(resp => resp.json())
.then(resp => {
    const dtos = resp;
    for (const model of dtos){
        const {name, html_url, homepage, description} = model;
        list.innerHTML += `<li class="projects__item">
        <div class="proj-item__info">
          <img class="proj-item__logo" src="../assets/img/github.svg" alt="Repository provider, Github logo."/>
          <h4 class="proj-item__title">${name}</h4>
          <p class="proj-item__description">${description}</p>
        </div>
        <div class="proj-item__navi">
        ${
            homepage ? `<a class="proj-item__link proj-item__link--page" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>` : ''
        }  
          <a class="proj-item__link proj-item__link--repo" href="${html_url}" target="_blank" rel="nofollow noreferrer">GitHub</a>
        </div>
      </li>`;
    }
})
.catch(err => {
    console.log("Can't connect to github api.")
})

console.log(`Hello world!`);


