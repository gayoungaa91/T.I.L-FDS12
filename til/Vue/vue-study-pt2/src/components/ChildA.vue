<template>
    <div>
        <h1>ChildA</h1>
        <h2>{{toChild}} : {{ childListData.length }}</h2>

        <button v-on:click="myToggle">myToggle</button>
        now myData state is "{{myData}}"
        
        <h1 v-if="myData" v-bind:class="{on: active, active: myData}">my data state</h1>
        
        <button v-on:click="increase">+</button>
        <button v-on:click="decrease">-</button>
        <h2 v-bind:style="{color: 'blue', fontSize: fontSize + 'px'}">string</h2>

        <ul>
            <li :v-for="item in myList" :key="item.index" v-bind:class="{active: !item.active}">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ChildA',
        props: {
            toChild: String,
            childListData: Object
        },    
        data() {
            return {
                myData: true,
                active: true,
                fontSize: 20,
                // myList: [0, 1, 2, 3, 4, 5, 6]
                myList: [
                    {id: 'id1', active: true, class:'c1'},
                    {id: 'id2', active: true, class:'c2'},
                    {id: 'id3', active: true, class:'c3'},
                    {id: 'id4', active: true, class:'c4'}
                ]
            }
        },
        // 라이프사이클
        created: function(){
            console.log('created');
        },
        mounted: function(){
            console.log('mounted');
        },
        methods: {
            myToggle() {
                this.myData = !this.myData;
            },
            increase() {
                this.fontSize = this.fontSize + 1
            },
            decrease() {
                this.fontSize = this.fontSize - 1
            }
        }
    }
</script>

<style scoped>
    .on{color: red;}
    li {border: 1px solid green;}
    li .on{color: red;}
</style>