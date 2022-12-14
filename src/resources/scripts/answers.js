fetch("answers.json")
.then(function(response){
   return response.json();
})
.then(function(answers){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let answer of answers){
      out += `
         <tr>
            <td>${answer.path}</td>
            <td>${answer.method}</td>
            <td>${answer.timeSpent}</td>
            <td>${answer.retryCount}</td>
            <td>${answer.Q1}</td>
            <td>${answer.Q2}</td>
            <td>${answer.Q3}</td>
            <td>${answer.Q4}</td>
            <td>${answer.Q5}</td>
            <td>${answer.Q6}</td>
            <td>${answer.Q7}</td>
            <td>${answer.Q8}</td>
            <td>${answer.Q9}</td>
            <td>${answer.Q10}</td>
            <td>${answer.comment}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});