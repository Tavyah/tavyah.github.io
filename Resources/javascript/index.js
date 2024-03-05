function responsive() {
    let nav = document.getElementById('topNav');
    if(nav.className === 'navlist') {
        nav.className += " responsive";
    }
    else {
        nav.className = 'navlist';
    }
}