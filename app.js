let word = document.getElementById("num1").value;
const sillyWords = `bamboozle kerfuffle, hodgepodge gobbledygook, hullabaloo lollygag, nincompoop whippersnapper, flibbertigibbet hootenanny,`.split(', ');


function wordChanger() {

    let loading = 'analysing... ';
    let randomNum = Math.floor(Math.random() * 9);
    document.write(word + loading);

    setTimeout(function () {
        document.write(sillyWords[randomNum]);
    }, 2000);
    console.log(randomNum);

}






