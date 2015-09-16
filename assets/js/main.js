var $form = $('form')
var $userName = $('#usernameInput')
var $passWord = $('#passwordInput')
var $userError = $('#user-error')
var $passwordError = $('#passwordError')



function errors(){
  if($userName.val() === ''){
    $userError.text('Please enter an email address before logging in.')
  }

}
$form.on('submit', function(){

})
