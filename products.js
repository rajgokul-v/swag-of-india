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
		}
	]
}

let ul = document.querySelector('#todoList')
ul.innerText = ' '
Products.forEach((product) => {
	var img = document.createElement('img')
	img.src = product.imageName
	document.write(`<p>${product.name}</p>`)

	ul.appendChild(img).classList.add('card')
})
