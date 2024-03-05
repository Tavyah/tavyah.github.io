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
    window.location.href='./all_projects/TeaCozyWebsite/';
    removeFolderFromUrl('TeaCozyWebsite');
}

function numberGuesser() {
    window.location.href='./all_projects/NumberGuesser/';
    removeFolderFromUrl('NumberGuesser');
}

function removeFolderFromUrl(name) {
    history.replaceState(null, '', `./${name}/index.html`);
}