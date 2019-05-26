
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
    if (xhr.status >= 200 && xhr.status < 400) {   
        // Make sure we successfully received data
        let rawData = this.response;
        let data = rawData.substring(1, rawData.length-2);
        let br = data.replace(/\\n\b/g, "<br>");
        r.innerHTML = br;
    }
}

// Send HTTP Request
xhr.send();
