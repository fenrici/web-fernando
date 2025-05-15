// Data for education history
const educationData = [
    {
        year: 2008,
        title: "30° Congreso Mundial de Medicina del Deporte",
        location: "Barcelona, España"
    },
    {
        year: 2009,
        title: "VII Congreso de la Mutualidad Deportiva",
        location: "Murcia, España"
    },
    {
        year: 2009,
        title: "Terapista manual en METODO POLD",
        location: "UAI Buenos Aires, Argentina"
    },
    {
        year: 2010,
        title: "Especialidad en Kinesiología Deportiva",
        location: "UMSAM, Rosario, Argentina"
    },
    {
        year: 2010,
        title: "Curso en Plataforma Vibratoria Triplanar",
        location: "Carcarañá, Santa Fe, Argentina"
    },
    {
        year: 2010,
        title: "VII Congreso Argentino de Kinesiología del Deporte",
        location: "Buenos Aires, Argentina"
    },
    {
        year: 2010,
        title: "Instructor en K-TAPING PRO",
        location: "Fundación Bachmann, Rosario, Argentina"
    },
    {
        year: 2011,
        title: "Curso de Prevención de Lesiones y Rehabilitación Funcional en el Fútbol",
        location: "Grupo Sobre-entrenamiento, Córdoba, Argentina"
    },
    {
        year: 2011,
        title: "SFM (Selective Functional Movement)",
        location: "Buenos Aires, Argentina"
    },
    {
        year: 2011,
        title: "SFMA (Selective Functional Movement Assessment)",
        location: "Buenos Aires, Argentina"
    }
];

// Data for specialties
const specialtiesData = [
    "Kinesiología Deportiva",
    "Terapista manual en Método Pold",
    "Terapeuta en Microelectrolisis Percutánea (MEP)",
    "K-taping Pro",
    "FMS (Functional Movement Systems)",
    "Selective Functional Movement Assessment",
    "Entrenador en Plataforma Vibratoria Triplanar",
    "Certificado en manipulación y facilitación del plano sagital",
    "Estudios Baropodométricos",
    "Estudios con Dinamómetro de Fuerza Isométrica",
    "Estudios con Encoder lineal – Fuerza Dinámica",
    "Electromiografía de superficie",
    "Certificado en Ecografía musculo-esquelética",
    "Certificado en Termografía infrarroja en el Deporte",
    "Control de CK en sangre – Reflotron",
    "Certificado en Aplicación Kinefisiátrica de Ventosas Neumáticas",
    "Biomecánica en 3D y Análisis de video",
    "Certificado en Neurociencia y entrenamiento deportivo",
    "Certificado en Biomecánica de la Postura, Marcha y Carrera"
];

// Data for books
const booksData = [
    {
        title: "Kinesiología Funcional Aplicada",
        year: 2016,
        description: "Ejercicios de readaptación y desarrollo. Tomo 1."
    }
];

// Function to create education items
function createEducationItems() {
    const educationList = document.getElementById('education-list');
    educationData.forEach(item => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        educationItem.innerHTML = `
            <h4>${item.year}</h4>
            <p><strong>${item.title}</strong></p>
            <p>${item.location}</p>
        `;
        educationList.appendChild(educationItem);
    });
}

// Function to create specialty items
function createSpecialtyItems() {
    const specialtiesList = document.getElementById('specialties-list');
    specialtiesData.forEach(specialty => {
        const specialtyItem = document.createElement('div');
        specialtyItem.className = 'specialty-item';
        specialtyItem.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>${specialty}</h3>
        `;
        specialtiesList.appendChild(specialtyItem);
    });
}

// Function to create book items
function createBookItems() {
    const booksList = document.getElementById('books-list');
    booksData.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p class="year">${book.year}</p>
            <p>${book.description}</p>
        `;
        booksList.appendChild(bookItem);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí normalmente enviarías los datos a un servidor
    console.log('Form submitted:', { name, email, message });
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    // Resetear el formulario
    event.target.reset();
}

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.education-item, .experience-item, .method-item, .publication-item, .club-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createEducationItems();
    createSpecialtyItems();
    createBookItems();
    
    // Add form submit handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animation
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load for visible elements
    animateOnScroll();
}); 