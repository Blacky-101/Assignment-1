const API_URL = "https://jsonplaceholder.typicode.com/users";
const userTable = document.getElementById("userTable").querySelector("tbody");
const userFormModal = document.getElementById("userFormModal");
const userForm = document.getElementById("userForm");
const addUserButton = document.getElementById("addUserButton");
const closeModal = document.getElementById("closeModal");

let editMode = false;

// Fetch and display users
const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    userTable.innerHTML = "";
    users.forEach(user => addUserRow(user));
  } catch (error) {
    alert("Failed to fetch users. Please try again.");
  }
};

// Add user row to table
const addUserRow = (user) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name.split(" ")[0]}</td>
    <td>${user.name.split(" ")[1] || ""}</td>
    <td>${user.email}</td>
    <td>${user.company?.name || "N/A"}</td>
    <td>
      <button onclick="editUser(${user.id})">Edit</button>
      <button onclick="deleteUser(${user.id})" class="button-red">Delete</button>
    </td>
  `;
  userTable.appendChild(row);
};

// Show modal
const showModal = () => {
  userForm.reset();
  userFormModal.style.display = "flex";
};

// Hide modal
const hideModal = () => {
  userFormModal.style.display = "none";
};

// Add or Edit user
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("userId").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  const user = {
    name: `${firstName} ${lastName}`,
    email: email,
    company: { name: department },
  };

  try {
    if (editMode) {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      alert("User updated successfully.");
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      alert("User added successfully.");
    }
    hideModal();
    fetchUsers();
  } catch (error) {
    alert("Failed to save user. Please try again.");
  }
});

// Edit user
window.editUser = async (id) => {
  editMode = true;
  const response = await fetch(`${API_URL}/${id}`);
  const user = await response.json();
  document.getElementById("userId").value = user.id;
  document.getElementById("firstName").value = user.name.split(" ")[0];
  document.getElementById("lastName").value = user.name.split(" ")[1] || "";
  document.getElementById("email").value = user.email;
  document.getElementById("department").value = user.company?.name || "";
  showModal();
};

// Delete user
window.deleteUser = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    alert("User deleted successfully.");
    fetchUsers();
  } catch (error) {
    alert("Failed to delete user. Please try again.");
  }
};

// Event Listeners
addUserButton.addEventListener("click", () => {
  editMode = false;
  showModal();
});

closeModal.addEventListener("click", hideModal);

// Initial Fetch
fetchUsers();
