const ecran = document.querySelector(".ecran");
const btns = document.querySelectorAll('.container-boutons button');
const ops = ["*","/","-","+"];

// Expression qui sera affiché sur l'écran
let expression = "";


btns.forEach(btn => {

    btn.addEventListener('click', () => {

        // Si on clear la calto
        if (btn.getAttribute('data-index') === "c") {
            ecran.innerText = "";
            expression = "";
            return;
        }

        // Si on commence par rentrer un opérateur
        // if (btn.getAttribute("data-index") !== Number) {   
        // }

        
        // Quand on veut calculer l'expression rentrée
        if (btn.getAttribute("data-index") === "=") {

            calcul(expression);
            return;

        }

        expression += btn.getAttribute("data-index");
        ecran.innerText = expression;

    })

})


function calcul (expr) {

    let op = "";

    // Récupérer l'op
    for (let i = 0; i < expr.length; i++) {

        if (ops.includes(expr[i]))  {
            op += expr[i];
        }             
    }

    // Si on ne trouve pas d'opérateur
    if (op === undefined) {
        return;
    }

    let membres = expr.split(op);

    // Si l'opération comporte qu'un seul membre, exemple 69-, ou deux op



    if (op.length > 1 || membres.length !== 2) {

        ecran.innerText = "Erreur";
        expression = "";

        setTimeout(() => {

            ecran.innerText = "";

        }, 1000);
        
        return;
    }

    if (op === "*") {
        resultat = membres[0] * membres[1]
    }
    else if (op === "/") {
        resultat = Math.round((membres[0] / membres[1]) * 1000) / 1000;
    }
    else if (op === "+") {
        resultat = membres[0] + membres[1];
    }
    else if (op === "-") {
        resultat = membres[0] - membres[1];
    }

    ecran.innerText =  resultat;
    expression = resultat;
    return;

}
