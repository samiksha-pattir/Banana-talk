// input
// var username=prompt("give me username")
// // processing
// var welcomemsg ="this script is working!!"+username;
// // output
// alert(welcomemsg)


// var btn=document.querySelector("#btn-translate");

// // console.log(btn)



var btn= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
// console.log(txtInput)
var outputDiv=document.querySelector("#output");
var url= "https://api.funtranslations.com/translate/minion.json";
function getTrans(text){
    return url+"?"+"text="+text
}


function clickHandler(){
  fetch(getTrans(txtInput.value))
    .then (res=> res.json())
    .then(json=>{
        var translation=json.contents.translated;
        outputDiv.innerText=translation;
    })
};



// outputDiv.innerText="simi shivani"
// console.log(outputDiv);


// function clickHandler(){
//     outputDiv.innerText="abcd  "+txtInput.value;
// };

// btn.addEventListener("click",function clickEventHandler(){
//     console.log("clicked!!")
//     console.log("input",txtInput.value)
// });

btn.addEventListener("click",clickHandler)

// 1.document.querySelectorAll("textarea")
// 2.btn-primry
// 3.#input-btn
// 4."input[name='translater']"
