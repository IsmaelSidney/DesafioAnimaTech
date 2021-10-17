<template>
    <header>
        <img src="../assets/logo.png" alt="">
        <ul>
            <li>Cursos</li>
            <li>Painel Administrativo</li>
        </ul>
   </header>
</template>

<script>
export default {
    name: 'Header',
    
}
</script>

<style >
header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2E948A;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
    color: #fff;
    margin: 0;
}
img {
    position: relative;
    height: 60px;
    margin-left: 5rem;
}
ul{
    list-style: none;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #FDFDFD;
    margin-right: 5rem;
    
}
li{
    display: inline;
    margin: 1rem;
}
</style>