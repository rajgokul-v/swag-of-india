$(document).ready(function () {
	fetch('/header.html')
		.then((response) => response.text())
		.then(function (headerHtml) {
			$('#main-header').html(headerHtml)
		})
	fetch('/footer.html')
		.then((response) => response.text())
		.then(function (footerHtml) {
			$('#main-footer').html(footerHtml)
			fetch('/productList.html')
				.then((response) => response.text())
				.then(function (homePageHtml) {
					$('#main-container').html(homePageHtml)
				})
		})
})

$(document).on('click', '#register', function () {
	fetch('/login.html')
		.then((response) => response.text())
		.then(function (loginHtml) {
			$('#main-container').html(loginHtml)
		})
})

// fetch('/homePage.html')
// 	.then((response) => response.text())
// 	.then(function (homePageHtml) {
// 		$('#main-container').html(homePageHtml)
// 	})
