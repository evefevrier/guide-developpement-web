/* Script de la visionneuse
 * @author: @evefevrier
 * @author: Prénom Nom
 * Note: les images temporaires ont été générées avec l'API "placehoder.com"
 * Exemple: https://via.placeholder.com/800x450.jpg/029/fff?text=image4
 */
 
const visionneuse = {

    // Propriétés
    intNombreImages: 5,
    intImageCourante: 1,
    strCheminImages: "images/",
    strExtensionImages: ".jpg",
    arrCredits:[
        'Photo de Auteur sur Site Web du téléchargement',
        'Photo de Auteur sur Site Web du téléchargement',
        'Photo de Auteur sur Site Web du téléchargement',
        'Photo de Auteur sur Site Web du téléchargement',
        'Photo de Auteur sur Site Web du téléchargement'
    ],

    // Méthodes
    allerAuSuivant: function () {
        if (this.intImageCourante < this.intNombreImages) {
            this.intImageCourante++;
            this.changerImage();
        } else{
            this.intImageCourante = 1;
            this.changerImage();
        }
    },
    allerAuPrecedent: function () {
        if (this.intImageCourante > 1) {
            this.intImageCourante--;
            this.changerImage();
        } else{
            this.intImageCourante = this.intNombreImages;
            this.changerImage();
        }
    },
    changerImage: function () {
        document.getElementById("imgVisionneuse").src = this.strCheminImages + this.intImageCourante + this.strExtensionImages;
        document.getElementById("lblImageCourante").innerHTML = this.arrCredits[this.intImageCourante - 1];
    }
}





/* Écouteurs d'événements */
document.getElementById("btnSuivant").addEventListener('click', function () {
    visionneuse.allerAuSuivant();
});

document.getElementById("btnPrecedent").addEventListener('click', function () { 
    visionneuse.allerAuPrecedent(); }
);

window.addEventListener('keydown', function (e) {
    if (e.code === "ArrowRight") {
        visionneuse.allerAuSuivant();
    } else if (e.code === "ArrowLeft") {
        visionneuse.allerAuPrecedent();
    }  
});