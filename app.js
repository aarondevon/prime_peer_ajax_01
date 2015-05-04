/**
 * Created by aaronsawyer on 5/1/15.
 */
var userSearch;

function searchCallback(results){
    $("#results").empty();
    var userResult = results;
    $("#results").append("<div><a href='"+userResult.html_url+"'>"+userResult+"</a></div><img src='"+userResult.avatar_url+"'/></div>");
    console.log(userResult);

}



$(document).ready(function(){
$(".btn").on("click", function(){
   userSearch = $("#search").val();
    search(userSearch);

});

});


function search(query) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        url: 'https://api.github.com/users/'+query+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        complete: function () {
            console.log("AJAX Complete");
        },
        
        success: function(data){
            searchCallback(data);
        }



    });
}