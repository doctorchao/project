<template>
    <div>
        hahha
    </div>
</template>

<script>
    export default {
        name:'',
        methods: {
            getcontent () {
                this.$axios.get(this.$api.getread).then(res =>{
                    console.log(res)
                })
            }
        },
        created () {
            this.getcontent()
        }
    }
</script>

<style scoped>
    
</style>
