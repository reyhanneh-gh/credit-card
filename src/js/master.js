// -------------------card inputs--------------------
const cardNum1 = document.getElementById('cardNum1')
const cardNum2 = document.getElementById('cardNum2')
const cardNum3 = document.getElementById('cardNum3')
const cardNum4 = document.getElementById('cardNum4')

const year1 = document.getElementById('year1')
const month1 = document.getElementById('month1')
const cvv = document.getElementById('cvv')

// -------------------main inputs--------------------
const Inp1 = document.querySelectorAll('#Inp1>input')
const Inp2 = document.querySelectorAll('#Inp2>input')
const sp = document.querySelector('#cardInp2>span')
const cvv2 = document.querySelector('#cvv2>input')
let card1 = document.querySelector('main>figure')

// -----------------card number---------------------
Inp1.forEach((val, index) => {
    val.addEventListener('keyup', e => {
        if (val.value.length >= 4) {
            val.value = val.value.slice(0, 4);
            if (index != 3) {
                val.nextElementSibling.focus()
            } else {
                cardNum1.style.opacity = '0'
                cardNum2.style.opacity = '0'
                cardNum3.style.opacity = '0'
                cardNum4.style.opacity = '0'
                sp.style.opacity = '0'
                year1.style.opacity = '0'
                month1.style.opacity = '0'
                card1.style.transform = 'rotateY(180deg)'
                cvv2.focus()
            }
        } else if (val.value.length == 0) {
            if ((index != 0) && (e.keyCode == 8)) {
                val.previousElementSibling.focus()
            }
        }
        cardNum1.value = Inp1[0].value
        cardNum2.value = Inp1[1].value
        cardNum3.value = Inp1[2].value
        cardNum4.value = Inp1[3].value
    })
})

// --------------------cvv2------------------------
cvv2.addEventListener('keyup', e => {
    if (cvv2.value.length >= 3) {
        cvv2.value = cvv2.value.slice(0, 3);
        Inp2[0].focus()
        cvv.innerText = cvv2.value
    }

})

// -----------------expire date--------------------
Inp2.forEach((val1, i1) => {
    val1.addEventListener('keyup', e => {
        card1.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            cardNum1.style.opacity = '1'
            cardNum2.style.opacity = '1'
            cardNum3.style.opacity = '1'
            cardNum4.style.opacity = '1'
            year1.style.opacity = '1'
            month1.style.opacity = '1'
            sp.style.opacity = '1'
        }, 500)


        if (val1.value.length >= 2) {
            val1.value = val1.value.slice(0, 2)

            year1.value = Inp2[0].value
            month1.value = Inp2[1].value

            if (val1.nextElementSibling) {
                val1.nextElementSibling.focus()
            }
        } else if (val1.value.length === 0) {
            if (i1 !== 0 && (e.keyCode === 8)) {
                val1.previousElementSibling.focus()
            }
        }
    })
})