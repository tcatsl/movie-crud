var num
$(document).ready(function(){
  var url = window.location.pathname
  var re = /\d+$/g
  num = url.match(re)[0]
  $.get("/movies/"+ num)
  .then(function(data){
    $('#name').text(data.name)
    $('#year').text(data.year)
    $('#director').text(data.director),
    $('#rating').text(data.rating),
    $('#posterurl').attr("src", data.posterurl)
    $('#delete').click(function(e){
      var id = num
      $.ajax({
        url: '/movies/'+id,
        type: 'DELETE',
        success: function(result) {
        window.location = "../index.html"
        }
      })
    })
  })
})
