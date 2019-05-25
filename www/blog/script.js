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
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            const root = document.getElementById('root');
            root.value = data;
        }
    }

    request.send();
}

loadPost();