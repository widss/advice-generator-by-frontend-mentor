let adviceId = $(".advice-id");
let adviceText=$(".advice-text");
function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        console.log(data)
        adviceId.text(`A D V I C E # ${data.id}`);
        adviceText.text(`"${data.advice}"`);
    })
    .catch((error) => {
        alert(`Error`);
    });
}

if ($(window).width() < 400) {
    $(".page-hr").attr('src',"images/pattern-divider-mobile.svg");
 }
 
showQuote();
