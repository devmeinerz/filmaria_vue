<template>
    <div id="header">
        <router-link tag="a" to="/" exact>Filmaria</router-link>
        <router-link tag ="button" to="/salvos" exact class="meus-filmes">SALVOS</router-link>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
    #header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 60px;
        background-color: #9fb5b8;
    }
    #header a{
        text-decoration: none;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        border: 0;
        background: #fff;
        padding: 5px 15px;
        outline: none;
        border-radius: 5px;
        font-weight: bold;
    }
</style>