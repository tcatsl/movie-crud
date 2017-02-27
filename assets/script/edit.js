var num
$(document).ready(function(){
  var url = window.location.pathname
 var re = /\d+$/g
  num = url.match(re)[0]
  console.log(num)
  $.get("/movies/"+ num)
  .then(function(data){
    console.log(data)
    $('#name').val(data.name)
    $('#year').val(data.year)
    $('#director').val(data.director),
    $('#rating').val(data.rating),
    $('#posterurl').val(data.posterurl)
    $('#posterurl2').attr("src", data.posterurl)
  })
})


$('#send').click(function(e){
  e.preventDefault()
  var movie = {
    "name": $('#name').val(),
    "year": $('#year').val(),
    "director": $('#director').val(),
    "rating": $('#rating').val(),
    "posterurl": $('#posterurl').val()
  }
  console.log(movie)
  setTimeout(function(){
    $.ajax({
      url: '/movies/'+num,
      type: 'PUT',
      data: movie,
      success: function(result){
        console.log(result)
        window.location = "../index.html"
      }
    })
  })
})
