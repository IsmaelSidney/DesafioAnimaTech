<template>
    <section class="curso-aula-form">

        <div class="title-form-aula">
            <h1>Aula 1</h1>
       
        <form action="" method="post">
            <input type="text" placeholder="Titulo da aula">
            <input type="text" placeholder="Link da aula">
            <textarea name="" id="" cols="30" rows="10" placeholder="Descrição da aula"></textarea>
            
        </form> 
        </div>

    </section>
</template>

<script>
export default {
    name: "Form-aula"
}
</script>

<style scoped>
    .curso-aula-form{
     
        width: 100%;
    }
   
    form{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
    input,textarea{
        margin: .3rem;
        padding: .5rem;
    }

    .title-form-aula h1{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: #2E948A;
        margin-top: 1rem;
        text-align: left;
    }
    .title-form-aula form{
        margin-top: .1rem;
    }
   
    
</style>