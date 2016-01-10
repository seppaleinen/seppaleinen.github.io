$( "button" ).click(function() {
  $( "#section_" + this.id ).toggleClass( 'hidden' );
  $( "#" + this.id ).toggleClass('active')
});