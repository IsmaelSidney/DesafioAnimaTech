<template>
    
        <section class="title-container">
                <div>
                    <h2>Cursos</h2>
                    <p>Educação financeira é tudo de bom
                    </p>
                </div>
        </section>
        <section class="container-main">
            <section class="content-flex">
                <div class="main-content">
                    <img class="main-img" src="../assets/image3.png" alt="Desenho de mulher montada na peça cavalo, com dois peões nas diagonais, sob o tabuleiro de xadrez.">
                    </div>
                <div class="text-container">
                <h4>Investimento para iniciantes</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <router-link to="/curso"><p class="button-content2"><a href="começar agora">começar agora</a></p></router-link>
                </div>
            </section>
            <section class="line-content">
                <div>
                    <img src="../assets/linha.png" alt="Linha">
                </div>
            </section>
            <section class="content-flex">
                <div  class="main-content">
                    <img class="main-img" src="../assets/image2.png" alt="Mulher de cabelos pretos regando uma planta cujos frutos são moedas, com sifrão no meio delas.">
                </div>
                <div class='text-container'>
                <h4>Poupando e rendendo</h4>
                <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <router-link to="/curso"><p class="button-content2"><a href="começar agora">começar agora</a></p></router-link>
                </div>
            </section>
            <section class="line-content">
                <div>
                    <img src="../assets/linha.png" alt="Linha">
                </div>
            </section>
            <section class="content-flex">
                <div  class="main-content">
                    
                    <img class="main-img" src="../assets/image4.png" alt="Mulher com cabelos pretos longos e óculos, sob o topo de uma montanha, segurando uma taça de primeira colocada.">
                    
                </div>
                <div class="text-container"> 
                    <h4>Independência financeira</h4>
                    <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <router-link to="/curso"><p class="button-content2"><a href="começar agora">começar agora</a></p></router-link>
                </div>
            </section>
        </section>
    
</template>

<script>
export default {
    name : "Cursos"
}
</script>

<style scoped>
    .title-container{
       display: flex;
       padding-left: 5.1rem;
       padding-top: 4.4rem;
    }
     h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 69px;
        text-transform: capitalize;
        color: #FF4081;
        margin: 0;
        text-align: left;
        
    }

    p {
        font-style: normal;
        font-weight: 400;
        text-align: left;
        font-size: 20px;
        line-height: 23px;
        color: #555555;
        margin: 0;
    }
    
    .button-content2{
        width: 233px;
        height: 51px;
        background: #419488;
        border-radius: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
    a{
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        color: #fdfdfd;
    }
    .line-content {
        display: flex;
        margin-left: 8rem;
    }
    .line-content img {
        display: flex;
        width: 100%;
        height: 5px;
        margin-left:-4rem;
        margin-bottom: 3rem;
        margin-top:-2rem;
    }
    .content-flex{
        display: flex;
        align-items: center;
        padding-right: 2rem;
        text-align: center;
        padding-bottom: 5rem;
        margin-top: 0rem;
        padding-left: 3rem;
    }
    .content-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 68px;
        margin-right: 0;
        max-width: 1157px;
    }
    .main-img {
        margin-right: 5.1rem;
        size: 65%;
    }
    .main-content {
        align-items: center;
        
        margin-top: 1rem;
        width:100%;
        height: 100%; 
    }

    .main-img {
        height: 100%;
    }
    .text-container p{
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
    }
    h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 40px;
        max-width: 724px;
        color: #FF4081;
        text-align: left;
    }
</style>