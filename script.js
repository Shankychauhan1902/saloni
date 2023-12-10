function addEvent() {
    var eventName = document.getElementById('eventName').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventPhoto = document.getElementById('eventPhoto').files[0];

    if (eventName && eventDate) {
        var table = document.getElementById('eventTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.textContent = eventName;
        cell2.textContent = eventDate;
        cell3.innerHTML = eventPhoto ? `<img src="${URL.createObjectURL(eventPhoto)}" alt="Event Photo" width="50">` : 'N/A';
        cell4.innerHTML = '<button onclick="editEvent(this)">Edit</button> <button onclick="deleteEvent(this)">Delete</button>';

        clearForm();
    } else {
        alert('Please fill in all the required fields.');
    }
}

function updateEvent() {
    var eventName = document.getElementById('eventName').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventPhoto = document.getElementById('eventPhoto').files[0];

    if (eventName && eventDate) {
        var table = document.getElementById('eventTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.textContent = eventName;
        cell2.textContent = eventDate;
        cell3.innerHTML = eventPhoto ? `<img src="${URL.createObjectURL(eventPhoto)}" alt="Event Photo" width="50">` : 'N/A';
        cell4.innerHTML = '<button onclick="editEvent(this)">Edit</button> <button onclick="deleteEvent(this)">Delete</button>';

        clearForm();
    } else {
        alert('Please fill in all the required fields.');
    }
}

function deleteEvent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editEvent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    var eventName = cells[0].innerHTML;
    var eventDate = cells[1].innerHTML;

    document.getElementById('eventName').value = eventName;
    document.getElementById('eventDate').value = eventDate;

    openModal();

    // Remove the edited row
    row.parentNode.removeChild(row);
}

function clearForm() {
    document.getElementById('eventName').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventPhoto').value = '';
}

function openModal() {
    document.getElementById('eventModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
}
// ... (previous code)

// Function to open the modal with event details
function openEventModal(eventName, eventDate) {
    const modal = document.getElementById('eventModal');
    const modalContent = document.getElementById('eventModalContent');
    
    // Set the event details in the modal
    modalContent.innerHTML = `
        <h2>${eventName}</h2>
        <p>Date: ${eventDate}</p>
        <button class="close" onclick="closeModal()">Close</button>
    `;

    modal.style.display = 'flex';
}

// ... (remaining code)
