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
      var commentorDiv = $('<div>').addClass('guest-name')
                                 .append(returnData.guestname);
      commentFullDiv.append(commentDiv).append(commentorDiv);
      $('#messageBoard').prepend(commentFullDiv);
    }).done(function(){
      $('#message-text-area').val("");
      $('#message-commentor').val("");
    });
  });
});
