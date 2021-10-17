<template>

        <section class="container-main">
            <section class="content-flex">
                
                <div class="text-container">
                <h1>Investimento para iniciantes</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <div class="main-content">
                    <img class="main-img" src="../assets/image3.png" alt="Desenho de mulher montada na peça cavalo, com dois peões nas diagonais, sob o tabuleiro de xadrez.">
                </div>
            </section>
        </section> 
        <section class="container-aulas">
            <section class="content-flex">
                <div class="main-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4g_xbp9J974" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                </div>
                <div class="text-container">
                <h4>Aula 1</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </section>
            <section class="line-content">
                <div>
                    <img src="../assets/linha.png" alt="Linha">
                </div>
            </section>
            <section class="content-flex">
                <div class="main-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4g_xbp9J974" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-container">
                <h4>Aula 2</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </section>
            <section class="line-content">
                <div>
                    <img src="../assets/linha.png" alt="Linha">
                </div>
            </section>
            <section class="content-flex">
                <div class="main-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4g_xbp9J974" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-container">
                <h4>Aula 3</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </section>
            <section class="line-content">
                <div>
                    <img src="../assets/linha.png" alt="Linha">
                </div>
            </section>
      
        </section>
    
</template>

<script>
export default {
    name : "Curso"
}
</script>

<style scoped>
    .container-main{
        padding-top: 4rem;
    }
    .container-main h1{
        font-style: normal;
        font-weight: bold;
        font-size: 55px;
        line-height: 50px;
        max-width: 724px;
        color: #FF4081;
        text-align: left;
    }
    .container-main p{
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
        margin-left: 5rem;
        padding-left: 3rem;
    }
    .content-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        /* margin: 68px; */
        margin-right: 0;
        max-width: 1157px;
    }
    .container-aulas iframe {
        padding-top: 3rem;
        width: 30rem;
        height:17rem;
        margin-right: 4rem;
    }
    .container-aulas{
        background: #f6f6f6;
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
        text-align: left;

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