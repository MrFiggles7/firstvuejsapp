Vue.component('shopping-cart-item', {
    props: {
        item : Object,
    },
    methods: {
        addToShoppingCart: function () {
            this.$emit('add-me', this.item);
        },

        removeFromShoppingCart: function () {
            this.$emit('remove-me', this.item);
        },

        trashItem: function () {
            this.$emit('trash-me', this.item);
        }
    },


    computed: {

    },

    template: `
       <v-card
                                    class="container mb-1"
                                    outlined
                                    hover
                            >
                                <v-card class="d-inline">
                                    <v-row>
                                        <v-col
                                        >
                                            <v-card-title style="word-break: break-word">
                                                {{item.title}}
                                            </v-card-title>

                                            <v-card-subtitle>
                                                {{'$' + item.price.toFixed(2)}}
                                            </v-card-subtitle>
                                        </v-col>


                                        <v-col
                                                class="d-flex align-center justify-end"
                                        >
                                            <v-card class="pa-5 mr-5">{{'QTY: ' + item.qty + ' x $' + item.price + ' = $' + (item.qty * item.price).toFixed(2)}}</v-card>
                                            <v-btn
                                                    class="mx-2 text-right"
                                                    fab
                                                    dark
                                                    small
                                                    color="primary"
                                                    @click="removeFromShoppingCart()"
                                            >
                                                <v-icon>
                                                    remove_circle_outline
                                                </v-icon>
                                            </v-btn>
                                            <v-btn
                                                    class="mx-2 text-right"
                                                    fab
                                                    dark
                                                    small
                                                    color="primary"
                                                    @click="addToShoppingCart()"
                                            >
                                                <v-icon>
                                                    add_circle_outline
                                                </v-icon>
                                            </v-btn>
                                            <v-btn
                                                    class="mx-2 text-right"
                                                    fab
                                                    dark
                                                    small
                                                    color="primary"
                                                    @click="trashItem()"
                                            >
                                                <v-icon>
                                                    delete_outline
                                                </v-icon>
                                            </v-btn>
                                        </v-col>

                                        <div>
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                {{item.description}}
                                            </v-card-text>
                                        </div>

                                    </v-row>
                                </v-card>

                            </v-card>
    `,
});
