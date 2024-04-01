const categories = [
    {
      label: "Women",
      slug: "Women",
      children: [
        {
          label: "Clothing",
          slug: "Women/Clothing",
          children: [
            { label: "Coats", slug: "Women/Clothing/Coats" },
            { label: "Jackets", slug: "Women/Clothing/Jackets" },
            { label: "Parkas", slug: "Women/Clothing/Parkas" },
            {
              label: "Fur & Faux Fur",
              slug: "Women/Clothing/Fur & Faux Fur"
            },
            { label: "Knitwear", slug: "Women/Clothing/Knitwear" },
            { label: "Tops", slug: "Women/Clothing/Tops" },
            {
              label: "Dresses & Jumpsuits",
              slug: "Women/Clothing/Dresses & Jumpsuits"
            },
            { label: "Pants", slug: "Women/Clothing/Pants" },
            { label: "Skirts", slug: "Women/Clothing/Skirts" },
            { label: "Jeans", slug: "Women/Clothing/Jeans" },
            {
              label: "Loungewear",
              slug: "Women/Clothing/Loungewear",
              children: [
                {
                  label: "Pajamas",
                  slug: "Women/Clothing/Loungewear/Pajamas"
                },
                {
                  label: "Bras",
                  slug: "Women/Clothing/Loungewear/Underwear/Bras"
                },
                {
                  label: "Panties",
                  slug: "Women/Clothing/Loungewear/Underwear/Panties"
                },
                {
                  label: "Underwear",
                  slug: "Women/Clothing/Loungewear/Underwear"
                }
              ]
            },
            {
              label: "Activewear",
              slug: "Women/Clothing/Activewear",
              children: [
                { label: "Tops", slug: "Women/Clothing/Activewear/Tops" },
                {
                  label: "Outerwear",
                  slug: "Women/Clothing/Activewear/Outerwear"
                },
                {
                  label: "Bottoms",
                  slug: "Women/Clothing/Activewear/Bottoms"
                },
                {
                  label: "Shorts",
                  slug: "Women/Clothing/Activewear/Shorts"
                },
                {
                  label: "Swimwear",
                  slug: "Women/Clothing/Activewear/Swimwear"
                },
                {
                  label: "Golfwear",
                  slug: "Women/Clothing/Activewear/Golfwear",
                  children: [
                    {
                      label: "Outerwear",
                      slug: "Women/Clothing/Activewear/Golfwear/Outerwear"
                    },
                    {
                      label: "Tops",
                      slug: "Women/Clothing/Activewear/Golfwear/Tops"
                    },
                    {
                      label: "Bottoms",
                      slug: "Women/Clothing/Activewear/Golfwear/Bottoms"
                    },
                    {
                      label: "Dresses",
                      slug: "Women/Clothing/Activewear/Golfwear/Dresses"
                    }
                  ]
                },
                {
                  label: "Tenniswear",
                  slug: "Women/Clothing/Activewear/Tenniswear"
                }
              ]
            }
          ]
        },
        {
          label: "Shoes",
          slug: "Women/Shoes",
          children: [
            { label: "Boots", slug: "Women/Shoes/Boots" },
            { label: "Pumps", slug: "Women/Shoes/Pumps" },
            { label: "Mules", slug: "Women/Shoes/Mules" },
            {
              label: "Flats & Loafers",
              slug: "Women/Shoes/Flats & Loafers"
            },
            { label: "Platform", slug: "Women/Shoes/Platform" },
            { label: "Sneakers", slug: "Women/Shoes/Sneakers" },
            { label: "Sandals", slug: "Women/Shoes/Sandals" }
          ]
        },
        {
          label: "Bags",
          slug: "Women/Bags",
          children: [
            { label: "Belt Bags", slug: "Women/Bags/Belt Bags" },
            { label: "Bucket Bags", slug: "Women/Bags/Bucket Bags" },
            { label: "Clutch Bags", slug: "Women/Bags/Clutch Bags" },
            {
              label: "Cross Body Bags",
              slug: "Women/Bags/Cross Body Bags"
            },
            { label: "Tote Bags", slug: "Women/Bags/Tote Bags" },
            { label: "Shoulder Bags", slug: "Women/Bags/Shoulder Bags" },
            { label: "Backpacks", slug: "Women/Bags/Backpacks" },
            { label: "Wallets", slug: "Women/Bags/Wallets" },
            {
              label: "Luggage & Travel",
              slug: "Women/Bags/Luggage & Travel"
            },
            {
              label: "Bag Accessories",
              slug: "Women/Bags/Bag Accessories"
            },
            { label: "Mini Bags", slug: "Women/Bags/Mini Bags" },
            { label: "Sport Bags", slug: "Women/Bags/Sport Bags" }
          ]
        },
        {
          label: "Accessories",
          slug: "Women/Accessories",
          children: [
            { label: "Jewelry", slug: "Women/Accessories/Jewelry" },
            { label: "Hats", slug: "Women/Accessories/Hats" },
            { label: "Scarves", slug: "Women/Accessories/Scarves" },
            { label: "Gloves", slug: "Women/Accessories/Gloves" },
            { label: "Socks", slug: "Women/Accessories/Socks" },
            {
              label: "Hair Accessories",
              slug: "Women/Accessories/Hair Accessories"
            },
            { label: "Belts", slug: "Women/Accessories/Belts" },
            { label: "Eyewear", slug: "Women/Accessories/Eyewear" },
            { label: "Face Masks", slug: "Women/Accessories/Face Masks" },
            {
              label: "Sport Accessories",
              slug: "Women/Accessories/Sport Accessories",
              children: [
                {
                  label: "Hats",
                  slug: "Women/Accessories/Sport Accessories/Hats"
                },
                {
                  label: "Gloves",
                  slug: "Women/Accessories/Sport Accessories/Gloves"
                },
                {
                  label: "Socks",
                  slug: "Women/Accessories/Sport Accessories/Socks"
                },
                {
                  label: "Equipment",
                  slug: "Women/Accessories/Sport Accessories/Equipment"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Men",
      slug: "Men",
      children: [
        {
          label: "Clothing",
          slug: "Men/Clothing",
          children: [
            { label: "Coats", slug: "Men/Clothing/Coats" },
            { label: "Jackets", slug: "Men/Clothing/Jackets" },
            { label: "Parkas", slug: "Men/Clothing/Parkas" },
            { label: "Knitwear", slug: "Men/Clothing/Knitwear" },
            { label: "Tops", slug: "Men/Clothing/Tops" },
            { label: "Shirts", slug: "Men/Clothing/Shirts" },
            { label: "Pants", slug: "Men/Clothing/Pants" },
            {
              label: "Loungewear",
              slug: "Men/Clothing/Loungewear",
              children: [
                {
                  label: "Pajamas",
                  slug: "Men/Clothing/Loungewear/Pajamas"
                },
                { label: "Robes", slug: "Men/Clothing/Loungewear/Robes" },
                {
                  label: "Underwear",
                  slug: "Men/Clothing/Loungewear/Underwear"
                }
              ]
            },
            {
              label: "Activewear",
              slug: "Men/Clothing/Activewear",
              children: [
                {
                  label: "Jackets",
                  slug: "Men/Clothing/Activewear/Jackets"
                },
                { label: "Tops", slug: "Men/Clothing/Activewear/Tops" },
                {
                  label: "Bottoms",
                  slug: "Men/Clothing/Activewear/Bottoms"
                },
                {
                  label: "Golfwear",
                  slug: "Men/Clothing/Activewear/Golfwear"
                },
                {
                  label: "Tenniswear",
                  slug: "Men/Clothing/Activewear/Tenniswear"
                },
                {
                  label: "Swimwear",
                  slug: "Men/Clothing/Activewear/Swimwear"
                }
              ]
            }
          ]
        },
        {
          label: "Shoes",
          slug: "Men/Shoes",
          children: [
            { label: "Boots", slug: "Men/Shoes/Boots" },
            { label: "Loafers", slug: "Men/Shoes/Loafers" },
            { label: "Oxfords", slug: "Men/Shoes/Oxfords" },
            { label: "Sneakers", slug: "Men/Shoes/Sneakers" }
          ]
        },
        {
          label: "Bags",
          slug: "Men/Bags",
          children: [
            { label: "Backpacks", slug: "Men/Bags/Backpacks" },
            { label: "Tote Bags", slug: "Men/Bags/Tote Bags" },
            { label: "Shoulder Bags", slug: "Men/Bags/Shoulder Bags" },
            { label: "Duffels", slug: "Men/Bags/Duffels" },
            { label: "Waist Bags", slug: "Men/Bags/Waist Bags" },
            { label: "Wallets", slug: "Men/Bags/Wallets" }
          ]
        },
        {
          label: "Accessories",
          slug: "Men/Accessories",
          children: [
            { label: "Jewelry", slug: "Men/Accessories/Jewelry" },
            { label: "Hats", slug: "Men/Accessories/Hats" },
            { label: "Scarves", slug: "Men/Accessories/Scarves" },
            { label: "Gloves", slug: "Men/Accessories/Gloves" },
            { label: "Belts", slug: "Men/Accessories/Belts" },
            { label: "Socks", slug: "Men/Accessories/Socks" },
            {
              label: "Everything Else",
              slug: "Men/Accessories/Everything Else"
            },
            { label: "Eyewear", slug: "Men/Accessories/Eyewear" },
            {
              label: "Sports Gear",
              slug: "Men/Accessories/Sports Gear",
              children: [
                {
                  label: "Headgear",
                  slug: "Men/Accessories/Sports Gear/Headgear"
                },
                { label: "Bags", slug: "Men/Accessories/Sports Gear/Bags" },
                {
                  label: "Gloves",
                  slug: "Men/Accessories/Sports Gear/Gloves"
                },
                {
                  label: "Socks",
                  slug: "Men/Accessories/Sports Gear/Socks"
                },
                {
                  label: "Equipment",
                  slug: "Men/Accessories/Sports Gear/Equipment"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default categories;
  