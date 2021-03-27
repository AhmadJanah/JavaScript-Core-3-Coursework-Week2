function loadAPI(){
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url).then(function (response){
        if (response.ok){
            return response.json();
        }
        throw `${response.status} ${response.statusText}`;
    })
    .then(function(data){
        processData(data);

    })
    .catch(function (error) {
        
        console.log("There are some Errors", error);
    })

}

function processData(data){
    let imgul = document.getElementById("ulimg");
    let imgli = document.createElement("li");
    let img = document.createElement("img");
    img.src = data.message;
    imgli.appendChild(img);
    imgul.appendChild(imgli);
}

function ChangeImg(){
    loadAPI();
}
