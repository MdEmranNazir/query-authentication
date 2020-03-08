const Furit = require('../models/Fruit')


// Condition1

const FuritC = async (req, res, next) => {
    
    try {
        //const furitData = await Furit.find( { furitamount: { $gt: 15, $lt: 40} })
        const furitData = await Furit.find( { fruitname: req.body.fruitname, } )
       // console.log(furitData);
        res.status(200).json(furitData)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Condition2

const Furit2 = async (req, res, next) => {
    try {
        // const result = await Furit.find({
        //     fruitname: ['Apple']
        // });
        // const result = await Furit.find({}).select({"fruitname":1,"_id": 0})
        // const result = await Furit.find({}).select('fruitname-_id')
        const result = await Furit.find({}).select('fruitname')
        res.status(400).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
} 


// GET

const getAllFuritController = async (req, res, next) => {
    
    try {
        const furitDataShow = await Furit.find()

        res.status(200).json(furitDataShow)
    } catch (error) {
        res.status(500).json(error)
    }


}

// POST
const postAllFuritController = async (req, res, next) => {

    const furit = new Furit({
        fruitname: req.body.fruitname,
        furitamount:parseInt( req.body.furitamount)
    })
    

    try {
        const furitData = await furit.save()
        res.status(200).send(furitData)
    } catch (error) {
        res.status(400).json(error)
    }

}

// show the single data

const getSingleFuritController = async (req, res, next) => {
    
    try {
        const result = await Furit.findById(req.params.id)
        if (!result) {
            return res.json({message: 'No Data found'});
        }res.status(401).json(result)
       
       
    } catch (error) {
        res.status(400).json(error)
    }

}

// delete

const deleteFurit = async (req, res, next) => {

    try {
        const result = await Furit.findByIdAndRemove(req.params.id)
        // res.send(result);
        if (result) {
            return res.json({message: 'data delete'});
        } res.status(401).json(result)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// update date


const editFurit = (req,res,next) => {
    let id = req.params.id

    let updatedContact = {
        fruitname: req.body.fruitname,
        furitamount: parseInt( req.body.furitamount)

    }
    Furit.findByIdAndUpdate(id,{$set: updatedContact})
    .then(result => {
        Furit.findById(result._id)
            .then(newContact => {
                res.json({
                    message: 'Your data Updated Successful',
                    result
                })
            })
        
     })

    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error: err
        })
    })
}

// const editFurit = async (req, res, next) => {
 
//      try {
//          const updatePost = await Post.updateOne(
//              { _id: req.params.id },
//              { $set: { furitamount: req.body.furitamount } }
//          );
//          res.json(updatePost);
//      } catch (error) {
//         res.json({message: err})        
//      }
  
// }

// 

module.exports = {
    postAllFuritController,
    getAllFuritController,
    getSingleFuritController,
    deleteFurit,
    editFurit,
    FuritC,
    Furit2
}