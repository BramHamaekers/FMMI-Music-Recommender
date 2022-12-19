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
            <label class = "question">
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
            <label class = "errMessage" id="error_fill_in_everything${name}" > 

            </label>
            <br>
            <br>
            <br>

            `;
         counter ++;
   }


 
   placeholder.innerHTML = out;
});


var jsonBtn = document.getElementById("btn")
  

jsonBtn.addEventListener("click", function(){
  let complete = true;
  let data = {}
  var comment = document.getElementById("comment").value
  var path = window.localStorage.getItem("path");
  var method = window.localStorage.getItem("method");
  var timeSpent = window.localStorage.getItem("timeSpent");
  var retryCount = window.localStorage.getItem("retryCount");
  data["path"] = path
  data["method"] = method
  data["timeSpent"] = timeSpent
  data["retryCount"] = retryCount

  for (let index = 1; index <= 10; index++) {
    try {
      data[`Q${index}`] = document.querySelector(`input[name="Q${index}"]:checked`).value;
    }
    catch(error){
      console.log(error);
      let name = "Q" + index.toString()
      let placeholder = document.querySelector(`#error_fill_in_everything${name}`);
      let out = "Please answer all questions";
      placeholder.innerHTML = out;
      complete = false;
      continue
    }
  }
  if(!complete){
    return;
  }

  data["comment"] = comment

  

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

if (path == "A") {
  if (method == "list") {
    window.localStorage.setItem("method", "ranking");
    document.location.href = "./genreSelect";
  }
  else if (method == "ranking") {
    document.location.href = "./Thankyou.html";
  }
}

else if (path == "B") {
  if (method == "ranking") {
    window.localStorage.setItem("method", "list");
    document.location.href = "./genreSelect";
  }
  else if (method == "list") {
    document.location.href = "./Thankyou.html";
  }
}

})