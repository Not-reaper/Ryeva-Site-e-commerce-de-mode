// Affiche les articles dans la page commande
document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');

    let total = 0;

    cart.forEach(product => {
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
        orderSummary.appendChild(itemDiv);

        total += product.price * product.quantity;
    });

    orderTotal.textContent = `Total : ${total.toFixed(2)}€`;
});
