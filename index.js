var lastPos = 0;
document.addEventListener('scroll', navAnimation)
document.addEventListener('scroll', navLighting)
document.addEventListener('scroll', skillsAnimation)
document.addEventListener('scroll', headerAboutAnimation)
document.addEventListener('scroll', headerPortfolioAnimation)
document.addEventListener('scroll', infoAnimation)

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
    if(isVisible(skills)){
        skills.classList.add('slideinRightAnimation')
        setTimeout(skillAnimation, 1000)
    }

}

function headerAboutAnimation(){
    const h=document.getElementById('about-header')
    if(isVisible(h)){
        h.classList.add('slideinLeftAnimation')
        setTimeout(()=>{document.getElementsByClassName('line')[0].classList.add('slideinLeftAnimation')}, 1000)
    }
}
function headerPortfolioAnimation(){
    const h=document.getElementById('portfolio-header')
    if(isVisible(h)){
        h.classList.add('slideinRightAnimation')
        setTimeout(()=>{document.getElementsByClassName('line')[1].classList.add('slideinRightAnimation')}, 1000)
    }
}

function infoAnimation(){
    const info=document.getElementById('info')
    if(isVisible(info)){
        info.classList.add('slideinLeftAnimation')
    }
}

function isVisible(el) {
    var wt = document.documentElement.scrollTop;
    var tt = el.offsetTop;
    var tb = tt + el.offsetHeight;
    return ((tb <= wt + window.innerHeight) && (tt >= wt));
}
