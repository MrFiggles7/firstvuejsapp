Vue.component('shopping-cart__page', {
    props: {
        list: {
            type: Array
        },
    },
    methods: {
        addToShoppingCart: function (item) {
            this.$emit('add-me', item);
        },
        removeFromShoppingCart: function (item) {
            this.$emit('remove-me', item);
        },
        trashItem: function (item) {
            this.$emit('trash-me', item);
        }
    },


    computed: {
        subTotal: function(){

            var subtotal = 0;

            for(var i = 0; i < this.list.length; i++){
                if(this.list[i].qty > 0){
                    subtotal += (this.list[i].price * this.list[i].qty);
                }
            }

            return subtotal;
        },

        taxAmount: function(){
            return this.subTotal * .055;
        },

        total: function(){
            return this.subTotal + this.taxAmount;
        }
    },

    template: `
        <v-container-fluid color="basil">
                    <v-card-title class="text-h2">
                        Your Cart:
                    </v-card-title>
                <v-row
                    no-gutters
                >
                    <v-col
                    class="mb-15"
                        cols="12"
                        md="8"                        
                    >
                        <v-row
                        class="mt-0 ml-lg-5 ml-md-4 ml-sm-1 mx-2"
                                v-for="item in list"
                                :key="item">
                            <shopping-cart-item :item="item" @add-me="addToShoppingCart"
                             @remove-me="removeFromShoppingCart"
                             @trash-me="trashItem"
                             >
                             
                             </shopping-cart-item>
                        </v-row>

                    </v-col>                                        
                    <v-col                                    
                        cols="12"
                        md="4"
                    >
                        <shopping-cart__total :list="list"></shopping-cart__total>
                    </v-col>


                </v-row>

            </v-container-fluid>
    `,
});
