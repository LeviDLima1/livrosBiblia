import genesis from '../assets/genesis.jpg'
import exodo from '../assets/exodo.jpg'
import levitico from '../assets/levitico.jpg'
import numeros from '../assets/numeros.jpg'
import deuteronomio from '../assets/deuteronomio.jpg'
import josue from '../assets/josue.jpg'
import juizes from '../assets/juizes.jpg'
import rute from '../assets/rute.jpg'
import samuel1 from '../assets/samuel1.jpg'
import samuel2 from '../assets/samuel2.jpg'
import reis1 from '../assets/reis1.jpg'
import reis2 from '../assets/reis2.jpg'
import cronicas1 from '../assets/cronicas1.jpg'
import cronicas2 from '../assets/cronicas2.jpg'
import esdras from '../assets/esdras.jpg'
import neemias from '../assets/neemias.jpg'
import ester from '../assets/ester.jpg'
import jo from '../assets/jo.jpg'
import salmos from '../assets/salmos.jpg'
import proverbios from '../assets/proverbios.jpg'
import eclesiastes from '../assets/eclesiastes.jpg'
import cantares from '../assets/cantares.jpg'
import isaias from '../assets/isaias.jpg'
import jeremias from '../assets/jeremias.jpg'
import lamentacoes from '../assets/lamentacoes.jpg'
import ezequiel from '../assets/ezequiel.jpg'
import daniel from '../assets/daniel.jpg'
import oseias from '../assets/oseias.jpg'
import joel from '../assets/joel.jpg'
import amos from '../assets/amos.jpg'
import obadias from '../assets/obadias.jpg';
import jonas from '../assets/jonas.jpg';
import miqueias from '../assets/miqueias.jpg';
import naum from '../assets/naum.jpg';
import habacuque from '../assets/habacuque.jpg';
import sofonias from '../assets/sofonias.jpg';
import ageu from '../assets/ageu.jpg';
import zacarias from '../assets/zacarias.jpg';
import malaquias from '../assets/malaquias.jpg';
import mateus from '../assets/mateus.jpg';
import marcos from '../assets/marcos.jpg';
import lucas from '../assets/lucas.jpg';
import joao from '../assets/joao.jpg';
import atos from '../assets/atos.jpg';
import romanos from '../assets/romanos.jpg';
import corintios1 from '../assets/corintios1.jpg';
import corintios2 from '../assets/corintios2.jpg';
import galatas from '../assets/galatas.jpg';
import efesios from '../assets/efesios.jpg';
import filipenses from '../assets/filipenses.jpg';
import colossenses from '../assets/colossenses.jpg';
import tessalonicenses1 from '../assets/tessalonicenses1.jpg';
import tessalonicenses2 from '../assets/tessalonicenses2.jpg';
import timoteo1 from '../assets/timoteo1.jpg';
import timoteo2 from '../assets/timoteo2.jpg';
import tito from '../assets/tito.jpg';
import filemom from '../assets/filemom.jpg';
import hebreus from '../assets/hebreus.jpg';
import tiago from '../assets/tiago.jpg';
import pedro1 from '../assets/pedro1.jpg';
import pedro2 from '../assets/pedro2.jpg';
import joao1 from '../assets/joao1.jpg';
import joao2 from '../assets/joao2.jpg';
import joao3 from '../assets/joao3.jpg';
import judas from '../assets/judas.jpg';
import apocalipse from '../assets/apocalipse.jpg';


import { useState } from 'react';
export default function Card() {



  const livrosBiblia = [
    { id: 1, titulo: "Gênesis", descricao: "O início de tudo.", imagem: genesis, detalhes: "Detalhes sobre Gênesis.", testamento: "Velho" },
    { id: 2, titulo: "Êxodo", descricao: "A libertação do povo de Israel.", imagem: exodo, detalhes: "Detalhes sobre Êxodo.", testamento: "Velho" },
    { id: 3, titulo: "Levítico", descricao: "Leis e regulamentos para o povo de Israel.", imagem: levitico, detalhes: "Detalhes sobre Levítico.", testamento: "Velho" },
    { id: 4, titulo: "Números", descricao: "A jornada de Israel no deserto.", imagem: numeros, detalhes: "Detalhes sobre Números.", testamento: "Velho" },
    { id: 5, titulo: "Deuteronômio", descricao: "Moisés dá sermões e prepara Israel para a Terra Prometida.", imagem: deuteronomio, detalhes: "Detalhes sobre Deuteronômio.", testamento: "Velho" },
    { id: 6, titulo: "Josué", descricao: "A conquista da Terra Prometida.", imagem: josue, detalhes: "Detalhes sobre Josué.", testamento: "Velho" },
    { id: 7, titulo: "Juízes", descricao: "A história dos juízes que governaram Israel.", imagem: juizes, detalhes: "Detalhes sobre Juízes.", testamento: "Velho" },
    { id: 8, titulo: "Rute", descricao: "A história de Rute e sua lealdade a Noemi.", imagem: rute, detalhes: "Detalhes sobre Rute.", testamento: "Velho" },
    { id: 9, titulo: "1 Samuel", descricao: "A transição de Israel de juízes para reis.", imagem: samuel1, detalhes: "Detalhes sobre 1 Samuel.", testamento: "Velho" },
    { id: 10, titulo: "2 Samuel", descricao: "A história do reinado de Davi.", imagem: samuel2, detalhes: "Detalhes sobre 2 Samuel.", testamento: "Velho" },
    { id: 11, titulo: "1 Reis", descricao: "A história dos reis de Israel e Judá.", imagem: reis1, detalhes: "Detalhes sobre 1 Reis.", testamento: "Velho" },
    { id: 12, titulo: "2 Reis", descricao: "A queda dos reinos de Israel e Judá.", imagem: reis2, detalhes: "Detalhes sobre 2 Reis.", testamento: "Velho" },
    { id: 13, titulo: "1 Crônicas", descricao: "A genealogia e a história do reinado de Davi.", imagem: cronicas1, detalhes: "Detalhes sobre 1 Crônicas.", testamento: "Velho" },
    { id: 14, titulo: "2 Crônicas", descricao: "A história do reinado de Salomão e dos reis de Judá.", imagem: cronicas2, detalhes: "Detalhes sobre 2 Crônicas.", testamento: "Velho" },
    { id: 15, titulo: "Esdras", descricao: "O retorno do exílio e a reconstrução de Jerusalém.", imagem: esdras, detalhes: "Detalhes sobre Esdras.", testamento: "Velho" },
    { id: 16, titulo: "Neemias", descricao: "A reconstrução dos muros de Jerusalém.", imagem: neemias, detalhes: "Detalhes sobre Neemias.", testamento: "Velho" },
    { id: 17, titulo: "Ester", descricao: "A história de Ester e como ela salvou os judeus.", imagem: ester, detalhes: "Detalhes sobre Ester.", testamento: "Velho" },
    { id: 18, titulo: "Jó", descricao: "A história de um homem justo que enfrenta grandes sofrimentos.", imagem: jo, detalhes: "Detalhes sobre Jó.", testamento: "Velho" },
    { id: 19, titulo: "Salmos", descricao: "Cânticos e orações do coração.", imagem: salmos, detalhes: "Salmos é uma coleção de cânticos, orações e louvores escritos principalmente por Davi, refletindo diversas experiências espirituais.", testamento: "Velho" },
    { id: 20, titulo: "Provérbios", descricao: "Sabedoria para o dia a dia.", imagem: proverbios, detalhes: "Provérbios é um livro que oferece ensinamentos práticos e conselhos sábios para uma vida piedosa e ética.", testamento: "Velho" },
    { id: 21, titulo: "Eclesiastes", descricao: "O significado da vida.", imagem: eclesiastes, detalhes: "Eclesiastes explora a busca pelo significado da vida, destacando a sabedoria e a vaidade de esforços humanos sem Deus.", testamento: "Velho" },
    { id: 22, titulo: "Cantares de Salomão", descricao: "Um poema de amor e devoção.", imagem: cantares, detalhes: "Cantares é um poema que celebra o amor romântico, frequentemente interpretado como uma metáfora do amor de Deus por Seu povo.", testamento: "Velho" },
    { id: 23, titulo: "Isaías", descricao: "Profecias do Messias e julgamento.", imagem: isaias, detalhes: "Isaías contém profecias de advertência, consolo e esperança, incluindo previsões sobre o Messias.", testamento: "Velho" },
    { id: 24, titulo: "Jeremias", descricao: "O chamado ao arrependimento.", imagem: jeremias, detalhes: "Jeremias narra a mensagem de Deus ao povo de Judá, alertando-os sobre o julgamento iminente.", testamento: "Velho" },
    { id: 25, titulo: "Lamentações", descricao: "Choro sobre Jerusalém.", imagem: lamentacoes, detalhes: "Lamentações reflete a dor e o arrependimento pela destruição de Jerusalém e o exílio do povo de Judá.", testamento: "Velho" },
    { id: 26, titulo: "Ezequiel", descricao: "Visões de restauração.", imagem: ezequiel, detalhes: "Ezequiel contém visões e mensagens de julgamento e esperança para o povo exilado em Babilônia.", testamento: "Velho" },
    { id: 27, titulo: "Daniel", descricao: "Fidelidade no exílio.", imagem: daniel, detalhes: "Daniel narra histórias de fidelidade a Deus no exílio e visões apocalípticas sobre o futuro.", testamento: "Velho" },
    { id: 28, titulo: "Oséias", descricao: "Amor e infidelidade.", imagem: oseias, detalhes: "Oséias usa o casamento do profeta como metáfora para ilustrar o amor persistente de Deus por Israel, apesar de sua infidelidade.", testamento: "Velho" },
    { id: 29, titulo: "Joel", descricao: "O dia do Senhor.", imagem: joel, detalhes: "Joel alerta sobre um julgamento iminente e promete a restauração e o derramamento do Espírito Santo.", testamento: "Velho" },
    { id: 30, titulo: "Amós", descricao: "Justiça para os oprimidos.", imagem: amos, detalhes: "Amós destaca a necessidade de justiça social e o julgamento contra a hipocrisia religiosa.", testamento: "Velho" },
    { id: 31, titulo: "Obadias", descricao: "Julgamento de Edom.", imagem: obadias, detalhes: "Obadias profetiza o julgamento contra Edom e a restauração do povo de Deus.", testamento: "Velho" },
    { id: 32, titulo: "Jonas", descricao: "A missão em Nínive.", imagem: jonas, detalhes: "Jonas narra a relutância do profeta em pregar o arrependimento aos ninivitas e a misericórdia de Deus.", testamento: "Velho" },
    { id: 33, titulo: "Miqueias", descricao: "Justiça e misericórdia.", imagem: miqueias, detalhes: "Miqueias anuncia julgamento por injustiça e idolatria, mas também esperança no reinado messiânico.", testamento: "Velho" },
    { id: 34, titulo: "Naum", descricao: "A queda de Nínive.", imagem: naum, detalhes: "Naum proclama a destruição de Nínive como um ato de justiça divina.", testamento: "Velho" },
    { id: 35, titulo: "Habacuque", descricao: "A fé em tempos difíceis.", imagem: habacuque, detalhes: "Habacuque dialoga com Deus sobre o sofrimento e aprende a confiar em Sua soberania.", testamento: "Velho" },
    { id: 36, titulo: "Sofonias", descricao: "O dia do Senhor se aproxima.", imagem: sofonias, detalhes: "Sofonias adverte sobre o julgamento divino e promete a restauração dos humildes.", testamento: "Velho" },
    { id: 37, titulo: "Ageu", descricao: "Reconstrução do templo.", imagem: ageu, detalhes: "Ageu incentiva o povo a priorizar a reconstrução do templo de Deus.", testamento: "Velho" },
    { id: 38, titulo: "Zacarias", descricao: "Esperança e redenção.", imagem: zacarias, detalhes: "Zacarias oferece visões de esperança, encorajando a reconstrução do templo e antecipando o Messias.", testamento: "Velho" },
    { id: 39, titulo: "Malaquias", descricao: "Chamado à fidelidade.", imagem: malaquias, detalhes: "Malaquias confronta a infidelidade do povo e promete a vinda do mensageiro do Senhor.", testamento: "Velho" },
    { id: 40, titulo: "Mateus", descricao: "O evangelho do Rei.", imagem: mateus, detalhes: "Mateus apresenta Jesus como o Messias prometido, destacando Suas palavras e obras.", testamento: "Novo" },
    { id: 41, titulo: "Marcos", descricao: "O evangelho do Servo.", imagem: marcos, detalhes: "Marcos narra a vida de Jesus com ênfase em Suas ações poderosas e serviço.", testamento: "Novo" },
    { id: 42, titulo: "Lucas", descricao: "O evangelho do Filho do Homem.", imagem: lucas, detalhes: "Lucas foca na humanidade de Jesus e em Seu amor pelos marginalizados.", testamento: "Novo" },
    { id: 43, titulo: "João", descricao: "O evangelho do Filho de Deus.", imagem: joao, detalhes: "João enfatiza a divindade de Jesus e a importância da fé Nele para a vida eterna.", testamento: "Novo" },
    { id: 44, titulo: "Atos", descricao: "A história da Igreja primitiva.", imagem: atos, detalhes: "Atos registra o início da Igreja e a obra do Espírito Santo através dos apóstolos.", testamento: "Novo" },
    { id: 45, titulo: "Romanos", descricao: "A justiça de Deus revelada.", imagem: romanos, detalhes: "Romanos apresenta uma explicação detalhada do evangelho e da justificação pela fé.", testamento: "Novo" },
    { id: 46, titulo: "1 Coríntios", descricao: "Correção e santidade.", imagem: corintios1, detalhes: "1 Coríntios aborda questões práticas e morais da igreja em Corinto, chamando-os à unidade.", testamento: "Novo" },
    { id: 47, titulo: "2 Coríntios", descricao: "Consolo e autenticidade.", imagem: corintios2, detalhes: "2 Coríntios é uma carta de encorajamento e defesa do ministério apostólico de Paulo.", testamento: "Novo" },
    { id: 48, titulo: "Gálatas", descricao: "Liberdade em Cristo.", imagem: galatas, detalhes: "Gálatas afirma que somos justificados pela fé, e não pelas obras da lei.", testamento: "Novo" },
    { id: 49, titulo: "Efésios", descricao: "A igreja como corpo de Cristo.", imagem: efesios, detalhes: "Efésios celebra a unidade e os privilégios dos crentes em Cristo.", testamento: "Novo" },
    { id: 50, titulo: "Filipenses", descricao: "Alegria em Cristo.", imagem: filipenses, detalhes: "Filipenses incentiva os crentes a se alegrarem no Senhor, mesmo em meio às adversidades.", testamento: "Novo" },
    { id: 51, titulo: "Colossenses", descricao: "A supremacia de Cristo.", imagem: colossenses, detalhes: "Colossenses destaca a plenitude de Cristo e Sua soberania sobre todas as coisas.", testamento: "Novo" },
    { id: 52, titulo: "1 Tessalonicenses", descricao: "Esperança no retorno de Cristo.", imagem: tessalonicenses1, detalhes: "1 Tessalonicenses encoraja a igreja a permanecer firme, esperando a vinda de Cristo.", testamento: "Novo" },
    { id: 53, titulo: "2 Tessalonicenses", descricao: "Esclarecimentos sobre o dia do Senhor.", imagem: tessalonicenses2, detalhes: "2 Tessalonicenses corrige mal-entendidos sobre a segunda vinda de Cristo.", testamento: "Novo" },
    { id: 54, titulo: "1 Timóteo", descricao: "Instruções para líderes.", imagem: timoteo1, detalhes: "1 Timóteo orienta sobre a liderança na igreja e a vida piedosa.", testamento: "Novo" },
    { id: 55, titulo: "2 Timóteo", descricao: "Últimas palavras de Paulo.", imagem: timoteo2, detalhes: "2 Timóteo é uma carta pessoal de Paulo, encorajando a perseverança no ministério.", testamento: "Novo" },
    { id: 56, titulo: "Tito", descricao: "Diretrizes para uma igreja saudável.", imagem: tito, detalhes: "Tito apresenta instruções para uma vida cristã exemplar e o estabelecimento de líderes fiéis.", testamento: "Novo" },
    { id: 57, titulo: "Filemom", descricao: "A intercessão de Paulo.", imagem: filemom, detalhes: "Filemom é uma carta de intercessão para a aceitação de um escravo fugitivo como irmão em Cristo.", testamento: "Novo" },
    { id: 58, titulo: "Hebreus", descricao: "Cristo é superior.", imagem: hebreus, detalhes: "Hebreus destaca a supremacia de Cristo sobre o sistema sacrificial e Sua obra como sumo sacerdote.", testamento: "Novo" },
    { id: 59, titulo: "Tiago", descricao: "A fé em ação.", imagem: tiago, detalhes: "Tiago enfatiza a relação entre fé verdadeira e boas obras.", testamento: "Novo" },
    { id: 60, titulo: "1 Pedro", descricao: "Esperança em meio ao sofrimento.", imagem: pedro1, detalhes: "1 Pedro encoraja os crentes a suportarem o sofrimento com esperança e santidade.", testamento: "Novo" },
    { id: 61, titulo: "2 Pedro", descricao: "Advertências contra falsos mestres.", imagem: pedro2, detalhes: "2 Pedro alerta sobre falsos mestres e reafirma a promessa da segunda vinda de Cristo.", testamento: "Novo" },
    { id: 62, titulo: "1 João", descricao: "Andando na luz.", imagem: joao1, detalhes: "1 João ensina sobre amor, obediência e a verdadeira comunhão com Deus.", testamento: "Novo" },
    { id: 63, titulo: "2 João", descricao: "Advertência contra o engano.", imagem: joao2, detalhes: "2 João adverte contra falsos mestres e incentiva a permanência na verdade.", testamento: "Novo" },
    { id: 64, titulo: "3 João", descricao: "A hospitalidade cristã.", imagem: joao3, detalhes: "3 João elogia a hospitalidade e adverte contra a ambição egoísta.", testamento: "Novo" },
    { id: 65, titulo: "Judas", descricao: "Lutando pela fé.", imagem: judas, detalhes: "Judas exorta os crentes a lutarem pela fé e a permanecerem vigilantes contra a apostasia.", testamento: "Novo" },
    { id: 66, titulo: "Apocalipse", descricao: "A vitória final de Cristo.", imagem: apocalipse, detalhes: "Apocalipse revela os eventos finais da história e a vitória definitiva de Cristo sobre o mal.", testamento: "Novo" }
  ];

  const detalhesLivrosBiblia = [
    {
      id: 1,
      titulo: "Gênesis",
      imagem: genesis,
      conteudo: "O livro de Gênesis apresenta a criação do mundo, a origem da humanidade e os primeiros eventos da história bíblica, como o pecado original, o dilúvio e a torre de Babel. Ele também narra a história dos patriarcas: Abraão, Isaac, Jacó e José, estabelecendo a promessa de Deus ao povo escolhido.",
      versiculoChave: "No princípio, criou Deus os céus e a terra. (Gênesis 1:1)"
    },
    {
      id: 2,
      titulo: "Êxodo",
      imagem: exodo,
      conteudo: "Êxodo relata a libertação dos israelitas da escravidão no Egito. Sob a liderança de Moisés, o povo atravessa o Mar Vermelho e recebe a Lei no Monte Sinai, incluindo os Dez Mandamentos. É uma história de redenção e de Deus estabelecendo Sua aliança com Israel.",
      versiculoChave: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão. (Êxodo 20:2)"
    },
    {
      id: 3,
      titulo: "Levítico",
      imagem: levitico,
      conteudo: "Levítico fornece instruções detalhadas sobre as leis de Deus, incluindo ofertas, pureza, o sacerdócio e festivais. O livro enfatiza a santidade de Deus e o chamado de Seu povo para viver de forma santa.",
      versiculoChave: "Sede santos, porque eu, o Senhor, vosso Deus, sou santo. (Levítico 19:2)"
    },
    {
      id: 4,
      titulo: "Números",
      imagem: numeros,
      conteudo: "Números narra a jornada dos israelitas pelo deserto, desde o Monte Sinai até a Terra Prometida. O livro registra censos, murmurações e a fidelidade de Deus, mesmo diante da desobediência do povo.",
      versiculoChave: "O Senhor é longânimo e grande em misericórdia, perdoando a iniquidade e a transgressão. (Números 14:18)"
    },
    {
      id: 5,
      titulo: "Deuteronômio",
      imagem: deuteronomio,
      conteudo: "Deuteronômio consiste nos discursos finais de Moisés ao povo de Israel antes de entrarem na Terra Prometida. Ele revisa a Lei e exorta o povo a permanecer fiel a Deus.",
      versiculoChave: "Amarás, pois, o Senhor teu Deus, de todo o teu coração, e de toda a tua alma, e de todas as tuas forças. (Deuteronômio 6:5)"
    },
    {
      id: 6,
      titulo: "Josué",
      imagem: josue,
      conteudo: "Josué narra a conquista da Terra Prometida pelos israelitas sob a liderança de Josué, sucessor de Moisés. O livro destaca a fidelidade de Deus em cumprir Suas promessas e a importância da obediência.",
      versiculoChave: "Não to mandei eu? Esforça-te e tem bom ânimo. (Josué 1:9)"
    },
    {
      id: 7,
      titulo: "Juízes",
      imagem: juizes,
      conteudo: "Juízes descreve o período após a conquista da Terra Prometida, quando Israel foi governado por juízes. O livro mostra ciclos de pecado, arrependimento e salvação, destacando a misericórdia de Deus.",
      versiculoChave: "Naqueles dias não havia rei em Israel; cada um fazia o que parecia bem aos seus olhos. (Juízes 21:25)"
    },
    {
      id: 8,
      titulo: "Rute",
      imagem: rute,
      conteudo: "Rute é uma história de amor, fidelidade e redenção. Ela narra a lealdade de Rute a sua sogra Noemi e como ela se torna parte da linhagem de Davi e, consequentemente, de Jesus.",
      versiculoChave: "Para onde quer que fores, irei eu, e onde quer que pousares, ali pousarei eu. (Rute 1:16)"
    },
    {
      id: 9,
      titulo: "1 Samuel",
      imagem: samuel1,
      conteudo: "1 Samuel narra o estabelecimento da monarquia em Israel. O livro aborda a transição de juízes para reis, destacando os reinados de Saul e a unção de Davi.",
      versiculoChave: "O Senhor não vê como o homem vê; o homem olha para o que está diante dos olhos, porém o Senhor olha para o coração. (1 Samuel 16:7)"
    },
    {
      id: 10,
      titulo: "2 Samuel",
      imagem: samuel2,
      conteudo: "2 Samuel foca no reinado de Davi, incluindo suas conquistas, falhas e arrependimento. Ele também destaca a promessa de Deus de estabelecer a casa de Davi para sempre.",
      versiculoChave: "Eu te constituí rei sobre Israel e te livrei das mãos de Saul. (2 Samuel 7:8)"
    },
    {
      id: 11,
      titulo: "1 Reis",
      imagem: reis1,
      conteudo: "1 Reis relata os reinados de Salomão e dos reis de Israel e Judá após a divisão do reino. Ele aborda a construção do templo por Salomão e os desafios de fidelidade a Deus.",
      versiculoChave: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face... eu sararei a sua terra. (1 Reis 8:30)"
    },
    {
      id: 12,
      titulo: "2 Reis",
      imagem: reis2,
      conteudo: "2 Reis continua a narrativa do declínio espiritual e político de Israel e Judá, culminando no exílio. Apesar disso, Deus envia profetas como Elias e Eliseu para chamar o povo ao arrependimento.",
      versiculoChave: "O Senhor, porém, teve misericórdia deles e se compadeceu por amor do seu concerto. (2 Reis 13:23)"
    },
    {
      id: 13,
      titulo: "1 Crônicas",
      imagem: cronicas1,
      conteudo: "1 Crônicas reconta a história de Israel desde Adão até o reinado de Davi, com foco nas genealogias e no papel de Davi na organização do culto e na preparação para a construção do templo.",
      versiculoChave: "Reconhecei que o Senhor é Deus; foi ele quem nos fez, e dele somos. (1 Crônicas 16:8)"
    },
    {
      id: 14,
      titulo: "2 Crônicas",
      imagem: cronicas2,
      conteudo: "2 Crônicas continua a narrativa histórica, cobrindo o reinado de Salomão e os reis de Judá até o exílio na Babilônia, com ênfase em lições espirituais e na fidelidade de Deus.",
      versiculoChave: "Se o meu povo, que se chama pelo meu nome, se humilhar, orar e buscar a minha face... eu sararei a sua terra. (2 Crônicas 7:14)"
    },
    {
      id: 15,
      titulo: "Esdras",
      imagem: esdras,
      conteudo: "Esdras narra o retorno de um grupo de exilados à Terra Prometida, liderado por Zorobabel e Esdras. Ele destaca a reconstrução do templo e a renovação espiritual do povo.",
      versiculoChave: "E tudo quanto o rei e seu conselho ordenaram... se cumpra diligentemente para a casa do Deus do céu. (Esdras 7:23)"
    },
    {
      id: 16,
      titulo: "Neemias",
      imagem: neemias,
      conteudo: "Neemias foca na reconstrução dos muros de Jerusalém e no reavivamento espiritual do povo após o exílio. É uma história de liderança, oração e dedicação.",
      versiculoChave: "O Deus dos céus é o que nos fará prosperar; e nós, seus servos, nos levantaremos e edificaremos. (Neemias 2:20)"
    },
    {
      id: 17,
      titulo: "Ester",
      imagem: ester,
      conteudo: "Ester narra a história de como uma jovem judia, Ester, se tornou rainha da Pérsia e salvou seu povo de um genocídio, mostrando a providência de Deus mesmo em tempos difíceis.",
      versiculoChave: "Quem sabe se não foi para um tempo como este que você chegou à posição de rainha? (Ester 4:14)"
    },
    {
      id: 18,
      titulo: "Jó",
      imagem: jo,
      conteudo: "Jó é um poema que aborda a questão do sofrimento e da soberania de Deus. Jó, um homem justo, enfrenta provações extremas, mas permanece fiel, e Deus restaura sua vida.",
      versiculoChave: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra. (Jó 19:25)"
    },
    {
      id: 19,
      titulo: "Salmos",
      imagem: salmos,
      conteudo: "Salmos é uma coleção de 150 cânticos, orações e louvores que expressam uma ampla gama de emoções humanas, desde alegria e gratidão até arrependimento e súplica. Escritos por autores como Davi, Asafe e outros, os Salmos são um reflexo da relação íntima entre Deus e Seu povo.",
      versiculoChave: "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)"
    },
    {
      id: 20,
      titulo: "Provérbios",
      imagem: proverbios,
      conteudo: "Provérbios é um livro de sabedoria prática, escrito principalmente por Salomão, oferecendo conselhos para uma vida piedosa, ética e produtiva. Ele aborda temas como trabalho, honestidade, disciplina e relacionamento com Deus.",
      versiculoChave: "O temor do Senhor é o princípio da sabedoria. (Provérbios 1:7)"
    },
    {
      id: 21,
      titulo: "Eclesiastes",
      imagem: eclesiastes,
      conteudo: "Eclesiastes reflete sobre o significado da vida e a busca por satisfação em um mundo transitório. O autor conclui que a verdadeira felicidade e propósito só podem ser encontrados em Deus.",
      versiculoChave: "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu. (Eclesiastes 3:1)"
    },
    {
      id: 22,
      titulo: "Cantares de Salomão",
      imagem: cantares,
      conteudo: "Cantares de Salomão é um poema de amor que celebra o casamento, a paixão e o relacionamento entre um homem e uma mulher, também visto como uma alegoria do amor entre Deus e Seu povo.",
      versiculoChave: "Eu sou do meu amado, e o meu amado é meu. (Cantares 6:3)"
    },
    {
      id: 23,
      titulo: "Isaías",
      imagem: isaias,
      conteudo: "Isaías contém profecias que apontam para o julgamento de Israel e das nações, mas também para a salvação futura por meio do Messias. Ele destaca a santidade de Deus e Seu plano redentor.",
      versiculoChave: "Mas ele foi ferido pelas nossas transgressões, e moído pelas nossas iniquidades. (Isaías 53:5)"
    },
    {
      id: 24,
      titulo: "Jeremias",
      imagem: jeremias,
      conteudo: "Jeremias é conhecido como o 'profeta chorão', pois lamenta a queda de Judá e a destruição de Jerusalém. Ele chama o povo ao arrependimento e apresenta a promessa de uma nova aliança de Deus com Seu povo.",
      versiculoChave: "Eu sei os planos que tenho para vocês, diz o Senhor, planos de paz e não de mal, para lhes dar um futuro e uma esperança. (Jeremias 29:11)"
    },
    {
      id: 25,
      titulo: "Lamentações",
      imagem: lamentacoes,
      conteudo: "Lamentações expressa a dor de Jeremias pela destruição de Jerusalém e a deportação do povo de Judá para o exílio. Apesar da angústia, o livro também aponta para a esperança na misericórdia de Deus.",
      versiculoChave: "As misericórdias do Senhor são a causa de não sermos consumidos; elas se renovam a cada manhã. (Lamentações 3:22-23)"
    },
    {
      id: 26,
      titulo: "Ezequiel",
      imagem: ezequiel,
      conteudo: "Ezequiel profetiza durante o exílio na Babilônia, abordando temas como julgamento, restauração e a glória futura de Israel. Suas visões incluem o vale de ossos secos e o templo restaurado.",
      versiculoChave: "Darei a vocês um coração novo e porei um espírito novo em vocês. (Ezequiel 36:26)"
    },
    {
      id: 27,
      titulo: "Daniel",
      imagem: daniel,
      conteudo: "Daniel narra a fidelidade de Daniel e seus amigos na Babilônia, além de profecias apocalípticas sobre o futuro dos reinos do mundo e o reino eterno de Deus.",
      versiculoChave: "O Deus do céu levantará um reino que jamais será destruído. (Daniel 2:44)"
    },
    {
      id: 28,
      titulo: "Oséias",
      imagem: oseias,
      conteudo: "Oséias usa o simbolismo de seu casamento para demonstrar o amor fiel de Deus por Seu povo, apesar da infidelidade deles. É um chamado ao arrependimento e à reconciliação.",
      versiculoChave: "Eu os curarei da sua infidelidade e os amarei de bom grado. (Oséias 14:4)"
    },
    {
      id: 29,
      titulo: "Joel",
      imagem: joel,
      conteudo: "Joel adverte sobre o 'dia do Senhor', destacando a necessidade de arrependimento. Ele também profetiza a vinda do Espírito Santo sobre toda a carne.",
      versiculoChave: "E acontecerá que, depois, derramarei o meu Espírito sobre toda a carne. (Joel 2:28)"
    },
    {
      id: 30,
      titulo: "Amós",
      imagem: amos,
      conteudo: "Amós denuncia a injustiça social e a hipocrisia religiosa de Israel, destacando que Deus exige retidão e justiça de Seu povo.",
      versiculoChave: "Corra a retidão como um rio, a justiça como um ribeiro perene. (Amós 5:24)"
    },
    {
      id: 31,
      titulo: "Obadias",
      imagem: obadias,
      conteudo: "Obadias é o menor livro do Antigo Testamento e condena Edom por sua traição a Israel. Ele profetiza a queda de Edom e a restauração de Israel.",
      versiculoChave: "O reino será do Senhor. (Obadias 1:21)"
    },
    {
      id: 32,
      titulo: "Jonas",
      imagem: jonas,
      conteudo: "Jonas narra a relutância do profeta em pregar a Nínive, a cidade inimiga de Israel. A história destaca a misericórdia de Deus para com todos os povos.",
      versiculoChave: "E Deus viu o que eles fizeram, como se converteram do seu mau caminho; então Deus se arrependeu do mal que tinha dito que lhes faria, e não o fez. (Jonas 3:10)"
    },
    {
      id: 33,
      titulo: "Miqueias",
      imagem: miqueias,
      conteudo: "Miqueias denuncia os pecados de Israel e Judá, mas também anuncia a vinda do Messias e a restauração final do povo de Deus.",
      versiculoChave: "E tu, Belém Efrata, embora pequena entre os clãs de Judá, de ti sairá para mim aquele que será o governante de Israel. (Miqueias 5:2)"
    },
    {
      id: 34,
      titulo: "Naum",
      imagem: naum,
      conteudo: "Naum prediz a queda de Nínive, a capital do império assírio, como um ato de justiça divina. É um livro sobre o julgamento de Deus contra a opressão.",
      versiculoChave: "O Senhor é bom, um refúgio em tempos de angústia. (Naum 1:7)"
    },
    {
      id: 35,
      titulo: "Habacuque",
      imagem: habacuque,
      conteudo: "Habacuque questiona a Deus sobre a injustiça e o sofrimento no mundo, recebendo a resposta de que Deus está no controle e agirá no tempo certo. O livro reflete a confiança em Deus mesmo em meio às adversidades.",
      versiculoChave: "O justo viverá pela fé. (Habacuque 2:4)"
    },
    {
      id: 36,
      titulo: "Sofonias",
      imagem: sofonias,
      conteudo: "Sofonias profetiza o julgamento iminente de Judá e das nações, mas também fala da futura restauração e alegria do povo de Deus.",
      versiculoChave: "O Senhor, o seu Deus, está em seu meio, poderoso para salvar. (Sofonias 3:17)"
    },
    {
      id: 37,
      titulo: "Ageu",
      imagem: ageu,
      conteudo: "Ageu incentiva o povo a reconstruir o templo após o exílio na Babilônia, destacando a importância de colocar Deus em primeiro lugar em suas vidas.",
      versiculoChave: "Minha é a prata, meu é o ouro, diz o Senhor dos Exércitos. (Ageu 2:8)"
    },
    {
      id: 38,
      titulo: "Zacarias",
      imagem: zacarias,
      conteudo: "Zacarias traz mensagens de esperança e restauração, apontando para o futuro Messias e o reinado de Deus. Suas visões apocalípticas ilustram o cuidado de Deus por Seu povo.",
      versiculoChave: "Não por força nem por poder, mas pelo meu Espírito, diz o Senhor dos Exércitos. (Zacarias 4:6)"
    },
    {
      id: 39,
      titulo: "Malaquias",
      imagem: malaquias,
      conteudo: "Malaquias repreende os sacerdotes e o povo por sua negligência espiritual, enquanto promete a vinda de um mensageiro para preparar o caminho para o Senhor.",
      versiculoChave: "Eis que enviarei o meu mensageiro, que preparará o caminho diante de mim. (Malaquias 3:1)"
    },
    {
      id: 40,
      titulo: "Mateus",
      imagem: mateus,
      conteudo: "Mateus apresenta Jesus como o Messias prometido, conectando o Antigo e o Novo Testamento. Ele narra a vida, os ensinamentos, os milagres, a morte e a ressurreição de Cristo.",
      versiculoChave: "Ide e fazei discípulos de todas as nações. (Mateus 28:19)"
    },
    {
      id: 41,
      titulo: "Marcos",
      imagem: marcos,
      conteudo: "Marcos oferece uma narrativa direta e dinâmica sobre a vida e o ministério de Jesus, destacando Seu poder e servidão.",
      versiculoChave: "Porque o Filho do Homem não veio para ser servido, mas para servir e dar a sua vida em resgate por muitos. (Marcos 10:45)"
    },
    {
      id: 42,
      titulo: "Lucas",
      imagem: lucas,
      conteudo: "Lucas destaca o cuidado de Jesus pelos marginalizados e Sua compaixão por toda a humanidade. É um relato detalhado e ordenado de Sua vida e obra.",
      versiculoChave: "Pois o Filho do Homem veio buscar e salvar o que estava perdido. (Lucas 19:10)"
    },
    {
      id: 43,
      titulo: "João",
      imagem: joao,
      conteudo: "João foca na divindade de Jesus, apresentando-o como o Verbo que se fez carne. Ele enfatiza o amor de Deus e o propósito eterno de Cristo.",
      versiculoChave: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito. (João 3:16)"
    },
    {
      id: 44,
      titulo: "Atos dos Apóstolos",
      imagem: atos,
      conteudo: "Atos narra o nascimento da Igreja e a disseminação do Evangelho através dos apóstolos, sob a direção do Espírito Santo.",
      versiculoChave: "Mas recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas. (Atos 1:8)"
    },
    {
      id: 45,
      titulo: "Romanos",
      imagem: romanos,
      conteudo: "Romanos apresenta uma explicação profunda da salvação pela fé, enfatizando a graça de Deus e a necessidade de justificação e santificação.",
      versiculoChave: "Porque todos pecaram e destituídos estão da glória de Deus. (Romanos 3:23)"
    },
    {
      id: 46,
      titulo: "1 Coríntios",
      imagem: corintios1,
      conteudo: "1 Coríntios aborda questões de divisões e desordem na igreja em Corinto, enfatizando a unidade em Cristo e a importância do amor e da moralidade cristã.",
      versiculoChave: "O amor nunca falha. (1 Coríntios 13:8)"
    },
    {
      id: 47,
      titulo: "2 Coríntios",
      imagem: corintios2,
      conteudo: "2 Coríntios é uma carta de defesa de Paulo contra críticas à sua autoridade apostólica, ao mesmo tempo em que exorta à generosidade e ao perdão.",
      versiculoChave: "Onde abundou o pecado, superabundou a graça. (2 Coríntios 5:20)"
    },
    {
      id: 48,
      titulo: "Gálatas",
      imagem: galatas,
      conteudo: "Gálatas defende a liberdade cristã em Cristo, confrontando a ideia de que a salvação vem pela obediência à Lei, em vez de pela fé em Cristo.",
      versiculoChave: "Para a liberdade foi que Cristo nos libertou. (Gálatas 5:1)"
    },
    {
      id: 49,
      titulo: "Efésios",
      imagem: efesios,
      conteudo: "Efésios ensina sobre a união do corpo de Cristo, destacando a importância da unidade, da paz e da nova identidade em Cristo.",
      versiculoChave: "Porque somos feitura dele, criados em Cristo Jesus para boas obras. (Efésios 2:10)"
    },
    {
      id: 50,
      titulo: "Filipenses",
      imagem: filipenses,
      conteudo: "Filipenses é uma carta de alegria e gratidão, onde Paulo exorta os cristãos a viverem em humildade, buscando a alegria em Cristo em todas as circunstâncias.",
      versiculoChave: "Posso todas as coisas naquele que me fortalece. (Filipenses 4:13)"
    },
    {
      id: 51,
      titulo: "Colossenses",
      imagem: colossenses,
      conteudo: "Colossenses ensina sobre a supremacia de Cristo sobre todas as coisas, exortando os cristãos a viverem de acordo com a nova vida em Cristo.",
      versiculoChave: "Tudo foi criado por meio dele e para ele. (Colossenses 1:16)"
    },
    {
      id: 52,
      titulo: "1 Tessalonicenses",
      imagem: tessalonicenses1,
      conteudo: "1 Tessalonicenses é uma carta encorajadora, em que Paulo exorta os cristãos a viverem de maneira santa enquanto aguardam a volta de Cristo.",
      versiculoChave: "Porque o Senhor mesmo descerá do céu com grande clamor, com voz de arcanjo e com a trombeta de Deus. (1 Tessalonicenses 4:16)"
    },
    {
      id: 53,
      titulo: "2 Tessalonicenses",
      imagem: tessalonicenses2,
      conteudo: "2 Tessalonicenses reafirma a volta de Cristo e a necessidade de perseverar na fé, além de corrigir mal-entendidos sobre o Dia do Senhor.",
      versiculoChave: "O Senhor vos faça crescer e aumentar no amor uns para com os outros. (2 Tessalonicenses 1:3)"
    },
    {
      id: 54,
      titulo: "1 Timóteo",
      imagem: timoteo1,
      conteudo: "1 Timóteo é uma carta de instrução pastoral, onde Paulo orienta Timóteo sobre como liderar a igreja, combater heresias e viver uma vida piedosa.",
      versiculoChave: "Ninguém despreze a tua mocidade, mas seja um exemplo dos fiéis. (1 Timóteo 4:12)"
    },
    {
      id: 55,
      titulo: "2 Timóteo",
      imagem: timoteo2,
      conteudo: "2 Timóteo é uma carta pessoal e afetuosa de Paulo a Timóteo, exortando-o a perseverar na fé e a cumprir seu ministério com coragem, apesar das dificuldades.",
      versiculoChave: "Combate o bom combate da fé. (2 Timóteo 4:7)"
    },
    {
      id: 56,
      titulo: "Tito",
      imagem: tito,
      conteudo: "Tito é uma carta de instrução pastoral, onde Paulo instrui Tito sobre como organizar a igreja em Creta e ensinar aos cristãos a viverem de maneira digna de seu chamado.",
      versiculoChave: "Pois a graça de Deus se manifestou, trazendo salvação a todos os homens. (Tito 2:11)"
    },
    {
      id: 57,
      titulo: "Filemom",
      imagem: filemom,
      conteudo: "Filemom é uma carta pessoal de Paulo, na qual ele pede a Filemom que perdoe o seu escravo Onésimo e o receba como irmão em Cristo.",
      versiculoChave: "Porque, por amor, eu te rogo. (Filemom 1:9)"
    },
    {
      id: 58,
      titulo: "Hebreus",
      imagem: hebreus,
      conteudo: "Hebreus exalta a supremacia de Cristo como o Sumo Sacerdote e mediador de uma nova aliança, encorajando os cristãos a perseverarem na fé.",
      versiculoChave: "Jesus Cristo é o mesmo, ontem, hoje e eternamente. (Hebreus 13:8)"
    },
    {
      id: 59,
      titulo: "Tiago",
      imagem: tiago,
      conteudo: "Tiago ensina sobre a importância de viver uma fé prática, que se manifesta em boas obras e controle da língua, além de exortar à perseverança nas provações.",
      versiculoChave: "A fé sem obras é morta. (Tiago 2:26)"
    },
    {
      id: 60,
      titulo: "1 Pedro",
      imagem: pedro1,
      conteudo: "1 Pedro é uma carta de encorajamento para os cristãos que sofrem perseguição, exortando-os a viverem com esperança e santidade em meio às dificuldades.",
      versiculoChave: "Aquele que sofreu na carne acabou com o pecado. (1 Pedro 4:1)"
    },
    {
      id: 61,
      titulo: "2 Pedro",
      imagem: pedro2,
      conteudo: "2 Pedro alerta contra falsos mestres e ensina sobre a segunda vinda de Cristo, exortando os cristãos a viverem de maneira justa e piedosa.",
      versiculoChave: "O Senhor não retarda a sua promessa, ainda que alguns a têm por tardia. (2 Pedro 3:9)"
    },
    {
      id: 62,
      titulo: "1 João",
      imagem: joao1,
      conteudo: "1 João é uma carta que enfatiza o amor de Deus, a importância de viver em obediência aos mandamentos de Cristo e a certeza da salvação.",
      versiculoChave: "Deus é amor. (1 João 4:8)"
    },
    {
      id: 63,
      titulo: "2 João",
      imagem: joao2,
      conteudo: "2 João é uma carta curta que exorta os cristãos a andarem na verdade e no amor, e alerta contra os falsos mestres.",
      versiculoChave: "Amados, amemo-nos uns aos outros. (2 João 1:5)"
    },
    {
      id: 64,
      titulo: "3 João",
      imagem: joao3,
      conteudo: "3 João é uma carta pessoal de João, elogiando Gaius por sua hospitalidade e exortando a rejeitar aqueles que não andam na verdade.",
      versiculoChave: "Amado, desejo que te vá bem em todas as coisas. (3 João 1:2)"
    },
    {
      id: 65,
      titulo: "Judas",
      imagem: judas,
      conteudo: "Judas adverte contra falsos mestres que infiltraram a igreja e exorta os cristãos a se manterem firmes na fé e a combater a apostasia.",
      versiculoChave: "Lutai pela fé que uma vez por todas foi dada aos santos. (Judas 1:3)"
    },
    {
      id: 66,
      titulo: "Apocalipse",
      imagem: apocalipse,
      conteudo: "Apocalipse é uma visão profética de João sobre os últimos tempos, revelando a vitória de Cristo sobre o mal e o estabelecimento do novo céu e nova terra.",
      versiculoChave: "Eis que venho sem demora. (Apocalipse 22:7)"
    }
  ];



  const [livros, setLivros] = useState(livrosBiblia);
  const [livroSelecionado, setLivroSelecionado] = useState(null);




  const abrirModal = (livroId) => {
    const livro = detalhesLivrosBiblia.find((livro) => livro.id === livroId);
    setLivroSelecionado(livro);
  };

  const fecharModal = () => {
    setLivroSelecionado(null);
  };

  return (
    <>
      <div className='p-4'>
        {/* Cards */}
        <main className="w-full flex flex-col items-center justify-center gap-6
        
        md:grid md:grid-cols-4 md:p-20
        ">
          {livros.map((livro) => (
            <div
              key={livro.id}
              className="w-full border border-slate-600 rounded-xl p-2 text-center flex flex-col gap-4 hover:scale-90 hover:bg-[#f5f8da] transition-all cursor-pointer
              
              md:hover:scale-95 
              "
              onClick={() => abrirModal(livro.id)} // Chama a função para abrir o modal
            >
              <img src={livro.imagem} alt={livro.titulo} className="rounded-xl grayscale
              
              md:w-[320px] md:h-[250px] md:rounded-xl md:grayscale md:flex md:items-center md:justify-center md:border-0 m-auto
              " />
              <h2 className="text-3xl font-Cinzel font-semibold">{livro.titulo}</h2>
              <p className="font-Exo">{livro.descricao}</p>
            </div>
          ))}
        </main>

        {/* Modal */}
        {livroSelecionado && (
          <div className="w-full flex fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-45 z-[1000] items-center justify-center p-4 overflow-auto">
            <div className="bg-white rounded-xl p-3 mt-28
            
                md:max-w-[720px] md:mt-12 md:p-8
            ">
              <button
                className="bg-red-500 hover:bg-red-400 text-white p-1 px-4 rounded-lg mb-6

                md:text-3xl 
                "
                onClick={fecharModal}
              >
                Fechar
              </button>
              <div className='flex flex-col gap-4 text-center'>
                <img
                  src={livroSelecionado.imagem}
                  alt={livroSelecionado.titulo}
                  className="rounded-xl grayscale
                  
                  md: md:h-[250px] md:rounded-xl md:grayscale md:flex md:items-center md:justify-center md:border-0 m-auto
                  "
                />
                <h2 className="text-3xl font-semibold font-Cinzel underline underline-offset-8
                
                md:text-5xl
                ">{livroSelecionado.titulo}</h2>
                <p className="font-Exo text-justify
                
                md:text-2xl
                ">{livroSelecionado.conteudo}</p>
                <p className='font-semibold font-Cinzel
                md:text-3xl
                '>{livroSelecionado.versiculoChave}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  )
}
