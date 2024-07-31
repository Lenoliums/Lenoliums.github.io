const projects=[
    {
        name: 'TicTacToe',
        img: 'img/tic-tac-toe.jpg',
        tools: 'JS / CSS'
    },
    {
        name: 'e-lern',
        img: '',
        tools: 'JS / CSS'
    },
    {
        name: 'Calculator',
        img: '',
        tools: 'React JS / CSS'
    }
]
function projectsCardsLoading(){
    console.log(document)
    const projectsConteiner= document.getElementById('portfolioConteiner')
    console.log(projectsConteiner)
    let projectsCards=projects.map(project=>`<div class='projectConteiner'><img class='projectImg' src=${project.img} alt=${project.name}><div class="center"><h2 class='projectName'>${project.name}</h2><h3 class='projectTools'>${project.tools}</h3><div class="projectButton">Learn more</div></div></div>`)
    console.log(projectsCards)
    projectsConteiner.innerHTML=projectsCards;
    }
window.addEventListener("load", projectsCardsLoading);