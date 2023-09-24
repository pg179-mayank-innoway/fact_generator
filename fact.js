const btn = document.querySelector("#btn");
const lat = document.querySelector("#new");



const call = async(input)=>{
    try{
        let response = await axios.get(`http://numbersapi.com/${input}/date`);
        return response.data;

    }catch(err){
        console.log(err)
    }
}

btn.addEventListener('click',async()=>{
    dom();
    let k = await call(document.querySelector("#date").value);
    display.style.color = "red";
    document.querySelector("#display").innerText = "=> " + k;
})

lat.addEventListener('click',(event)=>{
    event.preventDefault();
    lat.style.visibility = "hidden";
    btn.innerText="Click me !";
    document.querySelector("#date").value="";
    document.querySelector("#display").innerText="";

})

function dom(){
    lat.style.visibility ="visible";
    btn.innerText="next";

}


