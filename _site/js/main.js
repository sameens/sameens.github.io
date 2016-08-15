//expand text
$(document).ready( function() {

  $('.read-more').click( function() {
    $('.expand').slideToggle('fast');
    //Stop page from reloading
    event.preventDefault();
    if ($('.read-more').text() == 'Read more') {
      $('.read-more').text('Show less');
    } else {
      $('.read-more').html('Read more');
    }
  });
});
