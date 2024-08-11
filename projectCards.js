const projects=[
    {
        name: 'TicTacToe',
        img: 'img/tic-tac-toe.jpg',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./TicTacToe/index.html",
        discription: '',
        discriptionImg: []
    },
    {
        name: 'e-lern',
        img: '',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./e-lern-Task/index.html",
        discription: '',
        discriptionImg: []
    },
    {
        name: 'Calculator',
        img: '',
        tools: 'React JS / CSS',
        buttonText: 'View site',
        siteURL: "./Calculator/",
        discription: '',
        discriptionImg: []
    },
    {
        name: 'Calculator',
        img: '',
        tools: 'React JS / CSS',
        buttonText: 'Learn more',
        siteURL: "./Calculator/",
        discription: 'project discription',
        discriptionImg: ['p']
    }
]
function projectsCardsLoading(){
    const projectsConteiner= document.getElementById('portfolioConteiner')
    let projectsCards=projects.map(project=>`<div class='projectConteiner'><img class='projectImg' src=${project.img} alt=${project.name}><div class="center"><h2 class='projectName'>${project.name}</h2><h3 class='projectTools'>${project.tools}</h3>
    <div class="projectButton">${project.buttonText=='View site'?'<a href='+project.siteURL+'>View site</a>':'<div onclick="projectCardDiscription('+`'${project.discription}'`+','+ `'${project.discriptionImg}'`+','+ `'${project.name}'`+')">'+project.buttonText+'</div>'}</div></div></div>`)
    projectsConteiner.innerHTML=projectsCards;
    }

function projectCardDiscription(discriptionText, discriptionImg, name){
    document.getElementsByClassName('projectDiscriptionConteiner')[0].style.visibility= 'visible';
    console.log(discriptionText)

}    
window.addEventListener("load", projectsCardsLoading);