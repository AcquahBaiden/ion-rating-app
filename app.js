const courseInput = document.querySelector('#course');
const ratingInput = document.querySelector('#rating');
const addBtn = document.querySelector('#add-course');
const list = document.querySelector('#list');


clear = ()=>{
    courseInput.value = '';
    ratingInput.value = '';
}

presentAlert = ()=>{
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid input';
  alert.message = 'One or more of your inputs is invalid.';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
}

addCourse =()=>{
    const courseName = courseInput.value;
    const rating = ratingInput.value;

    if(courseName.trim()==''||rating === 0 || rating === ''|| rating<0 || rating>5){
        presentAlert();
        return
    }

    const listItem = document.createElement('ion-item');
    const ionLabel = document.createElement('ion-label');
    ionLabel.textContent = `${courseName} ${rating}/5`;
    listItem.appendChild(ionLabel);
    list.appendChild(listItem);
    clear();
}

addBtn.addEventListener('click', addCourse)