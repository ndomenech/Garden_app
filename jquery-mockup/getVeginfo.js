$(function(){
    
$("#vegcard-placeholder").load( function (){
      $("#btn1").click(function addVeg(){
        var veg = $('#vegatables').val();
        var result = $.grep(plants, function(veg){ return veg.id == id; });

        $('#my_img').attr('src', result.src );
        $('#my_title').text( result.title );
        $('#my_text').text(result.text );
            
    
       
    })
}
)}
)


plants =[
    { title: "broccoli", src:"./img/broccoli.jpg",  text: "plant information" },
    { title: "green beans", src:"./img/green bean.jpg",  text: "plant information" },
    { title: "peas", src:" ./img/peas.jpg",  text: "plant info" },
    { title: "tomatoes", src:"./img/tomtates.jpg",  text: "plant information" },
    { title: "potatoes", src:"./img/potatoes.jpg",  text: "plant information" },
    { title: "zicchini", src:"./img/zicchini.jpg",  text: "plant information" },
    

];