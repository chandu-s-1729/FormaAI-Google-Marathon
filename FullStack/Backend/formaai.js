const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const generateFitnessPlan = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      weight,
      height,
      goal,
      dietary,
      workoutTime,
      level,
    } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give a detailed schedule for Fitness plan to ${name} for whose a beginner with personal 
                      details of ${age} years old, gender is ${gender} , weight is ${weight} kgs, ${height}centimeter 
                      height, he have a specific goal which is ${goal}, and dietary preference because he is ${dietary}, 
                      and he have time preference for workout ${workoutTime}, and he wants to work ${level} intensity in workouts.`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const response = result.response.text();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateFitnessPlan };
