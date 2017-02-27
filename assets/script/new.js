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
      url: '/newmovie',
      type: 'POST',
      data: movie,
      success: function(result){
        console.log(result)
        window.location = "./index.html"
      }
    })
  })
})
