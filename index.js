var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('affidavit.pdf');
});







$(document).ready(function() {

  // Start: location button's functionality
  $('#location-form .button').click(function() {
    var title = $('#location-input').val();
    $('.location').text(title);
    $('#location-input').val('');
  });
  // End

  // Start: Name button's functionality
  $('#name-form .button').click(function() {
    var title = $('#name-input').val();
    $('.name').text(title);
    $('#name-input').val('');
  });
  // End

  // Start: ID button's functionality
  $('#ID-form .button').click(function() {
    var title = $('#ID-input').val();
    $('.ID').text(title);
    $('#ID-input').val('');
  });
  // End

  // Start: Address button's functionality
  $('#Address-form .button').click(function() {
    var address = $('#Address-input').val();
    $('.Address').text(address);
    $('#Address-input').val('');
});

$( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".Town" ).text( str );
  })
  .change();


  // End

  // Start: Gender button's functionality
  $('#Gender-form .button').click(function() {
    var title = $('#Gender-input').val();
    $('.Gender').text(title);
    $('#Gender-input').val('');
  });
  // End

  // Start: Wedding button's functionality
  $('#Wedding-form .button').click(function() {
    var title = $('#Wedding-input').val();
    $('.Wedding').text(title);
    $('#Wedding-input').val('');
  });
  // End

  // Start: Spouse button's functionality
  $('#Spouse-form .button').click(function() {
    var title = $('#Spouse-input').val();
    $('.Spouse').text(title);
    $('#Spouse-input').val('');
  });
  // End

  // Start: SpouseID button's functionality
  $('#SpouseID-form .button').click(function() {
    var title = $('#SpouseID-input').val();
    $('.SpouseID').text(title);
    $('#SpouseID-input').val('');
  });
  // End


  $('.button').hover(function() {
    $(this).toggleClass('button-hover');
  });

  //next and previous button


   $('#location-form .button, #name-form .button, #ID-form .button, #Address-form .button, #Gender-form .button, #Wedding-form .button, #Spouse-form .button, #SpouseID-form .button').click(function(){
      if ($('.active').next('.item').length) {
          $('.active').removeClass('active')
                      .next('.item')
                      .addClass('active');
      }
    });

   $('.prev').click(function(){
     if ($('.active').prev('.item').length) {
         $('.active').removeClass('active')
                     .prev('.item')
                     .addClass('active');
     }
   });




});
