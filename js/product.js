let products = [
    {
        id: 1,
        name: 'Product 1',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 3,
        name: 'Product 3',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 4,
        name: 'Product 4',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 5,
        name: 'Product 5',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 6,
        name: 'Product 6',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 7,
        name: 'Product 7',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 8,
        name: 'Product 8',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 9,
        name: 'Product 9',
        image: '../img/products.jpg',
        price: 100
    },
    {
        id: 10,
        name: 'Product 10',
        image: '../img/products.jpg',
        price: 100
    }
]

const productListEle = document.getElementById("list-product");

const renderProduct = () => {
    const products = JSON.parse(localStorage.getItem(PRODUCT_KEY)) ?? []
    const productItems = products.map(p => `
        <li class="product-item col-3">
            <div class="img-hover-zoom">
                <a href="product.html" >
                    <img src="${p.image}" alt="${p.id}">
                </a>
            </div>
            <div class="product-content">
                <h3 class="product-name">${p.name}</h3>
                <p>$ ${p.price}</p>
                <button class="btn btn-primary" type="button" onClick="addToCart(${p.id})">Add Cart</button>
            </div>
        </li>
    `) 
    console.log(productListEle)
    productListEle.innerHTML = productItems.join('')
}
localStorage.setItem(PRODUCT_KEY, JSON.stringify(products))
renderProduct()
renderCartTotal()