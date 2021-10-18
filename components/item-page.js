Vue.component('item-page', {
    props: {
        list: {
            type: Object
        },
    },
    methods: {
        addToShoppingCart: function (item) {
            this.$emit('add-me', item);
        }
    },


    computed: {

    },

    template: `<v-row class="mt-5 mb-5 ml-3 mr-3" style="background-color: transparent">
<v-col v-for="item in list"
    :key="title"
    cols="12"
    lg="3"
    md="4"
    sm="6"
     
    >
    
    <item-card :item="item" @add-me="addToShoppingCart(item)"></item-card>
</v-col>
</v-row>
  `,
});
