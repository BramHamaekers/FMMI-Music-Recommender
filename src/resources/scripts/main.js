document.addEventListener("submit", sendData);

/** UGLY way of sending a POST request -> could use request module to fix this? */
function sendData(e) {
    e.preventDefault();
    const input = document.querySelector("#data").value;

    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err));
  }
