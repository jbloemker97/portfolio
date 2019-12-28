<template>
    <section>
        <div class="contact-section">
            <div class="container">
                <div class="contact-banner">
                    <p>Get in touch</p>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Your Name.." required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Your message" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'contact'
}
</script>

<style scoped>

    .contact-section {
        align-items: center;
        background-color: #4AB3F4;
        display: flex;
        margin-bottom: 50px;
        min-height: 125px;
        padding: 30px 0;
    }

    .contact-banner {
        color: #fff;
        width: 100%;
    }

    .contact-banner p {
        font-size: 42px;    
        font-weight: 100;
        margin: 0;
    }

    form {
        margin: 0 auto;
        max-width: 600px;
    }

    .form-control {
        border: none;
        border-bottom: 1px solid grey;
        border-radius: 0%;
    }

    .btn {
        background-color: #4AB3F4 !important;
        border-radius: 0%;
        color: #fff;
        margin-top: 10px;
        width: 25%;
    }

</style>