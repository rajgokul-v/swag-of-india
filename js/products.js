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

let all = document.querySelector('#productListArea')
all.innerText = ' '
Products.forEach((product) => {
 let htmltoreturn ='<div class="card col-xl-2 col-lg-2 col-lg-md-4 m-3">'+
'<img src="'+product.imageName+'" class="card-img-top" alt="product">'+
'<div class="card-body">'+
  '<h4 class="card-text">Dummy Text Lorel</h4>'+
  '<h6>Rs 1099.0<span style="color: orange;">(60% off)</span></h6>'+
  '<ul>'+
    '<li><i class="bx bxs-star" ></i></li>'+
    '<li><i class="bx bxs-star" ></i></li>'+
    '<li><i class="bx bxs-star" ></i></li>'+
    '<li><i class="bx bxs-star" ></i></li>'+
    '<li><i class="bx bxs-star-half" ></i></li>'+
  '</ul>'+
'</div>'+
'</div>'
document.getElementById("productListArea").innerHTML +=htmltoreturn
});
