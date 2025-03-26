// Alternar entre temas claro e escuro
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    console.log("Tema foi alterado para " + (html.classList.contains("light") ? "claro" : "escuro") + ".");
}

// Abrir uma nova aba com conteúdo específico
function abrirNovaAba(secao) {
    let novaAba = window.open('', '_blank'); // Cria uma nova aba no navegador

    if (!novaAba) {
        alert("Permita pop-ups para acessar o conteúdo!");
        return; // Termina caso o pop-up seja bloqueado
    }

    // Gerenciar a aba "Sobre Nós" com informações detalhadas sobre a empresa
    if (secao === "Sobre Nós") {
        novaAba.document.write(`
            
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${secao}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #121212;
                        color: #e0e0e0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    h1 {
                        font-size: 36px;
                        margin-top: 20px;
                        color: #FFD700;
                        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
                    }
                    main {
                        padding: 20px;
                        max-width: 800px;
                        text-align: center;
                    }
                    p {
                        font-size: 18px;
                        line-height: 1.6;
                    }
                    ul {
                        text-align: left;
                        margin: 20px auto;
                        max-width: 500px;
                        padding: 0;
                        list-style-type: none;
                    }
                    ul li {
                        margin-bottom: 10px;
                        font-size: 18px;
                    }
                    footer {
                        margin-top: auto;
                        padding: 10px;
                        background-color: #1f1f1f;
                        color: #bbb;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>${secao}</h1>
                <main>
                    <p>
                        O <strong>DEV'SEARCH</strong> é uma ferramenta inovadora criada para atender a todos os desenvolvedores,
                        desde iniciantes até profissionais experientes. Nosso principal objetivo é fornecer uma plataforma que
                        oriente os usuários em diversas tarefas relacionadas ao desenvolvimento de software, independentemente da
                        linguagem de programação escolhida.
                    </p>
                    <p>
                        Nossa missão é empoderar a comunidade de desenvolvedores com acesso a informações claras, práticas e
                        relevantes. O sistema que estamos desenvolvendo oferece suporte nas linguagens de programação modernas e populares:
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                        <li>e muitas outras...</li>
                    </ul>
                    <p>
                        O <strong>DEV'SEARCH</strong> não é apenas uma ferramenta; é um aliado no dia a dia do programador,
                        ajudando a solucionar dúvidas, implementar boas práticas de programação e otimizar o tempo dedicado
                        a projetos. Inovação constante é nossa prioridade para criar uma experiência intuitiva, prática e completa.
                    </p>
                </main>
                <footer>
                    <p>&copy; 2025 DEV'SEARCH. Todos os direitos reservados.</p>
                </footer>
            </body>
            </html>
        `);
    } else {
        // Para outras seções, exibe conteúdo genérico
        novaAba.document.write(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${secao}</title>
            </head>
            <body>
                <h1>${secao}</h1>
                <p>Bem-vindo à seção: <strong>${secao}</strong>.</p>
            </body>
            </html>
        `);
    }

    novaAba.document.close(); // Finaliza o processo de renderização
    console.log('Nova aba aberta com conteúdo: '&{secao});
}



