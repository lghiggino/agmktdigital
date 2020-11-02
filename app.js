// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggleButton = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

//só usar esse approach se soubermos a quantidade de links e a altura desejada dessa classe show-links. 
// navToggleButton.addEventListener("click", () => {
//     linksContainer.classList.toggle("show-links");
// })

//setup da navbar com quantidade variável de links e altura calculada dinamicamente - mais fácil de expandir
navToggleButton.addEventListener("click", () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else {
        linksContainer.style.height = 0
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", () => {
   const scrollHeight = window.pageYOffset
   const navbarHeight = navbar.getBoundingClientRect().height;
   if(scrollHeight > navbarHeight){
       navbar.classList.add("fixed-nav")
   }else navbar.classList.remove("fixed-nav");

   if(scrollHeight > 500){
       topLink.classList.add("show-link")
   }else topLink.classList.remove("show-link")
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight ;
        if(!fixedNav){
            position = position - navHeight;
        }
        else if (navHeight > 101){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})

// form control

let cadastro = [] 

function formControl(){
    const formButton = document.querySelector("#mc-embedded-subscribe");
    const formName = document.querySelector("#form-name");
    const formPhone = document.querySelector("#form-phone");
    const formEmail = document.querySelector("#form-email");
    const formMessage = document.querySelector("#form-message");  
    
    formButton.addEventListener("click", (e) => {
        e.preventDefault()
        let varId = new Date().getTime().toString()
        let object = new Object
        object.id = varId
        object.name = formName.value
        object.phone = formPhone.value
        object.email = formEmail.value
        object.message = formMessage.value
        cadastro.push({id: object.id, name: object.name, phone: object.phone, email: object.email, message: object.message})

        formName.value = "";
        formPhone.value = "";
        formEmail.value  = "";
        formMessage.value = "Agradecemos o contato. Retornaremos em breve"
    })

    return {cadastro}
}
formControl()


//flip card


let fronts = document.querySelectorAll(".front");
let backs = document.querySelectorAll(".back")   

fronts.forEach(front => {
    let frontID = front.dataset.id;
    front.addEventListener("mouseenter", () => {
        //console.log(frontID)
        front.classList.add("is-hidden")
        backs.forEach(back => {
            let backID = back.dataset.id;
            if (frontID === backID){
                back.classList.remove("is-hidden");
            }
            back.addEventListener("mouseleave", () => {
                back.classList.add("is-hidden");
                front.classList.remove("is-hidden")
            })
        })
    })
})


//modals

const modalBtns = document.querySelectorAll(".modal-btn");
const modals = document.querySelectorAll(".modal");
const modalBgs = document.querySelectorAll(".modal-background")

modalBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e.target.parentElement.dataset["id"])
        modals.forEach(modal => {
            if (modal.classList.contains(e.target.parentElement.dataset["id"])){
                modal.classList.add("is-active");
            };
        });
    });
});

modalBgs.forEach(bg => {
    bg.addEventListener("click", () => {
        modals.forEach(modal => {
            modal.classList.remove("is-active")
        })
    })
});
