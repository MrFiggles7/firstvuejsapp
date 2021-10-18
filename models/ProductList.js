function ProductList(){
    this.__proto__ = [];

    this.addItem = function (itemList) {
        this.push(itemList);

        return this;
    }

    new ItemList("Planters & Pots").addItem(new PotPlanter(
        "Face of Wonders",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        5.96,
        "img/pots/ergita-sela-QSaF663v8uk-unsplash.jpg",
    )).addItem(
        "Surfin' USA",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        6.95,
        "img/pots/galina-n-miziNqvJx5M-unsplash.jpg",
    ).addItem(
        "Hy on Potenuse",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        22.95,
        "img/pots/nicolas-hirajeta-N7oHWhK9UDM-unsplash.jpg",
    ).addItem(
        "Orbital Boi",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        13.50,
        "img/pots/nielsen-ramon-okvqMfl78YE-unsplash.jpg",
    ).addItem(
        "Lorge Standing Man",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.95,
        "img/pots/kelly-sikkema-m4kw7twpA6k-unsplash.jpg"
    ).addItem(
        "Basic Little Guy",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.95,
        "img/pots/stephanie-harvey-T0inbt7nRME-unsplash.jpg"
    ).addItem(
        "Lonely Corner Pot",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.95,
        "img/pots/the-creative-exchange-HnYa7cQJKx4-unsplash.jpg"
    ).addItem(
        "Just Look at 'im",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.95,
        "img/pots/tuva-mathilde-loland-Lps36Gy_6ik-unsplash.jpg"
    );

    new ItemList("Indoor Plants").addItem(new IndoorPlant(
        "Bolka Bot Baddi",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        13.96,
        "img/indoorPlants/david-clode-fhY3lp3KCx4-unsplash.jpg",

    )).addItem(
        "Make Mr. Miyagi Proud",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        40.95,
        "img/indoorPlants/mark-tegethoff-TYUS-cXzy50-unsplash.jpg",

    ).addItem(
        "Kale",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        25.90,
        "img/indoorPlants/lauren-mancke-DpphPG9ENsI-unsplash.jpg",

    ).addItem(
        "Land SeaWeed",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        26.75,
        "img/indoorPlants/severin-candrian-8nONCr6eTeg-unsplash.jpg",

    ).addItem(
        "Droopy McSadPants",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        15.50,
        "img/indoorPlants/severin-candrian-gTMnUAkPvlQ-unsplash.jpg",

    ).addItem(
        "Fancy Leafed Liege",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        21.95,
        "img/indoorPlants/severin-candrian-IjVvZCY2qmU-unsplash.jpg",

    ).addItem(
        "Bask in My Greatness",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        59.99,
        "img/indoorPlants/severin-candrian-UQZfYZO00C8-unsplash.jpg",

    ).addItem(
        "Fire Fighter",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.99,
        "img/indoorPlants/stephanie-harvey-T0inbt7nRME-unsplash.jpg",

    );

    new ItemList("Outdoor Plants").addItem(new OutdoorPlant(
        "Green Roses",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        6.99,
        "img/outdoorPlants/annie-spratt-8mqOw4DBBSg-unsplash.jpg",

    )).addItem(
        "Wow! Orange!",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        12.99,
        "img/outdoorPlants/carlos-ferreira-Jup6QMQdLnM-unsplash.jpg",


    ).addItem(
        "Big 'ol Leafy boi",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        21.99,
        "img/outdoorPlants/gryffyn-m-ZbMwN06jCcM-unsplash.jpg",

    ).addItem(
        "Pink",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        329.99,
       "img/outdoorPlants/indah-nur-ZZ1XJrXR4Do-unsplash.jpg",

    ).addItem(
        "Striped Wonder",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        14.99,
        "img/outdoorPlants/jill-dimond-kwjBnMHRUPA-unsplash.jpg",

    ).addItem(
        "pink",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        21.95,
        "img/outdoorPlants/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg",

    ).addItem(
        "yellow",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        19.99,
        "img/outdoorPlants/paul-green-5lRxNLHfZOY-unsplash.jpg",

    ).addItem(
        "Trypophobia",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        15.95,
        "img/outdoorPlants/tavga-k-s-6Qq9xVZYYEw-unsplash.jpg",

    );

    new ItemList("Cacti/Succulents").addItem(new CactiSucculent(
        "Goody Bag of Succulent Bois",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        19.99,
        "img/succulents/amy-chen-G0GGAMRF4Y0-unsplash.jpg",

    )).addItem(
        "Spiky (Don't Touch)",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        6.95,
        "img/succulents/byron-co-r2F17c26C2Q-unsplash.jpg",

    ).addItem(
        "Jungle for Ants",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        14.99,
        "img/succulents/kelsey-brown-ZgktOgy7gUs-unsplash.jpg",

    ).addItem(
        "Hairless Cactus",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        5.99,
        "img/succulents/mathias-p-r-reding-F0ehv4gqqwY-unsplash.jpg",

    ).addItem(
        "Shrek",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        4.99,
        "img/succulents/okeykat-7TOjGsu_QCM-unsplash.jpg",

    ).addItem(
        "Water Bad",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        3.99,
        "img/succulents/severin-candrian-uPl9mep4zj0-unsplash.jpg",

    ).addItem(
        "So Prettyyy",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        7.99,
        "img/succulents/stephanie-harvey-f7PfM2NklZ4-unsplash.jpg",

    ).addItem(
        "Paddle Boi",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Sit amet justo donec enim diam vulputate ut pharetra.",
        6.99,
        "img/succulents/stephanie-harvey-vHkj3fX9wCk-unsplash.jpg",

    );
}
