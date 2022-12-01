if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//Remove cart item
function ready() {
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var quantityInputs2 = document.getElementsByClassName('product-quantity-input')
    for (var i = 0; i < quantityInputs2.length; i++) {
        var input = quantityInputs2[i]
        input.addEventListener('change', quantityChanged2)
    }

    var quantityInputs3 = document.getElementsByClassName('querySelector-button1')
    // console.log('quantityInputs3',quantityInputs3)
    for (var i = 0; i < quantityInputs3.length; i++) {
        var input = quantityInputs3[i]
        input.addEventListener('click', quantityChanged2)
    }

    // redirect when button is clicked
    document.getElementById('mc-embedded-subscribe').addEventListener('click', validateEmail);

    document.getElementById('mc-embedded-subscribe2').addEventListener('click', validateEmail2);
    
}




function validateEmail() {
    var emailID = document.getElementById('entry.1293249477').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('entry.1293249477').focus() ;
       return false;
    }
    var Name = document.getElementById('entry.1788447504').value;
    var Phone = document.getElementById('entry.2050546389').value;
    var Address = document.getElementById('entry.669891675').value;
    if (String(Name) < 1 || String(Phone) < 1 || String(Address) < 1) {
        alert("Missing or incorrect input")
        document.getElementById('entry.1293249477').focus() ;
        return false;
     }
    // return(true);
    return(true , setTimeout(redirect,1000) );
    
 }

 function redirect()
 {
     location.href = "thankyou.html";
 }

//  Contact page validation
 function validateEmail2() {
    var emailID = document.getElementById('entry.1293249477').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('entry.1293249477').focus() ;
       return false;
    }
    var Name = document.getElementById('entry.1788447504').value;
    if (String(Name) < 1 || String(Phone) < 1 || String(Address) < 1) {
        alert("Missing or incorrect input")
        document.getElementById('entry.1293249477').focus() ;
        return false;
     }
    // return(true);
    return(true , setTimeout(redirect2,1000) );
    
 }


 function redirect2()
 {
     location.href = "thankyoumessage.html";
 }

    




function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassNam('cart-item')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}




function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        // input.value = 1
        input.value = 0
    }
    updateCartTotal()
}


function quantityChanged2(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        // input.value = 1
        input.value = 0
    }
    updateCartTotal2()
}

function shipOption() {
    var ship = document.getElementsByClassName('ship-input2')[0].value
    if ( ship= 1) {
    document.getElementById('entry.1589933044').value = String("standard post")
    }
    if (ship = 2) {
        document.getElementById('entry.1589933044').value = String("Create own UPS label")
        }
    }  


function updateCartTotal2() {
    var cartItemContainer2 = document.getElementsByClassName('product-items')[0]
    // console.log('cartItemContainer2',cartItemContainer2)
    var cartRows2 = cartItemContainer2.getElementsByClassName('product-item')
    // console.log('cartRows2',cartRows2)
    var total2 = 0
    for (var i = 0; i < cartRows2.length; i++) {
        var cartRow2 = cartRows2[i]
        // console.log('cartRow2',cartRow2)
        var priceElement2 = cartRow2.getElementsByClassName('product-price')[0]
        var quantityElement2 = cartRow2.getElementsByClassName('product-quantity-input')[0]
        var price2 = parseFloat(priceElement2.innerText.replace('€', ''))
        var quantity2 = quantityElement2.value
        // console.log('quantityElement2',quantityElement2)
        // console.log('quantity2=',quantity2)
        
        total2 = total2 + (price2 * quantity2)
    }
    total2 = Math.round(total2 * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total2
    document.getElementsByClassName('cart-total-price2')[0].innerText = '€' + total2

    // CHANGE INPUT VALUE OF HIDDEN INPUTS FROM QUANTITY
    var quantityElement = document.getElementsByClassName('product-quantity-input')[0]
    // document.getElementsByClassName('cart-quantity-input')[0]
    // console.log("product 1 input", quantityElement.value)

    // C0501nor value
    document.getElementById('entry.495249817').value = String(quantityElement.value)
    // C0502bs value
    document.getElementById('entry.1621419680').value = String(document.getElementsByClassName('product-quantity-input')[1].value)
    // C1001nor value
    document.getElementById('entry.70028523').value = String(document.getElementsByClassName('product-quantity-input')[2].value)
    // C1002bs value
    document.getElementById('entry.1245892219').value = String(document.getElementsByClassName('product-quantity-input')[3].value)
    // C2001 value
    document.getElementById('entry.923915066').value = String(document.getElementsByClassName('product-quantity-input')[4].value)
    // O503 value
    document.getElementById('entry.1574564014').value = String(document.getElementsByClassName('product-quantity-input')[5].value)
    // A603 value
    document.getElementById('entry.604639497').value = String(document.getElementsByClassName('product-quantity-input')[6].value)
    // C5001 value
    document.getElementById('entry.2114677339').value = String(document.getElementsByClassName('product-quantity-input')[7].value)
    // 1101m value
    document.getElementById('entry.1995822072').value = String(document.getElementsByClassName('product-quantity-input')[8].value)
    // 1133 value
    document.getElementById('entry.1873245535').value = String(document.getElementsByClassName('product-quantity-input')[9].value)
    // 1133-3x value
    document.getElementById('entry.1878445071').value = String(document.getElementsByClassName('product-quantity-input')[10].value)
    // 1133-6x value
    document.getElementById('entry.10921528').value = String(document.getElementsByClassName('product-quantity-input')[11].value)
    // 1101rat value
    document.getElementById('entry.1298925332').value = String(document.getElementsByClassName('product-quantity-input')[12].value)
    // 1133rat value
    document.getElementById('entry.1823852726').value = String(document.getElementsByClassName('product-quantity-input')[13].value)
    // 1133rat-3x value
    document.getElementById('entry.61341585').value = String(document.getElementsByClassName('product-quantity-input')[14].value)
    // 1133rat-6x value
    document.getElementById('entry.39888874').value = String(document.getElementsByClassName('product-quantity-input')[15].value)
    
    // Total value
    document.getElementById('entry.431486396').value = String(total2)
    
    // Shipping option
    shipOption()
    
}
