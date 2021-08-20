let headingOne = document.querySelector('h1')      //queryselector--->Used for searching html element

headingOne.addEventListener('click',function(){     //addeventlistener-->used for appliing function non html element
    headingOne.style.color = "red"
    headingOne.style.background = "yellow"
})

// There are to methods of searching html element
//1]Searching the element by attribute value
//2]Searching the element based on id and class

//Class return list of html element which are called nodelist html element

// let listclassgreen = document.querySelectorAll(".greencolour")
// console.log(listclassgreen)

// for(i=0;i<listclassgreen.length;i++){
//     listclassgreen[i].style.colour = "orange"
//     listclassgreen[i].style.background = "yellow"
// }

// let skybluecolour= document.querySelector('#skybluecolour')
// skybluecolour.style.colour = "blue"

