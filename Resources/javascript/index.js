function responsive() {
    let nav = document.getElementById('topNav');
    if(nav.className === 'navlist') {
        nav.className += " responsive";
    }
    else {
        nav.className = 'navlist';
    }
}

function aboutMe() {
    window.location = 'https://www.tiril.tech/aboutme';
}

function teaCozy() {
    window.open('./TeaCozyWebsite/');
}

function numberGuesser() {
    window.open('./NumberGuesser/');
}

function dodgeGame() {
    window.open('https://github.com/Tavyah/DodgeGame');
}

function plantDecider() {
    window.open('./plantDecider/');
}

function cityPlannerTool() {
    window.open('https://github.com/NaztyDomingo/Cityplanner_Tool')
}

function snake() {
    window.location = 'https://www.tiril.tech/projects/snake';
}