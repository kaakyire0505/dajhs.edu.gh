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
            logintime: new Date().toUTCString()
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



// ? FORM ONE'S portal
router.get('/portal/formonea/results', async (req , res) => {
    const query = 'SELECT * FROM jhsone'
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



router.get('/portal/formoneb/results', async (req , res) => {
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



// ? Form one portal C
router.get('/portal/formonec/results', async (req , res) => {
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



// ?FORM TWO PORTAL
router.get('/portal/formtwoa/results', async (req , res) => {
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


router.get('/portal/formtwob/results', async (req , res) => {
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


router.get('/portal/formtwoc/results', async (req , res) => {
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









// FORM THREE PORTAL
router.get('/portal/formthreea/results', async (req , res) => {
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


router.get('/portal/formthreeb/results', async (req , res) => {
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


router.get('/portal/formthreec/results', async (req , res) => {
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
router.post('/portal/formone/results', (req, res) => {
    const {formone} = req.body
    if(formone == 'formonea'){
       res.redirect('/portal/formonea/results')
    } else
    if(formone == 'formoneb'){
        res.redirect('/portal/formoneb/results')
    } else
    if(formone == 'formonec'){
       res.redirect('/portal/formonec/results')
    } else {
        return res.render('portal')
    }
})


// ? form two pupil portal validation
router.post('/portal/formtwo/results', (req, res) => {
    const {formtwo} = req.body
    if(formtwo == 'formtwoa'){
        res.redirect('/portal/formtwoa/results')
    } else
    if(formtwo == 'formtwob'){
        res.redirect('/portal/formtwob/results')
    } else
    if(formtwo == 'formtwoc'){
        res.redirect('/portal/formtwoc/results')
    } else {
        return res.render('portal')
    }
})



// ? form three pupil portal validation
router.post('/portal/formthree/results', (req, res) => {
    const {formthree} = req.body
    if(formthree == 'formthreea'){
        res.redirect('/portal/formthreea/results')
    } else
    if(formthree == 'formthreeb'){
        res.redirect('/portal/formthreeb/results')
    } else
    if(formthree == 'formthreec'){
        res.redirect('/portal/formthreec/results')
    } else {
        return res.render('portal')
    }
})




// ?====================JHS A BLOCK======================================
// ? entering of data of form 1 JHS A
router.post('/formonea/marks', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1a' || 'form 1a' || 'form one a'){
        const query = 'INSERT INTO jhsonea SET ?'
        const form_student = {
            name: onename,
            totalmarks: onetotalmarks,
            position: oneposition,
            remarks: oneremarks,
        }

        db.query(query, [form_student], (err, data) => {
            if(err) throw err
            return res.render('marks', {
                name: onename + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    }       
})

    
// ? entering of data of form 2 JHS A
router.post('/formtwoa/marks', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2a' || 'form 2a' || 'form two a'){
        const query = 'INSERT INTO jhstwoa SET ?'
        const form_student = {
            name: twoname,
            totalmarks: twototalmarks,
            position: twoposition,
            remarks: tworemarks,
        }

        db.query(query, [form_student], (err, data) => {
            if(err) throw err
            return res.render('marks', {
                name: onename + ' ' + 'successfully entered',
                time: new Date().toUTCString()
            })
        })
        
    } 
  
})      


// ? entering of data of form 3 JHS A
router.post('/formthreea/marks', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3a' || 'form 3a' || 'form three a'){
        const query = 'INSERT INTO jhsthreea SET ?'
        const form_student = {
            name: threename,
            totalmarks: threetotalmarks,
            position: threeposition,
            remarks: threeremarks,
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
        // ===============================================



// ? entering of data of form 1 JHS B
router.post('/formoneb/marks', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1b' || 'form 1b' || 'form one b'){
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

    
    
// ? entering of data of form 2 JHS B
router.post('/formtwob/marks', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2b' || 'form 2b' || 'form two b'){
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


// ? entering of data of form 3 JHS B
router.post('/formthreeb/marks', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3b' || 'form 3b' || 'form three b'){
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



// ? entering of data of form 1 JHS C
router.post('/formonec/marks', (req, res) => {
    const {onename, oneclass, onetotalmarks, oneposition, oneremarks} = req.body
    if(oneclass == 'f1c' || 'form 1c' || 'form one c'){
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


// ? entering of data of form 2 JHS C
router.post('/formtwoc/marks', (req, res) => {
    const {twoname, twoclass, twototalmarks, twoposition, tworemarks} = req.body
    if(twoclass == 'f2c' || 'form 2c' || 'form two c'){
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


// ? entering of data of form 3 JHS C
router.post('/formthreec/marks', (req, res) => {
    const {threename, threeclass, threetotalmarks, threeposition, threeremarks} = req.body
    if(threeclass == 'f3c' || 'form 3c' || 'form three c'){
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
