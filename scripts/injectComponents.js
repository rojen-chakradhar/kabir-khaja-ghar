fetch("../components/navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar-placeholder").innerHTML = data;
	});

fetch("../components/footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footer-placeholder").innerHTML = data;
	});
