var link = $('.link');
link.on("click", function(){
    link.removeClass("active")
    $(this).addClass("active")
})
