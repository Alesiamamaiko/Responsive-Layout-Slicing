const contactsButton = document.querySelector(".contacts-button-wrapper");
const modal = document.querySelector(".modal");  
const modalContent = document.querySelector (".modal-content");
const modalCloseButton = document.querySelector (".modal-close-button");

contactsButton.onclick = () => {
    modal.classList.add("active");
};

modalCloseButton.onclick = () => {
    modal.classList.remove("active");
    purifyForm();
};


function purifyForm() { 
    modalContent.reset();
}; 


modal.onmousedown = function (event) {
    let target = event.target;
    if (target.closest('.' + modalContent.className) === null) {
      this.classList.remove("active");
    }
}; 



