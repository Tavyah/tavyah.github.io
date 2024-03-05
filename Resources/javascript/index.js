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
    window.location.href='./projects/TeaCozyWebsite/';
}

function numberGuesser() {
    window.location.href='./projects/NumberGuesser/';
}