<template>
    <section class="problem-section">
        <div class="container">
            <codeSnippet />
        </div>
    </section>
</template>

<script>
import codeSnippet from '../components/codeSnippet';

export default {
    name: 'Projects',
    components: {
        codeSnippet
    }
}
</script>

<style scoped>
    .problem-section {
        margin-top: 100px;
    }
</style>