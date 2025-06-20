// Selection of Result Section
let Result = document.querySelector(".result");
Result.innerText=`~ 0 USD`;

// Selection of Currency 1
let cur1_detail = document.querySelector(".cur1-detail");
let cur1_img = document.querySelector(".cur1-img");
let select1_value="INR";

cur1_detail.addEventListener("change",(event)=>{
    select1_value = cur1_detail.value;
    cur1_img.setAttribute("src",`/flag/${select1_value}.jpeg`);
});

// Selection of Currency 2
let cur2_detail = document.querySelector(".cur2-detail");
let cur2_img = document.querySelector(".cur2-img");
let select2_value="USD";

cur2_detail.addEventListener("change",(event)=>{
    select2_value = cur2_detail.value;
    cur2_img.setAttribute("src",`/flag/${select2_value}.jpeg`);
    Result.innerText=`~ 0 ${select2_value}`;
});

// Swap Currency
let Reverse = document.querySelector(".reverse");

Reverse.addEventListener("click",(event)=>{
    let cur3_detail = cur2_detail.value;
    
    cur2_detail.value=cur1_detail.value;
    cur2_img.setAttribute("src",`/flag/${cur1_detail.value}.jpeg`);
    select2_value=cur2_detail.value;
    Result.innerText=`~ 0 ${select2_value}`;

    cur1_detail.value=cur3_detail;
    cur1_img.setAttribute("src",`/flag/${cur3_detail}.jpeg`);
    select1_value=cur1_detail.value;
});

// Covert the value of currency 1 into currency 2
let convert_btn = document.querySelector(".convert");
let amount = document.querySelector(".amount");  

convert_btn.addEventListener("click",(event)=>{
    let data1 = convert_res();
});

async function convert_res() {
    let url = `https://v6.exchangerate-api.com/v6/5c51b5ba2a685bca2510da9b/latest/${select1_value}`;

    let cur_obj =await fetch(url);
    let data = await cur_obj.json();

    let cur2_rate = data.conversion_rates[`${select2_value}`];
    if (amount.value=="") {
        Result.innerText=`Enter ${select1_value} Amount`;
    }else{
        let finalValue = cur2_rate*amount.value;    
        Result.innerText=`~ ${finalValue} ${select2_value}`;
    }
}