# Liste de contrôle 101 

## Structure de répertoires et nomenclatures
- [ ] Les noms de dossier sont signifiants et n'ont pas de majuscules, d'espaces ou de caractères spéciaux
- [ ] Les noms de fichier sont signifiants et n'ont pas de majuscules, d'espaces ou de caractères spéciaux
- [ ] La page se nomme _index.html_ et se situe à la racine du site
- [ ] La nomenclature des fichiers est systématique
- [ ] La nomenclature des images est systématique (section associée, fonction, etc.)
- [ ] Tous les noms de classe sont signifiants et utilisent une nomenclature constante


## Favicon
- [ ] Le favicon est fonctionnel et intégré dans toutes les pages 
- [ ] Le favicon est signifiant et en lien avec le thème du site

---

## HTML 

### Contenu minimal de l'élément head 
- [ ] Doctype: La déclaration du type de document est présent 
- [ ] L'élément `html` inclut l'attribut `lang="fr"` (ou "en" si le texte est en anglais). 
- [ ] L'élément `charset` définit l'encodage du texte en UTF-8
- [ ] Les éléments `meta` (`description`, `keywords`, `author`) sont présents
- [ ] L'élément `meta` viewport est présent et complet 
- [ ] L'élément `title` est présent et placé après l'élément `charset` 
- [ ] Le contenu des éléments `title` est écrit sans faute
- [ ] L'élément `link` est bien utilisé pour relier la feuille de styles du document.

### Structure et sémantique
- [ ] Les éléments HTML sont utilisés en fonction de leur signification
- [ ] Le contenu HTML est écrit dans un ordre logique
- [ ] Les éléments de structure sont utilisés selon les règles
- [ ] `h1` est unique et décrit le thème de la page
- [ ] Les titres (`h1`, `h2`, `h3`, etc.) sont utilisés dans l'ordre et de manière pertinente

### Validité et lisibilité
- [ ] Les balises sont correctement imbriquées
- [ ] Le code HTML est valide selon le [Validateur HTML du w3c](https://validator.w3.org/)
- [ ] Le balisage est indenté correctement et régulièrement

### Hyperliens
- [ ] Les liens de la navigation principale sont tous fonctionnels  
- [ ] Les liens du contenu sont tous fonctionnels

### Images réactives
- [ ] Les images sont imbriquées dans picture (deux sources)

---
## Accessibilité

- [ ] Les éléments `a` contiennent du texte (libellé du lien) 
- [ ] Toutes les balises `img` ont un attribut `alt` avec un contenu pertinent

---

## CSS
- [ ] Les règles de styles sont consignées dans une seule feuille de style externe
- [ ] L'instruction __@charset "UTF-8";__ est placée sur la première ligne du fichier
- [ ] La feuille de style de réinitialisation précède l'ensemble des règles 
- [ ] La charte typo de base est présentée sous le sélecteur :root
- [ ] Les tailles de typo sont en em, rem ou vw
- [ ] La feuille de styles est valide selon https://jigsaw.w3.org/css-validator/

### Lisibilité
- [ ] La feuille de style est ordonnée en fonction des affinités et de la hiérarchie du contenu 
- [ ] La feuille de style est écrite lisiblement  
- [ ] La feuille de style est commentée
- [ ] Les polices importées de Google Fonts sont fonctionnelles

### Réactivité (_Responsive Web Design & Mobile First_)
- [ ] L'approche Mobile d'abord est utilisée
- [ ] La réactivité de la navigation principale est harmonieuse (horizontale à verticale)
- [ ] La réactivité de la zone de contenu des sections est harmonieuse (largeur du texte contrôlée) 
- [ ] La réactivité des images (images adaptées écran étroit vs large)
- [ ] Le ou les points de rupture sont judicieusement choisis en fonction de l'interface

### Contrôle de la mise en forme 
- [ ] L'ensemble du site comporte une identité visuelle personnalisée: couleurs, polices, etc.
- [ ] La hiérarchie visuelle des titres est cohérente
- [ ] Les images sont mis en forme de manière contrôlée 
- [ ] Les hyperliens de contenu sont mis en forme
- [ ] Les alignements sont consistants d'une section à l'autre

---

## Performance
- [ ] Taille et poids des images contrôlés

## Droits d'auteur
- [ ] Les sources des contenus sont indiquées
