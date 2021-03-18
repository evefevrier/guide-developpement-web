/**
 * @file Un menu simple, responsive bâti en amélioration progressive.
 * @version v3
 *
 */

//*******************
// Déclaration d'objet(s)
//*******************

let menu = {
  javascriptEnabled: document.body.classList.add("js"),
  txtNavClosed: 'Menu',
  txtNavOpen: 'Fermer',
  tagButton: null,
  tagSpan: null,
  tagNav: document.querySelector(".nav"),

  configurerNav: function ()
  {
    //********** Création du bouton du menu mobile

    // On crée VIRTUELLEMENT un bouton et un span (pour le texte du bouton)
    this.tagButton = document.createElement("button");
    this.tagSpan = document.createElement("span");

    // On ajoute le span dans le bouton
    this.tagButton.appendChild(this.tagSpan);

    // On ajoute des classes au Button et au span
    this.tagButton.className = 'nav__control';
    this.tagSpan.className = 'nav__span';

    // On place le texte du Button dans son conteneur span
    this.tagSpan.innerHTML = this.txtNavClosed;

    // On ajoute le Button dans le html:
    // plus précisément comme premier enfant dans le nav  
    this.tagNav.prepend(this.tagButton);

    // Ajout de l'écouteur d'événement sur le bouton du menu
    this.tagButton.addEventListener('click', function () {menu.ouvrirFermerNav();});
  },

  ouvrirFermerNav: function ()
  {
    // On bascule (ajoute ou enlève) la classe de fermeture du menu
    this.tagNav.classList.toggle("nav--closed");

    // On change le texte du bouton selon l'état du menu
    if (this.tagNav.classList.contains("nav--closed"))
    {
      this.tagSpan.innerHTML = this.txtNavClosed;
    }
    else
    {
      this.tagSpan.innerHTML = this.txtNavOpen;
    }
  }
};


//*******************
// Écouteurs d'événements
//*******************
window.addEventListener('load', function () { menu.configurerNav(); });