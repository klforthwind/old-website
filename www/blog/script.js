function loadPost(name) {
    if (name==undefined) {
        name = "";
    }
    const app = document.getElementById('root');

    var request = new XMLHttpRequest();
    var restAPI = 'https://www.klforthwind.com:4242/blog/' + name;
    request.open('GET', restAPI, true);
    request.onload = function () {
        var data = this.response;
        if (request.status >= 200 && request.status < 400) {
            const p = document.createElement('p');
            p.textContent = data;
            app.appendChild(p);
        }
    }

    request.send();
}