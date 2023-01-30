import express from 'express'
import path from 'path'



const router = express.Router();


router.post('/testFetch', (req, res, next)=>{

    console.log('ok ca marche')
    res.json({message: "its ok"})
});

router.post('/loginRequire', (req, res, next)=>{
    console.log('requete recue');
    if(req.toString() != ''){
    res.status(200).json(req.toString);
    }
    else {
        res.status(400).json({message: 'empty string'});
    }
});

router.get('/ifConnected', (req, res, next) =>{
    const state: boolean = true;
    console.log('get request')
    res.status(200).json({"message": true});
})


router.get('ping', (req, res, next)=>{
    
    res.json({salut: "bjr"})
})

export = router;