// Toggle modo oscuro
const modoBtn = document.getElementById('modoBtn');
const body = document.body;

modoBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro'); /* Cambia la clase del body para activar el modo oscuro */
    
    if (body.classList.contains('modo-oscuro')) {
        modoBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro'; // Cambia el texto del botón y el icono
        localStorage.setItem('modo', 'oscuro'); // Guarda la preferencia en localStorage para cuando recargue la página
    } else {
        modoBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro'; // Cambia el texto del botón y el icono
        localStorage.setItem('modo', 'claro');
    }
});

// Verificar preferencia guardada
if (localStorage.getItem('modo') === 'oscuro') { // Si el modo oscuro está guardado en localStorage, aplica la clase
    body.classList.add('modo-oscuro');
    modoBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
}

// Validación de formulario
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => { // Evita el envío del formulario por defecto
    e.preventDefault();
    
    // Validación simple
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const motivo = document.getElementById('motivo');
    const mensaje = document.getElementById('mensaje');
    
    let isValid = true; // Variable para controlar la validez del formulario
    
    if (nombre.value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        isValid = false;
    }
    
    if (!email.value.includes('@')) {
        alert('Por favor ingrese un email válido');
        isValid = false;
    }
    
    if (motivo.value === '') {
        alert('Por favor seleccione un motivo de contacto');
        isValid = false;
    }
    
    if (mensaje.value.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    if (isValid) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        contactForm.reset();
    }
});

// Cambiar clase activa en el menú
const navLinks = document.querySelectorAll('.nav-menu a'); // Selecciona todos los enlaces del menú de navegación

navLinks.forEach(link => { // Recorre cada enlace del menú
    link.addEventListener('click', () => { // Añade un evento de clic a cada enlace
        navLinks.forEach(l => l.classList.remove('activo')); // Elimina la clase 'activo' de todos los enlaces
        link.classList.add('activo'); // Añade la clase 'activo' al enlace clicado
    });
});