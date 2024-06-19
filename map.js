document.addEventListener('DOMContentLoaded', () => {
    // location
    const location = [14.608355969903869, 120.9929892411541];
    const googleMapsLink = document.getElementById('google-maps-link');

    // setview is yung gaano siya kazoomed in pagka load
    const map = L.map('map').setView(location, 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker(location).addTo(map)
        .bindPopup('Rabbit Hole')
        .openPopup();

    googleMapsLink.href = `https://www.google.com/maps/place/Rabbit+Hole/@14.6082366,120.9902856,17z/data=!4m7!3m6!1s0x3397c98ad5d90cb9:0x3250798d9834a1fe!4b1!8m2!3d14.6082314!4d120.9928605!16s%2Fg%2F11ty4y27q4?entry=ttu`;
});
