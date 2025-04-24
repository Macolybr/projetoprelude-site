// Dados das regras
const regras = {
    "regras-gerais": [
        {
            numero: "1",
            texto: "É proibido KOS/KFS. Ignorar e abandonar carcaça conta como KOS.",
            detalhes: [
                "Carcaças de spawn e bots não são consideradas e podem ser abandonadas ou ignoradas.",
                "O abandono de carcaça é permitido caso o player vá deslogar por pelo menos 1 hora.",
                "Players não precisam assumir carcaças que não tenham matado e estejam abandonadas, porém sabendo da existência delas, não poderão caçar na região. Caso necessário, um combate iniciado, deve parar."
            ]
        },
        {
            numero: "2",
            texto: "Palavras/Frases de baixo calão e/ou ditas com tons de ofensas, discurso de ódio, apologia ao nazismo, sexo ou racismo entre outras praticas de texto feitas de forma ofensiva serão severamente punidas. (Praticas criminosas)",
            detalhes: []
        },
        {
            numero: "3",
            texto: "São proibidas ações anti-jogo; casos duvidosos serão analisados pela staff e são passíveis de penalização.",
            detalhes: [
                "São exemplos de anti-jogo: abandonar carcaça com a desculpa de sair para beber água e não retornar ao local da carcaça, campeirar carcaças ou way; negar carcaça entrando em lugares inacessíveis; deslogar durante engage; cooperação (jogar juntos sendo fora do mix mixpacking ou compartilhar carcaças); tolerar dinossauros carnívoros de espécies diferentes; mixpacking, overpacking, criar ninho para se curar dentro/fora de combate; usar o inventário do ninho para diminuir fome/sede sem filhotes. Entre outros casos.",
                "Tentar bugar/entrar o dinossauro intencionalmente em pedras, muros, paredes ou montanhas para adentrar nesses locais e utilizá-los como estratégia para se esconder de combates ativos, curar-se, procurar, correr ou se defender."
            ]
        },
        {
            numero: "4",
            texto: "É proibido enviar convites de waystone para players que não façam parte do seu grupo ou manada. Proibido spam de rugidos e uso do bug de beber água sem encostar a boca.",
            detalhes: []
        },
        {
            numero: "5",
            texto: "Após o aviso de Restart de 5 Minutos ou menos NÃO poderá haver novos ataques/caçadas/disputas. As que já foram iniciadas podem continuar.",
            detalhes: []
        },
        {
            numero: "6",
            texto: "É proibido focar/caçar intencionalmente um determinado player como meio de vingança/perseguição.",
            detalhes: [
                "Será considerado vingança caso o player volte no mesmo local e inicie/force combate com o mesmo player/grupo no prazo mínimo de 40 minutos. Após esse prazo, se o player alvo da vingança permanecer no mesmo local, é de a responsabilidade é dele.",
                "Também fica proibido qualquer tipo de perseguição ou rastreamento para pegar a localização do player que venceu a disputa e está saindo do local onde o antigo pvp aconteceu."
            ]
        },
        {
            numero: "7",
            texto: "Proibido passar a sua localização ou a de outros players em chat global, apenas no chat de grupo.",
            detalhes: []
        },
        {
            numero: "8",
            texto: "Proibido monopolizar/bloquear propositalmente, Homecaves, Waystones, locais de travessias, pontos de entrega de missão e fontes de água doce.",
            detalhes: []
        },
        {
            numero: "9",
            texto: "Durante um combate, é proibido o uso de growth da Carteira.",
            detalhes: []
        },
        {
            numero: "10",
            texto: "Saurópodes são proibidos de entrar em lagos pequenos. Exemplo: pico selvagem, praia ondulada, bosque jovem, cratera, etc.",
            detalhes: [
                "Exceto para Yunnanosaurus e Amargasaurus."
            ]
        }
    ],
    "regras-engage": [
        {
            numero: "1",
            texto: "É considerado início de combate (caçada) se os players:",
            detalhes: [
                "Cercar, perseguir, roubar pedaço de carcaça ou acertar um ataque.",
                "Será considerado perseguição se o carnívoro estiver andando ou correndo em sua direção por pelo menos 30 segundos. Ajustando a rota para permanecer com foco em você, demonstrando interesse em te alcançar."
            ]
        },
        {
            numero: "2",
            texto: "O combate (caçada) é considerado encerrado nas seguintes situações:",
            detalhes: [
                "Queda de carcaça válida no local, permitindo que um dos grupos possa se alimentar. Carcaças de Rhamphorhynchus ou Hibbertopterus que estejam participando do grupo do combate não são consideradas válidas para finalização do combate.",
                "Se passarem mais de 5 minutos de cerco sem que nenhum dos envolvidos acerte um ataque. O combate pode ser reiniciado, entretanto até isso ocorrer outros players poderão ataca-lo sem ser considerado interferência.",
                "Se durante uma perseguição, um dos combatentes sair da visão por mais de 2 minutos.",
                "O tempo para finalizar o combate só começa a contar sem sangramento ou veneno ativo."
            ]
        },
        {
            numero: "3",
            texto: "É permitido atacar dentro da água, assim como utilizar o terreno a seu favor. Porém, o Dino terrestre não poderá usar a água como forma de deslogue.",
            detalhes: [
                "Se a água for um território com dono, não poderá ficar abusando do local com dono presente, é considerado cooperação entre o dono do território e o dino que está utilizando do mesmo para ficar se protegendo."
            ]
        },
        {
            numero: "4",
            texto: "É proibido caçar/atacar na área da Waystone/Homecave. Proibido entrar dentro da Waystone/Homecave durante o engage para evitar morrer com o dinossauro, lembrando que perseguição e cerco, também são formas de combates.",
            detalhes: []
        },
        {
            numero: "5",
            texto: "É proibido interferir em um combate em andamento, devendo aguardar seu fim para contestar a carcaça, território ou atacar um dos grupos.",
            detalhes: [
                "Players que já faziam parte do grupo antes do inicio do combate possuem 15 segundos para chegar a 10 passos do engage/companheiro, podendo entrar no combate até esse tempo após o inicio do mesmo. (Para esse regra o que vale é o icone de combate no jogo). Essa regra não se aplica em disputas por carcaça, nesses casos todos os integrantes do grupo devem estar na visão e devem ameaçar 2x para iniciar esse tipo de combate."
            ]
        },
        {
            numero: "6",
            texto: "Aquáticos e semiaquáticos carnívoros, podem interferir em combates próximos das margens de Rios/Lagos.",
            detalhes: [
                "São considerados aquáticos/semiaquáticos os dinossauros que conseguem, sem habilidades, ficar na água (dentro e na superfície) sem gastar estamina",
                "Nesses casos, os Aquáticos/Semi Aquáticos não precisam ameaçar para interferir em combate.",
                "Aquáticos e semiaquáticos NÃO podem interferir em combates dentro da água ou nas margens de outros aquáticos/semiaquáticos",
                "Fica delimitado margem, o local onde o animal bebe, usufrui da fonte de água, ou seja, o predador aquático/semiaquáticos só poderá interferir em um combate se estiver dentro dessa dita demarcação."
            ]
        },
        {
            numero: "7",
            texto: "Caso seu bando esteja atacando ou se defendendo, é proibido sair do grupo com o intuito de recuperar vida e retornar para a briga. Assim como também é proibido entrar em um grupo caso haja um combate em andamento, podendo se juntar somente ao final dele.",
            detalhes: [
                "Adicionalmente, caso um jogador seja desconectado do servidor por qualquer motivo — seja por queda de conexão (disconnect), kick, rollback, crash ou quaisquer falhas técnicas — não será permitido retornar ao combate do qual participava antes da saída."
            ]
        },
        {
            numero: "8",
            texto: "Carcaças de players têm o território de 20 passos (contados pelo dono da cc). Caso entre dentro do território de carcaça de outro player, poderá ser atacado após 2 ameaças.",
            detalhes: [
                "Independente da Espécie, dentro da cratera, carcaças possuem apenas 10 passos de território.",
                "Troféus fazem parte da carcaça, é permitido o roubo, entretanto o dono da carcaça poderá tentar recuperar enquanto dentro de seu território.",
                "Proibido atacar dentro de um território de carcaça sem ameaçar 2x, em casos de roubo(pedaço ou troféu) o ladrão não poderá se defender.",
                "Ao fim de um combate o grupo perdedor/desistente deve deixar o troféu para os ganhadores."
            ]
        }
    ],
    "carnivoro-vs-carnivoro": [
        {
            numero: "1",
            texto: "O combate entre carnívoros pode ser iniciado COM ou SEM a presença de uma carcaça previamente caída no local.",
            detalhes: [
                "Em casos onde NÃO havia uma carcaça no local o combate deve parar assim que houver uma morte. Devendo quem possui interesse na carcaça ameaçar o outro e quem não tiver interesse, desistir se retirando do local sem revidar. (Deve sair do território de carcaça)",
                "Em casos onde JÁ havia uma carcaça no local e o combate será para a disputa da mesma. Os players devem dar 2 ameaças no campo de visão de quem possui a carcaça e aguardar a resposta do adversário nos próximos 30 segundos.",
                "Todos os membros do grupo que irá ameaçar pela carcaça devem estar presentes no momento das ameaças iniciais, não podendo ficar escondido para chegar depois.",
                "Quando iniciado a disputa pela carcaça a briga deve ocorrer dentro dos limites da área da carcaça. A disputa se encerra para qualquer membro que saia dos limites da área de carcaça. (Se sair é desistência)",
                "No caso de desistência da disputa, se afastando do local. Os desistentes não poderão forçar nenhum tipo de confronto com o outro grupo por 10 minutos. Caso a carcaça acabe ou a carcaça seja contestada, o grupo vencedor pode caçar o grupo desistente.",
                "Para qualquer situação de ameaças de carcaças, Adultos e Sub-Adultos não podem dar desistência para Juvies e Adolecentes. Carcaças não podem ser ameaçadas por dinossauros q não dão dano (Hibbertopterus e Rhamphorhynchus)."
            ]
        },
        {
            numero: "2",
            texto: "Caso uma carcaça caia dentro da área de carcaça que já tenha dono, os players deverão disputar pelo território logo ao cair a carcaça, após 2x ameaças caso os players não demonstrem nenhum tipo de desistência poderão ser atacados até a morte respeitando o limite das áreas de carcaças.",
            detalhes: []
        },
        {
            numero: "3",
            texto: "Proibido campeirar carcaças (esperar que a carcaça acabe para atacar o dono).",
            detalhes: [
                "Não será considerado \"camper\", o simples fato de o player passar próximo ao local da carcaça e acabar em seguida."
            ]
        },
        {
            numero: "4",
            texto: "Durante o combate Carnívoro x Carnívoro, os players poderão ir beber/comer, caso o player que saiu para se alimentar se afaste do combate por mais de 2 minutos, o combate se encerra para aquele membro do grupo e ele não poderá retornar do combate.",
            detalhes: [
                "Tenha em mente que caso esteja longe da área do combate, você poderá ser caçado no caminho. Você deve ser responsável por sua decisão e o grupo não poderá defende-lo dos ataques."
            ]
        },
        {
            numero: "5",
            texto: "Se um combate acontecer dentro da área da sua carcaça, você deve expulsá-los do território da carcaça com duas ameaças, caso os envolvidos não saiam da área você poderá defender seu território atacando os invasores. O dono do território poderá ser atacado de volta e DENTRO do território de carcaça o combate poderá ser entre os 3 grupos.",
            detalhes: []
        }
    ],
    "carnivoro-vs-herbivoro": [
        {
            numero: "1",
            texto: "Caçada contra herbívoros só termina quando alguém morre ou conseguir fugir de forma bem-sucedida, não há desistência obrigatória durante o combate.",
            detalhes: [
                "Caso o Carnívoro ou herbívoro consiga fugir de forma bem-sucedida, ele não poderá atacar e ser atacado durante 30 minutos. (Essa regra é valida apenas entre os grupos envolvidos).",
                "Caso haja morte de alguém, ambos os grupos envolvidos não poderão voltar a atacar/perseguir/acompanhar, uns aos outros no prazo mínimo de 10 minutos, a partir do momento em que a carcaça cair."
            ]
        },
        {
            numero: "2",
            texto: "Caso o carnívoro ou o herbívoro sair para beber água/comer longe da área do combate e fique mais de 2 minutos afastado, ele não poderá voltar a participar do mesmo.",
            detalhes: [
                "A decisão de sair é de responsabilidade do player o mesmo não poderá receber suporte do seu time caso seja atacado."
            ]
        },
        {
            numero: "3",
            texto: "Nenhum tipo de armadilha para forçar combate será tolerado, cabe ao staff responsável decidir se foi armadilha ou não.",
            detalhes: []
        }
    ],
    "regras-voador": [
        {
            numero: "1",
            texto: "Durante um combate de voador x terrestre, o voador não poderá subir em locais inacessíveis para o terrestre, (árvores, pedras, picos etc...) ele poderá pegar distância e pousar em locais que o terrestre demore para o alcançar até que recupere estamina e vida, desde que não saia do campo de visão dele.",
            detalhes: [
                "Ao subir em um lugar inacessível o combate é finalizado e não poderá atacar novamente por 10 minutos."
            ]
        },
        {
            numero: "2",
            texto: "Para perseguições o voador poderá voar para longe do local, saindo do campo de visão dos envolvidos pelos próximos 2 minutos.",
            detalhes: [
                "Caso não retorne dentro desse prazo, mesmo sangrando ou com veneno, não poderá voltar a atacar aquele grupo de terrestres/aquáticos/ semiaquáticos pelos próximos 10 minutos."
            ]
        }
    ],
    "regras-territorio": [
        {
            numero: "1",
            texto: "Nenhuma das regras de território se sobressaem as regras de carcaça.",
            detalhes: []
        },
        {
            numero: "2",
            texto: "Você poderá defender seu território ou tentar tirá-lo de outro player somente no intuito de permanecer naquele local, não podendo expulsar para em seguida sair (o vencedor da disputa deve permanecer no mínimo 20 minutos no território).",
            detalhes: [
                "Em caso de desistência do território todos os participantes deste combate não poderão disputar pelo mesmo território pelos próximos 30 minutos."
            ]
        },
        {
            numero: "3",
            texto: "Aquáticos/semiaquáticos, incluindo Deinocheirus e Lurdusaurus podem impedir que outros dinossauros busquem refúgio em rios/lagos no intuito de retirar o intruso de seu território.",
            detalhes: [
                "Aquáticos/semiaquáticos que iniciarem o combate no intuito de proteger o seu território (rios/lagos) devem ameaçar 2x.",
                "Caso o dinossauro que buscou refúgio, se negue a sair do rio/lago os aquáticos/semiaquáticos poderão iniciar ou intrometer-se no combate, para retirar o intruso de seu território. É permitido se defender do semiaquático."
            ]
        },
        {
            numero: "4",
            texto: "Quando uma carcaça estiver completamente embaixo d'água e os donos da carcaça forem aquáticos ou semiaquáticos as regras equivalem a:",
            detalhes: [
                "Em lagos pequenos (Cratera, poças, lago do pico selvagem, hotsprings): A área da carcaça se torna a área do lago todo, podendo expulsar qualquer um que se aproxime das margens, caso entre na água ou tente beber água.",
                "Em lagos médios ou grandes, mares e rios: A área da carcaça mantém a mesma, podendo expulsar qualquer um que se aproxime das margens, entre na água, mas não pode impedir os dinossauros de beber água.",
                "Combates nesses casos, devem começar com 2x ameaças e parar uma vez que o intruso saia da região.",
                "Caso a carcaça esteja submersa, as ameaças devem ser feitas com a cabeça do dinossauro fora da água e visível para os outros players."
            ]
        },
        {
            numero: "5",
            texto: "Semi-aquaticos e aquáticos SÃO obrigados a disputar o território de lagos pequenos ou um dos grupos deve abandonar o território.",
            detalhes: []
        },
        {
            numero: "6",
            texto: "É permitido disputar territórios de águas, caso a fonte de água esteja abaixo de 30%.",
            detalhes: [
                "Para a disputa é necessário ameaçar 2x com o grito de ameaça e aguardar a resposta do outro player;",
                "Para o outro player aceitar a disputa, ameaçando 2x novamente ou desistir, virando as costas e saindo da região. O combate se encerra com drop de carcaça. Em casos de desistência ou perda, o time perdedor não poderá retornar na fonte de água, no prazo de 15 minutos."
            ]
        }
    ],
    "regras-grupo": [
        {
            numero: "1",
            texto: "Todos os players que estiverem jogando juntos como herbívoros ou carnívoros devem ficar obrigatoriamente no grupo formado dentro do jogo por meio de convite.",
            detalhes: []
        },
        {
            numero: "2",
            texto: "Carnívoros e Herbívoros podem mandar grupo para mesma espécie ou para membros de mixpack, sempre levando em conta os limites de grupo do canal [📚│perfis-e-limites].",
            detalhes: [
                "Não é permitido mixpack entre carnívoros iguais, porém de mods diferentes (Rex PT + Rex Alderon).",
                "Não interfira em combates para tentar defender membros que não são do seu grupo mesmo sendo da mesma espécie."
            ]
        },
        {
            numero: "3",
            texto: "Herbívoros podem andar juntos em manadas mistas, mas a participação em combate contra carnívoros será somente entre os grupos familiares. Herbívoros curinga podem defender membros de seu grupo que não fazem parte de sua família, entretanto caso um herbívoro curinga seja atacado ele poderá ser defendido apenas por uma das famílias de sua manada ou por outros curingas.",
            detalhes: []
        },
        {
            numero: "4",
            texto: "Deve-se respeitar o limite de grupo estabelecido no canal: [📚│perfis-e-limites]",
            detalhes: [
                "Filhotes, jovens e adolescentes não contam, apenas sub-adultos e adultos."
            ]
        },
        {
            numero: "5",
            texto: "Proibido utilizar os sistemas para caçar os membros do próprio grupo, como mandar convite para saber a localização e afins.",
            detalhes: [
                "Caso o grupo seja desfeito ou alguém saia, os membros do antigo grupo não poderão se atacar ou perseguir por 20 minutos.",
                "Caso alguém do grupo esteja causando problemas, poderá ser expulso após ser avisado e ameaçado 2x, e morto caso continue seguindo.",
                "Caso o grupo de carnívoros esteja tomando DANO DE FOME, o grupo poderá se tornar canibal e atacar um membro do próprio bando para se alimentar, seja o membro em qualquer fase de crescimento"
            ]
        }
    ],
    "regras-ninho": [
        {
            numero: "1",
            texto: "Proibido destruir ninhos de outros dinossauros sem motivo.",
            detalhes: [
                "Será obrigatório quebrar ninhos que não sejam seus após o seu grupo vencer uma disputa por território.",
                "Proibido criar ninho em Waystone/Homecaves."
            ]
        },
        {
            numero: "2",
            texto: "Ninhos tem área de 20 passos(exceto na cratera, onde é apenas 10 passos), dentro dessa área, herbívoros e carnívoros podem ameaçar invasores a fim de expulsá-los de perto do local.",
            detalhes: [
                "É permitido desafiar proprietários de ninhos com o intuito de tomar posse da área e fazerem seus próprios ninhos. (permanência mínima de 1 hora).",
                "Caso criem ninhos no seu território, você deverá ameaçar 2x para realizar a expulsão dos players, caso não saiam uma disputa de território deverá ser iniciada.",
                "É proibido utilizar ninho com intuito de forçar combate.",
                "Caso caia uma carcaça dentro da área de ninho a menos de 10 passos (do dono do ninho), não é obrigatória a finalização do combate, porém caso caia a mais de 10 passos (do dono do ninho) o combate é finalizado. Herbívoros não podem impedir carnívoros de comer uma carcaça, estando ela fora dessas condições.",
                "O combate finaliza quando todos do grupo saem da área dos 20 passos(ou 10 passos em caso de ninho na cratera) do ninho ou após a morte de todos os membros. O grupo perdedor não poderá voltar a contestar a área por 1 hora."
            ]
        },
        {
            numero: "3",
            texto: "É obrigatório cuidar de seus filhotes até a fase \"sub adulta\". (não válido para filhotes adotados). Os limites de grupo devem ser respeitados.",
            detalhes: []
        },
        {
            numero: "4",
            texto: "Adoção será permitida das seguintes formas:",
            detalhes: [
                "Herbívoros: Qualquer espécie que faça parte de sua família ou que seja coringa.",
                "Carnívoros: É permitida a adoção de espécies que façam mixpack com seu dinossauro, desde que ele não seja de um Tier maior que o seu."
            ]
        }
    ]
};

// Função para criar elementos de regra
function criarElementosRegra(regra) {
    const ruleItem = document.createElement('div');
    ruleItem.className = 'rule-item';
    
    const ruleText = document.createElement('div');
    ruleText.className = 'rule-text';
    ruleText.innerHTML = `<span class="rule-number">${regra.numero}.</span> ${regra.texto}`;
    
    ruleItem.appendChild(ruleText);
    
    if (regra.detalhes && regra.detalhes.length > 0) {
        regra.detalhes.forEach(detalhe => {
            const ruleDetail = document.createElement('div');
            ruleDetail.className = 'rule-detail';
            ruleDetail.textContent = detalhe;
            ruleItem.appendChild(ruleDetail);
        });
    }
    
    return ruleItem;
}

// Função para preencher as abas com conteúdo
function preencherConteudoAbas() {
    for (const [secaoId, regrasSecao] of Object.entries(regras)) {
        const secaoElement = document.getElementById(secaoId);
        if (secaoElement) {
            const ruleContent = secaoElement.querySelector('.rule-content');
            
            regrasSecao.forEach(regra => {
                const ruleItem = criarElementosRegra(regra);
                ruleContent.appendChild(ruleItem);
            });
        }
    }
}

// Função para configurar o menu de regras
function configurarRegrasMenu() {
    const regrasMenu = document.querySelector('.regras-menu');
    const regrasList = document.querySelector('.regras-list');
    
    regrasMenu.addEventListener('click', (e) => {
        e.preventDefault();
        regrasList.classList.toggle('hidden');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!regrasMenu.contains(e.target) && !regrasList.contains(e.target)) {
            regrasList.classList.add('hidden');
        }
    });
}

// Função para alternar entre abas
function configurarNavegacaoAbas() {
    const tabs = document.querySelectorAll('.tab-item');
    const regrasItems = document.querySelectorAll('.regras-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Handle main tab clicks
    tabs.forEach(tab => {
        if (tab.classList.contains('regras-menu')) return; // Skip regras-menu as it toggles menu
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            regrasItems.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Close regras menu
            document.querySelector('.regras-list').classList.add('hidden');
        });
    });
    
    // Handle regras item clicks
    regrasItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            regrasItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to regras-menu and clicked item
            document.querySelector('.regras-menu').classList.add('active');
            item.classList.add('active');
            
            // Show corresponding content
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Close regras menu
            document.querySelector('.regras-list').classList.add('hidden');
        });
    });
}

// Sistema de perguntas e respostas
function configurarSistemaPerguntas() {
    const perguntaInput = document.getElementById('pergunta-input');
    const perguntaBtn = document.getElementById('pergunta-btn');
    const respostaContainer = document.getElementById('resposta-container');
    const respostaContent = document.getElementById('resposta-content');
    
    perguntaBtn.addEventListener('click', () => {
        const pergunta = perguntaInput.value.trim().toLowerCase();
        
        if (pergunta === '') {
            return;
        }
        
        const resposta = buscarResposta(pergunta);
        
        respostaContent.innerHTML = resposta;
        respostaContainer.classList.remove('hidden');
    });
    
    perguntaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            perguntaBtn.click();
        }
    });
}

// Função para buscar resposta com base na pergunta
function buscarResposta(pergunta) {
    // Dicionário de sinônimos para melhorar a busca
    const sinonimos = {
        "combate": "engage",
        "luta": "engage",
        "batalha": "engage",
        "pvp": "engage",
        "cc": "carcaça",
        "corpo": "carcaça",
        "cadaver": "carcaça",
        "cadáver": "carcaça",
        "kill": "carcaça",
        "morto": "carcaça",
        "morta": "carcaça",
        "presa": "carcaça",
        "atacar": "caçada",
        "caçar": "caçada",
        "hunt": "caçada",
        "hunting": "caçada",
        "matar": "caçada",
        "perseguir": "caçada",
        "grupo": "manada",
        "pack": "grupo",
        "bando": "grupo",
        "manada": "grupo",
        "herd": "grupo",
        "mixar": "mixpack",
        "mix": "mixpack",
        "misturar": "mixpack",
        "mistura": "mixpack",
        "voar": "voador",
        "flyer": "voador",
        "pássaro": "voador",
        "passaro": "voador",
        "ave": "voador",
        "aéreo": "voador",
        "aereo": "voador",
        "nido": "ninho",
        "nest": "ninho",
        "filhote": "ninho",
        "baby": "ninho",
        "juvenil": "ninho",
        "juve": "ninho",
        "terri": "território",
        "area": "território",
        "local": "território",
        "região": "território",
        "regiao": "território",
        "zone": "território",
        "zona": "território",
        "trofeu": "troféu",
        "trophy": "troféu",
        "chifre": "troféu",
        "corno": "troféu",
        "roubo": "roubar",
        "pegar": "roubar",
        "steal": "roubar",
        "furtar": "roubar"
    };
    
    // Aplicar sinônimos à pergunta
    let perguntaExpandida = pergunta.toLowerCase();
    for (const [sinonimo, termo] of Object.entries(sinonimos)) {
        if (perguntaExpandida.includes(sinonimo.toLowerCase())) {
            perguntaExpandida = perguntaExpandida + " " + termo;
        }
    }
    
    // Palavras-chave para cada seção
    const palavrasChave = {
        "regras-gerais": ["geral", "kos", "kfs", "carcaça", "abandonar", "ofensa", "anti-jogo", "waystone", "restart", "vingança", "perseguição", "chat global", "monopolizar", "growth", "saurópodes", "lagos pequenos"],
        "regras-engage": ["engage", "combate", "caçada", "cercar", "perseguir", "carcaça válida", "cerco", "água", "waystone", "homecave", "interferir", "aquáticos", "semiaquáticos", "bando", "território", "troféu", "roubar", "troféus"],
        "carnivoro-vs-carnivoro": ["carnívoro", "carnívoros", "carcaça", "ameaças", "disputa", "campeirar", "beber", "comer"],
        "carnivoro-vs-herbivoro": ["carnívoro", "herbívoro", "caçada", "fugir", "beber água", "comer", "armadilha"],
        "regras-voador": ["voador", "terrestre", "inacessíveis", "árvores", "pedras", "picos", "perseguições", "espionar"],
        "regras-territorio": ["território", "defender", "aquáticos", "semiaquáticos", "refúgio", "rios", "lagos", "carcaça embaixo d'água", "disputar"],
        "regras-grupo": ["grupo", "herbívoros", "carnívoros", "mixpack", "manadas mistas", "limite", "convite", "localização"],
        "regras-ninho": ["ninho", "destruir", "área", "passos", "cratera", "filhotes", "adoção"]
    };
    
    // Verificar perguntas específicas comuns
    if ((pergunta.includes("posso") || pergunta.includes("permitido")) && 
        (pergunta.includes("roubar") || pergunta.includes("pegar")) && 
        (pergunta.includes("troféu") || pergunta.includes("trofeu"))) {
        return `<p>Sobre roubo de troféus, de acordo com a regra 8 de Engage:</p>
                <ul>
                    <li><strong>Troféus fazem parte da carcaça, é permitido o roubo, entretanto o dono da carcaça poderá tentar recuperar enquanto dentro de seu território.</strong></li>
                    <li>Proibido atacar dentro de um território de carcaça sem ameaçar 2x, em casos de roubo (pedaço ou troféu) o ladrão não poderá se defender.</li>
                    <li>Ao fim de um combate o grupo perdedor/desistente deve deixar o troféu para os ganhadores.</li>
                </ul>
                <p>Portanto, sim, é permitido roubar troféus, mas o dono da carcaça tem o direito de tentar recuperá-los enquanto estiver dentro do território da carcaça.</p>`;
    }
    
    if (pergunta.includes("posso atacar") && pergunta.includes("herbívoro") && pergunta.includes("grupo")) {
        return `<p>Sim, você pode atacar um herbívoro com seu grupo, mas deve seguir as regras de Carnívoro vs Herbívoro:</p>
                <ul>
                    <li>A caçada só termina quando alguém morre ou consegue fugir com sucesso</li>
                    <li>Se o herbívoro fugir com sucesso, você não poderá atacá-lo novamente por 30 minutos</li>
                    <li>Se houver morte, os grupos não poderão voltar a atacar por pelo menos 10 minutos</li>
                    <li>Lembre-se de respeitar os limites de grupo estabelecidos no canal de perfis-e-limites</li>
                </ul>`;
    }
    
    if ((pergunta.includes("permitido") || pergunta.includes("posso")) && 
        pergunta.includes("voador") && 
        (pergunta.includes("espionar") || pergunta.includes("observar"))) {
        return `<p>Não há regra específica que proíba usar voadores para "espionar", mas existem limitações importantes:</p>
                <ul>
                    <li>É proibido passar a localização de outros players no chat global (apenas no chat de grupo)</li>
                    <li>Durante combates, voadores não podem subir em locais inacessíveis para terrestres</li>
                    <li>Voadores podem se afastar temporariamente para recuperar estamina, mas devem seguir as regras de tempo e distância</li>
                    <li>Lembre-se que é proibido focar/caçar intencionalmente um player como vingança/perseguição</li>
                </ul>`;
    }
    
    if ((pergunta.includes("quantos") || pergunta.includes("limite")) && 
        (pergunta.includes("dinossauros") || pergunta.includes("dinos")) && 
        pergunta.includes("grupo")) {
        return `<p>O limite de dinossauros por grupo depende da espécie e está estabelecido no canal <strong>📚│perfis-e-limites</strong> do Discord.</p>
                <p>Pontos importantes sobre grupos:</p>
                <ul>
                    <li>Filhotes, jovens e adolescentes não contam para o limite, apenas sub-adultos e adultos</li>
                    <li>Todos os players jogando juntos devem estar no grupo formado dentro do jogo</li>
                    <li>Carnívoros e Herbívoros podem formar grupo com a mesma espécie ou membros de mixpack permitidos</li>
                </ul>`;
    }
    
    if ((pergunta.includes("defender") || pergunta.includes("proteger")) && 
        (pergunta.includes("território") || pergunta.includes("territorio"))) {
        return `<p>Sim, você pode defender seu território, mas deve seguir estas regras:</p>
                <ul>
                    <li>Você só pode defender ou tentar tirar um território de outro player se pretende permanecer naquele local</li>
                    <li>O vencedor da disputa deve permanecer no mínimo 20 minutos no território</li>
                    <li>Em caso de desistência, todos os participantes não poderão disputar o mesmo território por 30 minutos</li>
                    <li>Lembre-se que as regras de território não se sobressaem às regras de carcaça</li>
                </ul>`;
    }
    
    // Verificar em qual seção a pergunta se encaixa melhor
    let melhorSecao = null;
    let maiorPontuacao = 0;
    let regrasRelevantes = [];
    
    // Dividir a pergunta em palavras-chave
    const palavrasPergunta = pergunta.toLowerCase().split(/\s+/);
    
    // Remover palavras muito comuns (stop words em português)
    const stopWords = ["a", "o", "e", "é", "de", "da", "do", "em", "para", "por", "com", "um", "uma", "os", "as", "dos", "das", "na", "no", "nos", "nas", "ao", "aos", "à", "às", "pelo", "pela", "que", "se", "ou"];
    const palavrasChavePergunta = palavrasPergunta.filter(palavra => !stopWords.includes(palavra) && palavra.length > 2);
    
    // Buscar em todas as seções e regras
    for (const [secao, palavras] of Object.entries(palavrasChave)) {
        let pontuacao = 0;
        
        // Verificar palavras-chave da seção
        palavras.forEach(palavra => {
            if (pergunta.includes(palavra.toLowerCase())) {
                pontuacao += 2; // Dar mais peso para palavras-chave da seção
            }
        });
        
        // Verificar todas as regras da seção
        regras[secao].forEach(regra => {
            let pontuacaoRegra = 0;
            const regraTextoLower = regra.texto.toLowerCase();
            
            // Verificar cada palavra-chave da pergunta na regra
            palavrasChavePergunta.forEach(palavra => {
                if (regraTextoLower.includes(palavra)) {
                    pontuacaoRegra++;
                }
            });
            
            // Verificar nos detalhes da regra também
            if (regra.detalhes && regra.detalhes.length > 0) {
                regra.detalhes.forEach(detalhe => {
                    const detalheLower = detalhe.toLowerCase();
                    palavrasChavePergunta.forEach(palavra => {
                        if (detalheLower.includes(palavra)) {
                            pontuacaoRegra++;
                        }
                    });
                });
            }
            
            // Se a regra é relevante, adicionar à lista
            if (pontuacaoRegra > 0) {
                pontuacao += pontuacaoRegra;
                regrasRelevantes.push({
                    secao: secao,
                    regra: regra,
                    pontuacao: pontuacaoRegra
                });
            }
        });
        
        if (pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao;
            melhorSecao = secao;
        }
    }
    
    // Ordenar regras relevantes por pontuação (mais relevantes primeiro)
    regrasRelevantes.sort((a, b) => b.pontuacao - a.pontuacao);
    
    // Se encontrou regras relevantes, mostrar as mais relevantes
    if (regrasRelevantes.length > 0) {
        let resposta = `<p>Com base na sua pergunta, encontrei as seguintes regras relevantes:</p><ul>`;
        
        // Mostrar até 3 regras mais relevantes
        const regrasAMostrar = regrasRelevantes.slice(0, 3);
        
        regrasAMostrar.forEach(item => {
            const secaoFormatada = item.secao.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            resposta += `<li><strong>${secaoFormatada} - Regra ${item.regra.numero}:</strong> ${item.regra.texto}</li>`;
            
            if (item.regra.detalhes && item.regra.detalhes.length > 0) {
                resposta += '<ul>';
                item.regra.detalhes.forEach(detalhe => {
                    // Destacar partes do detalhe que contêm palavras-chave da pergunta
                    let detalheDestacado = detalhe;
                    palavrasChavePergunta.forEach(palavra => {
                        if (palavra.length > 3) { // Evitar destacar palavras muito curtas
                            const regex = new RegExp(`(${palavra})`, 'gi');
                            detalheDestacado = detalheDestacado.replace(regex, '<strong>$1</strong>');
                        }
                    });
                    resposta += `<li>${detalheDestacado}</li>`;
                });
                resposta += '</ul>';
            }
        });
        
        resposta += '</ul>';
        return resposta;
    }
    
    // Se não encontrou regras relevantes mas identificou uma seção
    if (melhorSecao && maiorPontuacao > 0) {
        return `<p>Sua pergunta parece estar relacionada às regras de ${melhorSecao.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}, mas não encontrei uma resposta específica. Recomendo verificar todas as regras desta seção na aba correspondente.</p>`;
    }
    
    // Resposta padrão se não encontrar nada relevante
    return `<p>Não encontrei uma resposta específica para sua pergunta. Por favor, verifique as regras nas diferentes abas ou reformule sua pergunta com mais detalhes sobre o que deseja saber.</p>`;
}

// Adicionar elementos decorativos
function adicionarElementosDecorativos() {
    const container = document.querySelector('.container');
    
    const decoracoes = [
        { class: 'dino-top-right', top: '20px', right: '20px', rotate: '15deg' },
        { class: 'dino-bottom-left', bottom: '20px', left: '20px', rotate: '-10deg' },
        { class: 'dino-middle-right', top: '50%', right: '20px', translate: 'translateY(-50%)', rotate: '10deg' },
        { class: 'dino-middle-left', top: '50%', left: '20px', translate: 'translateY(-50%)', rotate: '-15deg' },
        { class: 'dino-top-left', top: '20px', left: '20px', rotate: '-5deg' },
        { class: 'dino-bottom-right', bottom: '20px', right: '20px', rotate: '5deg' }
    ];
    
    decoracoes.forEach(deco => {
        const img = document.createElement('img');
        img.src = 'images/prelude_logo.png';
        img.className = `dino-decoration ${deco.class} floating`;
        img.alt = 'Logo Prelude Realismo';
        container.appendChild(img);
    });
}

// PERFIS DE DINOSSAUROS
function initPerfisDinos() {
    const perfisTexto = `Perfil Tyrannosaurus Alderon
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Alioramus.
Temperamento: Sociável e Territorialista.
Tempo de crescimento passivo: 5 horas.

Perfil Tyrannotitan
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Apenas membros da mesma espécie.
Temperamento: Sociável e Agressivo.
Tempo de crescimento passivo: 5 horas.

Perfil Livyatan
TIER: 6
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Hibbertopterus.
Temperamento: Agressivo e Independente.
Tempo de crescimento passivo: 5 horas.

Perfil Tyrannosaurus PT
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Alioramus.
Temperamento: Agressivo e Territorialista.
Tempo de crescimento passivo: 5 horas.

Perfil Spinosaurus
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Hibbertopterus ou Rhamphorhynchus.
Temperamento: Independente e Sociável.
Tempo de crescimento passivo: 5 horas.

Perfil Sachicasaurus
TIER: 5
Limite de grupo: Grupo simples [3] membros sub-adultos ou adultos.
Anda com: Hibbertopterus.
Temperamento: Sociável e Independente.
Tempo de crescimento passivo: 5 horas.

Perfil Giganotosaurus
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Rhamphorhynchus.
Temperamento: Sociável e Agressivo.
Tempo de crescimento passivo: 5 horas.

Perfil Deinosuchus
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Hibbertopterus ou Rhamphorhynchus.
Temperamento: Independente.
Tempo de crescimento passivo: 5 horas.

Perfil Carcharodontosaurus
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Rhamphorhynchus.
Temperamento: Agressivo, Territorialista e Independente.
Tempo de crescimento passivo: 5 horas.

Perfil Acrocanthosaurus
TIER: 5
Limite de grupo: Grupo simples [2] membros sub-adultos ou adultos.
Anda com: Rhamphorhynchus.
Temperamento: Agressivo e Independente.
Tempo de crescimento passivo: 5 horas.`;

    const perfis = {};
    const sinonimos = {
        'rex': 'Tyrannosaurus',
        'spino': 'Spinosaurus',
        'gigan': 'Giganotosaurus',
        'giga': 'Giganotosaurus',
        'carcha': 'Carcharodontosaurus',
        'acro': 'Acrocanthosaurus',
        'deino': 'Deinosuchus',
        'livya': 'Livyatan',
        'sachi': 'Sachicasaurus',
        'tyrannotitan': 'Tyrannotitan'
    };

    perfisTexto.split("Perfil ").forEach(bloco => {
        if (!bloco.trim()) return;
        const linhas = bloco.trim().split("\n");
        const nome = linhas[0].trim();
        const perfil = linhas.slice(1).reduce((acc, linha) => {
            const [chave, ...resto] = linha.split(":");
            if (chave && resto.length > 0) {
                acc[chave.trim()] = resto.join(":").trim();
            }
            return acc;
        }, {});
        perfis[nome] = perfil;
    });

    const inputBusca = document.getElementById('busca-dino');
    const sugestoesList = document.getElementById('sugestoes-dino');
    const perfilContainer = document.getElementById('perfil-dino');

    inputBusca.addEventListener('input', () => {
        const valor = inputBusca.value.trim().toLowerCase();
        sugestoesList.innerHTML = '';
        if (!valor) {
            sugestoesList.classList.add('hidden');
            perfilContainer.innerHTML = '';
            return;
        }

        const correspondentes = Object.keys(perfis).filter(nome => {
            const nomeLower = nome.toLowerCase();
            const matchesNome = nomeLower.includes(valor);
            const matchesSinonimo = Object.entries(sinonimos).some(([sin, especie]) => {
                return sin.includes(valor) && nomeLower.includes(especie.toLowerCase());
            });
            return matchesNome || matchesSinonimo;
        });

        if (correspondentes.length > 0) {
            sugestoesList.classList.remove('hidden');
            correspondentes.forEach(nome => {
                const li = document.createElement('li');
                li.textContent = nome;
                li.addEventListener('click', () => {
                    mostrarPerfil(nome);
                    sugestoesList.classList.add('hidden');
                    inputBusca.value = nome;
                });
                sugestoesList.appendChild(li);
            });
        } else {
            sugestoesList.classList.add('hidden');
        }
    });

    inputBusca.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            const valor = inputBusca.value.trim().toLowerCase();
            const correspondente = Object.keys(perfis).find(nome => {
                const nomeLower = nome.toLowerCase();
                const matchesNome = nomeLower.includes(valor);
                const matchesSinonimo = Object.entries(sinonimos).some(([sin, especie]) => {
                    return sin.includes(valor) && nomeLower.includes(especie.toLowerCase());
                });
                return matchesNome || matchesSinonimo;
            });

            if (correspondente) {
                mostrarPerfil(correspondente);
                sugestoesList.classList.add('hidden');
                inputBusca.value = correspondente;
            }
        }
    });

    function mostrarPerfil(nome) {
        const p = perfis[nome];
        if (!p) return;
        let tier = p['TIER'] || '';
        tier = tier.includes('6') ? '🌊'.repeat(6) : '🍖'.repeat(5);

        perfilContainer.innerHTML = `
            <h3>${nome}</h3>
            <div class="perfil-box"><strong>TIER:</strong> <span class="emoji-tier">${tier}</span></div>
            <div class="perfil-box"><strong>Limite de grupo:</strong> ${p['Limite de grupo']}</div>
            <div class="perfil-box"><strong>Anda com:</strong> ${p['Anda com']}</div>
            <div class="perfil-box"><strong>Temperamento:</strong> ${p['Temperamento']}</div>
            <div class="perfil-box"><strong>Tempo de crescimento passivo:</strong> ${p['Tempo de crescimento passivo']}</div>
        `;
    }
}

// Inicializar o site
document.addEventListener('DOMContentLoaded', () => {
    preencherConteudoAbas();
    configurarNavegacaoAbas();
    configurarSistemaPerguntas();
    configurarRegrasMenu();
    adicionarElementosDecorativos();
    initPerfisDinos();
});