// Get form elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

const saveButton = document.getElementById('save-btn') as HTMLButtonElement;
const previewDiv = document.getElementById('preview') as HTMLDivElement;

// Function to save resume data
function saveResume() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const experience = experienceInput.value;
  const skills = skillsInput.value;

  // Create the preview HTML
  const previewHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h4>Experience:</h4>
    <p>${experience}</p>
    <h4>Skills:</h4>
    <p>${skills}</p>
  `;

  // Display the preview in the previewDiv
  previewDiv.innerHTML = previewHTML;
}

// Add event listener to the save button
saveButton.addEventListener('click', saveResume);
