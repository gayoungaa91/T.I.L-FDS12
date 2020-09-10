<template>
    <div>
        <h1>ChildA</h1>
        <h2>{{toChild}} : {{ childListData.length }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'ChildA',
        props: {
            toChild: String,
            childListData: Object
        },        
        // 라이프사이클
        created: function(){
            console.log('created');
        },
        mounted: function(){
            console.log('mounted');

            console.log( this.toChild );
            console.log( this.childListData );
        }
    }
</script>

<style>
</style>