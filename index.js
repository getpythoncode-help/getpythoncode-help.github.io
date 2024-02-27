const header = document.querySelector("header");
fetch("/header.html")
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    })