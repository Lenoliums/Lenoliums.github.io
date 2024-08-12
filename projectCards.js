const projects=[
    {
        discriptionName: 'TicTacToe',
        img: 'img/tic-tac-toe.jpg',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./TicTacToe/index.html",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'e-lern',
        img: '',
        tools: 'JS / CSS',
        buttonText: 'View site',
        siteURL: "./e-lern-Task/index.html",
        discriptionText: '',
        discriptionImg: [],
        discriptionInfo: ''
    },
    {
        discriptionName: 'Calculator',
        img: '',
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
        tools: 'Angular JS / TS / CSS',
        buttonText: 'Learn more',
        siteURL: "https://github.com/baddabudda/db-n-web",
        discriptionText: 'Exam me is a platform that allows students to prepare for exams together, make edits to the notes of classmates and study materials from previous years.',
        discriptionImg: ['img/exam-me1.png', 'img/exam-me2.png', 'img/exam-me3.png'],
        discriptionInfo: 'student collaboration platform.'
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
    carusel.style.width=700*discriptionImg.length + 'px' 
    const slides=[]
    console.log(typeof discriptionImg)
    discriptionImg.forEach(slide => {
        slides.push(`<img class="slide" src=${slide}>`)
        // slides.push(`<div class="slide" style="background: url(${slide}) center center / cover;"></div>`)
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
    let newSlide=slides[slides.length-1]
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