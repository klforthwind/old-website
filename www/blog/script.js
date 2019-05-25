function loadPost(name) {
    var request = new XMLHttpRequest();
    var restAPI = 'https://klforthwind.com:4242/blog/' + name;
    request.open('GET', restAPI, true);
    request.onload = function () {

    }

    request.send();
}