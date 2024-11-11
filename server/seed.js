const MongoClient = require('mongodb').MongoClient;

async function main() {
    const uri = "mongodb://localhost:27017/food-website";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const productsCollection = client.db("food-website").collection("products");

        // Custom product data
        const products = [
            {
                name: 'Wedding Cake',
                description: 'A beautiful cake for weddings, made with the finest ingredients.',
                price: '4499',
                category: 'Cakes',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/wedding_cake_bbjjzl.png'
            },
            {
                name: 'Chocolate Cake',
                description: 'A delicious and rich chocolate cake made with premium cocoa powder.',
                price: '1299',
                category: 'Cakes',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/chocolate_cake_yklpyz.png'
            },
            {
                name: 'Custom Cake',
                description: 'A custom-designed cake perfect for special occasions.',
                price: '2499',
                category: 'Cakes',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/custom_cakes_u9eqsl.png'
            },
            {
                name: 'Vanilla Cake',
                description: 'A soft vanilla-flavored cake with a creamy texture.',
                price: '999',
                category: 'Cakes',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/vanilla_cake_khh2vq.png'
            },
            {
                name: 'Gift Cake',
                description: 'A delightful gift cake to celebrate special moments.',
                price: '2299',
                category: 'Cakes',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/gift_cake_sp3nlk.png'
            },
            {
                name: 'Brownies',
                description: 'Rich and fudgy brownies made with high-quality chocolate.',
                price: '599',
                category: 'Desserts',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/brownie_hpdcyh.png'
            },
            {
                name: 'Cupcakes',
                description: 'Fluffy cupcakes available in different flavors with buttercream frosting.',
                price: '299',
                category: 'Desserts',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149685/cupcake_dt5uiv.png'
            },
            {
                name: 'Cookies',
                description: 'Crispy and chewy cookies with chocolate chips.',
                price: '349',
                category: 'Desserts',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/cookies_jkwmj4.png'
            },
            {
                name: 'Donuts',
                description: 'Soft and sweet donuts with a variety of glazes and toppings.',
                price: '199',
                category: 'Desserts',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149350/donut_h9heya.png'
            },
            {
                name: 'Desserts',
                description: 'A collection of delicious and sweet desserts to satisfy your cravings.',
                price: '899',
                category: 'Desserts',
                imageUrl: 'https://res.cloudinary.com/dv49fba55/image/upload/v1728149685/dessert_of2hxb.png'
            }
        ];

        // Clear existing products if needed
        await productsCollection.deleteMany({});

        // Insert the custom products
        await productsCollection.insertMany(products);
        console.log("Data seeded successfully with custom products.");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
