const accordionContainerEL = document.querySelector(".container");
const accordionItemELs = document.querySelectorAll(".item-container");

const showContent = (el) => {
	el.querySelector(".item-header").classList.toggle("isopen");
	el.querySelector(".btn").classList.toggle("isopen");
	el.querySelector(".item-content").classList.toggle("isopen");
};

const hideContent = (el) => {
	el.querySelector(".item-header").classList.remove("isopen");
	el.querySelector(".btn").classList.remove("isopen");
	el.querySelector(".item-content").classList.remove("isopen");
};

accordionItemELs.forEach((el) => {
	el.addEventListener("click", () => {
		let prevSibling = el.previousElementSibling;
		let nextSibling = el.nextElementSibling;

		if (el === accordionContainerEL.firstElementChild) {
			while (nextSibling) {
				hideContent(nextSibling);
				nextSibling = nextSibling.nextElementSibling;
			}

			showContent(el);
		} else if (el === accordionContainerEL.lastElementChild) {
			while (prevSibling) {
				hideContent(prevSibling);
				prevSibling = prevSibling.previousElementSibling;
			}

			showContent(el);
		} else {
			if (prevSibling) {
				hideContent(prevSibling);
			}

			if (nextSibling) {
				hideContent(nextSibling);
			}

			showContent(el);
		}
	});
});
