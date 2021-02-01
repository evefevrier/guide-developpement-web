# Guide CSS

Ce document évolutif recense les bonnes pratiques CSS à appliquer en production.

## Base

### L’encodage des fichiers doit se faire en UTF-8.   
Notez qu'il est essentiel que l'instruction d'encodage se trouve sur la première ligne du fichier.  
Aucun commentaire, ni même un saut de ligne, ne doit être présent avant cette instruction.

```css
@charset "UTF-8";
```

### "Reset" de la feuille de styles des navigateurs

Un "reset" CSS permettant d'harmoniser les styles par défaut des navigateurs est systématiquement appliqué 
en début de projet.

### Un seul fichier CSS est relié aux documents HTML (ou 2!)  
Une division modulaire des styles en plusieurs fichiers est souhaitée.  
Cependant, pour assembler (et minifier) ces différents fichiers en un seul, l'usage d'un pré-processeur tel que __sass__ est requis.  
L'instruction `@import` en CSS n'est pas une bonne alternative à sass, car elle a un impact négatif sur la performance.   

Aussi, en attendant de faire l'apprentissage de sass, 2 fichiers .css seront prescrits:   
(1) la feuille de styles de réinitialisation "normalize-v8.css"  
(2) la feuille de styles principale nommée "styles.css"  
Chacun de ces fichiers seront reliés au document HTML par une balise `link`.  
L'ordre est important, le *reset* doit être relié avant "styles.css".

### Des commentaires structurants subdivisent le fichier "styles.css"    
(1) `/* POLICES LIÉES */`  
(2) `/* UTILITAIRES */`  
Nous placerons ici le modèle de boîte à utiliser (border-box) et quelques classes d'usage courant comme *clearfix*   
et les classes d'accessibilité comme *screen-reader-only*.  
(3) `/* CHARTE TYPOGRAPHIQUE */`  
La charte graphique de base comporte   
•	la police de caractère principale, soit celle qui sert pour le texte courant,     
en plus des polices alternatives et de la collection (sans-serif ou serif, selon votre choix)   
•	la taille de caractère de base en "rem" (précédemment en "em")  
•	la couleur de caractère   
•	la hauteur de ligne (sans unité)  
(4) `/* NAVIGATION */`  
(5) `/* HYPERLIENS */`  
(6) `/* GRILLE DE MISE EN PAGE */`  
(7) `/* ... */`  

### Table des matières
Pour faciliter la navigation dans le fichier  "styles.css" on ajoutera, tout de suite après l'instruction 
du jeu de caractères utf-8, une table des matières consistant à reprendre de manière intégrale les commentaires
structurants.   
On prendra soin de maintenir à jour cette table des matières de sorte qu'on puisse utiliser   
les titres pour naviguer vers cette section du fichier grâce à la commande *Find*.      

Exemple:  
`/* Table des matières */`      
`/* POLICES LIÉES */`     
`/* UTILITAIRES */`   
`/* CHARTE TYPOGRAPHIQUE */`     
`/* NAVIGATION */`   
`/* HYPERLIENS */`    
`/* GRILLE DE MISE EN PAGE */`    


## Sélection des éléments

La maintenabilité des feuilles de styles est une priorité. 
Il est nécessaire de prioriser les sélecteurs ayant le moins de spécificité (poids) possible afin de faciliter 
les modifications ultérieures ou dans des contextes différents (Responsive).

Privilégier au maximum l'usage de [**classes**](http://www.drinchev.com/blog/css-with-only-class-names/) plutôt 
que d'écrire des sélecteurs basés sur le type des éléments ou leur `id`.

Le sélecteur CSS doit être _unique_ si cela est possible (une seule classe). 


### Noms de classes (BEM)
À compléter.


## Mobile d'abord (Mobile First)
Les règles sont d'abord écrites pour un affichage sur des appareils mobiles à écran étroit, puis, 
immédiatement après, on placera les alternatives (*media queries*) pour des écrans plus larges. 
Ainsi, les différentes alternatives pour un même élément sont toujours déclarées dans leur contexte. 

Exemple:
```css
.nav__liste {
        display: flex;
        flex-direction: row;
}
@media (min-width: 601px) {
    .nav__liste {
        flex-direction: column;
     }
}
```

