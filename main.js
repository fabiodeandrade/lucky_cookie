const url = "https://api.adviceslip.com/advice"

function getInfo() {
    axios.get(url)
        .then(response => {
            const dayMsg = `"${response.data.slip.advice}"`;
            render.textContent = dayMsg;
        })
        .catch(error => console.log(error))
}


getInfo();