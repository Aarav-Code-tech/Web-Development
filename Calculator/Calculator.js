function clearr(){
    document.getElementById("output-value").textContent=" ";
    document.getElementById("history-value").textContent=" ";
}
function erase(){
    const a = document.getElementById("output-value");
    a.textContent=a.textContent.slice(0,-1);
}
function SetScreen(value){
    const output=document.getElementById("output-value")
    const ab = output.textContent;
    if(
        (["=","-","*","/"].includes(value)&& ab==="" )||
        (["=","-","*","/"].includes(value)&& ["=","-","*","/"].includes(ab.slice(-1)))

    ){
        return
    }
    else{
        output.textContent+=value
    }
}
function Calculate(){
    const output=document.getElementById("output-value");
    const history=document.getElementById("history-value");
    const expression=output.textContent.trim();
    if (expression===""){
        output.textContent="Enter an expression"
        return
    }
    else{
        const abc = eval(expression)
        history.textContent=expression;
        output.textContent=abc;
    }

}
    