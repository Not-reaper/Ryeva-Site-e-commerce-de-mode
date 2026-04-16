// Fonction pour ajouter un produit au panier (stocké dans le localStorage)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

// Met à jour le compteur d'articles dans le panier (icône avec id="in-cart-items-num")
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartNum = document.getElementById('in-cart-items-num');

    if (cartNum) cartNum.textContent = totalItems;
}

// Affiche les articles dans le panier sur la page panier (si structure présente)
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTableBody = document.getElementById('cart-tablebody');
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('.total h3');

    if (cartItemsContainer) cartItemsContainer.innerHTML = '';
    if (cartTableBody) cartTableBody.innerHTML = '';

    let subtotal = 0;

    cart.forEach(product => {
        subtotal += product.price * product.quantity;

        if (cartItemsContainer) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p>Quantité : ${product.quantity}</p>
                    <p>Prix : ${(product.price * product.quantity).toFixed(2)}€</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        }

        if (cartTableBody) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price.toFixed(2)}€</td>
                <td>${product.quantity}</td>
            `;
            cartTableBody.appendChild(row);
        }
    });

    if (subtotalElement) {
        subtotalElement.textContent = subtotal.toFixed(2);
    }

    if (totalElement) {
        totalElement.textContent = `Total : ${subtotal.toFixed(2)}€`;
    }
}

// Vide complètement le panier
function clearCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Le panier est déjà vide!');
        return;
    }

    localStorage.removeItem('cart');
    updateCartCounter();
    displayCartItems();
    alert('Le panier a été vidé !');
}

// Exécute tout une fois le DOM chargé
document.addEventListener('DOMContentLoaded', function () {
    updateCartCounter();
    displayCartItems();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const clearCartButton = document.getElementById('clear-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: parseFloat(button.getAttribute('data-price').replace(',', '.')),
                img: button.getAttribute('data-img')
            };

            addToCart(product);
            alert(`${product.name} ajouté au panier !`);
        });
    });

    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});


// Quand on clique sur "Passer la commande", on redirige vers la page commande
document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.getElementById('order-button');
    if (orderButton) {
        orderButton.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert("Votre panier est vide !");
                return;
            }
            window.location.href = 'commande.html';
        });
    }
});
