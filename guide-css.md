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
`/*** TABLE DES MATIÈRES ***/`      
`/* POLICES LIÉES */`     
`/* UTILITAIRES */`   
`/* CHARTE TYPOGRAPHIQUE */`     
`/* NAVIGATION */`   
`/* HYPERLIENS */`    
`/* GRILLE DE MISE EN PAGE */` 

La forme des commentaires structurants et de la table des matières peut être adaptée.     
Par exemple, si on préfère les commentaires structurants en bas de casse avec une ligne de soulignement
comme ceci:
```css
/* Utilitaires
   ========================================================================== */
```
La table des matières ressemblera plutôt à cela:
```css
/**
 * @author Prenom Nom <courriel>
 *
 * TABLE DES MATIERES
 *
 * Normalize (au lieu du reset)
 * Utilitaires
 * Charte typographique
 * Grilles de mise en page
 * Hyperliens et interactivite
 *
 */
```
L'important est de reprendre avec le même orthographe et choix de casse les commentaires structurants 
dans la table des matières de sorte que la fonction *Find* puisse être utilisée.

## Sélection des éléments

La maintenabilité des feuilles de styles est une priorité. 
Il est nécessaire de prioriser les sélecteurs ayant le moins de spécificité (poids) possible afin de faciliter 
les modifications ultérieures ou dans des contextes différents (Responsive).

Privilégier au maximum l'usage de [**classes**](http://www.drinchev.com/blog/css-with-only-class-names/) plutôt 
que d'écrire des sélecteurs basés sur le type des éléments ou leur `id`.


### Noms de classes (BEM)

Nous nous inspirerons de la méthode BEM (Bloc-Élément-Modificateur) pour nos noms de classes.  

#### BLOCS  
Un bloc pourrait se définir comme un composant d'interface.  
Par exemples: un menu, une zone de recherche, un accordéon, une section, un encadré...  

La classe du __bloc__ est appliquée sur l'élément HTML parent qui contient le composant.

Exemple: ``.menu`` ou ``.nav`` sera appliqué sur la balise ``nav`` de la navigation principale.

#### ÉLÉMENTS
Les __éléments__ sont des balises contextuelles(descendantes) à un __bloc__.  
La syntaxe consiste à séparer le nom du __bloc__ du nom d'__élément__ par 2 caractères de soulignement: __

Exemples: ``.nav__list`` (balise ``ul``), ``.nav__listItem`` (balise ``li``), ``.nav__link`` (balise ``a``)

#### MODIFICATEURS 
Un modificateur indique un changement d'état d'un __bloc__ ou d'un __élément__. 
La syntaxe consiste à séparer le nom __bloc__ ou le nom __bloc__élément__ de son modificateur, par 2 tirets: --
Les modificateurs sont surtout utiles pour l'interactivité.

Exemples:       
``.nav__link--actif`` pour styler différemment l'item de menu correspondant à la section en consultation     
``.nav--footer`` pour la balise nav contenant la répétition de la navigation principale dans le pied de page.     

#### Séparateur
Dans le cas où le nom du __bloc__ ou le nom de l'__élément__ peut difficilement être résumé de manière significative 
par un seul mot, on privilégiera le *CamelCase* plutôt qu'un tiret pour éviter la confusion entre simple tiret 
et les double-tirets des __modificateurs__.

Exemple:       
``.nav__listItem`` plutôt que ``.nav__list-item`` 



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


## Principe de double-classe
Si on a besoin d'appliquer des styles plus spécifiques à un élément qui partage des traits commun 
avec d'autres éléments, on pourra créer un modificateur pour cet élément et lui appliquer la classe
commune et la classe de modificateur plutôt que de répéter les traits communs dans la classe modificateur

Exemple:   
La navigation dans le bandeau d'entête  
```html
     <nav class="nav nav--header" role="navigation">
         <a class="logo" href="index.html">
             <img src="images/logo-final.png" alt="Accueil (logo À la manière de)">
         </a>
         <ul class="nav__list nav__list--subList">
             <li class="nav__listItem"><a class="nav__link nav__link--active"
                                          href="artistes.html">Artistes</a></li>
             <li class="nav__listItem"><a class="nav__link" href="blogue.html">Blogue</a></li>
             <li class="nav__listItem"><a class="nav__link" href="ressources.html">Ressources</a></li>
             <li class="nav__listItem"><a class="nav__link" href="a-propos.html">À&nbsp;propos</a></li>
         </ul>
     </nav>
```
La navigation dans le pied de page  
```html
    <nav class="nav nav--footer">
        <ul class="nav__list">
            <li class="nav__listItem"><a class="nav__link nav__link--active" href="artistes.html">Artistes</a></li>
            <li class="nav__listItem"><a class="nav__link" href="blogue.html">Blogue</a></li>
            <li class="nav__listItem"><a class="nav__link" href="ressources.html">Ressources</a></li>
            <li class="nav__listItem"><a class="nav__link" href="a-propos.html">À&nbsp;propos</a></li>
        </ul>
    </nav>
```  

Utilisation dans les styles CSS:
- des modificateurs (nav--header, nav--footer) 
- et du principe de double classe (entre nav et les modificateurs)   
```css
.nav{
    font-family: 'News Cycle', sans-serif;
    text-transform: uppercase;
}
.nav--header,
.nav__list{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.nav--footer{
    background-color: black;
}
```
