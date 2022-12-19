fetch("vragen.json")
.then(function(response){
   return response.json();
})
.then(function(vragen){
   let placeholder = document.querySelector("#output-vragen");
   let out = "";
   let counter = 1;
   for(let vraag of vragen){
        name = "Q" + counter.toString()
        out += `
            <label>
               ${vraag.tekst}
            </label>
        
            <ul class="likert" id = "${name}">
                <li> Strongly Disagree </li>
                <li><input type="radio" name="${name}" value="1" /></li>
                <li><input type="radio" name="${name}" value="2" /></li>
                <li><input type="radio" name="${name}" value="3" /></li>
                <li><input type="radio" name="${name}" value="4" /></li>
                <li><input type="radio" name="${name}" value="5" /></li>
                <li> Strongly Agree </li>
            </ul>
            <br>
            <br>
            `;
         counter ++;
   }


 
   placeholder.innerHTML = out;
});


var jsonBtn = document.getElementById("btn")
  

jsonBtn.addEventListener("click", function(){
  document.getElementById("btn").innerHTML = "YOU CLICKED MEb!";

  // for (const option in options1) {
  //   if (option.value) {
  //     const element = object[key];
      
  //   }
  // }
  let data = {}
  for (let index = 1; index <= 14; index++) {
    data[`Q${index}`] = document.querySelector(`input[name="Q${index}"]:checked`).value;
  }
  

  fetch("/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: data,
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Sending " + data)
    })
    .catch(err => console.log(err));

  })