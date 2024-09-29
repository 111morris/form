const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');

// Handle click on upload area to trigger file input
uploadArea.addEventListener('click', () => {
 fileInput.click();
});

// Handle file input change (for when user clicks and selects file)
fileInput.addEventListener('change', (event) => {
 handleFileUpload(event.target.files);
});

// Handle drag and drop functionality
uploadArea.addEventListener('dragover', (event) => {
 event.preventDefault();
 uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
 uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (event) => {
 event.preventDefault();
 uploadArea.classList.remove('dragover');
 handleFileUpload(event.dataTransfer.files);
});

// Function to handle file upload (both drag-and-drop and click-to-upload)
function handleFileUpload(files) {
 if (files.length > 0) {
  const file = files[0];
  if (file.type.startsWith('image/')) {
   // You can upload the file or preview it (for example, create an image element to show the file)
   alert('File uploaded: ' + file.name);
  } else {
   alert('Please upload a valid image file');
  }
 }
}