let Btn_check=document.getElementById("check_result");


Btn_check.onclick=function checkResults(){
    let correctLabels=document.querySelectorAll("label.correct_answer");
    let allLabels=document.querySelectorAll("label.answer");
    let correctChecked=0;

    //boji sve tačne odgovore zeleno i broji tačno čekirane
    correctLabels.forEach(label=>{
        label.style.backgroundColor="#3a7d6b";

        let input=label.querySelector("input");
        if(input.checked){
            correctChecked++;
        }
    });

    //boji netačno čekirane odgovore u crveno
    allLabels.forEach(label=>{
        let input=label.querySelector("input");

        if(input.checked && !label.classList.contains("correct")){
            label.style.backgroundColor="#8b2e2e";
        }
    });

    //računa i prikazuje procenat tačno odgovorenih pitanja
    let percentage=correctChecked * 100/8;
    
    document.getElementById("result").innerHTML="Tačno označeno: " + percentage + "%";



}