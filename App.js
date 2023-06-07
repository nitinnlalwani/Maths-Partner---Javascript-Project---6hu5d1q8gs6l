
function SavedButton(){
    let wet = document.querySelector(".inputBox1").innerHTML;
    let set = document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(wet,set);
    console.log(localStorage.getItem(set));
    set++;
}
let hcount =0;
function historyButton(){
    // console.log("work");
    hcount++;
    if(hcount%2==1){
        document.querySelector(".historycon").getElementsByClassName.display = " block";
        let data = document.querySelector(".historycon");

        for(p in localStorage){
            let ans = localStorage.getItem(p);
            if(ans != null){
                // console.log(ans);
                let h3 = document.createElement("h3");
                h3.setAttribute('class','remove');
                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3);
                data.appendChild(h3);
            }
        }
    }
    else{
        document.querySelector(".historycon").getElementsByClassName.display = "none";
        let rem = document.querySelector(".remove");
        for(var i=0; i<rem.clientHeight; i++){
            rem[i].remove();
        }
    }
}
function SearchButton(){
    event.preventDefault();
    // console.log(("wprk"));
    let problem = document.getElementById("problemBar").value;
    let category = document.getElementById("categoryBar").value
    // fetch API
    let pro = fetch(`https://newton.now.sh/api/v2/derive/x%5E2 ${category}/${problem}`) //Newton API
    // console.log(pro);
    pro.then((respose)=>{
        console.log(respose.status);
        console.log(respose.ok);
        return respose.json()
    })
    .then((valie)=>{
        console.log(value);
        let input2 = value.result;
        document.querySelector(".inputBox2").innerHTML = input2;
    })

    const input1 = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
    let set = document.querySelector(".inputBox1").value;
    let wet = document.querySelector(".inputBox2").innerHTML;
    localStorage.setItem(set.wet);
}

function delBtn(){
    // console.log("Working")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector("inputBox2").innerHTML = "";

}
