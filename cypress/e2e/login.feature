Feature: Connexion utilisateur

  Scenario: Connexion avec des identifiants valides
    Given je suis sur la page de connexion
    When je saisis "tomsmith" et le mot de passe "SuperSecretPassword!"
    Then je suis redirigé vers la page sécurisée

  Scenario: Connexion avec des identifiants invalides
    Given je suis sur la page de connexion
    When je saisis "mauvaisutilisateur" et le mot de passe "mauvaismdp"
    Then je vois un message d'erreur