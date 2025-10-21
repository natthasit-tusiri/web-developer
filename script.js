        
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




    document.getElementById('critdmg-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('critdmg');
        const value2 = document.getElementById('critdmg-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('critdmg-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })






    document.getElementById('elemental-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('elemental');
        const value2 = document.getElementById('elemental-increase');


        const baseValue_truePer = ((Number(value1.value)/11)*5)/100
        const increaseValue = ((Number(value2.value)/11)*5)/100
        const newValue_truePer = (increaseValue+baseValue_truePer)


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('elemental-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })



      document.getElementById('skilldmg-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('skilldmg');
        const value2 = document.getElementById('skilldmg-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('skilldmg-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })


    document.getElementById('dmgbonus-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('dmgbonus');
        const value2 = document.getElementById('dmgbonus-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('dmgbonus-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })


    document.getElementById('dmg-to-boss-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('dmg-to-boss');
        const value2 = document.getElementById('dmg-to-boss-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('dmg-to-boss-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })




    document.getElementById('shield-break-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('shield-break');
        const value2 = document.getElementById('shield-break-increase');
        const baseValue_truePer = (Number(value1.value)/100)
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('shield-break-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+"%";
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })



    document.getElementById('resonance-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('resonance');
        const value2 = document.getElementById('resonance-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('resonance-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })




    document.getElementById('dmg-to-debuff-increase-button').addEventListener('click',()=>{
        const value1 = document.getElementById('dmg-to-debuff');
        const value2 = document.getElementById('dmg-to-debuff-increase');
        const baseValue_truePer = Number(value1.value)/100
        const newValue_truePer = (Number(value2.value)+Number(value1.value))/100


        const result = [((1+newValue_truePer)/(1+baseValue_truePer))*100]-100
        document.getElementById('dmg-to-debuff-increase-result').textContent = 'ดาเมจเพิ่มขึ้น: '+result.toFixed(2)+'%';
        value1.value = (Number(value2.value)+Number(value1.value));
        value2.value = NaN;
    })

}