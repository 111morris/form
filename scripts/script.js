const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');



uploadArea.addEventListener('click', () => {
 fileInput.click();
});



fileInput.addEventListener('change', (event) => {
 handleFileUpload(event.target.files);
});


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



function handleFileUpload(files) {
 if (files.length > 0) {
  const file = files[0];
  if (file.type.startsWith('image/')) {


   alert('File uploaded: ' + file.name);
  } else {
   alert('Please upload a valid image file');
  }
 }
}