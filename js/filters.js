document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("filter-category");
  const priceFilter = document.getElementById("filter-price");
  const sizeFilter = document.getElementById("filter-size");
  const priceValue = document.getElementById("price-value");
  const products = document.querySelectorAll(".product");

  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedSize = sizeFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    priceValue.textContent = `${maxPrice}€`;

    products.forEach(product => {
      const productCategory = product.getAttribute("data-category");
      const productSize = product.getAttribute("data-size");
      const productPrice = parseFloat(product.getAttribute("data-price"));

      const matchCategory = selectedCategory === "all" || productCategory === selectedCategory;
      const matchSize = selectedSize === "all" || productSize === selectedSize;
      const matchPrice = productPrice <= maxPrice;

      if (matchCategory && matchSize && matchPrice) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  categoryFilter.addEventListener("change", applyFilters);
  sizeFilter.addEventListener("change", applyFilters);
  priceFilter.addEventListener("input", applyFilters);

  applyFilters(); // filtre initial
});
