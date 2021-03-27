function loadAPI() {
    let url = "https://xkcd.now.sh/?comic=latest";
    fetch(url).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw `${response.status} ${response.statusText}`;
    })
        .then(function (data) {
            console.log(data);
            processData(data);

        })
        .catch(function (error) {

            console.log("There are some Errors", error);
        })

}

function processData(data) {
    
    let imgDiv = document.querySelector(".imgDiv");
    let img = document.createElement("img");
    img.src = data.img;
    imgDiv.appendChild(img);
}


 window.onload = loadAPI;

