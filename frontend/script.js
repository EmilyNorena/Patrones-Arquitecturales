const URL = "http://localhost:8080/products";


//Add Form Buttons
const showFormBtn = document.getElementById("showForm");
const hideFormBtn = document.getElementById("hideForm");

//Actions Buttons
const deleteBtn = document.getElementById("deleteBtn");
const editBtn = document.getElementById("editBtn");

const searchBtn = document.getElementById("searchBtn");
const backBtn = document.getElementById("backBtn");


//Container, Form and Table Body
const formContainer = document.getElementById("formContainer");
const addForm = document.getElementById("addForm");
const tableBody = document.getElementById("body");


//Loading Products
async function loadData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    tableBody.innerHTML = "";

    data.forEach(i => {
      const row = document.createElement("tr");
      row.id = i.id;
      Object.values(i).forEach(j => {
        const cell = document.createElement("td");
        if (Object.keys("id")){
          cell.className = "id";
        }
        cell.textContent = j;
        row.appendChild(cell);
      });
      const actionCell = createButtons();
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  }
  catch (error) {
    console.error("Error: ", error);
  }
}

//Creating Products
async function createProduct() {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        address:document.getElementById("address").value,
        price:document.getElementById("price").value,
        size:document.getElementById("size").value,
        description:document.getElementById("description").value
      })
    });
    if (!response.ok) throw new Error("No se pudo crear el producto.");
    await loadData();
    showNotification("Producto creado correctamente.", "success");
    
  }catch(error){
    console.error("Error: ", error);
    showNotification(error.message || "Error al crear producto.", "error");
  }
}

//Deleting Products
async function deleteProduct(id) {
  try {
    const response = await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("No se pudo eliminar el producto.");
    await loadData();
    showNotification("Producto eliminado correctamente.", "success");    
  }catch(error){
    console.error("Error: ", error);
    showNotification(error.message || "Error al eliminar producto.", "error");
  }
}

//Editing Products
async function updateProduct(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        address: document.getElementById("address").value,
        price: document.getElementById("price").value,
        size: document.getElementById("size").value,
        description: document.getElementById("description").value
      })
    });
    if (!response.ok) throw new Error("No se pudo actualizar el producto.");
    await loadData();
    showNotification("Producto actualizado correctamente.", "success");
  } catch (error) {
    console.error("Error: ", error);
    showNotification(error.message || "Error al actualizar producto.", "error");
  }
}

//Adding actions buttons to each row
function createButtons() {
  const actionCell = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn", "fa-solid", "fa-pen");
  actionCell.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn", "fa-solid", "fa-trash");
  actionCell.appendChild(deleteBtn);
  return actionCell;
}

//Show form
showFormBtn.addEventListener("click", () => {
  clearForm(); 
  formContainer.classList.remove("hidden");
});

//Hide form
hideFormBtn.addEventListener("click", () => {
  formContainer.classList.add("hidden");
});

//Submit product
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const editId = addForm.dataset.editId;
  if (editId) {
    await updateProduct(editId);
    delete addForm.dataset.editId;
  } else {
    await createProduct();
  }
  formContainer.classList.add("hidden");
});

tableBody.addEventListener("click", (e) => {
  const tr = e.target.closest("tr");
  if (e.target.classList.contains("deleteBtn")) {
    const id = tr.getAttribute("id");
    deleteProduct(id);
  } else if (e.target.classList.contains("editBtn")) { 
    const id = tr.getAttribute("id");
    document.getElementById("address").value = tr.children[1].textContent;
    document.getElementById("price").value = tr.children[2].textContent;
    document.getElementById("size").value = tr.children[3].textContent;
    document.getElementById("description").value = tr.children[4].textContent;
    formContainer.classList.remove("hidden"); 
    addForm.dataset.editId = id; 
  }
});

function showNotification(message, type = "success", duration = 3000) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = type; 
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, duration);
}


document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

//Clening form
function clearForm() {
  document.getElementById("address").value = "";
  document.getElementById("price").value = "";
  document.getElementById("size").value = "";
  document.getElementById("description").value = "";         
}

//Searching
async function searchById(id) {
  try {
    const response = await fetch(`${URL}/search?id=${id}`);
    if (!response.ok) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
    const product = await response.json();
    tableBody.innerHTML = "";
    const row = document.createElement("tr");
    row.id = product.id;
    Object.values(product).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    const actionCell = createButtons();
    row.appendChild(actionCell);
    tableBody.appendChild(row);
    showNotification("Producto encontrado.", "success");

  } catch (error) {
    console.error(error);
    showNotification(error.message, "error");
    tableBody.innerHTML = ""; 
  }
}

searchBtn.addEventListener("click", async () => {
  const id = document.getElementById("searchInput").value.trim();
  if (!id) {
    showNotification("Por favor ingresa un ID válido.", "error");
    return;
  }
  await searchById(id);
});

backBtn.addEventListener("click", () => {
  loadData();
});

