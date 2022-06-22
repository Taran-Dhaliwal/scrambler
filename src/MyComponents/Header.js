import React from 'react'

export default function header() {
   
    const extracting = ()=>{
        console.log("words");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var response = JSON.parse(xhttp.responseText).data.sentence;
               
               document.getElementById("heading").innerHTML = response;
            }
        }
        xhttp.open("GET",  "https://api.hatchways.io/assessment/sentences/1");
        xhttp.send();
        
    }
    
    function scrambling(){
        window.onload = function(){
        var answer="";
           const words = document.getElementById("heading").innerText.split(' ');
            console.log(words);
            
           words.forEach(myFunction);

           function myFunction(word) {
               if(word.length>1){
                   let sub = word.substring(1, word.length-1 );
                   console.log(sub);
                   let chars = [];
                   for (var i=0; i<sub.length;i++){
                        chars[i]=sub.charAt(i);
                   }
                  shuffle(chars);
                   sub="";
                   for (var i=0; i<chars.length;i++){
                    sub +=chars[i];
                    }
                    word= word.charAt(0)+sub+word.charAt(word.length-1);
                    console.log(word);
               }
               answer+=" "+word;
               console.log(answer);
               document.getElementById("temp").innerText = answer;

             }

             function shuffle(array){
                for (var i = array.length - 1; i > 0; i--) {
   
                    // Generate random number
                    var j = Math.floor(Math.random() * (i + 1));
                                
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                    
                return array;
             }

            }
     }


  return (
      <>
    <div className='heading' id= "heading">

       { extracting() }
       { scrambling()}
      
    </div>
    <h1 id ="temp"></h1>
    </>
  )
}
