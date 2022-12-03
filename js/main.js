async function updateCountry() {
	var contacts = new Map()

	contacts.set('india', '+91968668698')
	contacts.set('uae', '+00 9718769878')
	contacts.set('usa', '+00 1968675655')
	contacts.set('canada', '+00 1977665645')

	document.getElementById('select1').addEventListener('change', () => {
		let country = document.getElementById('select1').value
		document.getElementById('number').innerText = contacts.get(country)
		document.getElementById('flag1').src = `./images/${country}.png`
	})

	// scroll arrow hide

	// document.getElementById('scrollup').classList.add("hide")
	const getscroll = () => {
		let top = window.pageYOffset || document.documentElement.scrollTop
		return top
	}

	document.addEventListener('scroll', () => {
		var scroll = getscroll()
		var arrow = document.getElementById('scrollup')
		scrolled = () => {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		}
		if (scroll < 100) {
			document.getElementById('header-sticky').classList.remove('sticky-bar')
		} else {
			document.getElementById('header-sticky').classList.add('sticky-bar')
		}
		if (scroll > 500) {
			arrow.classList.remove('hide')
			arrow.classList.add('show')
			arrow.addEventListener('click', scrolled)
		} else {
			arrow.classList.remove('show')
			arrow.classList.add('hide')
			arrow.addEventListener('click', scrolled)
		}
	})
}

updateCountry()
