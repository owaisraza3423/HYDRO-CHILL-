let cart = [];

function addToCart(name, price) {
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({name: name, price: price, qty: 1});
  }
  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function renderCart() {
  const dropdown = document.getElementById('cart-dropdown');
  dropdown.innerHTML = '';

  if (cart.length === 0) {
    dropdown.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `${item.name} - $${item.price} x ${item.qty} 
        <button onclick="removeFromCart('${item.name}')"><i class='bx bx-trash'></i></button>`;
      dropdown.appendChild(itemDiv);
    });
  }

  // Update totals
  let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalDiv = document.createElement('h4');
  totalDiv.innerHTML = `Total: $<span id="dropdown-total">${total}</span>`;
  dropdown.appendChild(totalDiv);

  // Update cart count
  let count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById('cart-count').textContent = count;
}

function toggleCartDropdown() {
    const dropdown = document.getElementById('cart-dropdown');
    if (dropdown.style.display === '' || dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }
  

// Optional: click outside to close cart
window.addEventListener('click', function(e) {
  const dropdown = document.getElementById('cart-dropdown');
  const icon = document.querySelector('.cart-icon');
  if (!icon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
let localStore= JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart();
  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  renderCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
