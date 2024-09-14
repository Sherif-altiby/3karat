//  user image change
const fileInputs = document.querySelectorAll(
    ".upload__img__container .add__photo input"
  );
  const selectedImages = document.querySelectorAll(
    ".upload__img__container .add__photo img"
  );
  
  if(fileInputs){
        fileInputs.forEach((input, index) => {
          input.addEventListener("change", function (event) {
            const file = event.target.files[0];
        
            if (file && file.type.startsWith("image/")) {
              selectedImages[index].src = URL.createObjectURL(file);
            }
          });
        });
  }


  // user choose time 
  const timeInputs = document.querySelectorAll('.timeInput');
  const placeholders = document.querySelectorAll('.time-placeholder');
    
  if (timeInputs) {
    timeInputs.forEach((input, index) => {
      const placeholder = placeholders[index]; 
  
      input.addEventListener('focus', function () {
        if (input.showPicker) {
          input.showPicker(); 
        }
      });
  
      input.addEventListener('input', function () {
        if (input.value) {
          placeholder.style.opacity = '0'; 
          placeholder.style.visibility = 'hidden';
        } else {
          placeholder.style.opacity = '1'; 
          placeholder.style.visibility = 'visible';
        }
      });
    });

    placeholders.forEach((span, index) => {
      span.addEventListener('click', (e) => {
        if (input[index].showPicker) {
          input[index].showPicker(); 
        }
      })
    })
  }

  // user upload permission file
  const inputFile = document.getElementById("inputpermission");
  const inputFilePlaceHolder = document.querySelector('.file-placeholder');

  if(inputFile){
    inputFile.addEventListener("change", (e) => {
      const fileName = e.target.files[0]?.name;  
      if (fileName) {
        inputFilePlaceHolder.textContent = fileName;
      }
    })
  }
  