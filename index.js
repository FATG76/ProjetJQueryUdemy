
//Effet pour changer la couleur de fond de notre page web
var bg = $("#particles-js");

$(document).keydown(function(){
    $(bg).css("background-color", getRandomColor);
});

 

//Effet pour selection une image en la cliquant dessus
$(".img").on("click", function(){
    //Premiere action : selectionner le nom du chanteur et mettre en majuscule la 1 ere lettre
    var name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalize = initiale + name.slice(1);
    $("#titre").text(nameCapitalize);
    
    //Deuxieme action :faire bouger up and down les images: toggle
    $(this).toggleClass("flash");

    // Troisième action: jouer la musique
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);

})

// Jouer la music quand on clique sur play

$("#btn").click(function(){
    var artiste = $("#input").val();
    var musicDeArtiste = artiste + ".mp3";
    playMusic(musicDeArtiste);

});

function getRandomColor(){
    var letters = "0123456789ABCDEF"
    var color = "#"
    for(var i=0; i<6;i++){
       color+=letters[Math.floor(Math.random()*16)];
    }
   return color;
};

function playMusic(music){
    var audio = new Audio(music);
    audio.play();
}

