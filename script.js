
const outputDiv = document.getElementById('output');

//fetch
document.getElementById('fetchFetchBtn').addEventListener('click', function(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            outputDiv.innerHTML = `${data.body}`   
        })
        .catch(error => {
            displayError('Fetch Error')
        })
});


function reqListener(){
    const parsed= JSON.parse(this.responseText);
    outputDiv.innerHTML = `${parsed.body}`

}

//XMLHttpRequest
document.getElementById('XMLHttpRequest').addEventListener('click', function(){
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://jsonplaceholder.typicode.com/posts/2")
    req.send();
    if (req.status != 200) {
        Error
    }
        
});
    


document.getElementById('XMLHttpRequest').addEventListener('click', function(){
    const userInput = document.getElementById('userInput').value

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({body: userInput})
            })
            .then(response => {
                outputDiv.innerHTML = `${data.body}`
            })
            

    })


const userInputPut = document.getElementById('userInput').value
document.getElementById('XMLHttpPut').addEventListener('click', function(){

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/{id}");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify({
        body: userInputPut
    }));

    if (xhr.status != 200) {
        outputDiv.innerHTML = "Error"
    }
    else {
        outputDiv.innerHTML = `${data.title}`
    }
})

