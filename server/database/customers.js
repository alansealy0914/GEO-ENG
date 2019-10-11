var customers = [
        {
            id: 1,
            fullName: "Sealy Aeronautics",
            address1: "123 Main Street",
            address2: null,
            city: "Orlando",
            state: "FL",
            zip: "32819",
            getsDiscount: true,
            discount: {
                discountId: 1,
                discountPercent: 10,
                discountName: "Employee"
            } 
        },
        {
            id: 2,
            fullName: "Cessna Sparrows",
            address1: "456 Wallaby Way",
            address2: "Apt 23",
            city: "Orlando",
            state: "FL",
            zip: "32802",
            getsDiscount: false,
            discount: null 
        },
        {
            id: 3,
            fullName: "Lithuania Airlines",
            address1: "255 McFarland Drive",
            address2: null,
            city: "Boston",
            state: "MA",
            zip: "97204",
            getsDiscount: false,
            discount: null 
        },
        {
            id: 4,
            fullName: "AA Airlines",
            address1: "1255 Jackson Way",
            address2: null,
            city: "Miami",
            state: "FL",
            zip: "37204",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Affiliate"
            } 
        },
        {
            id: 5,
            fullName: "United Airlines",
            address1: "Toledo Drive",
            address2: null,
            city: "Toledo",
            state: "OH",
            zip: "26204",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 15,
                discountName: "Distributor"
            } 
        },
        {
            id: 6,
            fullName: "Gables Engineering",
            address1: "Gables Airport Road",
            address2: null,
            city: "Gables",
            state: "CA",
            zip: "30204",
            getsDiscount: false,
            discount: null
        },
        {
            id: 7,
            fullName: "Delta Airlines",
            address1: "2963 Talles Hwy",
            address2: null,
            city: "New Oleans",
            state: "LA",
            zip: "87204",
            getsDiscount: false,
            discount: null
        },
        {
            id: 8,
            fullName: "Midwest Airlines",
            address1: "West Lake Shore Plaza",
            address2: null,
            city: "Chicago",
            state: "IL",
            zip: "47204",
            getsDiscount: false,
            discount: null
        }
    ];

module.exports = customers;