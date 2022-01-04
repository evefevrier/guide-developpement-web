# Guide HTML


## Généralités

- L’encodage des fichiers et des bases de données doit se faire en UTF-8. 
- Séparer les noms des fichiers, des images des classes et id CSS par des tirets (`.slide-info`, `styles-ie.css`, `jquery-2.0.min.css`, etc), sauf convention contraire apportée par le client.
- Les noms d'éléments et des attributs sont rédigés en minuscules,
- Les éléments sont imbriqués correctement,
- L'usage des guillemets doubles est préconisé autour des valeurs d’attributs (ex. `class="fruit"`) 
- L'usage des guillemets simples est privilégié dans les langages de programmation (ex. `alert('burp ou schlürlf');`) de manière à faciliter les imbrications (ex. `alert('<p class="fruit">plop</p>');`)

## Doctype

Le doctype HTML5 est fortement recommandé.

```html
<!DOCTYPE html>
```

## Langue

La langue de la page est systématiquement renseignée via un attribut dans l’élément `<html>` :

```html
<html lang="fr"></html>
```

## Encodage

L’encodage du document (en UTF-8) est systématiquement renseigné via un élément meta placé dans le `<head>` avant le title:

```html
<meta charset="UTF-8" />
```

## Titre de la page

Le titre de page, différent à chaque page, est systématiquement renseigné via un élément `<title>` dans le `<head>` :

```html
<title>Titre significatif du contenu de la page</title>
```

## Meta "Viewport"

Pour une adaptation du site web vers les terminaux mobiles, l’élément `<meta name="viewport">` est ajouté dans la partie `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**_Note : Les syntaxes empêchant l’agrandissement des contenus par le visiteur sont proscrites (maximum-scale=1, user-scalable=no, etc.)._**

## Favicon

L’icône de favori est utilisée de différentes manières par les navigateurs et systèmes. Le format ICO est ancien, le format PNG permet une meilleure définition avec un poids plus léger.  
- Tous les navigateurs récents reconnaissent le format PNG  
- IE ne reconnaît pas le format PNG et va chercher par défaut dans la racine `/favicon.ico`  

Source : [http://realfavicongenerator.net/](http://realfavicongenerator.net/)

## Sémantique structurelle 

Les éléments HTML5 `<header>`, `<article>`, `<main>`, `<footer>`, `<aside>`, `<section>` et `<nav>` sont privilégiés aux éléments neutres `<div>` si leur fonction s’y prête.

La structure globale préconisée est celle-ci :

- `<body>` : corps de page et du site web 
- `<header id="header" role="banner">` : entête global, comportant souvent la navigation et des éléments qui se retrouvent en commun sur (quasiment) toutes les pages
- `<main id="main" role="main">` : conteneur général du contenu principal, typiquement ce qui n'est pas dans header et footer
- `<footer id="footer" role="contentinfo">` : pied de page global comportant des éléments qui se retrouvent en commun sur (quasiment) toutes les pages  
- `<aside class="aside" role="complementary">` : barre latérale globale. Note : `<aside>` doit pouvoir être extrait de la page sans poser de problème, en clair ne pas y placer la navigation par exemple.
- `<nav id="navigation" role="navigation">` : navigation principale
- `<form id="search" role="search">` : recherche principale

__En savoir plus sur la sémantique structurelle__
https://www.w3.org/WAI/tutorials/page-structure/


#### Menu de navigation

Utiliser des combinaisons `<ul><li>` (liste non ordonnée) pour structurer les menus de navigation dans un élément `<nav role="navigation”>`.

### Hiérarchie des titres h1-h6
L'objectif est de former une table des matières des contenus du document Web.
Vérifier cette table des matières à l'aide d'un outil qui prélève les h1-h6 de la page comme par exemple avec la barre d'outils de développement de Chris Pederick.
Installer cette extension pour Chrome et faites afficher la table des matières d'un document Web en utilisant le menu *View Document Outline* de l'onglet *Informations*.
- Respecter la hiérarchie des titres `<hX>`.
- `h1` est unique et décrit le thème de la page
- Les titres (`h1`, `h2`, `h3`, etc.) sont utilisés dans l'ordre et de manière pertinente

### Sémantique des éléments
- Utiliser les éléments HTML pour leur fonction/sémantique et non pas pour leur forme.
- Les textes doit être lus et analysés afin d'identifier les contenus dont on peut préciser la nature à l'aide d'un élément et de ses attributs.

__Exemples:__  
- une citation (de Amanda Gorman)
```html
<q> Car il y a toujours de la lumière, si seulement nous sommes assez courageux pour la voir, si seulement nous sommes assez courageux pour l’incarner. </q>
```
- une date
```html
<time datetime="2021-01-20"> Jour de l'investiture du président Joe Biden. </time>
```
- une abbréviation  
Remarquez que dans le cas d'une abbréviation, on suggère de mettre aussi entre parenthèses la signification complète de l'acronyme ou de l'abbréviation au premier emploi de celui-ci dans un texte.
```html
<abbr title="HyperText Mark-Up Language"> HTML (HyperText Mark-Up Language)</abbr>
```

__En savoir plus sur la sémantique des éléments et attributs HTML__    
https://developer.mozilla.org/fr/docs/Web/HTML/Element 
