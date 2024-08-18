var lastPos = 0;
document.addEventListener('scroll', navAnimation)
document.addEventListener('scroll', navLighting)
document.addEventListener('scroll', skillsAnimation)
document.addEventListener('scroll', headerAboutAnimation)
document.addEventListener('scroll', headerPortfolioAnimation)
document.addEventListener('scroll', infoAnimation)
document.addEventListener('scroll', projectCardsAnimation)
document.addEventListener('scroll', aboutCardsAnimation)


function navAnimation(){
    const nav = document.getElementsByTagName('nav')[0];
    let pos = document.documentElement.scrollTop;
    if(pos>=nav.offsetTop+nav.offsetHeight && lastPos < pos){
        nav.classList.add('fixed')
    }
    if(pos<nav.offsetTop && lastPos > pos){
        nav.classList.remove('fixed');
    }
    lastPos=pos;
}
function navLighting(){
    const nav = document.getElementsByTagName('nav')[0];
    const about = document.getElementById('about');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    const navhelloPage = document.getElementById('navHelloPage');
    const navabout = document.getElementById('navAbout');
    const navportfolio = document.getElementById('navPortfolio');
    const navcontact = document.getElementById('navContact');
    let pos = document.documentElement.scrollTop;
    if(pos<about.offsetTop-nav.offsetHeight){
        active(navhelloPage);
        unactive(navabout);
        unactive(navportfolio);
        unactive(navcontact);
        return
    }
    if(pos<portfolio.offsetTop-nav.offsetHeight){
        unactive(navhelloPage);
        active(navabout);
        unactive(navportfolio);
        unactive(navcontact);
        return
    }
    if(pos<contact.offsetTop-nav.offsetHeight){
        unactive(navhelloPage);
        unactive(navabout);
        active(navportfolio);
        unactive(navcontact);
        return
    }
    unactive(navhelloPage);
    unactive(navabout);
    unactive(navportfolio);
    active(navcontact);
}
function active(el){
    el.classList.add('active');
} 
function unactive(el){
    el.classList.remove('active');
} 
function skillAnimation(){
    for(el of document.getElementsByClassName('skill-range')){
        el.classList.add('skillsAnimation')
    }
}
function skillsAnimation(){
    const skills= document.getElementById('skills');
    if(isVisible(skills, 0)){
        skills.classList.add('slideinRightAnimation')
        setTimeout(skillAnimation, 1000)
    }

}

function headerAboutAnimation(){
    const h=document.getElementById('about-header')
    if(isVisible(h)){
        h.classList.add('slideinLeftAnimation')
        setTimeout(()=>{document.getElementsByClassName('line')[0].classList.add('slideinLeftAnimation')}, 300)
    }
}
function headerPortfolioAnimation(){
    const h=document.getElementById('portfolio-header')
    if(isVisible(h)){
        h.classList.add('slideinRightAnimation')
        setTimeout(()=>{document.getElementsByClassName('line')[1].classList.add('slideinRightAnimation')}, 300)
    }
}

function infoAnimation(){
    const info=document.getElementById('info')
    if(isVisible(info, 0)){
        info.classList.add('slideinLeftAnimation')
    }
}

function projectCardsAnimation(){
    const projectCards = [...document.getElementsByClassName('projectConteiner')]
    const firstProjectCard =projectCards[0]
    if(isVisible(firstProjectCard, 0)){
        let time = 0
        const projectsImg = [...document.getElementsByClassName('projectImg')]
        const projectsName = [...document.getElementsByClassName('projectName')]
        const projectsTool = [...document.getElementsByClassName('projectTools')]
        const projectsButton = [...document.getElementsByClassName('projectButton')]
        const projectsCenters = [...document.getElementsByClassName('center')]
        projectCards.forEach((el, ind) => {
            setTimeout(()=>{el.classList.add('slideinBottomAnimation500')}, time)
            el.onmouseover=()=>projectHooverCardAnimation(projectsImg[ind], projectsName[ind], projectsTool[ind], projectsButton[ind], projectsCenters[ind])
            el.onmouseout=()=>projectUnhooverCardAnimation(projectsImg[ind], projectsName[ind], projectsTool[ind], projectsButton[ind], projectsCenters[ind])
            time+=100
        });
    }
}
function projectHooverCardAnimation(img, name, tools, button, center){
    img.classList.add('opacityDown')
    center.classList.remove('opacityDown')
    center.style.opacity=1 

    name.classList.remove('slideoutTopAnimation')
    tools.classList.remove('slideoutTopAnimation')
    button.classList.remove('slideoutBottomAnimation')

    name.classList.add('slideinTopAnimation')
    tools.classList.add('slideinTopAnimation')
    button.classList.add('slideinBottomAnimation')
    
}
function projectUnhooverCardAnimation(img, name, tools, button, center){
    img.classList.remove('opacityDown')
    img.classList.add('opacityUp')

    name.classList.remove('slideinTopAnimation')
    tools.classList.remove('slideinTopAnimation')
    button.classList.remove('slideinBottomAnimation')

    name.classList.add('slideoutTopAnimation')
    tools.classList.add('slideoutTopAnimation')
    button.classList.add('slideoutBottomAnimation')
    center.classList.add('opacityDown')

}
function aboutCardsAnimation(){
    const aboutCards = [...document.getElementsByClassName('aboutHexagon')]
    const aboutCardTexts = [...document.getElementsByClassName('aboutCardTexts')]
    const firstAboutCards =aboutCards[0]
    if(isVisible(firstAboutCards, 0)){
        let time = 0
        aboutCards.forEach((el, ind)=>{
            setTimeout(()=>{
                el.classList.add('flipInX');
                setTimeout(()=>aboutCardTexts[ind].classList.add('opacityUp05'), 200)
                
            }, time)
            time+=300;
        })
    }
}

function isVisible(el, pos=window.innerHeight/3) {
    if(typeof el == "undefined"){
        return false
    }
    var wt = document.documentElement.scrollTop;
    var tt = el.offsetTop;
    var tb = tt + el.offsetHeight;
    return ((tb + pos<= wt + window.innerHeight) && (tt >= wt));
}
