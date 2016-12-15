$(document).ready(function(){

	var getdata = function(){
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json",     function(json){
        $("#content").html(JSON.stringify(json.quote));
        $("#author").html(JSON.stringify(json.author));
			$("#twitter").attr("href", 'https://twitter.com/intent/tweet?text=' + json.quote);
      });

	}


	$(".changeQuote").on("click",function(){
		getdata();
	});


//Function call
	getdata();
});
