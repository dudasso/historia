const content = document.getElementById("content")

const historia =[
    {
        message: "você sai de casa e precisa escolher entre ir a padaria",
        options: [1,2]
    },
    {
        message: "voce vai á padaria e está fechada, você chora."
    },
    {
        message: "você vai ao trabalho sem café, você chora"
    },
]

function getStep(){
    const urlParams = new URLSearchParams(window,location,search);
    let step = urlParams.get('get')
}