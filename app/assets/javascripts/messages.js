$(function(){
  $('form').on('submit',function(event){
    event.preventDefault();
    $.ajax({
      url:'/messages',
      method: 'post',
      data: $(this).serialize(),
      dataType: 'json'
    }).success(function(returnData){
      var commentFullDiv = $('<div>').addClass('fullMessage');
      var commentDiv = $('<p>').addClass('comment')
                             .append(returnData.text);
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var returnDate = new Date();
      var month = months[returnDate.getMonth()];
      var date = returnDate.getDate();
      var year = returnDate.getFullYear();
      var getHour = returnDate.getHours();
      var hour = (getHour>12)? getHour-12:getHour;
      var minute = (returnDate.getMinutes()<10)? "0"+returnDate.getMinutes():returnDate.getMinutes();
      var ampm = (getHour>12)? "PM":"AM";

      var commentorDiv = $('<div>').addClass('guest-name');
      commentorDiv.append(returnData.guestname + " wrote on " + month + " " + date + ", " + year + " at " + hour + ":" + minute + " " + ampm);
      commentFullDiv.append(commentDiv).append(commentorDiv);
      $('#messageBoard').prepend(commentFullDiv);
    }).done(function(){
      $('#message-text-area').val("");
      $('#message-commentor').val("");
    });
  });
});
