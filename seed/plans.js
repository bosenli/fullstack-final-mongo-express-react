const db = require('../db');
const Plan = require('../models/plan');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const plans = [
        { date: '4/24/2022', time:'14:00:00', plan: 'dentist appointment', status: 'completed' },
        { date: '4/27/2022', time:'9:00:00', plan: 'final exam', status: 'pending' },
        { date: '3/18/2022', time:'15:00:00', plan: 'shop for food', status: 'cancelled' },
        { date: '5/18/2022', time:'13:00:00', plan: 'going trip with family', status: 'pending' },
    ]

    await Plan.insertMany(plans)
    console.log("Created some plans!")
}


const run = async () => {
    await main()
    db.close()
}
run()

//then go to app.js to set up server 