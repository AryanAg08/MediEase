const router = require('express').Router();
const HealthRecord = require("../models/2.HealthRecord");

router.post("/add-Record", async (req,res) => {
    const id = req.query.id;

   const {pname, age, date, time, gender, problems, vitals, allergy, olddisease, medics} = req.body;


//    const A1 = await HealthRecord.findOneAndUpdate({
//         id: id,
//         Date: data
//    },{
       
//     },
//    },{
//     upsert: true,
//     new: true
//    })
   const details = {
    id,
    Pname: pname,
    age,
    Date: date,
    Time: time,
    gender,
    problems,
    allergy,
    olddisease,
    $push: {
     Medics: medics,
     vitals: vitals,
    },
}

const A2 = await new HealthRecord(details).save().then((d) =>{
 return res.status(200).json(d);
});
//if (A1) {
//     res.status(200).json(Da);
//    }
//    else {
//     res.json({ code : 404, status: "Not Found!!"});
//    }

});

router.get("/health-records", async (req, res) => {
    const ID = req.query.id;
    //console.log("backend!!");
    console.log(ID);
    try {
        const post = await HealthRecord.find({
            id: ID,
        });
        if (!post) {
            return res.status(404).json({ error: 'Blog post not found' });
          }
          console.log(post);
          res.json(post);
    }
    catch (error) {
        console.error('Error retrieving health records:', error);
        res.status(500).json({ error: 'Server error!!' });
      }

});

module.exports = router;