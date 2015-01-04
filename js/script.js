$(document).ready(function(){
});

//Mostrar mapa
function showPosition() {
    lat = "10.416971";
    lon = "-75.537282";
    latlon = new google.maps.LatLng(lat, lon);
    mapholder = document.getElementById('mapholder');
    //mapholder.style.height = '250px';
    //mapholder.style.width = '500px';

    var myOptions = {
        center:latlon,zoom:16,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };

    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

//Iniciar slick slider
function slick_slider_init() {
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        onBeforeChange: function() {
            var slideIndex = ($('.main-slider').slickCurrentSlide());
            $('.captionimg' + slideIndex).hide( "fast", function() {
                // Animation complete.
            });
        },
        onAfterChange: function() {
        //index of current slide
        var slideIndex = ($('.main-slider').slickCurrentSlide());
        $('.captionimg' + slideIndex).show( "slow", function() {
            // Animation complete.
        });


        }
    });

    $('.planos_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
}

// Set up an event listener for the contact form.
$( "#contact-form" ).submit(function( event ) {

    event.preventDefault();

    var this_name = $( "#contact-form input[name='name']");
    var this_email = $( "#contact-form input[name='email']");
    var this_ciudad = $( "#contact-form input[name='ciudad']");
    var this_telefono = $( "#contact-form input[name='telefono']");
    var this_mensaje = $( "#contact-form textarea[name='mensaje']");
    var this_enviar = $( "#contact-form input[name='enviar']");


    var dataString = {
        "name" : this_name.val(),
        "email" : this_email.val(),
        "ciudad" : this_ciudad.val(),
        "telefono" : this_telefono.val(),
        "mensaje" : this_mensaje.val()
    };

    this_name.val("");
    this_email.val("");
    this_ciudad.val("");
    this_telefono.val("");
    this_mensaje.val("");
    this_enviar.attr('disabled', 'disabled');


    $.ajax({
        type: "POST",
        url: "contacto.php",
        data: dataString,
        cache: true,
        success: function(html){
            $("#contact-message").css("display", "block");
            $("#contact-message").html(html);
            this_enviar.removeAttr('disabled');
        }
    });
});

$( ".about-section .planos_slider .image img" ).hover(
    function() {
        //hover on

        //$(".about-section .planos_slider .image p.caption").toggle( "slow" );
    }, function() {
        //hover out
        //$(".about-section .planos_slider .image p.caption").css('width', '0' );
    }
);




