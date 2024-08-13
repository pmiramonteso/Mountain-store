var products = [
    {
        id: 1,
        name: 'Skis',
        price: 216.5,
        type: 'ski',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Poles',
        price: 97.25,
        type: 'ski'
    },
    {
        id: 3,
        name: 'Boots',
        price: 353,
        type: 'ski',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'Helmets',
        price: 84,
        type: 'snowboard'
    },
    {
        id: 5,
        name: 'Table',
        price: 566.5,
        type: 'snowboard'
    },
    {
        id: 6,
        name: 'Bindings',
        price: 187.75,
        type: 'snowboard'
    },
    {
        id: 7,
        name: 'Jacket',
        price: 210,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Gloves',
        price: 89.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Pants',
        price: 79.99,
        type: 'clothes'
    }
]

var cart = [];

var total = 0;

function showNotification(mensaje, type) {
    const notificacion = document.getElementById('notificacion');

    notificacion.className = `alert alert-${type}`;
    notificacion.textContent = mensaje;

    notificacion.style.opacity = '1';
    notificacion.style.display = 'block';
    notificacion.style.position = 'fixed';
    notificacion.style.top = '10px'; 
    notificacion.style.left = '50%';
    notificacion.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notificacion.style.color = 'white'; 
    notificacion.style.transform = 'translateX(-50%)';
    notificacion.style.zIndex = '9999';

    setTimeout(() => {
        notificacion.style.opacity = '0';
        setTimeout(() => {
            notificacion.style.display = 'none';
        }, 500);
    }, 3000);
}

function buy(id) {
    let productoEncontrado = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            productoEncontrado = products[i];
            break;
        }
    }
    if (productoEncontrado) {
        let productoCarrito = null;
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].id === id) {
                productoCarrito = cart[j];
                break;
            }
        }
        if (productoCarrito) {
            productoCarrito.quantity += 1;
            showNotification('Añades más de ' + productoCarrito.name + '. Cantidad actual: ' + productoCarrito.quantity);
        } else {
            cart.push({...productoEncontrado, quantity: 1});
            showNotification('Producto añadido al carrito: ' + productoEncontrado.name);
        }
        applyPromotionsCart();
        printCart();
        updateCartCount();
    } else {
        showNotification('Producto no encontrado');
    }
}

function updateCartCount() {
    const countElement = document.getElementById('count_product');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.textContent = totalItems;
}

function cleanCart() {
    cart = [];
    const cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';

    const precioTotal = document.getElementById('total_price');
    precioTotal.textContent = '0.00';

    console.log('Carrito vaciado');
}

function calculateTotal() {
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity
    } return total;
}


function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
    
    if (item.name.toLowerCase().includes('poles') && item.quantity >= 3) {
        item.subTotalWithDiscount = (item.price * item.quantity * 0.80).toFixed(2);
    }
    else if (item.name.toLowerCase().includes('gloves') && item.quantity >= 10) {
        item.subTotalWithDiscount = (item.price * item.quantity * 0.70).toFixed(2);
    } else {
        item.subTotalWithDiscount = (item.price * item.quantity).toFixed(2);
    }
}
console.log('Promociones aplicadas');
printCart();
}

function printCart() {
    const cartList = document.getElementById('cart_list');
    const totalPriceElement = document.getElementById('total_price');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.subTotalWithDiscount 
                         ? parseFloat(item.subTotalWithDiscount) 
                         : (item.price * item.quantity);
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
             <td>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})" class="btn btn-primary btn-sm">-</button>
                    <button onclick="increaseQuantity(${item.id})" class="btn btn-primary btn-sm">+</button>
                </div>
            </td>
        `;
        cartList.appendChild(row);
    });
    totalPriceElement.textContent = total.toFixed(2);
}

function increaseQuantity(id) {
    let productoCarrito = cart.find(item => item.id === id);
    if (productoCarrito) {
        productoCarrito.quantity += 1;
        applyPromotionsCart();
        printCart();
        updateCartCount();
    }
}

function decreaseQuantity(id) {
    let productoCarrito = cart.find(item => item.id === id);
    if (productoCarrito) {
        if (productoCarrito.quantity > 1) {
            productoCarrito.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== id);
        }
        applyPromotionsCart();
        printCart();
        updateCartCount();
    }
}

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity -= 1;
                console.log('Cantidad de productos reducida', cart[i]);
            } else {
                cart.splice(i, 1);
                console.log('Producto eliminado del carrito');
            }
            break;
        }
    }
    applyPromotionsCart();
    printCart();
}

function open_modal() {
    printCart();
}