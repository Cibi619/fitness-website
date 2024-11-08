/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

 // menu show     
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hide

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu = document.getElementById('nav-menu');
    // when we click on each navlink, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scoll-header class to header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // check if fields have a value
    if(calculateCm.value === '' || calculateKg.value === '') {
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // show message
        calculateMessage.textContent = 'Fill in the Height and weight 😊';

        // remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

        // Show your health Status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}`
        } else if(bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}`
        }

        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message after timeout
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user'),
      contactName = document.getElementById('contact-name')

const sendEmail = (e) => {
    e.preventDefault();

    // check if field has a value
    if (contactUser.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'You must enter your email!'

        // remove message
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {

        const templateParams = {
            to_email: document.getElementById('contact-user').value, // Get the recipient's email from an input
            to_name: document.getElementById('contact-name').value, // Your name or sender's name
        };
        emailjs.send('service_xot1x2c','template_cya9g1n', templateParams, 'QFVUxq72OtbovNc6S')
            .then((response) => {
                console.log(response);
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 🫰'

                // remove msg after 3s
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            },(error) => {
                console.log(error, 'error')
                contactMessage.textContent = 'OOPS! Something has failed!'
            })
        // serviceID, templateID, #form, publicKey
        // emailjs.sendForm('service_xot1x2c','template_cya9g1n','#contact-form', 'QFVUxq72OtbovNc6S')
        // .then(() => {
        //     console.log(contactMessage,"---msg")
        //     contactMessage.classList.add('color-green')
        //     contactMessage.textContent = 'You registered successfully 🫰'
        // })
        contactUser.value = ''
        contactName.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail);

// Book a call
const modal = document.getElementById('modal');
const bookCallBtn = document.getElementById('book_btn')
const modalClose = document.getElementById('modal-close')

// Show modal when clicking the "Book a Call" button
bookCallBtn.addEventListener('click', () => {
    modal.classList.remove('modal__hidden');
    modal.classList.add('modal-cls');
});

// Close modal when clicking the close button
modalClose.addEventListener('click', () => {
    modal.classList.add('modal__hidden');
    modal.classList.remove('modal-cls');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    // console.log(modal.classList,"--classlist");
    // console.log(e, "--e")
    if (e.target === modal) {
        modal.classList.add('modal__hidden');
    }
    // else {
    //     modal.classList.add('modal__hidden');
    // }
});