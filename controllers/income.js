const IncomeSchema = require("../models/IncomeModel");
const moment = require('moment');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const formattedDate = moment(date, 'DD-MM-YY').format('YYYY-MM-DD');

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date: formattedDate
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        await income.save();
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        console.error("Error while saving income:", error); // Log error for debugging
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(income);
};



exports.getIncomes = async (req, res) =>{
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error){
        res.status(500).json({message: 'server error'})
    }
}   

exports.deleteIncome = async (req,res) =>{
   const {id} = req.params;
   IncomeSchema.findByIdAndDelete(id)
       .then((income) => {
            res.status(200).json({message: 'Income Deleted'})
       })
       .catch ((err) => {
            res.status(500).json({message: 'server error'})
       })
        
}   
