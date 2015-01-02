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
        autoplaySpeed: 4000,

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
}


