$(document).ready(function(){
  $.get("./movies")
  .then(function(movies){
    movies.forEach(function(movie){
      var li = $('<li>')
      li.attr('id', movie.id)
      li.append('<a href="/show/'+movie.id+'">'+movie.name+'</a>')
      li.append('<p>'+movie.year+'</p>')
      li.append('<p>'+movie.director+'</p>')
      li.append('<p>'+movie.rating+'</p>')
      li.append('<button class="delete">delete</button>')
      li.append('<a class="edit" href="/edit/'+movie.id+'">edit</a>')
      $('.info-cont').append(li).clone()

    })
    $('.delete').click(function(e){
      var id = parseInt($(this).parent().attr("id"))
      var par = $(this).parent()
      console.log(id)
      $.ajax({
        url: '/movies/'+id,
        type: 'DELETE',
        success: function(result) {
        // Do something with the result
        console.log(result)
        par.remove()
    }

});

    })
  })
})
