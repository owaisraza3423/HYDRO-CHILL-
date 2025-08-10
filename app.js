// app.js

// ---------- HERO SECTION BUTTON ----------
document.addEventListener("DOMContentLoaded", function () {
    const buyNowBtn = document.getElementById("buyNowBtn");
    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", () => {
            alert("Redirecting to Spring Collection...");
            // window.location.href = "/shop/spring-collection"; // Example redirect
        });
    }
});

// ---------- PRODUCT LIST ----------
const products = [
    { name: "Loro Piana", price: 45, image: "images/product1.jpg" },
    { name: "White Pants", price: 90, image: "images/product2.jpg" },
    { name: "Bidha Glasses", price: 150, image: "images/product3.jpg" },
    { name: "Brown Bomber", price: 52, image: "images/product4.jpg" },
    { name: "Leather Shoes Jack", price: 89, image: "images/product5.jpg" },
    { name: "Grey T-shirt", price: 21, image: "images/product6.jpg" }
];

function renderProducts() {
    const container = document.getElementById("productContainer");
    if (!container) return;

    container.innerHTML = products
        .map(
            (p) => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>$${p.price}</p>
            <button class="buyBtn">Buy Now</button>
        </div>
    `
        )
        .join("");

    document.querySelectorAll(".buyBtn").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            alert(`You selected: ${products[i].name} - $${products[i].price}`);
        });
    });
}

renderProducts();

// ---------- NEWSLETTER FORM ----------
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = document.getElementById("newsletterEmail");
        if (emailInput.value.trim() === "") {
            alert("Please enter your email!");
            return;
        }
        alert(`Subscribed with email: ${emailInput.value}`);
        emailInput.value = "";
    });
}

// ---------- CATEGORY BUTTONS ----------
document.querySelectorAll(".categoryBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(`Viewing category: ${btn.dataset.category}`);
    });
});
