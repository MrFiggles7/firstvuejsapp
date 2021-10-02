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
        <v-container class="container" color="basil">
                    <v-card-title class="text-h2">
                        Your Cart:
                    </v-card-title>
                <v-row
                    
                >
                    <v-col
                        cols="8"                        
                    >
                        <v-row
                                v-for="item in list"
                                :key="item">
                            <shopping-cart-item :item="item" @add-me="addToShoppingCart"
                             @remove-me="removeFromShoppingCart"
                             @trash-me="trashItem"
                             >
                             
                             </shopping-cart-item>
                        </v-row>

                    </v-col>
                    <v-col>
                        <v-container>
                            <v-card-text
                                v-for="item in list"
                            >
                               {{item.title}} -- {{'QTY: ' + item.qty + ' x $' + item.price + ' = $' + (item.qty * item.price).toFixed(2)}}
                            </v-card-text>
                            <v-card-subtitle class="text-h4">
                                {{'Subtotal: $' + subTotal.toFixed(2)}}
                            </v-card-subtitle>
                            <v-card-text>
                                {{'x Tax (5.5%): $' + taxAmount.toFixed(2)}}
                            </v-card-text>
                            <v-card-title class="text-h2">
                                Total: {{'$' + total.toFixed(2)}}
                            </v-card-title>
                            <v-btn x-large color="#356859" class="white--text ml-5 mt-5">Continue to Payment</v-btn>
                        </v-container>
                    </v-col>


                </v-row>

            </v-container>
    `,
});
