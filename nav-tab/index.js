const tabLinkELs = document.querySelectorAll(".tab-link");
const tabContentELs = document.querySelectorAll(".tab-content");

tabLinkELs.forEach((el) => {
	el.addEventListener("click", (e) => {
		const data = el.dataset.id;
		tabContentELs.forEach((el) => {
			if (el.id === data) {
				if (
					e.target.classList.contains("active-link") &&
					el.classList.contains("active-tab")
				) {
					e.target.disabled = true;
				} else {
					e.target.classList.add("active-link");
					el.classList.add("active-tab");
				}
			} else {
				document
					.querySelector(`[data-id=${el.id}]`)
					.classList.remove("active-link");

				el.classList.remove("active-tab");
			}
		});
	});
});
