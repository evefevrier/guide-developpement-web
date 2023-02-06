/** 
 * Carrousel 
 * Ce prototype reprend quelques principes du carrousel du w3c 
 * https://www.w3.org/WAI/tutorials/carousels/working-example/
 * mais en utilisant des balises images plutôt que des images d'arrière-plan.  
 * Voir aussi https://www.w3.org/WAI/ARIA/apg/patterns/carousel/  
*/

const carrousel = {

    // Propriétés
    jsActive: document.querySelector('body').classList.add('js'),
    arrSlides: document.querySelector('.carrousel__liste').querySelectorAll('.carrousel__slide'),
    intCurrentSlide: 0,

    // Méthodes
    initialiser: function () {
        // console.log(this.arrSlides);
        const ctrls = document.createElement('ul');
        ctrls.className = 'controls';
        ctrls.innerHTML = '<button id="btnPrecedent" class="bouton bouton--precedent">  ' +
            '<span aria-hidden="true"> ' +
            '    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">' +
            '        <title>Précédent</title>' +
            '        <g class="bouton__svg">' +
            '            <path d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z" />' +
            '            <path d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z" />' +
            '        </g>' +
            '    </svg>' +
            '</span>' +
            '<span class="visuallyhidden">précédent</span>' +
            '</button>' +
            '<button id="btnSuivant" class="bouton bouton--suivant">' +
            '<span aria-hidden="true">' +
            '    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">' +
            '        <title>Suivant</title>' +
            '        <g class="bouton__svg">' +
            '            <path d="M1,16A15,15,0,1,1,16,31,15,15,0,0,1,1,16Zm28,0A13,13,0,1,0,16,29,13,13,0,0,0,29,16Z" />' +
            '            <path d="M12.13,21.59,17.71,16l-5.58-5.59a1,1,0,0,1,0-1.41h0a1,1,0,0,1,1.41,0l6.36,6.36a.91.91,0,0,1,0,1.28L13.54,23a1,1,0,0,1-1.41,0h0A1,1,0,0,1,12.13,21.59Z" />' +
            '        </g>' +
            '    </svg>' +
            '</span>' +
            '<span class="visuallyhidden">suivant</span>' +
            '</button>';
        ctrls.querySelector("#btnSuivant").addEventListener('click', this.allerAuSuivant.bind(this));
        ctrls.querySelector("#btnPrecedent").addEventListener('click', this.allerAuPrecedent.bind(this));
        document.querySelector(".carrousel").appendChild(ctrls);
    },
    allerAuSuivant: function () {
        if (this.intCurrentSlide < this.arrSlides.length - 1) {
            this.intCurrentSlide++;
        } else {
            this.intCurrentSlide = 0;
        }
        this.changerImage();
    },
    allerAuPrecedent: function () {
        if (this.intCurrentSlide > 0) {
            this.intCurrentSlide--;
        } else {
            this.intCurrentSlide = this.arrSlides.length - 1;
        }
        this.changerImage();
    },
    changerImage: function () {
        /* attention ici on utilise une boucle forEach() voir la doc sur ce type de boucle */
        this.arrSlides.forEach(function (slide) {
            slide.classList.remove('carrousel__slide--active');
        });
        this.arrSlides[this.intCurrentSlide].classList.add('carrousel__slide--active');
    }
}



/* Écouteurs d'événements */

window.addEventListener('keydown', function (e) {
    if (e.code === "ArrowRight") {
        carrousel.allerAuSuivant();
    } else if (e.code === "ArrowLeft") {
        carrousel.allerAuPrecedent();
    }
});

window.addEventListener('DOMContentLoaded', function () {
    carrousel.initialiser();
})