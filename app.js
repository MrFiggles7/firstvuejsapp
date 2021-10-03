Vue.use(Vuetify);

var app = new Vue({
    el: '#app',

    vuetify: new Vuetify({
        theme: {
            themes: {
                // modify themes (light or dark) on the fly
                light: {
                    primary: '#356859',

                }
            }
        }
    }),

    data:{
        tab: null,
        showPage: true,

        shoppingCart: [

        ],

        items: [
            {
                "name" : "Planters & Pots",
                "list" : [
                    {
                        "title" : "Face of Wonders",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 5.96,
                        "image" : "img/pots/ergita-sela-QSaF663v8uk-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Surfin' USA",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 6.95,
                        "image" : "img/pots/galina-n-miziNqvJx5M-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Hy on Potenuse",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 22.95,
                        "image" : "img/pots/nicolas-hirajeta-N7oHWhK9UDM-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Orbital Boi",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 13.50,
                        "image" : "img/pots/nielsen-ramon-okvqMfl78YE-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Lorge Standing Man",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.95,
                        "image" : "img/pots/kelly-sikkema-m4kw7twpA6k-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Basic Little Guy",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.95,
                        "image" : "img/pots/stephanie-harvey-T0inbt7nRME-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Lonely Corner Pot",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.95,
                        "image" : "img/pots/the-creative-exchange-HnYa7cQJKx4-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Just Look at 'im",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.95,
                        "image" : "img/pots/tuva-mathilde-loland-Lps36Gy_6ik-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },

                ]
            },
            {
                "name" : "Indoor Plants",
                "list" : [
                    {
                        "title" : "Bolka Bot Baddi",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 13.96,
                        "image" : "img/indoorPlants/david-clode-fhY3lp3KCx4-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Make Mr. Miyagi Proud",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 40.95,
                        "image" : "img/indoorPlants/mark-tegethoff-TYUS-cXzy50-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Kale",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 25.90,
                        "image" : "img/indoorPlants/lauren-mancke-DpphPG9ENsI-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Land SeaWeed",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 26.75,
                        "image" : "img/indoorPlants/severin-candrian-8nONCr6eTeg-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Droopy McSadPants",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 15.50,
                        "image" : "img/indoorPlants/severin-candrian-gTMnUAkPvlQ-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Fancy Leafed Liege",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 21.95,
                        "image" : "img/indoorPlants/severin-candrian-IjVvZCY2qmU-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Bask in My Greatness",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 59.99,
                        "image" : "img/indoorPlants/severin-candrian-UQZfYZO00C8-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Fire Fighter",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.99,
                        "image" : "img/indoorPlants/stephanie-harvey-T0inbt7nRME-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                ]
            },
            {
                "name" : "Outdoor Plants",
                "list" : [
                    {
                        "title" : "Green Roses",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 6.99,
                        "image" : "img/outdoorPlants/annie-spratt-8mqOw4DBBSg-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Wow! Orange!",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 12.99,
                        "image" : "img/outdoorPlants/carlos-ferreira-Jup6QMQdLnM-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Big 'ol Leafy boi",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 21.99,
                        "image" : "img/outdoorPlants/gryffyn-m-ZbMwN06jCcM-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Pink",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 329.99,
                        "image" : "img/outdoorPlants/indah-nur-ZZ1XJrXR4Do-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Striped Wonder",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 14.99,
                        "image" : "img/outdoorPlants/jill-dimond-kwjBnMHRUPA-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "pink",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 21.95,
                        "image" : "img/outdoorPlants/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "yellow",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 19.99,
                        "image" : "img/outdoorPlants/paul-green-5lRxNLHfZOY-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Trypophobia",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 15.95,
                        "image" : "img/outdoorPlants/tavga-k-s-6Qq9xVZYYEw-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                ]
            },
            {
                "name" : "Cacti/Succulents",
                "list" : [
                    {
                        "title" : "Goody Bag of Succulent Bois",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 19.99,
                        "image" : "img/succulents/amy-chen-G0GGAMRF4Y0-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Spiky (Don't Touch)",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 6.95,
                        "image" : "img/succulents/byron-co-r2F17c26C2Q-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Jungle for Ants",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 14.99,
                        "image" : "img/succulents/kelsey-brown-ZgktOgy7gUs-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Hairless Cactus",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 5.99,
                        "image" : "img/succulents/mathias-p-r-reding-F0ehv4gqqwY-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Shrek",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 4.99,
                        "image" : "img/succulents/okeykat-7TOjGsu_QCM-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Water Bad",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 3.99,
                        "image" : "img/succulents/severin-candrian-uPl9mep4zj0-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "So Prettyyy",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 7.99,
                        "image" : "img/succulents/stephanie-harvey-f7PfM2NklZ4-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                    {
                        "title" : "Paddle Boi",
                        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
                        "price" : 6.99,
                        "image" : "img/succulents/stephanie-harvey-vHkj3fX9wCk-unsplash.jpg",
                        "show" : false,
                        "qty" : 0
                    },
                ]
            },
        ],

    },

    methods:{
        addToShoppingCart: function (item) {
            for(var i = 0; i < this.shoppingCart.length; i++){

                if(this.shoppingCart[i] == item){
                    item.qty++;
                    return true;
                }
            }
            this.shoppingCart.push(item);
        },

        removeFromShoppingCart: function (item) {
            if(item.qty > 1){
                item.qty--;
            }
            else{
                this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1);
            }
        },

        trashItem: function (item) {
            item.qty = 0;
            this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1);
        }
    }

})



