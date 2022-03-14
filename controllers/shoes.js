const express = require("express"); 
const Shoes = require("../models/shoes")

const router = express.Router(); 

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  });

////////////////////////////
////ROUTES
////////////////////////////

router.get('/', (req, res) => {
    // console.log(req.session.username + 'shoeeessss')
    Shoes.find({})
        .then((shoes) => {
            res.render("shoes/Index", { shoes: shoes, username: req.session.username })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//////New Route 
router.get('/sell', (req, res) => {
    res.render('shoes/New', {username: req.session.username })
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
            res.redirect(`/sneakers`)
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
            res.render('shoes/Edit', { shoes, username: req.session.username  })
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
            res.render('shoes/Show', { shoes, username: req.session.username  })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})



module.exports = router;