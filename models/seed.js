const mongoose = require("./connection")
const Shoes = require("./shoes")


///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

db.on("open", () => {
    const startShoes = [
        { name: "New Balance M5740LLG",size:'12', price: "90.00", desc: "The 5740 is an evolution of the 574 shape that sees a subtle streamlining of the silhouette combine with bold cosmetic alterations and exaggerated features, for a modern overhaul that retains the classic model’s DNA. A leather upper features a wavy mudguard, and midsole design for a contemporary look. ‘N’ branding, and ENCAP cushioning complete the design. Here is a bold colorway featuring shades of gray. ", img: "https://i.ibb.co/MMNPfW3/newbalance.png" },
        { name: "Nike Airmax 95",size: '9', price: "170.00", desc: "The Air Max 95 was originally designed to suggest anatomical features like spine, muscle, and skin. This concept, combined with the forward-looking aesthetic, has lent the 95 an air of a shoe that is adaptable to a variety of concepts and surroundings.", img: "https://i.ibb.co/HV3dNZb/airmax.png" },
        { name: "Salomon Raid Wind Advanced",size: '10', price: "190.00", desc: "Paying homage to the avant-garde trail shoe born in the golden years of Adventure racing, the Raid Wind Advanced is the reinterpretation of an emblematic model in the history of Salomon footwear. Built to withstand the toughest conditions, this trail running shoe features integrated toe and heel reinforcements for improved protection and durability. With a rubber compound suitable for all surfaces and a versatile tessellation, the sole of this shoe guarantees a secure grip in both wet and dry conditions.", img: "https://i.ibb.co/Jq1d7rv/salomon.png" },
        { name: "New Balance 550",size: '8', price: "120.00", desc: "The second coming of the New Balance 550 has taken the sneaker world by storm and its reign is nowhere near over. Originally introduced as a basketball sneaker in 1989, the rounded, streamlined silhouette and satisfying panel design would ensure its life off the court would be a successful one - even if it took the world 30 years to catch up.", img: "https://i.ibb.co/MRnVg0s/newbalanceblue-ccexpress.png" },
        { name: "Nike AF1", size:'11', price: "120.00", desc: "The iconic Air Force 1. It scarcely needs an introduction, right? Well, normally yes, but the new Air Force 1 Craft changes things up with a series of subtle tweaks. The overall silhouette is revamped to closer reflect the OG design. The classic leather upper adds brushed suede and visible stitching details, while the tongue and heel sport a streamlined Air Force 1 graphic and add a sense of modernization. A new, plush lining optimizes comfort.", img: "https://i.ibb.co/kQ15Rby/nikeAF1.png" },
    ];
    Shoes.deleteMany({})
        .then((deletedShoes) => {
            Shoes.create(startShoes)
                .then((NewShoes) => {
                    console.log(NewShoes);
                    db.close();
                })
                .catch((error) => {
                    console.log(error);
                    db.close();
                });
        })
        .catch((error) => {
            console.log(error);
            db.close();
        });

})