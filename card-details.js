function validate(){
    let main = document.querySelector("main");
    let col2 = main.querySelector(".col-2");
    let form = col2.querySelector("form");
    let row = form.querySelector(".row");
    let date = row.querySelector(".date");

    let cardNumber = form.querySelector(".card-number");
    let cardName = form.querySelector(".card-name");

    let number = cardNumber.querySelector("input").value;
    let name = cardName.querySelector("input").value;
    let month = date.querySelectorAll("input")[0].value;
    let year = date.querySelectorAll("input")[1].value;
    let cvc = row.querySelector(".cvc").querySelector("input").value;


    if (checkCardName() != 1){
        return false;
    }

    if (checkCardNumber() != 1){
        return false;
    }

    if (checkDate() != 1){
        return false;
    }

    if (checkCVC() != 1){
        return false;
    }

    if (number.length == 16){
        number = formatNum(number);
    }

    if (month.length == 1){
        month = '0'+month;
    }

    localStorage.setItem("FMfullName", name);
    localStorage.setItem("FMcardNumber", number);
    localStorage.setItem("FMmonth", month);
    localStorage.setItem("FMyear", year);
    localStorage.setItem("FMcvc", cvc);
    Redirect();
}

function Redirect(){
    window.location.href = "./complete.html";
}

function checkCardName(){
    let main = document.querySelector("main");
    let col2 = main.querySelector(".col-2");
    let form = col2.querySelector("form");
    let cardName = form.querySelector(".card-name");

    let input = cardName.querySelector("input").value;
    
    if (input == ''){
        cardName.querySelector(".error-txt").classList.remove("hidden");
        return false
    }

    else{
        return true;
    }
}

function checkCardNumber(){
    let val = false;
    let main = document.querySelector("main");
    let col2 = main.querySelector(".col-2");
    let form = col2.querySelector("form");
    let cardNumber = form.querySelector(".card-number");

    let input = cardNumber.querySelector("input").value;

    let pattern = /[a-zA-Z]/;

    if (pattern.test(input) == false){
        return true;
    }

    cardNumber.querySelector(".error-txt").classList.remove("hidden");
    return val;
}

function checkDate(){
    let main = document.querySelector("main");
    let col2 = main.querySelector(".col-2");
    let form = col2.querySelector("form");
    let row = form.querySelector(".row");
    let date = row.querySelector(".date");

    let month = date.querySelectorAll("input")[0].value;
    let year = date.querySelectorAll("input")[1].value;

    let val = true;
    let pattern = /[a-zA-Z]/;

    if (month == '' || year== ''){
        val = false;
        date.querySelector('.error-txt').classList.remove("hidden");
        if (month == ''){
            date.querySelectorAll("input")[0].classList.add("error-input");
        }
        else{
            date.querySelectorAll("input")[1].classList.add("error-input");
        }
    }

    if (pattern.test(month) || pattern.test(year)){
        val = false;
        date.querySelector('.error-txt2').classList.remove("hidden");
        if (pattern.test(month)){
            date.querySelectorAll("input")[0].classList.add("error-input");
        }
        else{
            date.querySelectorAll("input")[1].classList.add("error-input");
        }
    }

    if (Number(month) > 12 || Number(month) < 1){
        val = false;
        date.querySelector(".error-txt3").classList.remove("hidden");
        date.querySelectorAll("input")[0].classList.add("error-input");
    }

    return val;
}

function checkCVC(){
    let main = document.querySelector("main");
    let col2 = main.querySelector(".col-2");
    let form = col2.querySelector("form");
    let row = form.querySelector(".row");
    let cvc = row.querySelector(".cvc");

    let cvcNum = cvc.querySelector("input").value;

    let val = true;
    let pattern = /[a-zA-Z]/;

    if (cvcNum == ''){
        val = false;
        cvc.querySelector('.error-txt').classList.remove("hidden");
        cvc.querySelector("input").classList.add("error-input");
    }

    if (pattern.test(cvcNum)){
        val = false;
        cvc.querySelector('.error-txt2').classList.remove("hidden");
        cvc.querySelector("input").classList.add("error-input");
    }

    return val;
}

function formatNum(num){
    const oldNum = num;
    let newNum = '';
    for (i = 0; i < oldNum.length; i++){
        if (i%4 == 0){
            newNum += ' ' + oldNum[i];
            continue;
        }
        newNum += oldNum[i];
    }
    return newNum;
}

function print_card(){

    let main = document.querySelector("main");
    let col1 = main.querySelector(".col-1");
    let card_front = col1.querySelector(".card-front");
    let card_back = col1.querySelector(".card-back");
    let number = card_front.querySelector(".num");
    let name = card_front.querySelector(".name");
    let date = card_front.querySelector(".date");
    let cvc = card_back.querySelector(".cvc");

    let fmname = localStorage.getItem("FMfullName");
    let fmnumber = localStorage.getItem("FMcardNumber");
    let fmmonth = localStorage.getItem("FMmonth");
    let fmyear = localStorage.getItem("FMyear");
    let fmcvc = localStorage.getItem("FMcvc");

    console.log(fmname);

    number.innerHTML = fmnumber;
    name.innerHTML = fmname;
    cvc.innerHTML = fmcvc;
    date.innerHTML = fmmonth + "/" + fmyear;
}

function reset(){
    window.location.href = "./index.html";
}
