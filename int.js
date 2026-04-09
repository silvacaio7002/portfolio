function IdadeAtual() {
    const AnoNasc = 2007;
    const MesNasc = 7;  // Agosto é 7 (0=Jan, 1=Fev...)
    const DiaNasc = 13;

    const hoje = new Date();
    const AnoAtual = hoje.getFullYear();
    const MesAtual = hoje.getMonth();
    const DiaAtual = hoje.getDate(); // Pega o dia do mês (1-31)

    let idade = AnoAtual - AnoNasc;

    // Se o mês atual for menor que o de nascimento OR 
    // se for o mesmo mês mas o dia atual for menor que o de nascimento:
    if (MesAtual < MesNasc || (MesAtual === MesNasc && DiaAtual < DiaNasc)) {
        idade--; // Ainda não fez aniversário este ano
    }

    return idade;
}

function Comprimento(){
    const hoje  = new Date();
    const HoraAtual = hoje.getHours();
    var resultado = "Sem resposta";

    if(HoraAtual>=6 && HoraAtual <=12){
        resultado = "Bom dia!";
    }
    else if(HoraAtual >=13 && HoraAtual <=18){
        resultado = "Boa tarde!";
    }
    else if(HoraAtual >=19 && HoraAtual <=22){
        resultado = "Boa Noite!";
    }
    return resultado
}
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Quando o ícone entra na tela, adiciona a classe de animação
                entry.target.classList.add('show-section');
            }
        });
    });

    // Seleciona todos os elementos com a classe hidden-icon para observar
    const hiddenElements = document.querySelectorAll('.hidden-section');
    hiddenElements.forEach((el) => observer.observe(el));
// Certifique-se de que o ID no HTML é exatamente "exibirIdade"
document.getElementById("exibirIdade").innerText += " " + IdadeAtual() + " anos";
document.getElementById("Resposta").innerText +=" "+ Comprimento()+", venha conferir meu Portfólio";