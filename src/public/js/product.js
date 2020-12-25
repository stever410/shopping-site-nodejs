const productModal = document.getElementById("product-modal");
const productModalCloseButton = document.getElementById("product-modal-close");
const addProductButton = document.getElementById("add-product-button");
const editProductButtons = document.getElementsByClassName(
  "edit-product-button"
);
const productForm = document.getElementById("product-form");
const submitButton = document.getElementById("submit-button");
const formName = document.getElementById("form-name");

addProductButton.addEventListener("click", () => {
  productModal.classList.remove("hidden");
  submitButton.innerText = "Add";
  formName.innerText = "ADD SHOE";
  for (let i = 0; i < productForm.elements.length; i++) {
    productForm.elements[i].value = "";
  }
});

for (let i = 0; i < editProductButtons.length; i++) {
  editProductButtons[i].addEventListener("click", async () => {
    productModal.classList.remove("hidden");
    submitButton.innerText = "Update";
    formName.innerText = "UPDATE SHOE";
    try {
      const res = await fetch(
        `/api/product/${editProductButtons[i].dataset.id}`
      );
      const product = await res.json();
      productForm.action = `/product/${product._id}?_method=PUT`;
      document.getElementsByName("name")[0].value = product.name;
      document.getElementsByName("category")[0].value = product.category;
      document.getElementsByName("description")[0].value = product.description;
      document.getElementsByName("price")[0].value = product.price;
      document.getElementsByName("image")[1].value = product.image;
    } catch (err) {
      console.log(err);
    }
  });
}

productModalCloseButton.addEventListener("click", () => {
  productModal.classList.add("hidden");
});
