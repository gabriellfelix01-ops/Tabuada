const formMultiplicacao = document.querySelector("#form-multiplicacao");
const inputNumero = document.querySelector("#number");
const inputMultiplicacao = document.querySelector("#multiplicacao");
const tabelaMultiplicacao = document.querySelector("#tabela-resultados");

formMultiplicacao.addEventListener("submit", (e) => {
    e.preventDefault();

    const numberMultiplicando = +inputNumero.value;
    const numberMultiplicacao = +inputMultiplicacao.value;
    createTable(numberMultiplicando, numberMultiplicacao);
});

const createTable = (numberMultiplicando, numberMultiplicacao) => {
    tabelaMultiplicacao.innerHTML = "";

    for (let i = 1; i <= numberMultiplicacao; i++) {
        const result = numberMultiplicando * i;

        const template = `
            <div class="row">
                <div class="operations">
                    ${numberMultiplicando} x ${i} =
                </div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        tabelaMultiplicacao.appendChild(row);
    }
};