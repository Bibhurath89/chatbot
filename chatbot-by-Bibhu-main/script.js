const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infoText = wrapper.querySelector(".info-text"),
synonyms = wrapper.querySelector(".synonyms .list"),
removeIcon = wrapper.querySelector(".search span");
removeIcon.addEventListener('click',()=>{
    searchInput.value="";
})
let audio;
let query="";




function fetchApi(query){
    let resu=document.getElementById("result");
    resu.style.display="none"
    let info= document.getElementById("info");
    info.style.display="block"
    info.innerHTML="Loading..."
    let inputfield=document.getElementById("inputfield")
   
    query=query.replace(/ /g,"+") 
    fetch(`https://chatbot-api-Bibhurath.vercel.app/ask?q=${query}`)
        .then(response => response.json())
        .then(response => {
           let info= document.getElementById("info");
           info.style.display="none";
            resu.style.display="block"
            resu.innerHTML=response["answer"];
             inputfield.value=""
            if(response["answer"]==undefined){
                resu.innerHTML=`The request to the API has timed out. Please try again later, or if the issue persists, please contact the API provider`
                
            }
        })
        .catch(err => {
            info.style.display="none";
            resu.style.display="block"
        resu.innerHTML="Something Went Wrong Conatct with admin"
        
    });
   
}





searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    searchInput.addEventListener('input',()=>{
            query=searchInput.value;
            console.log(query);
    })
    if(e.key == "Enter" && word){
        
        var res=fetchApi(query);
        
    }
});
