{
	Products = [
		{
			id: '1',
			name: 'Awesome Product 1',
			price: '28.4',
			priceAfterDiscount: '25',
			imageName: './images/product1.png',
			isNew: 'TRUE',
			ratings: '3.2'
		},
		{
			id: '2',
			name: 'Cool Product 2',
			price: '63.9',
			priceAfterDiscount: '40',
			imageName: './images/product2.png',
			isNew: 'FALSE',
			ratings: '4.8'
		},
		{
			id: '3',
			name: 'Amazing Product 3',
			price: '26.4',
			priceAfterDiscount: '19',
			imageName: './images/product3.png',
			isNew: 'FALSE',
			ratings: '2.7'
		},
		{
			id: '4',
			name: 'Huge Product 4',
			price: '58.1',
			priceAfterDiscount: '50',
			imageName: './images/product4.png',
			isNew: 'TRUE',
			ratings: '4.1'
		},
		{
			id: '5',
			name: 'Tiny Product 5',
			price: '58.3',
			priceAfterDiscount: '48',
			imageName: './images/product5.png',
			isNew: 'FALSE',
			ratings: '5'
		},
		{
			id: '6',
			name: 'Expensive Product 6',
			price: '82.4',
			priceAfterDiscount: '77',
			imageName: './images/product6.png',
			isNew: 'TRUE',
			ratings: '4.4'
		},
		{
			id: '7',
			name: 'Awesome Product 1',
			price: '28.4',
			priceAfterDiscount: '25',
			imageName: './images/product1.png',
			isNew: 'TRUE',
			ratings: '3.2'
		},
		{
			id: '8',
			name: 'Cool Product 2',
			price: '63.9',
			priceAfterDiscount: '40',
			imageName: './images/product2.png',
			isNew: 'FALSE',
			ratings: '4.8'
		},
		{
			id: '9',
			name: 'Amazing Product 3',
			price: '26.4',
			priceAfterDiscount: '19',
			imageName: './images/product3.png',
			isNew: 'FALSE',
			ratings: '2.7'
		},
		{
			id: '10',
			name: 'Huge Product 4',
			price: '58.1',
			priceAfterDiscount: '50',
			imageName: './images/product4.png',
			isNew: 'TRUE',
			ratings: '4.1'
		},
		{
			id: '11',
			name: 'Tiny Product 5',
			price: '58.3',
			priceAfterDiscount: '48',
			imageName: './images/product5.png',
			isNew: 'FALSE',
			ratings: '5'
		},
		{
			id: '12',
			name: 'Expensive Product 6',
			price: '82.4',
			priceAfterDiscount: '77',
			imageName: './images/product6.png',
			isNew: 'TRUE',
			ratings: '4.4'
		}
	]
}

let all = document.querySelector('#productListArea')
let htmltoreturn = '',
	reviews = '',
	lowstar = 0,
	i = 0
isNew = ''
all.innerText = ' '
Products.forEach((product) => {
	htmltoreturn =
		'<div id="product' +
		product.id +
		'" class="card col-xl-3 col-lg-3 col-lg-md-4 m-3">' +
		'<img class="img-over" src="' +
		product.imageName +
		'" class="card-img-top" alt="product">'
	isNew += '<div class="new-product">' + '<span>New</span>' + '</div>'
	if (product.isNew == 'TRUE') htmltoreturn += isNew
	isNew = ''
	htmltoreturn +=
		'<div id="product-hover">' +
		'<div id="icon1">' +
		'<img  src="./images/wishlist.png" alt="wishlist">' +
		'</div>' +
		'<div id="icon2">' +
		'<img  src="./images/view.png" alt="wishlist">' +
		'</div>' +
		'<div id="icon3">' +
		'<img  src="./images/cart.png" alt="wishlist">' +
		'</div>' +
		'</div>' +
		'<div class="card-body">' +
		'<h6 class="card-text">' +
		product.name +
		'</h6>' +
		'<h6 class="card-text">Rs.' +
		product.price +
		' <del>RS.' +
		product.priceAfterDiscount +
		'</del><span style="color: orange;">(60% off)</span></h6>' +
		'<div class="productcaption">' +
		'<ul>'
	lowstar = 6 - product.ratings
	if (product.ratings == 5) lowstar = 0

	for (i = 1; i <= product.ratings; i++) {
		reviews += '<li><i class="bx bxs-star" ></i></li>'
	}
	for (i = 1; i < lowstar; i++) {
		reviews += '<li><i class="bx bx-star"></i></li>'
	}
	lowstar = 0
	htmltoreturn += reviews + product.ratings + '/5'
	reviews = ''
	htmltoreturn += '</ul>' + '<div>' + '</div>' + '</div>'
	document.getElementById('productListArea').innerHTML += htmltoreturn
})

// on hover of the any product code
document.querySelectorAll('#product-hover').forEach((p) => {
	p.classList.add('hide')
})

document.querySelectorAll('div[class^="card"]').forEach((p) => {
	p.addEventListener('mouseover', (e) => {
		p.querySelector('.img-over').classList.add('blur')
		p.querySelector('#product-hover').classList.remove('hide')
	})
})

document.querySelectorAll('div[class^="card"]').forEach((p) => {
	p.addEventListener('mouseout', (e) => {
		p.querySelector('.img-over').classList.remove('blur')
		p.querySelector('#product-hover').classList.remove('show')
		p.querySelector('#product-hover').classList.add('hide')
	})
})
