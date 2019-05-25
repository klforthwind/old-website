function loadPost(name) {
    var request = new XMLHttpRequest();
    var restAPI = 'klforthwind.com:4242/blog/' + name;
    request.open('GET', restAPI, true);
    request.onload = function () {
        var data = this.response;
        if (request.status >= 200 && request.status < 400) {
            document.write(data);
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "Rawr XD, this page just got rawr xdeeed!";
            document.write(errorMessage);
        }
    }

    request.send();
}