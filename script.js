
let records = [];
let currentEditIndex = -1;

function addRecord() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Both fields are required!');
    return;
  }

  if (currentEditIndex === -1) {
    records.push({ name, email });
  } else {
    records[currentEditIndex] = { name, email };
    currentEditIndex = -1;
  }

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  records.forEach((record, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editRecord(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteRecord(${index})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function editRecord(index) {
  const record = records[index];
  document.getElementById('name').value = record.name;
  document.getElementById('email').value = record.email;
  currentEditIndex = index;
}

function deleteRecord(index) {
  records.splice(index, 1);
  renderTable();
}