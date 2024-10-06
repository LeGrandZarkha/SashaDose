// EFFET TYPEWRITER

document.addEventListener('DOMContentLoaded', function(){

    const words = ["Elegant", "Bold", "Innovative", "Unique", "Chic", "Refined"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typeSpeed = 100;  // Vitesse de frappe
    const deleteSpeed = 50; // Vitesse d'effacement
    const pauseBetweenWords = 2000; // Pause entre les mots
    
    function typeWriterEffect() {
        const typewriterElement = document.getElementById('typewriter');
    
        // Si on est en train de supprimer des lettres
        if (isDeleting) {
            // Retirer une lettre à la fois
            currentWord = currentWord.slice(0, --letterIndex);
            typewriterElement.textContent = currentWord;
    
            // Si tout est supprimé, passer au mot suivant
            if (letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Passer au mot suivant ou revenir au début
                setTimeout(typeWriterEffect, typeSpeed); // Attendre avant de taper à nouveau
            } else {
                setTimeout(typeWriterEffect, deleteSpeed);
            }
        } else {
            // Ajouter une lettre à la fois
            currentWord = words[wordIndex].substring(0, ++letterIndex);
            typewriterElement.textContent = currentWord;
    
            // Si le mot est complètement tapé, faire une pause avant de commencer à effacer
            if (letterIndex === words[wordIndex].length) {
                isDeleting = true;
                setTimeout(typeWriterEffect, pauseBetweenWords); // Pause avant de commencer à effacer
            } else {
                setTimeout(typeWriterEffect, typeSpeed);
            }
        }
    }
    
    // Lancer l'effet
    typeWriterEffect();
    
    })
    
    
    // ABOUT SECTION
    window.addEventListener('scroll', function() {
        const scrollerDiv = document.querySelector('.photos-scroller');
        const section = document.querySelector('#sasha-section');
        const spacer1 = document.querySelector('.spacer1');
        const scrollerText = document.querySelector('.text-scroller'); // Sélecteur pour le texte
    
        // Positions
        const scrollPosition = window.scrollY; // Position actuelle du scroll
        const sectionTop = section.offsetTop; // Position du haut de la section
        const spacer1Height = spacer1.offsetHeight; // Hauteur du spacer
    
        // Vérifier si le scroll est dans la zone de la section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + spacer1Height) {
            console.log('triggered');
    
            // Calculer le décalage pour les images
            const maxScroll = spacer1Height; // Hauteur maximale de défilement
            const scrollOffset = Math.min((scrollPosition - spacer1.offsetTop) + 1050, maxScroll);
            
            // Appliquer le décalage aux images
            scrollerDiv.style.transform = `translateY(${-scrollOffset}px)`;
    
            // Appliquer un décalage pour le texte
            const textScrollOffset = Math.min((scrollPosition - spacer1.offsetTop) + 1050, maxScroll);
            scrollerText.style.transform = `translateY(${-textScrollOffset}px)`; // Déplace le texte
    
        } else {
            // Réinitialiser la position des images et du texte si on scroll en arrière
            scrollerDiv.style.transform = 'translateY(0)';
            scrollerText.style.transform = 'translateY(0)'; // Réinitialise la position du texte
        }
    });
    
    
    
    
    
    
    // PROJECTS
    
    // Background image on hover
    window.addEventListener('DOMContentLoaded', function() {
        const projects = document.querySelectorAll('.project');
        const projectsDisplay = document.querySelector('.projects-display');
        const wrapperProject = document.querySelector('.wrapper-projects');
    
        projects.forEach(project => {
            project.addEventListener('mouseover', function() {
                projects.forEach(item =>{
                    item.classList.remove('current-project');
                });
                const imageUrl = project.getAttribute('data-image-url');
                projectsDisplay.style.backgroundImage = `url(${imageUrl})`;
    
                // Ajouter la classe 'project-displayed' uniquement si l'image est définie
                if (projectsDisplay.style.backgroundImage) {
                    projects.forEach(item => {
                        item.classList.add('project-displayed');
                    });
                }
                project.classList.add('current-project'); // Ajoute la classe pour le projet affiché
            });
        });
    
        wrapperProject.addEventListener('mouseleave', function() {
            projectsDisplay.style.backgroundImage = ''; // Réinitialiser l'image de fond
            projects.forEach(project => {
                project.classList.remove('project-displayed'); // Enlève la classe des projets
                project.classList.remove('current-project'); // Enlève aussi la classe current
            });
        });
    });
    
    
    
    