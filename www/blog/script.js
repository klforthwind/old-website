
// Get page data
console.log(page);
page = (page ? page : "");

// Get element that data will be put in
let r = document.getElementById('root');

// Make an HTTP Request for data
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.klforthwind.com:4242/blog/' + page, true);

// Handle data properly
xhr.onload = function () {
    let data = this.response;
    if (xhr.status >= 200 && xhr.status < 400) {
        r.innerHTML = data.substring(1, data.length-2);
    }
}

// Send HTTP Request
xhr.send();
