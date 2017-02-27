var num
$(document).ready(function(){
  var url = window.location.pathname
 var re = /\d+$/g
  num = url.match(re)[0]
  console.log(num)
  $.get("/movies/"+ num)
  .then(function(data){
    console.log(data)
    $('#name').text(data.name)
    $('#year').text(data.year)
    $('#director').text(data.director),
    $('#rating').text(data.rating),
    $('#posterurl').attr("src", data.posterurl)
    $('#delete').click(function(e){
      var id = num
      console.log(id)
      $.ajax({
        url: '/movies/'+id,
        type: 'DELETE',
        success: function(result) {
        // Do something with the result
        console.log(result)
        window.location = "../index.html"
    }
    }
    )
    })
  })


})
