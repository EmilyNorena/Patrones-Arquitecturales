const showFormBtn = document.getElementById("showForm");
const hideFormBtn = document.getElementById("hideForm");
const formContainer = document.getElementById("formContainer");
const propertyForm = document.getElementById("addForm");
const propertyTableBody = document.getElementById("body");

let propertyId = 1;

showFormBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
});

hideFormBtn.addEventListener("click", () => {
  formContainer.classList.add("hidden");
});

propertyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = document.getElementById("address").value;
  const price = document.getElementById("price").value;
  const size = document.getElementById("size").value;
  const description = document.getElementById("description").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${propertyId++}</td>
    <td>${address}</td>
    <td>$${price}</td>
    <td>${size}</td>
    <td>${description}</td>
    <td>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </td>
  `;

  propertyTableBody.appendChild(newRow);
  propertyForm.reset();
  formContainer.classList.add("hidden");
});
