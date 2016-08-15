$(function() {
$(".concatDIZ").click(function() {
  $(function() {
    var stringone = $("input#FavThing1").val();
    var stringtwo = $("input#FavThing2").val();
    var stringthree = $("input#FavThing3").val();
    var arraynew = [stringone, stringtwo, stringthree];

    alert(arraynew);

    var arraynewest = [arraynew[1],arraynew[0],arraynew[2]];

    alert(arraynewest);

    $(".thing1").text(arraynewest[0])
    $(".thing2").text(arraynewest[1])
    $(".thing3").text(arraynewest[2])


  });
});
});
