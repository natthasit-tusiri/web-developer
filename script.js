        
function sidemenu(){
        fetch("sidemenu.html") .then(function(res){
        console.log(res.url)
        return res.text()
    }) .then((html)=>{
        document.getElementById("left").innerHTML = html;
        console.log(html)
        // console.log(document.querySelectorAll('h2'))
    })}


function nav(){
    fetch("navbar.html")
    .then(res=>{return res.text()})
    .then(html=>{document.getElementById("navbar").innerHTML=html;})}


function statusCalculator(){


    document.getElementById('button-base-atk').addEventListener('click',()=>{
        const atk = document.getElementById('atk');
        const str = document.getElementById('str');
        result = (atk.value/(str.value/10/100))
        document.getElementById('base-atk-result').textContent = 'พลังโจมตีพื้นฐาน: '+result.toFixed(2);
        str.value = NaN;
    })

    document.getElementById('atk-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('total-atk');
        const value2 = document.getElementById('atk-increase');

        const result = Number(value1.value) * (Number(value2.value)/100);
        document.getElementById('atk-increase-result').textContent = 'พลังโจมตีเพิ่มขึ้น: '+result;
        value1.value = Number(value1.value) + result;
        value2.value = NaN;
    })

    document.getElementById('str-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('total-str');
        const value2 = document.getElementById('str-increase');

        const result = Number(value1.value) + (Number(value2.value));
        document.getElementById('str-increase-result').textContent = 'พลัง: '+result;
        value1.value = result;
        value2.value = NaN;
    })

    document.getElementById('pen-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('pen');
        const value2 = document.getElementById('pen-increase');

        const result = Number(value1.value) + (Number(value2.value));
        document.getElementById('pen-increase-result').textContent = 'เจาะเกราะ: '+result;
        value1.value = result;
        value2.value = NaN;
    })

    document.getElementById('shred-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('shred');
        const value2 = document.getElementById('shred-increase');

        const result = Number(value1.value) + (Number(value2.value));
        document.getElementById('shred-increase-result').textContent = 'ทลายเกราะป้องกัน: '+result;
        value1.value = result;
        value2.value = NaN;
    })

    document.getElementById('def-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('def');
        const value2 = document.getElementById('def-increase');

        const result = Number(value1.value) + (Number(value2.value));
        document.getElementById('def-increase-result').textContent = 'พลังป้องกัน: '+result;
        value1.value = result;
        value2.value = NaN;
    })


    
    // ---------------------------------------------------------------------------------------//
}