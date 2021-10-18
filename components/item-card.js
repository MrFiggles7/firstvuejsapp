Vue.component('item-card', {
    props: {
        item : Object,
        show: false,
    },


    methods: {
        addToShoppingCart : function(){
            this.$emit('add-me', this.item);
        }
    },


    computed: {

    },

    template: `<v-card
    class="mx-auto"
    hover
    max-width="400"
  >
    <v-img        
        :src="item.image"
        height="350px"         
    ></v-img>

    <v-row>
    <v-col
        cols="9"
    >
    <v-card-title style="word-break: break-word">
      {{item.title}}
    </v-card-title>

    <v-card-subtitle>
      {{'$' + item.price.toFixed(2)}}
    </v-card-subtitle>
</v-col>
    

    <v-col
        cols="2"
        class="d-flex align-center justify-start" 
    >
    {{item.qty}}
    <v-btn
        class="mx-2 text-right"
        fab
        dark
        small
        color="primary"
        @click="addToShoppingCart()"
    >
        <v-icon >
            add_shopping_cart
        </v-icon>
    </v-btn>
</v-col>
    
</v-row>
    

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        See Description
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{item.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>`,
});

