// Get form elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
var saveButton = document.getElementById('save-btn');
var previewDiv = document.getElementById('preview');
// Function to save resume data
function saveResume() {
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var experience = experienceInput.value;
    var skills = skillsInput.value;
    // Create the preview HTML
    var previewHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h4>Experience:</h4>\n    <p>").concat(experience, "</p>\n    <h4>Skills:</h4>\n    <p>").concat(skills, "</p>\n  ");
    // Display the preview in the previewDiv
    previewDiv.innerHTML = previewHTML;
}
// Add event listener to the save button
saveButton.addEventListener('click', saveResume);
