document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // validate if na read na nila terms
    if (!document.getElementById('terms-checkbox').checked) {
        document.getElementById('terms-notification').innerText = 'Please read the terms and conditions.';
        return;
    }
    //emailjs di pa to ung mismong gmail ng rh papalitan pa toh
    const serviceID = 'service_tmobs0z';
    const templateID = 'template_u76cmhz';
    const publicKey = 'P2fpRHsIhizFEx2UZ';

    const form = document.getElementById('booking-form');
    emailjs.sendForm(serviceID, templateID, form, publicKey)
        .then(() => {
            alert('Email sent successfully!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});
//terms dowload pdf
function downloadTerms() {
    const pdfUrl = 'PDF/OFFICIAL Rabbit Hole Terms and Conditions.pdf';
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Rabbit-Hole-Terms-and-Conditions.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}