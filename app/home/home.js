const button = document.querySelector('.slider')
const filter = document.querySelector('.method-filter')


button.addEventListener("click", () => {
    filter.style.width = "0";
    filter.style.height = "0";
})