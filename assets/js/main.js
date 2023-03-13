//Counter
jQuery(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})
//Slider
var arr =["We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.",
"We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.",
"We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.",
"We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.",
"We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.",
]


var i = 0;

        console.log(arr.length);
document.getElementById("right").addEventListener("click",()=>{
    i++;
    
    if(arr.length<i){
        i = 0 ;
    }


    document.getElementById("i").style.transform = "translateX(-50vw)"
    document.getElementById("i").style.opacity = "0";

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(100vw)"
    document.getElementById("i").style.opacity = "0";
        document.getElementById("i").textContent = arr[i];

    } ,1200 )
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)"
        document.getElementById("i").style.opacity = "1";

    } ,1500 )

    document.getElementById("num").innerHTML = `${0}${i}/${0}${arr.length}`
})




document.getElementById("left").addEventListener("click",()=>{
    i--;
    if(i<0){
        i = 5;
    }

    document.getElementById("i").style.transform = "translateX(50vw)"
    document.getElementById("i").style.opacity = "0";

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(-100vw)"
    document.getElementById("i").style.opacity = "0";
    document.getElementById("i").textContent = arr[i];

    } ,1200 )
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)"
        document.getElementById("i").style.opacity = "1";

    } ,1500 )

    document.getElementById("num").innerHTML = `${0}${i}/${0}${arr.length}`
})

