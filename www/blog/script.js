function loadPost() {
    console.log(page);
    if (page==undefined) {
        page = "";
    }
    const app = document.getElementById('root');

    var request = new XMLHttpRequest();
    var restAPI = 'https://www.klforthwind.com:4242/blog/' + page;
    request.open('GET', restAPI, true);
    request.onload = function () {
        var data = this.response;
        if (request.status >= 200 && request.status < 400) {
            const p = document.createElement('p');
            p.className = "floatLeft";
            p.textContent = data.substring(1, data.length-2);
            app.appendChild(p);
        }
    }

    request.send();
}

loadPost();