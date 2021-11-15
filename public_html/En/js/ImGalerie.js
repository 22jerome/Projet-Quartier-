import * as bddimg from "../js/LienImg.js"

let lienBDD = bddimg.lien2

function imgAdd(i,p) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let lien = lienBDD[p][i]
    if (lien == undefined) {
        console.log("Il y a plus d'image")
    } else {
        let img = document.createElement("img")
        img.src = lien
        img.classList = "test" + getRandomInt(3)
        console.log("x" + i)
        let img4 = document.getElementById("x" + i)
        img4.appendChild(img)
    }
}

function divAddY(x) {
    let div = document.createElement("div")
    div.id = "y" + x
    div.classList = "row"
    let row1 = document.getElementById("row1")
    row1.appendChild(div)


}

function divAddX(x, i) {
    let divx = document.createElement("div")
    divx.id = "x" + i
    divx.classList = "col-4 col-sm-4 col-lg-4"
    let row2 = document.getElementById("y" + x)
    row2.appendChild(divx)
}

// imgAdd(2,2)
let x = 0
let y = 0
for (let i = 0; y < lienBDD[0].length / 3; y++, x++) {
    // console.log("y"+y,"i"+i,"x"+x)

    divAddY(y)
    for (let g = 0; g < 3; g++) {
        divAddX(x, i)
        i++
    }

}

function affichett(p) {
    for (let i = 0; i < lienBDD[0].length; i++) {
        console.log("test" + i)
        imgAdd(i,p)
    }
}

affichett(0)
affichett(1)
affichett(2)


console.log(lienBDD[0].length)
// imgAdd(2, 0)
// imgAdd(3, 0)
// imgAdd(4, 3)
// imgAdd(5, 3)
// imgAdd(6, 3)

// function RemoveImg(i){

// }


function test1() {
    document.getElementById("Selector").append("Selector")
    document.getElementById("x0").remove()
    // RemoveImg(i)
    // for (let i = 0; i < lienBDD[0].length; i++) {
    //     console.log("test" + i)
    // }
}

document.getElementById("menuSelec").append("test")

document.getElementById("test4").onclick = function () {
    test1()
};


// En devellopement

// function imgAddChoix(i,choix,ligne) {
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     }

//     let lien = lienBDD[choix][i]
//     if (lien == undefined) {
//         console.log("Il y a plus d'image")
//     } else {
//         let img = document.createElement("img")
//         img.src = lien
//         img.id = "test" + getRandomInt(3)
//         console.log("x" + i)
//         let img4 = document.getElementById("x" + ligne)
//         img4.appendChild(img)
//     }
// }
// for (let i = 0; i < lienBDD.length;i++){

//     // imgAddChoix(1, i,11)
//     // imgAddChoix(1, i, 10)
//     // imgAddChoix(1, i, 9)

// }