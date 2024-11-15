const projects=[
    {
        discriptionName: 'TicTacToe',
        img: 'img/tic_tac_toe.png',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./TicTacToe/index.html",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'test-layout',
        img: 'img/layout.png',
        tools: 'React JS / CSS',
        buttonText: 'View site',
        siteURL: "./test_layout_ITGLOBAL/",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'e-lern',
        img: 'img/e-lern.png',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./e-lern-Task/index.html",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'Calculator',
        img: 'img/calculator.png',
        tools: 'React JS / CSS',
        buttonText: 'View site',
        siteURL: "./Calculator/",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'Exam me',
        img: 'img/exam-me.png',
        tools: 'Angular / TS / CSS',
        buttonText: 'Learn more',
        siteURL: "https://github.com/baddabudda/db-n-web",
        discriptionText: 'Exam me is a platform that allows students to prepare for exams together, make edits to the notes of classmates and study materials from previous years.',
        discriptionImg: ['img/exam-me2.png', 'img/exam-me1.png', 'img/exam-me3.png'],
        discriptionInfo: 'student collaboration platform.'
    },
    {
        discriptionName: 'Urban-Topology project',
        img: 'img/ingria__team.jpg',
        tools: 'Angular / CSS',
        buttonText: 'Learn more',
        siteURL: "https://github.com/INRGIA-team/Urban-Topology-Analysis-Service/tree/main?tab=readme-ov-file",
        discriptionText: 'Urban-Topology Analysis platform is a website that analyzes topological information on maps. The project processes information about cities or selected areas and provides a number of metrics and graphs.',
        discriptionImg: ['img/ingria_team1.mp4', 'img/ingria_team2.mp4'],
        discriptionInfo: 'university practice project'
    },
    {
        discriptionName: 'More repositories',
        img: 'img/github.png',
        tools: 'JS / Python / C++',
        buttonText: 'View site',
        siteURL: "https://github.com/Lenoliums?tab=repositories",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    }
]
function projectsCardsLoading(){
    const projectsConteiner= document.getElementById('portfolioConteiner')
    let projectsCards=projects.map((project, ind)=>`<div class='projectConteiner'><img class='projectImg' src=${project.img} alt=${project.discriptionName}><div class="center"><h2 class='projectName'>${project.discriptionName}</h2><h3 class='projectTools'>${project.tools}</h3>
    ${project.buttonText=='View site'?'<a class="projectButton" href='+project.siteURL+'>View site</a>':'<div class="projectButton" onclick="projectCardDiscription('+ind+')">'+project.buttonText+'</div>'}</div></div>`)
    projectsConteiner.innerHTML=projectsCards;
    }

function projectCardDiscription(id){
    const { discriptionText, discriptionImg, discriptionName, discriptionInfo, siteURL} = projects[id]
    const projectConteiner= document.getElementsByClassName('projectDiscriptionConteiner')[0];
    projectConteiner.querySelectorAll('.discriptionName')[0].innerHTML=discriptionName;
    projectConteiner.querySelectorAll('.discriptionInfo')[0].innerHTML=discriptionInfo;
    projectConteiner.querySelectorAll('.discriptionText')[0].innerHTML=discriptionText;
    projectConteiner.querySelectorAll('.discriptionButton')[0].href=siteURL;

    const carusel = projectConteiner.getElementsByClassName('carusel')[0];
    const windowWidth = window.innerWidth;
    if(windowWidth<700){
        window.location.href = siteURL;
        return
    }
    carusel.style.width=700*discriptionImg.length + 'px' 
    
    const slides=[]
    discriptionImg.forEach(slide => {
        let extension=slide.split('.').pop();
        if(extension == 'png' || extension == 'jpg'){
            slides.push(`<img class="slide" src=${slide}>`)
        }
        if(extension == 'mp4'){
            slides.push(`<video class="slide" autoplay loop muted> <source src=${slide}> type="video/mp4"></video>`)
        }
        
    });
    carusel.innerHTML = slides 

    projectConteiner.style.visibility= 'visible';
}   
document.getElementsByClassName('left')[0].addEventListener('click', leftScroll)
function leftScroll(){
    const arrowButtons =[... document.getElementsByClassName('arrowConteiner')]
    arrowButtons.forEach(el=>{el.style.pointerEvents='none';})
    const carusel = document.getElementsByClassName('carusel')[0];
    carusel.classList.add('caruselLeftSlide')
    let slides =  document.getElementsByClassName('slide');
    let newSlide=slides[slides.length-1];
    [...document.getElementsByTagName('video')].forEach((el)=>el.currentTime = 0);
    setTimeout(()=>{carusel.removeChild(slides[slides.length-1])
    carusel.insertBefore(newSlide, slides[0])
    carusel.classList.remove('caruselLeftSlide')
    arrowButtons.forEach(el=>{el.style.pointerEvents='initial';})}, 500)
    
}
document.getElementsByClassName('right')[0].addEventListener('click', rightScroll)
function rightScroll(){
    const arrowButtons = [...document.getElementsByClassName('arrowConteiner')]
    arrowButtons.forEach(el=>{el.style.pointerEvents='none';})

    const carusel = document.getElementsByClassName('carusel')[0];
    carusel.classList.add('caruselRightSlide')
    let slides =  document.getElementsByClassName('slide');
    let newSlide=slides[0]
    setTimeout(()=>{carusel.removeChild(slides[0])
    carusel.appendChild(newSlide)
    carusel.classList.remove('caruselRightSlide')
    arrowButtons.forEach(el=>{el.style.pointerEvents='initial';})
    }, 500)

    
}


window.addEventListener("load", projectsCardsLoading);