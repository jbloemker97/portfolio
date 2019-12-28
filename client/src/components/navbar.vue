<template>
    <nav class="navbar navbar-expand-md">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="navbar-brand">Jacob Bloemker</router-link>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto">
                    <router-link :to="{ name: 'Problems' }">Problems I'm Solving</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style scoped>
    .navbar {
        background-color: #4AB3F4;
        color: #fff;
        position: absolute;
        top: 0;
        width: 100%;
    }

    a {
        margin: 10px;
        padding: 10px;
    }
</style>