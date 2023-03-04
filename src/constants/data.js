const data = [
    {
        home: [
            {
                id: 0,
                items: [
                    {
                        id: 1,
                        title: 'Men New-Season',
                        description: 'Jackets & Coats',
                        img: require("../assets/interface/home/2.png")
                    },
                    {
                        id: 2,
                        title: 'Women Collection 2023',
                        description: 'New Arrivals',
                        img: require("../assets/interface/home/3.png")
                    },
                    {
                        id: 3,
                        title: 'Women New-Season',
                        description: 'Western Wear',
                        img: require("../assets/interface/home/4.png")
                    },
                ],
                products: [
                    {
                        links: [
                            {
                                id: 0,
                                href: "/allproducts",
                                link_title: "All Products",
                            },
                            {
                                id: 1,
                                href: "/women",
                                link_title: "Women",
                            },
                            {
                                id: 2,
                                href: "/men",
                                link_title: "Men",
                            },
                            {
                                id: 3,
                                href: "/bag",
                                link_title: "Bag",
                            },
                            {
                                id: 4,
                                href: "/shoes",
                                link_title: "Shoes",
                            },
                            {
                                id: 5,
                                href: "/watches",
                                link_title: "Watches",
                            },
                        ]
                    }
                ]
            },
        ],
    }
]

export default data;