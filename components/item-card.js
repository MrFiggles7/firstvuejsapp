Vue.component('item-card', {
    props: {
        image: String,
        title: String,
        price: Number,
        description: String,
        show: false,
        qty: 0
    },

    methods: {

    },


    computed: {},

    template: `<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img        
        :src="image"
        height="350px"         
    ></v-img>

    <v-row>
    <v-col
        cols="9"
    >
    <v-card-title style="word-break: break-word">
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{'$' + price.toFixed(2)}}
    </v-card-subtitle>
</v-col>
    

    <v-col
        cols="2"
        class="d-flex align-center justify-start" 
    >
    {{qty}}
    <v-btn
        class="mx-2 text-right"
        fab
        dark
        small
        color="primary"
    >
        <v-icon @click="qty = qty+1">
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
          {{description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>`,
});

