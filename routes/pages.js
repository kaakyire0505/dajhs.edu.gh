const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../config/db')
const nodemailer = require('nodemailer')

// ? index page
router.get('/', (req , res) => {
    res.render('index')
})

// ? portal page
router.get('/portal', (req, res) => {
    res.render('portal')
})

// ? portal page
router.get('/portfolio', (req, res) => {
    res.render('portfolio')
})


// ? event page
router.get('/news', (req, res) => {
    res.render('event')
})


// ? marks entry page
router.get('/portal/marks', (req, res) => {
    res.render('marks', {
        name: 'Emmanuel Boachie',
        time: new Date().toUTCString()
    })
})

// ? sending email message
router.post('/mail', (req, res) => {
    const { email, textarea } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'codekaakyiredanny@gmail.com',
            pass: 'hbzicnkoykpnxrwt'
        }
    }) 
    
    const mailOptions = {
        from: email,
        to: 'dajhsschool@gmail.com',
        subject: 'Visitor',
        html: `
        <h1>Contact Form</h1>
        <p>${textarea} br
        ${new Date().toUTCString()}
        </p>
    `
    }

    transporter.sendMail(mailOptions, (err, message) => {
        if(err){
            console.log(err)
        } else {
            console.log('email is sent')
            console.log(message)
            res.redirect('/')
        }
    })
})






// ? admin post
router.post('/portal/admin', async (req, res) => {
    const { adminpassword } = req.body
    if(adminpassword !== 'secured'){
       res.render('portal', { msg: '**wrong password**' })
    } else {
        const user = {
            name: 'Emmanuel Boachie',
            password: adminpassword,
            time: new Date().toUTCString()
        }
    
        const query = 'INSERT INTO admin SET ?'
        db.query(query, [user], async (err, data) => {
            if(err) throw err
            console.log('login detected')
            console.log(data)
        })
    
        res.redirect('/portal/marks')
    
    }
    
})






// ? Form one portal
router.get('/portal/formone/b', async (req , res) => {
    const query = 'SELECT * FROM jhsone'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('oneportal', {
                users: data
            })
        }
    })
    
})



// ?formtwo portal B
router.get('/portal/formtwo/b', async (req , res) => {
    const query = 'SELECT * FROM jhstwo'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('twoportal', {
                users: data
            })
        }
    })
    
})



// ?formthree portal B
router.get('/portal/formthree/b', async (req , res) => {
    const query = 'SELECT * FROM jhsthree'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('threeportal', {
                users: data
            })
        }
    })
    
})



// ?=========================JHS A TABLES ROUTE============================
// ? Form one portal A
router.get('/portal/formone/a', async (req , res) => {
    const query = 'SELECT * FROM jhsonea'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('one-a', {
                users: data
            })
        }
    })
    
})



// ?formtwo portal A
router.get('/portal/formtwo/a', async (req , res) => {
    const query = 'SELECT * FROM jhstwoa'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('two-a', {
                users: data
            })
        }
    })
    
})



// ?formthree portal A
router.get('/portal/formthree/a', async (req , res) => {
    const query = 'SELECT * FROM jhsthreea'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('three-a', {
                users: data
            })
        }
    })
    
})

// ?===================END OF JHS A TABLES ROUTE==========================



// ? Form one portal C
router.get('/portal/formone/c', async (req , res) => {
    const query = 'SELECT * FROM jhsonec'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('one-c', {
                users: data
            })
        }
    })
    
})



// ?formtwo portal C
router.get('/portal/formtwo/c', async (req , res) => {
    const query = 'SELECT * FROM jhstwoc'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('two-c', {
                users: data
            })
        }
    })
    
})



// ?formthree portal C
router.get('/portal/formthree/c', async (req , res) => {
    const query = 'SELECT * FROM jhsthreec'
    db.query(query, (err, data) => {
        if(err){
            throw err
        } else {
            res.render('three-c', {
                users: data
            })
        }
    })
    
})



// ? form one pupil portal validation
router.post('/portal/formone', (req, res) => {
    const {formone} = req.body
    if(formone == 'formonea'){
       return res.render('one-a')
    } else
    if(formone == 'formoneb'){
       return res.render('oneportal')
    } else
    if(formone == 'formonec'){
       return res.render('one-c')
    } else {
        return res.render('portal')
    }
})


// ? form two pupil portal validation
router.post('/portal/formtwo', (req, res) => {
    const {formtwo} = req.body
    if(formtwo == 'formtwoa'){
        res.render('two-a')
    } else
    if(formtwo == 'formtwob'){
        res.render('twoportal')
    } else
    if(formtwo == 'formtwoc'){
        res.render('two-c')
    } else {
        return res.render('portal')
    }
})



// ? form three pupil portal validation
router.post('/portal/formthree', (req, res) => {
    const {formthree} = req.body
    if(formthree == 'formthreea'){
        res.render('three-a')
    } else
    if(formthree == 'formthreeb'){
        res.render('threeportal')
    } else
    if(formthree == 'formthreec'){
        res.render('three-c')
    } else {
        return res.render('portal')
    }
})




// ?====================JHS A BLOCK======================================
// ? entering of data of form 1 JHS A
router.post('/marks/formone', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1 a' || 'form 1 a' || 'form one a'){
        const query = 'INSERT INTO jhsonea SET ?'
        const form_student = {
            name: onename,
            totalmarks: onetotalmarks,
            position: oneposition,
            remarks: oneremarks,
        }

        db.query(query, [form_student], (err, data) => {
            if(err) throw err
            console.log('form 1 entered')
            return res.render('marks', {
                name: onename + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 2 JHS A
router.post('/marks/formtwo', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2 a' || 'form 2 a' || 'form two a'){
        const query = 'INSERT INTO jhstwoa SET ?'
        const form2_student = {
            name: twoname,
            totalmarks: twototalmarks,
            position: twoposition,
            remarks: tworemarks,
        }

        db.query(query, [form2_student], (err, data) => {
            if(err) throw err
            console.log('form 2 entered')
            return res.render('marks', {
                name: twoname + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 3 JHS A
router.post('/marks/formthree', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3 a' || 'form 3 a' || 'form three a'){
        const query = 'INSERT INTO jhsthreea SET ?'
        const form3_student = {
            name: threename,
            totalmarks: threetotalmarks,
            position: threeposition,
            remarks: threeremarks,
        }

        db.query(query, [form3_student], (err, data) => {
            if(err) throw err
            console.log('form 3 entered')
        return res.render('marks', {
            name: threename + ' ' + 'successfully entered',
            time: new Date().toUTCString()
            })
        })
        
    }
})






// ?====================JHS B BLOCK======================================
// ? entering of data of form 1 JHS A
router.post('/marks/formone', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1 b' || 'form 1 b' || 'form one b'){
        const query = 'INSERT INTO jhsone SET ?'
        const form_student = {
            name: onename,
            totalmarks: onetotalmarks,
            position: oneposition,
            remarks: oneremarks,
        }

        db.query(query, [form_student], (err, data) => {
            if(err) throw err
            console.log('form 1 entered')
            return res.render('marks', {
                name: onename + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 2 JHS A
router.post('/marks/formtwo', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2 b' || 'form 2 b' || 'form two b'){
        const query = 'INSERT INTO jhstwo SET ?'
        const form2_student = {
            name: twoname,
            totalmarks: twototalmarks,
            position: twoposition,
            remarks: tworemarks,
        }

        db.query(query, [form2_student], (err, data) => {
            if(err) throw err
            console.log('form 2 entered')
            return res.render('marks', {
                name: twoname + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 3 JHS A
router.post('/marks/formthree', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3 b' || 'form 3 b' || 'form three b'){
        const query = 'INSERT INTO jhsthree SET ?'
        const form3_student = {
            name: threename,
            totalmarks: threetotalmarks,
            position: threeposition,
            remarks: threeremarks,
        }

        db.query(query, [form3_student], (err, data) => {
            if(err) throw err
            console.log('form 3 entered')
        return res.render('marks', {
            name: threename + ' ' + 'successfully entered',
            time: new Date().toUTCString()
            })
        })
        
    }
})





// ?====================JHS C BLOCK======================================
// ? entering of data of form 1 JHS A
router.post('/marks/formone', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1 c' || 'form 1 c' || 'form one c'){
        const query = 'INSERT INTO jhsonec SET ?'
        const form_student = {
            name: onename,
            totalmarks: onetotalmarks,
            position: oneposition,
            remarks: oneremarks,
        }

        db.query(query, [form_student], (err, data) => {
            if(err) throw err
            console.log('form 1 entered')
            return res.render('marks', {
                name: onename + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 2 JHS A
router.post('/marks/formtwo', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2 c' || 'form 2 c' || 'form two c'){
        const query = 'INSERT INTO jhstwoc SET ?'
        const form2_student = {
            name: twoname,
            totalmarks: twototalmarks,
            position: twoposition,
            remarks: tworemarks,
        }

        db.query(query, [form2_student], (err, data) => {
            if(err) throw err
            console.log('form 2 entered')
            return res.render('marks', {
                name: twoname + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }
})


// ? entering of data of form 3 JHS A
router.post('/marks/formthree', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3 c' || 'form 3 c' || 'form three c'){
        const query = 'INSERT INTO jhsthreec SET ?'
        const form3_student = {
            name: threename,
            totalmarks: threetotalmarks,
            position: threeposition,
            remarks: threeremarks,
        }

        db.query(query, [form3_student], (err, data) => {
            if(err) throw err
            console.log('form 3 entered')
        return res.render('marks', {
            name: threename + ' ' + 'successfully entered',
            time: new Date().toUTCString()
            })
        })
        
    }
})







module.exports = router
