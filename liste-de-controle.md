
# Liste de contrôle (version production)

Liste de bonnes pratiques et points à prendre en compte avant/durant/après l'élaboration d'un projet web.
___

## Intégration

|Critère|Priorité|
| ------------- | ------------- |
| Chaque page comporte un titre unique et pertinent (favorise le référencement et l’utilisabilité/accessibilité) | *** | 
| Les balises HTML sont utilisées de manière sémantique | ** |
| Un reset CSS est appliqué | * |
| Les préfixes navigateurs CSS sont gérés automatiquement (autoprefixer) | * | 
| Internet Explorer est géré en mode de compatibilité standard (Voir note) | * |
| Le média print est pris en compte pour les contenus imprimables | * |

Note:  
```
<!--[if IE]>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<![endif]-->
```

## Webdesign

|Critère|Priorité|
| ------------- | ------------- |
| Le design est basé sur une grille de mise en page éprouvée pour le Web y compris pour le Responsive en mobile | ** |
| Les polices de fontes/tailles différentes sont limitées et lisibles | ** |

## Performance

|Critère|Priorité|
| ------------- | ------------- |
| Les scripts JavaScript sont chargés de manière non bloquante (les balises sont placées juste avant la fermeture du body) | * |
| Les fichiers CSS et JavaScript sont concaténés et minifiés (favorise la vitesse d'affichage) | ** |
| Les images sont optimisées et compressées (favorise la vitesse d'affichage) | * |
| Une page d'erreur 404 est présente | ** |
| Les performances front-end du site ont été vérifiées | * |
| Le nombre de web fonts est limité | * |

## Référencement

|Critère|Priorité|
| ------------- | ------------- |
| Chaque page comporte une section head avec des balises meta description et keywords | * |

## Accessibilité

|Critère|Priorité|
| ------------- | ------------- |
| Des liens d'évitement sont opérationnels | ** |
| Le contraste contenu / fond est suffisant | ** |
| Les contenus visuels ont des alternatives texte | ** |
| La langue des contenus est précisée (attribut lang) | * |
| Des tailles de polices fluides sont employées, le contenu est lisible avec un zoom texte à 200% | * |
| La hiérarchie des titres est correcte | ** |
| La navigation au clavier est possible | *** |
| Les formulaires sont accessibles | *** |
| Le site est utilisable sans CSS et/ou JavaScript et/ou sans images et/ou sans images de fond | ** |

## Projet

|Critère|Priorité|
| ------------- | ------------- |
| Le nom de domaine est fonctionnel | *** |
| Le projet est versionné (idéalement Git) | *** |
| La documentation est à jour | *** |
| Les permissions des fichiers en production sont correctes | ** |

## Qualité

|Critère|Priorité|
| ------------- | ------------- |
| Les liens internes sont valides | ** |
| Le site fait appel à des technologies open-source et interopérables | ** |
| Une icône favicon est présente à la racine du site | ** |
| La qualité du code HTML, CSS et JavaScript est vérifiée à l’aide d’outils                                     (Exemples: validateurs, ESLint) | ** |
| Les pages sont testées sur les navigateurs bureau et mobiles principaux | ** |
| L'orthographe et la grammaire sont vérifiées | * |

## Développement

|Critère|Priorité|
| ------------- | ------------- |
| Une nomenclature constante et internationale est adoptée | ** |
| L'indentation des fichiers est conventionnée (.editorconfig) | *** |

## Sécurité

|Critère|Priorité|
| ------------- | ------------- |
| Toutes les entrées utilisateur (formulaires, paramètres GET, etc) sont filtrées et validées côté serveur | *** |
| Le protocole HTTPS est utilisé avec un certificat valide | *** |

