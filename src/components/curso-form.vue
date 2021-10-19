<template>
    <section class="curso-form">
        <div class="title-form">
            <h1>Novo Curso</h1>
        </div>
        
        <form action="" method="post">
            <input type="text" placeholder="Titulo">
            <input type="file" id="capa" display="none">
            <input type="text" placeholder="Professor">
            <textarea name="" id="" cols="30" rows="10" placeholder="Descrição"></textarea>

        </form>

        <FormAula/>
        
        <div class="btn-add-aula">
            <p class="button-add-aula" v-on:click="innerForm">+</p>
        </div>
        <p class="button-content2">Salvar</p>
    </section>
</template>

<script>

import FormAula from './aula-form.vue'

export default {
    name: "Form",
    components:{
        FormAula
    },
    methods: {
        innerForm(){
            return <FormAula/>
        }
    },
}
</script>

<style scoped>
    .curso-form{
        padding-left: 5.1rem;
        width: 70%;
    }
    .title-form{
       display: flex;
       
       padding-top: 4.4rem;
    }
    .title-form h1{
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        color: #FF4081;
        margin: 0;
        text-align: left;
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
    input[type=file]{
        border: solid 1px;
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
    .btn-add-aula{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-add-aula{
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
    .button-content2{
        width: 14rem;
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