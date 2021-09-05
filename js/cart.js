const listCart = document.getElementById("list-cart")

const renderCart = () => {
    const productsInCart = JSON.parse(localStorage.getItem(CART_KEY)) ?? []
    const cartItemEle = productsInCart.map((product, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.total ?? 0}</td>
            <td>${product.price*product.total }</td>
            <td><a href="#" onClick="removeFromCart(${product.id}, this)"><i><i class="fas fa-trash-alt"></i></i></a></td>
        </tr>
    `)
    listCart.innerHTML = cartItemEle.join("")
}
renderCart()