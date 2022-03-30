const apiKey = "KzWbfntmytNcoeo9ygrJJdIstwy3bjtB";
// const giphyInput = document.getElementById("giphyInput");
const giphyInputNumber = document.getElementById("giphyInputNumber");
const searchGif = document.getElementById("searchGif");
const imageResult = document.getElementById("imageResult");
searchGif.addEventListener("click", imagesOutput);
function imagesOutput() {
    let searchName = giphyInput.value;
    let searchNumber = giphyInputNumber.value;
    if (searchName === "") {
        alert("Please enter your key words first")
    } else {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchName}&limit=${searchNumber}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const resultDataArray = data.data;
                for (let i = 0; i < resultDataArray.length; i++) {
                    const http = resultDataArray[i].images.downsized.url;
                    const altCotent = resultDataArray[i].title;
                    const Li = document.createElement("li");
                    const image = document.createElement("img");
                    //    image.style.width = "400px";
                    //    image.style.height = "auto";
                    image.src = http;
                    image.alt = altCotent;
                    Li.appendChild(image);
                    imageResult.appendChild(Li);
                    giphyInput.value = ""
                    giphyInput.addEventListener("input", reload)
                }
            });
    }
}
function reload() {
    window.location.reload(true);
}


