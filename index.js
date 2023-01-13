const input = document.querySelector("#input-number")
const button = document.querySelector("#btn")
const refresh = document.querySelector("#refresh")
const komut = document.querySelector(".komut")
let attempt = document.querySelector(".attempt span")
let randomNum = Math.floor(Math.random()*100)

console.log(randomNum);

button.addEventListener("click", () => {
    attempt.innerText = parseInt(attempt.innerText) + 1 //Attempt değerini parseInt ile number a çevirip her tıklamada number of attempts sayısının 1 artırılmasını sağladım.
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
        komut.innerText = `CONGRULATIONS! The number is ${randomNum}.`
        input.value = ""
    } else if (tahmin!==Number) {
        komut.innerText = `You should enter a valid value!`
        input.value = ""
        input.focus()
    }
})

//Aşağıda input a değer girilip Enter a basıldığında tetiklenmesini yani click() fonksiyonunu çalıştırmasını sağladım.
input.addEventListener("keydown", (event)=> {
    if (event.code==="Enter") {button.click()}
})

//Aşağıda refresh butonuna tıklandığında sayfanın yenilenmesini sağladım.
refresh.addEventListener("click", () => {
    location.reload()
})
