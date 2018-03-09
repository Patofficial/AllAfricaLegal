var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {

    doc.setFontSize(14)
    doc.setFont('times')
    doc.setFontType('bold')
    doc.text(80, 15, 'REPUBLIC OF KENYA')
    doc.text(20, 25, 'IN THE MATTER OF THE OATHS AND STATUTORY DECLARATIONS')
    doc.text(60, 35, 'ACT, CAP 15 OF THE LAWS OF KENYA')
    doc.text(90, 45, 'AFFIDAVIT')
    doc.text(15, 205, 'COMMISSIONER FOR OATHS')

    doc.line(80, 16, 133, 16)

    doc.line(20, 26, 183, 26)

    doc.line(60, 36, 152, 36)

    doc.line(90, 46, 117, 46)

    doc.line(15, 206, 85, 206)


    doc.fromHTML($('.declaration').html(), 15, 60, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#sworn').html(), 15, 130, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('.location').html(), 32, 130, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#by').html(), 60, 130, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket1').html(), 100, 130, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('.name').html(), 15, 140, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket2').html(), 100, 140, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.line(120, 150, 170, 150)

    doc.fromHTML($('#this').html(), 15, 150, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#day').html(), 40, 150, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#20').html(), 80, 150, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket7').html(), 100, 150, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#deponent').html(), 135, 150, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#before').html(), 15, 160, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket4').html(), 100, 160, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket5').html(), 100, 170, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket6').html(), 100, 180, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket7').html(), 100, 190, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#bracket7').html(), 100, 200, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.fromHTML($('#footnote').html(), 15, 270, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.save('affidavit.pdf');
});



$(document).ready(function() {

  // Start: location button's functionality
  $('#location-form .button').click(function() {
    var title = $('#location-input').val().toUpperCase();
    $('.location').text(title);
    $('#location-input').val('');
  });
  // End

  // Start: Name button's functionality
  $('#name-form .button').click(function() {
    var title = $('#name-input').val().toUpperCase();
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

$( "#Address-form" )
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
    var title = $('#Wedding-input').val().toUpperCase();
    $('.Wedding').text(title);
    $('#Wedding-input').val('');
  });
  // End

  // Start: Tribe button's functionality
  $('#Tribe-form .button').click(function() {
    var title = $('#Tribe-input').val().toUpperCase();
    $('.Tribe').text(title);
    $('#Tribe-input').val('');
  });
  // End

  // Start: Spouse button's functionality
  $('#Spouse-form .button').click(function() {
    var title = $('#Spouse-input').val().toUpperCase();
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


   $('#location-form .button, #name-form .button, #ID-form .button, #Address-form .button, #Gender-form .button, #Wedding-form .button, #Tribe-form .button, #Spouse-form .button, #SpouseID-form .button').click(function(){
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
