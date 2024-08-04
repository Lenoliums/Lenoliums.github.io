const projects=[
    {
        name: 'TicTacToe',
        img: 'img/tic-tac-toe.jpg',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./TicTacToe/index.html",
    },
    {
        name: 'e-lern',
        img: '',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./e-lern-Task/index.html",
    },
    {
        name: 'Calculator',
        img: '',
        tools: 'React JS / CSS',
        buttonText: 'View site',
        siteURL: "./Calculator/",
    },
    {
        name: 'Calculator',
        img: '',
        tools: 'React JS / CSS',
        buttonText: 'Learn more',
        siteURL: "./Calculator/",
    }
]
function projectsCardsLoading(){
    const projectsConteiner= document.getElementById('portfolioConteiner')
    let projectsCards=projects.map(project=>`<div class='projectConteiner'><img class='projectImg' src=${project.img} alt=${project.name}><div class="center"><h2 class='projectName'>${project.name}</h2><h3 class='projectTools'>${project.tools}</h3>
    <div class="projectButton">${project.buttonText=='View site'?'<a href='+project.siteURL+'>View site</a>':project.buttonText}</div></div></div>`)
    projectsConteiner.innerHTML=projectsCards;
    }
window.addEventListener("load", projectsCardsLoading);