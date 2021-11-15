// for (let i = 0; i < links2[0].length; i++) {
//     let img1 = links2[0][i];
//     console.log(img1);
//     let im = document.createElement("img")
//     im.src = img1
//     let div = document.createElement("div")
//     div.id = "col"
//     // div.id += " co"+i
//     let block = document.getElementById("imgGalerie")
//     // document.getElementsByClassName("colone").innerHTML = `<div class="col">`
//     block.appendChild(div)
//     let test = document.getElementById("col");
//     test.appendChild(im)
//     // block.appendChild(im);
//     // document.getElementsByClassName("colone").innerHTML = `</div>`

//     // innerHTML = `</div>`

// }

// for (let i = 0; i < links.length; i=i+2) {
//     // const element = links[i];
//     let lien1 = links[i];
//     let lien2 = links[i+1];
//     let lien3 = links[i+1];
//     console.log(lien1,lien2,lien3)   
//     let div = document.createElement("div")
//     div.id = "col"
//     let BaliseImg1 = document.createElement("img")
//     BaliseImg1.src = lien1
//     let BaliseImg2 = document.createElement("img")
//     BaliseImg2.src = lien2
//     let BaliseImg3 = document.createElement("img")
//     BaliseImg3.src = lien3
//     let divgalerie = document.getElementById("imgGalerie")
//     divgalerie.appendChild(div)
//     let col = document.getElementById("col")
//     col.append(BaliseImg1, BaliseImg2 ,BaliseImg3)

// }


// function galerieAjoutImg(i) {
//     let lien1 = links[i]
//     let lien2 = links[i + 1]
//     let lien3 = links[i + 2]
//     console.log(lien1)

//     let img1 = document.createElement("img")
//     let img2 = document.createElement("img")
//     let img3 = document.createElement("img")
//     let div = document.createElement("div")
//     div.id = "col-lg-4 col-md-12 mb-4 mb-lg-0" + " " + i
//     img1.src = lien1
//     img1.id = "test" 
//     img1.id += "1"
//     img2.src = lien2
//     img2.id = "test"
//     img2.id += "2"
//     img3.src = lien3
//     img3.id = "test"
//     img3.id += "3"
//     let row1 = document.getElementById("row")
//     row1.appendChild(div)
//     let img4 = document.getElementById("col-lg-4 col-md-12 mb-4 mb-lg-0" + " " + i)
//     img4.appendChild(img1)
//     img4.appendChild(img2)
//     img4.appendChild(img3)
//     return i = i + 3

// }

// // if (links.length % 3 == 0) {

//     for (let i = 0; i < links.length; i = i + 3) {
//         galerieAjoutImg(i)
//         console.log(i)

//     }
// }
// let test = document.getElementById("test")
// if (test.src == "undefined"){
//     console.log("oui")
// }console.log("non")
// console.log(test.src)

// function galerieAjoutImg(i) {
//     let lien1 = links2[0][i]
//     let lien2 = links2[0][i + 1]
//     let lien3 = links2[0][i + 2]
//     if (lien1 == "undefined" || lien2 == "undefined" || lien3 == "undefined"){
//         console.log("yes")
//         return i++
//     }else {
//     console.log(lien1)

//     let img1 = document.createElement("img")
//     let img2 = document.createElement("img")
//     let img3 = document.createElement("img")
//     let div = document.createElement("div")
//     div.id = "col-lg-4 col-md-12 mb-4 mb-lg-0" + " " + i
//     img1.src = lien1
//     img1.id = "test"
//     img1.id += "1"
//     img2.src = lien2
//     img2.id = "test"
//     img2.id += "2"
//     img3.src = lien3
//     img3.id = "test"
//     img3.id += "3"
//     let row1 = document.getElementById("row")
//     row1.appendChild(div)
//     let img4 = document.getElementById("col-lg-4 col-md-12 mb-4 mb-lg-0" + " " + i)
//     img4.appendChild(img1)
//     img4.appendChild(img2)
//     img4.appendChild(img3)
//     return i
//     }
// }

// // if (links.length % 3 == 0) {

// for (let i = 0; i < links2[0].length; i++) {
//     galerieAjoutImg(i)
//     // console.log(links[0].length)
//     console.log(i)

// }

// for (let i = 0; i < 1; i++) {
//     console.log(links2[i], i)
//     // console.log(links2{1}, i)

// }
