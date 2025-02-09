document.getElementById('reservation-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Reservation submitted! We will contact you shortly.'); 
    this.reset(); 
});