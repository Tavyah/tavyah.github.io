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
    window.location = 'https://www.tiril.tech/aboutme.html';
}

$(document).ready(function() {
    // Intercept clicks on links
    $('a').on('click', function(e) {
        // Check if the link is external
        if ($(this).attr('href').startsWith('https')) {
            return true; // Allow default behavior for external links
        }

        e.preventDefault(); // Prevent default link behavior

        // Get the href attribute
        var href = $(this).attr('href');

        // Use pushState to change the URL without reloading the page
        history.pushState(null, null, href);

        // Load the content of the clicked page using AJAX
        $('#content').load(href + ' #content');
    });

    // Handle back/forward navigation
    window.onpopstate = function() {
        $('#content').load(location.pathname + ' #content');
    };
});

