# LBS Services & Nettoyage — site vitrine

Statique (HTML/CSS/JS), aucun build. Aperçu : entrée `lbs-services` du `launch.json` partagé (port 4985).
`?static` dans l'URL désactive animations, reveal et le canvas du hero (utile pour les captures headless).

Sources : site Google Sites du client + Instagram @lbs.nettoyage (oct. 2026). Aucun contenu inventé.

## Direction artistique
Celle du client, mesurée sur son site : voir `DA-CLIENT.md`. Noir `#000` / `#1C1C1C`, vert `#18A000`, texte `#F9F9F9`, bandeaux vert forêt à losanges (`#324D2D` vers `#48743E`), Lato 700 + Playfair Display + Roboto, boutons rectangulaires 4 px. Logo réel (version détourée) en header, hero et footer ; les étincelles du logo servent de motif (`.sp`).

## Fichiers
- `assets/photos/` : originaux du client (28 fichiers, `INDEX.md` = inventaire). Non servis par la page.
- `assets/img/` : versions WebP redimensionnées utilisées par le site (logo, hero, galerie, 8 visuels avant/après en 1080 et 560, paires vitres), `og.jpg`, `favicon.png`.
- Régénération : script sharp (voir `studio-master/scripts/lib/chrome.mjs`, fonction `sharp()`).

## À compléter / à trancher avec Lenny
- [ ] **Photo EVIK** (`vitres-vitrine-evik-cannes.jpg`) : non utilisée, nom d'un autre client visible, accord requis.
- [ ] **Paires « à confirmer »** (`yacht-toit-verre-1/2`, `baie-avant` / `coque-apres`) : montrées en galerie simple, jamais comme avant/après. À confirmer pour en faire de vraies comparaisons.
- [ ] **Slider panneau de pont** : les deux photos ne sont pas cadrées à l'identique (c'est la paire fournie) ; idéalement demander deux photos au même angle.
- [ ] **Portrait de Lenny** : il n'y en a pas (photos de dos / de loin). La section À propos montre une photo de chantier, sans visage mis en avant.
- [ ] **Tarifs vitres et contrats pro** : absents du site actuel → non affichés.
- [ ] **Mentions légales** : SIRET, adresse, hébergeur, agrément services à la personne (n° / partenaire exact : le site Google nomme à la fois « Unipros » et « Accès SAP »).
- [ ] **Incohérences du site d'origine** : textes « Annecy » (copié d'un autre site) et « autour de GRASSE » → ici : Côte d'Azur / Alpes-Maritimes / Monaco, 10 km autour de Grasse. À confirmer.
- [ ] **« +15 professionnels »** : affirmation du client, à vérifier avant mise en ligne.
- [ ] **Avis Google** : reproduits depuis le site du client (orthographe légèrement corrigée) ; lier la fiche Google Business quand l'URL est connue.
- [ ] **Yachts** : présents dans les photos et sur Insta (« Yachts »), absents du texte du site d'origine → à valider comme prestation avant mise en ligne.
- [ ] **Version « octobre rose » du logo** (Instagram) : non utilisée, résolution trop faible.
- [ ] Nom de domaine + déploiement Vercel (non fait, attendre le feu vert).
