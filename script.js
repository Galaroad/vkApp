const btn = document.querySelector(".main__button");
const input = document.querySelector(".main__input");

btn.addEventListener("click", () => {
    if(input.value === '') {
        alert('гоу в калик');
    } input.value = '';
})

input.addEventListener("keyup", () => {
    if(input.value === '' && event.key ==="Enter") {
        alert('гоу в калик');
    } else if (input.value !== '' && event.key ==="Enter") {
        input.value = '';
    } console.log("Не повезло")
})
