// const openContact = document.querySelectorAll('.open-contact-form')
// const contactForm = document.querySelectorAll('.contact-form')

// openContact.forEach(btn => {
//     btn.addEventListener('click', () => {
//         contactForm.forEach(form => {
//             form.classList.add('open-contact-form')
//         })
//     })
// }) 

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('https://your-cloudflare-endpoint.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Form submitted successfully');
        } else {
            console.error('Form submission failed');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});
