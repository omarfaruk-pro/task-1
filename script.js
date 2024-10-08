// menu
{
    let hamburger = document.getElementById("hamburger");
    let mainMenu= document.getElementById("main-menu");
    let closeMenu= document.getElementById("close-menu");
    let body = document.querySelector("body");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mainMenu.classList.toggle("active");
        body.classList.toggle("backdrop");
    });
    closeMenu.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mainMenu.classList.toggle("active");
        body.classList.toggle("backdrop");
    });
    body.addEventListener("click", (e) => {
        if (e.target.classList.value === "backdrop") {
            hamburger.classList.toggle("active");
            mainMenu.classList.toggle("active");
            body.classList.toggle("backdrop");
        }
    });
}
// popup
{
    let popupClick = document.querySelectorAll(".popup-click");
        let popup = document.querySelector("#popup");
        let closepopup = document.querySelector(".popup-close");

        
        popupClick.forEach((btn) => {
             btn.addEventListener("click", () => {
                popup.classList.add("open");
                }); 
            })

        function closePopup() {
            popup.classList.add("popup-closing");
            popup.classList.remove("open");
            setTimeout(() => {
                popup.classList.remove("popup-closing");
            }, 600); 
        }

        closepopup.addEventListener("click", closePopup);

        document.body.addEventListener("click", (event) => {
            if (event.target.id === "popup") {
                closePopup();
            }
        });
}
// accordion
{
    let accordionHead = document.querySelectorAll(".accordion-head");
    let accordionContent = document.querySelectorAll(".accordion-content");
    accordionHead.forEach((head) => {
        head.addEventListener("click", () => {
            accordionContent.forEach((content) => {
                
                if (content.parentElement === head.parentElement) {
                    if (!content.classList.contains("open")) {
                        content.style.maxHeight = content.scrollHeight + "px";
                        content.classList.add("open");
                        head.classList.add("open");
                    } else {
                        content.style.maxHeight = null;
                        content.classList.remove("open");
                        head.classList.remove("open");
                    }
                } else {
                    content.style.maxHeight = null;
                    content.classList.remove("open");
                    let otherHead = content.previousElementSibling; 
                    if (otherHead) {
                        otherHead.classList.remove("open"); 
                    }

                }
            });
        });
    });

}