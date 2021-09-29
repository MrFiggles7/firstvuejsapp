Vue.component('item-page', {
    props: {
        list: {
            type: Array
        },
    },
    methods: {

    },


    computed: {

    },

    template: `<v-row class="mt-5 mb-5" style="background-color: transparent">
<v-col v-for="item in list"
    :key="title"
    cols="12"
    lg="3"
    md="4"
    sm="6"
    >
    
    <item-card :title="item.title" :price="item.price" :image="item.image" :description="item.description" :qty="item.qty"></item-card>
</v-col>
</v-row>
  `,
});
