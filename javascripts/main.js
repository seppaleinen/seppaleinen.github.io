'use strict';

// Logic for language-buttons
$( "button" ).click(function() {
    $( "#section_" + this.id ).toggleClass( 'hidden' );
    $( "#" + this.id ).toggleClass('active');
});

/*
// Logic for flipping between pages
$( ".navbar-nav > li > a" ).click(function() {
    if( this.id != "index.html" || this.id != "github" ) {
        $( "#content" ).load( this.id );
    }
});

// Activating/Inactivating nav-bar links
$( ".navbar-nav > li" ).click(function() {
    $( ".navbar-nav > li" ).removeClass("active");
    $( this ).addClass("active");
});
*/