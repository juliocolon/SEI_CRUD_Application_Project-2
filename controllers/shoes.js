const express = require("express"); 
const Shoes = require("../models/shoes")

const router = express.Router(); 

////////////////////////////
////ROUTES
////////////////////////////

router.get('/', (req, res) => {
    Shoes.find({})
        .then((shoes) => {
            res.render("shoes/Index", { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//////New Route 
router.get('/sell', (req, res) => {
    res.render('shoes/New')
})

/////Delete Route 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Shoes.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/sneakers');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})




/////Update Route 
router.put('/:id', (req, res) => {
    const { id } = req.params;

    Shoes.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/sneakers/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})





/////Create Route 
router.post('/', (req, res) => {
    Shoes.create(req.body)
        .then((createdShoes) => {
            res.redirect(`/sneakers/${createdShoes._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////Edit Route 
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Shoes.findById(id)
        .then((shoes) => {
            res.render('shoes/Edit', { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////Show Route 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Shoes.findById(id)
        .then((shoes) => {
            res.render('shoes/Show', { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})



module.exports = router;