# DA du client LBS Services & Nettoyage (mesurée sur son site Google Sites)

Relevé du 2026-10-11 via getComputedStyle + captures. Thème Google Sites sombre peu personnalisé : toute l'identité repose sur le logo et un vert vif.

## Palette (hex mesurés)
| Rôle | Valeur | Source |
|---|---|---|
| Vert accent principal (h1/h2 "NOS PRESTATIONS", "Avant / Après", "Crédit d'impôt -50%", fond des boutons "EN SAVOIR PLUS") | `#18A000` | computed color/background |
| Texte clair sur fond sombre (titres hero, paragraphes) | `#F9F9F9` | computed, 54 occurrences |
| Fond header / nav / blocs sombres | `#1C1C1C` | computed background |
| Fond de page | noir `#000000` | sections sombres |
| Texte des boutons verts | `#1C1C1C` | computed |
| Vert foncé de texte (accordéons formules, texte gras) | `#2D6A42` | computed color |
| Vert très sombre (un paragraphe de l'accueil) | `#274E13` | computed |
| Bandeau des sous-pages | dégradé vert forêt à motif losanges, approx `#324D2D` vers `#48743E` | échantillonné sur capture, pas calculé |
| Carte claire (rare) | `#F9F9F9`, rayon 2px | computed |
| Blanc | `#FFFFFF` (titre Playfair "Pourquoi faire confiance") | computed |

Couleurs du logo (estimées à l'oeil) : dégradé jaune citron (~#F5F000) vers vert lime (~#3FC000), liseré vert clair brillant, "SERVICES ET NETTOYAGE" en chrome argenté (blanc/gris), swoosh vert lime dessous, étincelles jaune/vert/orange. Pas d'or à proprement parler : c'est un jaune-vert fluo.

## Polices
- h1 : **Lato 700**, 45.3px, `#F9F9F9` ou `#18A000`. Google Fonts : `Lato`.
- h2 : **Lato 700**, 24px.
- Corps : **Roboto 400**, 16px, `#F9F9F9`. Google Fonts : `Roboto`.
- Accroches serif ("POURQUOI FAIRE CONFIANCE A LBS SERVICES ET NETTOYAGE", "Detailing automobile", "Vitres : Résultats garanti...") : **Playfair Display**, 32px 700 ou 24px 400, blanc. Mesuré non italique sur l'accueil (l'italique relevé ailleurs est en Roboto/Open Sans gras italique dans les accordéons formules). Google Fonts : `Playfair Display` (+ italique disponible si on veut l'effet serif italique).
- Nav : "Google Sans"/Roboto 14px (police Google Sites, à ne pas reprendre).

## Boutons, rayons, motifs
- Bouton CTA "EN SAVOIR PLUS" : fond `#18A000`, texte `#1C1C1C` Roboto 16px, **rayon 4px**, pleine largeur de colonne (~363x36 / 362x51), sans bordure ni ombre.
- Rayons : 4px boutons, 2px cartes, rien d'autre. Esthétique carrée et simple.
- Pas d'ombres portées mesurées, pas d'animations (thème Google Sites standard).
- Motifs : bandeau à losanges verts sur les sous-pages ; hero d'accueil = logo LBS plein cadre en image de fond sur noir, H1 blanc centré par-dessus.

## Ambiance et ton
- Fond noir profond, texte blanc cassé, un seul accent vert vif. Le logo chromé à étincelles fait l'identité : effet "brillance", propreté, côté lavage fluo.
- Visuels avant/après carrés noirs avec logo, labels AVANT/APRES verts, filet vert et signature **"LA PROPRETE, NOTRE PRIORITE"** ("NOTRE PRIORITE" en vert).
- Ton direct, rassurant, chiffré : "Zéro trace", "Résultat garanti", "100% écologique", "-50% grâce au crédit d'impôt avec avance immédiate (Accès SAP)", "Plus de 15 professionnels nous font confiance", "devis sous 24h", "déplacement gratuit 10 km autour de Grasse".
- Zone : Côte d'Azur, Alpes-Maritimes & Monaco. Contact affiché : 07 49 09 46 44, contact.lbshine@gmail.com.
- Instagram @lbs.nettoyage : 682 abonnés, 29 publications, bio "LBS • SERVICES & NETTOYAGE / Auto detailing • Vitres / Particuliers/Professionnels / Côte d'Azur/Monaco". Photo de profil = variante rose/violette du logo (différente du site). Highlights non lisibles sans connexion.

## Ce qui caractérise sa DA (à préserver)
1. Noir + vert vif `#18A000` + blanc cassé, rien d'autre.
2. Logo jaune-vert chromé à étincelles, grand, sur fond noir uni.
3. Lato gras en titres, Roboto en texte, Playfair Display pour les accroches serif.
4. Boutons verts à texte sombre, coins 4px.
5. Avant/Après carrés noirs signés "La propreté, notre priorité".

## Notes de mesure
Viewport utilisé ~870px de large : les tailles (45px, 24px) correspondent à ce rendu, Google Sites les ajuste en responsive. Les accordéons de /prestations/nos-formules-auto (LBS ESSENTIEL, LBS PREMIUM) n'ont pas été ouverts.
