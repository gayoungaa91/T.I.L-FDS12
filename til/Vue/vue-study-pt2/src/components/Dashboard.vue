<template>
    <div>
        <h1>dashboard</h1>
        <p>{{fromChildMent}}</p>
        <button v-on:click="this.getSetData">Action!</button>
        <hr/>
        <child-a v-bind:toChild="myData1" v-bind:childListData="myListData"></child-a>
        <hr/>
        <child-b v-bind:toChild="myData2" v-bind:parentFunction="this.parentFunction"></child-b>
    </div>
</template>

<script>

    const fromServerData = {
        "result": "success",
        "data": [
            'ij','jk','ss'
        ]
    };

    import ChildA from './ChildA';
    import ChildB from './ChildB';

    export default {
        name: 'Dashboard',
        data () {
            return {
                myData1: 'this is myData1',
                myData2: 'this is myData2',
                myListData: [],
                fromChildMent: null
            }
        },

        components: {
            ChildA,
            ChildB
        },

        methods: {
            getSetData () {
                console.log('getSetData');
                this.myListData = fromServerData.data;
            },
            parentFunction ( e ) {
                console.log('parentFunction');
                this.fromChildMent = e;
            }
        }

    }
</script>

<style>
</style>