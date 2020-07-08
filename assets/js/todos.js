// check off completed to-do items by clicking on them
$("ul").on("click", "li", function(){
	//if li is gray turn it black
	$(this).toggleClass("completed");
});


// click on x to delete to-do item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


// add to-do items to list
$("input[type='text']").keypress(function(event){
	// only want to add item when 'enter' key is pressed
	if(event.which === 13){
		//grabbing new todo item from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});