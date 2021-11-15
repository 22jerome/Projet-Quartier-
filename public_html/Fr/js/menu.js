document.getElementById('menu').innerHTML = `



 <div class="nav-tabs px-3 py-2 text-white">
        <div class="container"></div>
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="../../Fr/Accueil/accueil.html" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <img  src="https://i.ibb.co/bBms1cv/logo2-64x86.png">
                </a>

                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <a href = "../../Fr/Accueil/accueil.html" id="accueil" class = "nav-link text-white" >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="../../Fr/boutique/boutique.html" id="Boutique" class="nav-link text-white">
                            Boutique
                        </a>
                    </li>
                    <li>
                        <a href="../../Fr/histoire/histoire.html" id="histoireConfluence" class="nav-link text-white">
                            Histoire de Confluence
                        </a>
                    </li>
                    <li>
                        <a href = "../../Fr/Archi/archi.html" id="Archi" class = "nav-link text-white" >
                            Architecture Urbaine
                        </a>
                    </li>
                    <li>
                        <a href="../../Fr/Actualites/actualites.html" id="Actu" class="nav-link text-white">
                            A Propos
                        </a>
                    </li>
                    <li>
                        <a href="../../Fr/Galerie/galerie.html" id="galerie" class="nav-link text-white">
                            Galerie Photo
                        </a>
                    </li>
                    <li>

                    </li>
                    <li>
                        <a id="en" href="../../En/"><img id="ico-angl" src = "https://cdn-icons-png.flaticon.com/512/330/330425.png"
                        width = "50px"> </a>
                    </li>
                    
                    <li>
                    <a id="fr" href="../../Fr/"><img src = "https://cdn-icons-png.flaticon.com/512/330/330490.png"
                    width = "40px"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js"
        integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
        integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
`;
// text-secondary


// if (pathArray[4] == "galerie.html") {
//     console.log("yes")
// }

let test1 = window.location.pathname.split("/");
//! test[4] quand on est en local mais test[3] quand on est en ligne
console.log(test1)
console.log(test1[3])
if (test1[3] == "galerie.html") {
    document.getElementById("galerie").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/Galerie/galerie.html"
    document.getElementById("fr").href = "../../../Fr/Galerie/galerie.html"

} else if (test1[3] == "accueil.html") {
    document.getElementById("accueil").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/Accueil/accueil.html"
    document.getElementById("fr").href = "../../../Fr/Accueil/accueil.html"
} else if (test1[3] == "actualites.html") {
    document.getElementById("Actu").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/Actualites/actualites.html"
    document.getElementById("fr").href = "../../../Fr/Actualites/actualites.html"
} else if (test1[3] == "archi.html") {
    document.getElementById("Archi").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/Archi/archi.html"
    document.getElementById("fr").href = "../../../Fr/Archi/archi.html"
} else if (test1[3] == "boutique.html") {
    document.getElementById("Boutique").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/boutique/boutique.html"
    document.getElementById("fr").href = "../../../Fr/boutique/boutique.html"
}else if (test1[3] == "histoire.html"){
    document.getElementById("histoireConfluence").classList = "nav-link text-blue"
    document.getElementById("en").href = "../../../En/histoire/histoire.html"
    document.getElementById("fr").href = "../../../Fr/histoire/histoire.html"
}
if (test1[1] == "En") {
    document.getElementById("accueil").href = "../../../En/Accueil/accueil.html"
    document.getElementById("Boutique").href = "../../../En/boutique/boutique.html"
    document.getElementById("histoireConfluence").href = "../../../En/Archi/archi.html"
    document.getElementById("Archi").href = "../../../En/Archi/archi.html"
    document.getElementById("Actu").href = "../../../En/Actualites/actualites.html"
    document.getElementById("galerie").href = "../../../En/Galerie/galerie.html"
}
if (test1[1] == "Fr") {
    document.getElementById("accueil").href = "../../../Fr/Accueil/accueil.html"
    document.getElementById("Boutique").href = "../../../Fr/boutique/boutique.html"
    document.getElementById("histoireConfluence").href = "../../../Fr/histoire/histoire.html"
    document.getElementById("Archi").href = "../../../Fr/Archi/archi.html"
    document.getElementById("Actu").href = "../../../Fr/Actualites/actualites.html"
    document.getElementById("galerie").href = "../../../Fr/Galerie/galerie.html"
}
