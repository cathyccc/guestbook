$(function(){
  $('form').on('submit',function(event){
    event.preventDefault();
    $.ajax({
      url:'/messages',
      method: 'post',
      data: $(this).serialize(),
      dataType: 'json'
    }).success(function(returnData){
      $('#messageBoard').prepend(`<p class="comment">${returnData.text}</p>`);
    }).done(function(){
      $('#message-text-area').val("");
    });
  });
});
