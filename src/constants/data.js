const data = [
  {
    home: [
      {
        id: 0,
        items: [
          {
            id: 1,
            title: "Men New-Season",
            description: "Jackets & Coats",
            img: require("../assets/interface/home/2.png"),
          },
          {
            id: 2,
            title: "Women Collection 2023",
            description: "New Arrivals",
            img: require("../assets/interface/home/3.png"),
          },
          {
            id: 3,
            title: "Women New-Season",
            description: "Western Wear",
            img: require("../assets/interface/home/4.png"),
          },
        ],
        products: [
          {
            links: [
              {
                id: 0,
                link_title: "All Products",
                category: "all",
              },
              {
                id: 1,
                link_title: "Women",
                category: "women",
              },
              {
                id: 2,
                link_title: "Men",
                category: "men",
              },
              {
                id: 3,
                link_title: "Bag",
                category: "bag",
              },
              {
                id: 4,
                link_title: "Electronics",
                category: "electronics",
              },
              {
                id: 5,
                link_title: "Jewellery",
                category: "jewelery",
              },
            ],
            all: [
              {
                id: 0,
                title: "Fjallraven - Laptop Backpack, Fits 15",
                price: 1500,
                rating: 3.5,
                reviewCount: 102,
                description:
                  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "bag",
                image: require("../assets/interface/home/product1.png"),
                sizes: [
                  {
                    name: "Upto 15 inches",
                    inStock: true,
                  },
                ],
                inCart: false,
              },
              {
                id: 1,
                title: "Mens Casual Premium Slim Fit T-Shirts",
                price: 500,
                rating: 3.9,
                reviewCount: 117,
                description:
                  "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                category: "men",
                image: require("../assets/interface/home/product2.png"),
                sizes: [
                  { name: "XXS", inStock: true },
                  { name: "XS", inStock: true },
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: true },
                  { name: "XXL", inStock: true },
                  { name: "XXXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 2,
                title: "Mens Cotton Jacket",
                price: 1189,
                rating: 4,
                reviewCount: 150,
                description:
                  "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                category: "men",
                image: require("../assets/interface/home/product3.png"),
                sizes: [
                  { name: "S", inStock: false },
                  { name: "M", inStock: true },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: false },
                  { name: "XXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 3,
                title: "Mens Casual Slim Fit",
                price: 399,
                rating: 4.2,
                reviewCount: 130,
                description:
                  "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                category: "men",
                image: require("../assets/interface/home/product4.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: false },
                  { name: "XXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 4,
                title:
                  "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                price: 1100,
                rating: 4.5,
                reviewCount: 300,
                description:
                  "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
                category: "women",
                image: require("../assets/interface/home/product15.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: false },
                  { name: "XL", inStock: false },
                  { name: "XXL", inStock: true },
                ],
                inCart: false,
              },
              {
                id: 5,
                title:
                  "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                price: 1800,
                rating: 4.6,
                reviewCount: 272,
                description:
                  "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
                category: "women",
                image: require("../assets/interface/home/product16.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: false },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: true },
                  { name: "XXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 6,
                title:
                  "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                price: 2299,
                rating: 4.8,
                reviewCount: 400,
                description:
                  "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
                category: "women",
                image: require("../assets/interface/home/product17.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: true },
                  { name: "XXL", inStock: true },
                ],
                inCart: false,
              },
              {
                id: 7,
                title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                price: 999,
                rating: 4.1,
                reviewCount: 282,
                description:
                  "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                category: "women",
                image: require("../assets/interface/home/product18.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: true },
                  { name: "XL", inStock: true },
                  { name: "XXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 8,
                title: "Opna Women's Short Sleeve Moisture",
                price: 799,
                rating: 3.7,
                reviewCount: 80,
                description:
                  "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
                category: "women",
                image: require("../assets/interface/home/product19.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: false },
                  { name: "XL", inStock: true },
                  { name: "XXL", inStock: true },
                ],
                inCart: false,
              },
              {
                id: 9,
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
                price: 1299,
                rating: 4.1,
                reviewCount: 108,
                description:
                  "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
                category: "women's clothing",
                image: require("../assets/interface/home/product20.png"),
                sizes: [
                  { name: "S", inStock: true },
                  { name: "M", inStock: true },
                  { name: "L", inStock: false },
                  { name: "XL", inStock: false },
                  { name: "XXL", inStock: false },
                ],
                inCart: false,
              },
              {
                id: 10,
                title:
                  "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                price: 199,
                rating: 4.3,
                reviewCount: 299,
                description:
                  "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                category: "jewelery",
                image: require("../assets/interface/home/product5.png"),
                sizes: [
                  {
                    name: "Onesize",
                    inStock: true,
                  },
                ],
                inCart: false,
              },
              {
                id: 11,
                title: "Solid Gold Petite Micropave ",
                price: 120,
                rating: 4.1,
                reviewCount: 140,
                description:
                  "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                category: "jewelery",
                image: require("../assets/interface/home/product6.png"),
                sizes: [
                  {
                    name: "Onesize",
                    inStock: true,
                  },
                ],
                inCart: false,
              },
              {
                id: 12,
                title: "White Gold Plated Princess",
                price: 299,
                rating: 4.8,
                reviewCount: 320,
                description:
                  "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                category: "jewelery",
                image: require("../assets/interface/home/product7.png"),
                sizes: [
                  {
                    name: "Onesize",
                    inStock: true,
                  },
                ],
                inCart: false,
              },
              {
                id: 13,
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                price: 149,
                rating: 4.0,
                reviewCount: 120,
                description:
                  "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                category: "jewelery",
                image: require("../assets/interface/home/product8.png"),
                sizes: [
                  {
                    name: "Onesize",
                    inStock: true,
                  },
                ],
                inCart: false,
              },

              {
                id: 14,
                title:
                  "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 15000,
                rating: 4.2,
                reviewCount: 49,
                description:
                  "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
                category: "electronics",
                image: require("../assets/interface/home/product13.png"),
                sizes: [{ name: "22 inch", inStock: true }],
                inCart: false,
              },
              {
                id: 15,
                title:
                  "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 75000,
                rating: 4.5,
                reviewCount: 10,
                description:
                  "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
                category: "electronics",
                image: require("../assets/interface/home/product14.png"),
                sizes: [{ name: "22 inch", inStock: true }],
                inCart: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
