
document.getElementById("boton").addEventListener("click", function () {

    console.log ("hizo cli")

    document.getElementById("txt").innerHTML = "2022 Instructorado de Yoga - 2021 Instructorado de Pilates - 2019 AutoCad 2D - 2017-2019 Artes Visuales"
     
})

document.getElementById("boton_ocultar").addEventListener("click",function (){
    console.log ("hizo otro cli")

    document.getElementById("txt").style.display =  "none"
})
