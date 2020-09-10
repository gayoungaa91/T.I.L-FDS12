<template>
    <div>
        <h1>ChildB</h1>
        <h2>{{toChild}}</h2>

        <button v-on:click="childAction">child action</button>

    </div>
</template>

<script>
    export default {
        name: 'ChildB',
        props: {
            toChild: String,
            parentFunction: Function
        },
        mounted(){
            console.log(this.toChild);
        },
        methods: {
            childAction () {
                console.log( 'childAction' );
                this.parentFunction('this is ment from child!!');

            }
        }
    }
</script>

<style>
</style>