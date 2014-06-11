$(document).ready(function(){
	  $.ajax({
	    type:"GET",
	    url:"http://14.32.7.49:3334/listName",
	    dataType:"JSON",
	    success: function(jsonObj) {
	      $(jsonObj).each(function(index){
	    	var uno = jsonObj[index].UNO;
	      if(jsonObj[index].PHOT_STAT==0){
	        $('<div>').addClass('grid').append($('<div>').addClass('memoInfo')
	           .append($('<button>퍼가기</button>').addClass('fav'))
	            .append($('<span>').addClass('userName').text(jsonObj[index].NAME))
	            .append($('<br>'))
	            .append($('<span>').addClass('date').text(jsonObj[index].DATETIME)))
	            .append($('<p>').text(jsonObj[index].DEST))
	            .appendTo($('#container'));
	      }else{
	        $('<div>').addClass('grid').append($('<div>').addClass('memoInfo')
	            .append($('<button>퍼가기</button>').addClass('fav'))
	            .append($('<span>').addClass('userName').text(jsonObj[index].NAME))
	            .append($('<br>'))
	            .append($('<span>').addClass('date').text(jsonObj[index].DATETIME)))
	            .append($('<img>').attr('src', 'http://14.32.7.49:3334/images/'+jsonObj[index].PHOT_PATH))
	            .append($('<p>').text(jsonObj[index].DEST))
	            .appendTo($('#container'));
	      }
	     });
	    },
	    error: function(err) {
	      alert('err발생 했음');
	    }
	  });
	});