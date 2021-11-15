<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <section>
        <?php echo "<img class='img' src='https://i.ibb.co/cvvC4vw/20211019-093718.jpg'></img>" ?>
        <?php echo "<img class='img'src='https://i.ibb.co/8Kj6QLX/IMG20211019102453-2.jpg'></img>" ?>
        <?php echo "" ?>
        <p>Bonjour,
            Voici notre superbe équipe composé de Yvan, Jérôme, Florian
            <?php setlocale(LC_TIME, 'fr_FR.utf8', 'fra');
            echo (strftime("%A %d %B %Y")) ?>
            <a href='Fr/Accueil/accueil.html'> clicker ici pour commencer<a></p>

    </section>
</body>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #C0c0c0;

    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .img {
        /* width: 500px; */
        height: 100vh;
    }

    P {
        font-size: 24px;
        text-shadow: 2px 0.5px black;
        color: white;
        display: block;
        position: absolute;
        width: 400px;
        /* border:1px solid red; */
        background-color: #23A1A8;
        border-radius: 5px;
        box-shadow: 4px 4px 4px black;
    }
</style>

</html>