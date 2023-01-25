const input = document.querySelector("#input-number")
const button = document.querySelector("#btn")
const refresh = document.querySelector("#refresh")
const komut = document.querySelector(".komut")
let attempt = document.querySelector(".attempt span")
let randomNum = Math.ceil(Math.random()*100)

const clapSound = () => {
let sound = new Audio("clapSound.mp3")
sound.play()
} //Alkış sesi çalan clapSound isminde bir fonksiyon oluşturdum.

window.addEventListener("load", ()=>{
    input.focus()
})

button.addEventListener("click", () => {
    attempt.innerText = parseInt(attempt.innerText) + 1 
    let tahmin = input.value
    if (tahmin<0 || tahmin >100) {
        komut.innerText = "The number should be between 0 - 100"
        input.value = "" //Değeri girip tıkladıktan sonra value sıfırlanacak.
        input.focus() //Value da sıfırlandıktan sonra tekrar input a gelecek.
    } else if (tahmin>randomNum) {
        komut.innerText = `Enter a smaller number!`
        input.value = ""
        input.focus()
    } else if (tahmin<randomNum) {
        komut.innerText = `Enter a bigger number!`
        input.value = ""
        input.focus()
    } else if (tahmin==randomNum) {
        komut.innerText = `CONGRATULATIONS! The number is ${randomNum}.`
        clapSound()
        input.value = ""
    }
    if (attempt.innerText == 5 && tahmin != randomNum) {
        alert("You have lost! Try again!")
        location.reload()
    }
})

//Aşağıda input a değer girilip Enter a basıldığında tetiklenmesini yani click() fonksiyonunu çalıştırmasını sağladım.
input.addEventListener("keydown", (event)=> {
    if (event.code==="Enter") {button.click()}
})

//Aşağıda refresh butonuna tıklandığında sayfanın yenilenmesini sağladım.
refresh.addEventListener("click", () => {
    location.reload()
    input.focus()
})
