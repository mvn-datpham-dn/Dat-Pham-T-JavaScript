const PRODUCT_KEY = 'products';
const CART_KEY = 'cart';


const renderCartTotal = () => {
    const cartTotal = document.getElementById("cart-total")
    const productsInCart = (JSON.parse(localStorage.getItem(CART_KEY)) ?? [])
    cartTotal.textContent = productsInCart.length
}

const addToCart = (id) => {
    const productsInCart = JSON.parse(localStorage.getItem(CART_KEY)) ?? []
    const products = JSON.parse(localStorage.getItem(PRODUCT_KEY)) ?? []
    const found = products.find(p => p.id == id)
    if (!found) return
    const item = productsInCart.find(p => p.id == id)
    const newProduct = item ? 
        productsInCart.map(p => p.id != id ? p : ({...p, total: p?.total ? p.total +  1 : 1})) 
        : [...productsInCart, {...found, total: 1}]
    localStorage.setItem(CART_KEY, JSON.stringify(newProduct))
    renderCartTotal()
}

const removeFromCart = (id, aTags) => {
    // console.log(aTags)
    // aTags?.preventDefault()
    const productsInCart = JSON.parse(localStorage.getItem(CART_KEY)) ?? []
    const newProduct =  productsInCart.map(p => p.id != id ? p : ({...p, total: p?.total ? p.total - 1 : 0}))
        .filter(p => p && p?.total && p.total > 0) 
    localStorage.setItem(CART_KEY, JSON.stringify(newProduct))
    renderCart()
}