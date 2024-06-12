const modalEl = document.getElementById("modal");
const xMarkEL = document.getElementById("close-modal");

const btnLaunchEl = document.getElementById("btn-launch");
const btnCloseEl = document.getElementById("close-btn");
console.log(btnLaunchEl);

const closeModal = () => {
	modalEl.classList.remove("is-open");
};

btnLaunchEl.addEventListener("click", () => {
	console.log(modalEl);
	modalEl.classList.add("is-open");
});

btnCloseEl.addEventListener("click", closeModal);

xMarkEL.addEventListener("click", closeModal);
