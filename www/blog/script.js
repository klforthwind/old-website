
// Get page data
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
        // Special Data Manipulations
        data = data.replace(/\\n\b/g, "<br>");
        data = data.replace(/<br><br>/g, "");
        data = data.replace(/<\/h1><br><h2>/g, "</h1><h2>");
        data = data.replace(/\bsh\\n/g, "");
        data = data.replace(/\\\"/g, "\"");
        data = data.replace(/\\\\/g, "\\");
        data = data.replace(/<ul><br><li>/g, "<ul><li>");
        data = data.replace(/<\/li><br><\/ul>/g, "<\/li><\/ul>");
        data = data.replace(/<\/li><br><li>/g, "<\/li><li>");
        r.innerHTML = data;
        
        let pic = document.getElementById("picture");
        if(page) {
            pic.style.display='none';
        } else {
            pic.style.display='block';
        }
    }
}

// Send HTTP Request
xhr.send();
