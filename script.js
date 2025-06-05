//Para que o HSAP carregue apenas após a página inteira carregar.
document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger)

    const sliderSize = document.querySelector('.containerSlider').offsetWidth; //Pegando o tamanho do containerSlider.
    const linha = document.getElementById('linha');
    const barra = document.getElementById('barrascroll')
    const caminhodabarra = linha.offsetWidth - barra.offsetWidth; //Diminuindo da #linha e #barrascroll para saber o tamanho que deverá percorrer a "barra scroll"

    //Criando uma timeLine para fazer mais de uma animação.
    const tl = gsap.timeline();

    tl.to(".containerSlider", //Adiciona uma nova animação a tl que será aplicada ao containerSlider.
        {
            x: -sliderSize,  //Vai mover o elemento containerSlider no eixoX para a esquerda pois está negativo, foi colocado a const slidersize pois ele pega o tamanho do próprio container.
            scrollTrigger: { 
                trigger: ".containerPai", //elemento que vai acionar o scrolltrigger.
                pin: true, //fixa o container na tela enquanto ocorre a animação, cria o efeito scroll horizontal com o scroll vertical o conteudo fica fixa enquanto no eixoX .
                start: "top top", //Quando o topo do containerPai encontrar o top da ViewPort ele vai disparar o scroll
                end: "+=2500", //Animação ocorre em um scroll de espaço de 2500px ou seja, vai ser necessário 2500px de scroll para a animação se concluída.
                scrub: 2 //Sincroniza o efeito do scroll com a animação, digamos que quanto mais alto o numero maior delay do scroll para a animação. Causa uma transição mais fluida.
            }
        })

    tl.to(".imagem img", { 
        objectPosition: "20% center", //a imagem vai ser animada a partir da position original dela até 20% horizontalmente, que representa a esquerda dela. Do centro para a esquerda.
        scrollTrigger: {
            trigger: ".containerSlider",
            start: "top top",
            end: "+=1500",
            scrub: 2
        }
    })

    tl.to(".palavra", {
        opacity: 1, //Vai alterar a opacidade do elemento da classe palavra que no meu CSS esta com   opacity: 0;
        stagger: 0.5, //Os textos vão aparecer com 0.5s de diferença da anterior, causando o efeito de aparecer uma por uma.
        duration: 3, //duração da animação de cada texto vai durar 3s.
        scrollTrigger: {
            trigger: ".containerSlider",
            start: "top 20%",
            end: "+=2500",
            scrub: true
        }
    }
    )

    tl.to("#barrascroll", {
        x: caminhodabarra, //Vai mover o #barrascroll  na distancia que a const esta definindo, pegando a distancia baseada no tamanho dos 2 elementos.
        scrollTrigger: {
            trigger: ".containerSlider",
            start: "top top",
            end: "+=2500",
            scrub: 2
        }
    });
});




