$(".product-colors span").click(function(){
    $(".product-colors span").removeClass("active")
    $(this).addClass("active")
    $(".phone-pic").css("backgroundImage",$(this).attr("data-pic"))
})

$(".storage .box").click(function(){
    $(".storage .box").removeClass("active")
    $(this).addClass("active")
})


let res = document.querySelector('div#price')
    const val = document.querySelector('.storage')
    const p1 = document.querySelector('div#p1')
    const p2 = document.querySelector('div#p2')
    const p3 = document.querySelector('div#p3')

function low(){
    if(p1 == ""){
        alert('Valor zerado!')
    } else {
        res.innerHTML = "R$ 4.999,00"
    }
}

function medium(){
    if(p1 == ""){
        alert('Valor zerado!')
    } else {
        res.innerHTML = "R$ 5.299,00"
    }
}
function high(){
    if(p1 == ""){
        alert('Valor zerado!')
    } else {
        res.innerHTML = "R$ 5.799,00"
    }
}

// document.addEventListener('click', function(){
//     let res = document.querySelector('div#price')
//     const val = document.querySelector('.storage')
//     const p1 = document.querySelector('div#p1')
//     const p2 = document.querySelector('div#p2')
//     const p3 = document.querySelector('div#p3')

    

    // const p1 = '2.350,00'
    // const p2 = '4.350,00'
    // const p3 = '3.250,00'




// storage = p1;

// switch (storage) {
//     case p1:
//         res.innerHTML = `${p1}`
//         break;
//     case p2:
//         res.innerHTML = `${p2}`
//         break;
//     case p3:
//         res.innerHTML = `${p3}`
// } 

// res.innerHTML = `${storage}`


// })

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })








