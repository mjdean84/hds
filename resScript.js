function checkPassword() {
    let password = document.getElementById('password').value;

    if (password == 'password' || cookie == 'logged in') {
        $('#resources').slideToggle();
        $('#login').css('display', 'none');
        alert('The database will be demonstrated locally');
    } else {
        alert('The password is "password"');
    }
}