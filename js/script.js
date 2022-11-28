const toggleButton = document.getElementsByClassName("hamburger")[0]
const navbarLinks = document.getElementsByClassName("menu-list")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});