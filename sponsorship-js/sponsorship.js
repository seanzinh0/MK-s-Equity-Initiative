document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems);


    const allTheTabsElems = document.querySelector('.tabs')
        M.Tabs.init(allTheTabsElems, {
        swipeable : true,
    });





        const form = document.getElementById('sponsor-form');

        const errorMessage = document.getElementsByClassName('form-span');
        const arrOfMessages = [...errorMessage];

        arrOfMessages.forEach(message => {
            message.style.visibility = 'hidden';
        });

        const icons = document.querySelectorAll('.material-symbols-outlined');
        const arrOfIcons = [...icons];



     form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = document.getElementsByTagName('input');

            let arrOfInputs = [...inputs];

            for(let i = 0; i < arrOfInputs.length; i++) {
                if(arrOfInputs[i].value.trim() == '') {
                
                    arrOfMessages[i].style.visibility = 'visible';
                    arrOfInputs[i].classList.add('invalid');
                    arrOfIcons[i].style.color = 'red';   

                   
                    
                    //phone number validation
                } else if(i == 2) {
                    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

                    if(phoneRegex.test(arrOfInputs[i].value) === false) {
                       arrOfMessages[i].innerText = 'Enter a 10 digit phone number'
                       arrOfMessages[i].style.visibility = 'visible';
                       arrOfInputs[i].classList.add('invalid');
                       arrOfIcons[i].style.color = 'red';  

                    }  else {
                        arrOfMessages[i].style.visibility = 'hidden';
                        arrOfInputs[i].classList.remove('invalid');
                        arrOfInputs[i].classList.add('valid');
                        arrOfIcons[i].style.color = '#43a047';   
                    }

                //email validation
                } else if (i == 3) {
                   
                    if(!arrOfInputs[i].value.includes('@')) {
                        arrOfMessages[i].innerText = 'Enter a valid email address'
                        arrOfMessages[i].style.visibility = 'visible';
                        arrOfInputs[i].classList.add('invalid');
                        arrOfIcons[i].style.color = 'red';  

                    } else {
                        arrOfMessages[i].style.visibility = 'hidden';
                        arrOfInputs[i].classList.remove('invalid');
                        arrOfInputs[i].classList.add('valid');
                        arrOfIcons[i].style.color = '#43a047';  
                    }

                } else {
                    arrOfMessages[i].style.visibility = 'hidden';
                    arrOfInputs[i].classList.remove('invalid');
                    arrOfInputs[i].classList.add('valid');
                    arrOfIcons[i].style.color = '#43a047';   

                }

                


               

                
            }
        })

    
});









