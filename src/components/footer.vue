<template>
    <footer>
        <img id='img-footer' src="../assets/logo_footer.png" alt="">
   </footer>
</template>

<script>
export default {
    name: 'Footer',
    
}
</script>

<style >
footer {
    display: flex;
    width: 100%;
    height: 8rem;
    flex-shrink: 0;
    align-items: center;
    background: #2E948A;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
}
#img-footer {
    position: relative;
    height: 80px;
}
</style>