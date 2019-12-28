<template>
    <div>
        <div class="skills-section">
            <div class="container">
                <div class="skills-banner">
                    <p>Skills</p>
                </div>
            </div>
        </div>

        <div class="skills-content">
            <div class="container">
                <h4 id="frontend">Front End</h4><hr class="mb-5">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <img src="../assets/html.png">
                        <h5 class="pt-3 font-weight-bold">HTML</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/css.png">
                        <h5 class="pt-3 font-weight-bold">CSS</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/js.png">
                        <h5 class="pt-3 font-weight-bold">Javascript</h5>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-4 text-center">
                        <img src="../assets/vuejs.png">
                        <h5 class="pt-3 font-weight-bold">VueJS</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/bootstrap.png">
                        <h5 class="pt-3 font-weight-bold">Bootstrap</h5>
                    </div>
                </div><br><br><br>

                <h4 id="backend" class="mt-5">Back End</h4><hr class="mb-5">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <img src="../assets/php.png">
                        <h5 class="pt-3 font-weight-bold">PHP</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/nodejs.png">
                        <h5 class="pt-3 font-weight-bold">NodeJS</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/mongodb.png">
                        <h5 class="pt-3 font-weight-bold">MongoDB</h5>
                    </div>
                </div><br><br><br>

                <h4 id="otherskills" class="mt-5">Other Skills</h4><hr class="mb-5">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <img src="../assets/git.png">
                        <h5 class="pt-3 font-weight-bold">Git</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/json.png">
                        <h5 class="pt-3 font-weight-bold">JSON</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src="../assets/rest.png">
                        <h5 class="pt-3 font-weight-bold">Restful API's</h5>
                    </div>
                </div><br><br><br>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'skills'
    }
</script>

<style scoped>
    .skills-section {
        align-items: center;
        background-color: #4AB3F4;
        display: flex;
        margin-bottom: 50px;
        min-height: 125px;
        padding: 30px 0;
    }

    .skills-banner {
        color: #fff;
        width: 100%;
    }

    .skills-banner p {
        font-size: 42px;    
        font-weight: 100;
        margin: 0;
    }

    img {
        height: 100px;
    }

    #frontend,
    #backend,
    #otherskills {
        font-size: 34px;
        margin-bottom: 5px;
    }

</style>