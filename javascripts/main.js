console.log('This would be the main JS file.');
$( "button" ).click(function() {
  $( "#section_" + this.id ).toggleClass( 'hidden' );
  $( "#" + this.id ).toggleClass('active')
});