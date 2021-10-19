<template>
    <section class="adm-container">
        <div>
            <h2>Painel Administrativo</h2>
            <p>Educação financeira é tudo de bom</p>
        </div>

        <table class="table-cursos">
            <thead>
                <tr>
                <th>Cursos</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>Investimento para iniciantes</th>
                <th><button class="editar">editar</button><button class="excluir">excluir</button></th>
                </tr>
                <tr>
                <th>Poupando e rendendo</th>
                <th><button class="editar">editar</button><button class="excluir">excluir</button></th>
                </tr>
                <tr>
                <th>Independência financeira</th>
                <th><button class="editar">editar</button><button class="excluir">excluir</button></th>
                </tr>
            </tbody>
            
        </table>

        <div class="btn-add-curso">
            <router-link to="/curso-form"> <p class="button-add-curso">+</p></router-link>
           
        </div>
    </section>
       
    
</template>

<script>
export default {
    name : "AdmPanel"
}
</script>

<style scoped>
    .adm-container{
       display: flex;
       flex-direction: column;
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
    .table-cursos{
        width: 70%;
        border: solid 1px;
        margin-top: 6rem;

    }
    thead{
        background: #EBEBEB;
        font-size: 24px;
    }
    .table-cursos th{
        border:  1px;
        padding: 1rem;
        margin-top: 2rem;
        text-align: left;
    }
    .table-cursos .editar{
        border: none;
        padding: 0 2rem 0 2rem;
        color: #fff;
        font-size: 20px;
        margin-right: 1rem;
        background:#f8c23a;
    }
    .table-cursos .excluir{
        border: none;
        padding: 0 2rem 0 2rem;
        color: #fff;
        font-size: 20px;
        background:#f8473a;
    }
    
    .btn-add-curso{
        display: flex;
        width: 70%;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    .button-add-curso{
        width: 3rem;
        height: 3rem;
        background: #419488;
        border-radius: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        color: #fdfdfd;
    }
</style>