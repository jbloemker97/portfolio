<template>
    <!-- LP -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <img src="../assets/11719720.jpg" class="mx-auto d-block">
                    </div> 
                    <div class="col-lg-12">
                        <h1 class="text-center">Jacob Bloemker</h1>
                        <h4 class="text-center">Full Stack Developer</h4>
                    </div>
                    <div class="col-lg-12">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <div class="col-lg-12 text-center icons">
                        <a href="https://www.linkedin.com/in/jacob-bloemker-45919914a/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/jbloemker97" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
    .container {
        align-items: center;
        display: flex;
        height: 100vh;
    }

    .icons {
        font-size: 22px;
    }

    .icons a {
        margin: 15px;
        padding: 5px;
    }

    .icons a:hover {
        opacity: 0.5;
    }

    img {
        border-radius: 100%;
        height: 300px;
        width: 300px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>