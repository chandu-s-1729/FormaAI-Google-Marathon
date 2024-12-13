const form = document.getElementById("inputForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const goal = document.getElementById("goal").value;
  const dietary = document.getElementById("dietary").value;
  const workoutTime = document.getElementById("workoutTime").value;
  const level = document.getElementById("level").value;

  try {
    const response = await fetch("http://localhost:3000/fitness-schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        weight,
        height,
        goal,
        dietary,
        workoutTime,
        level,
      }),
    });

    const data = await response.json();
    console.log(data);

    resultDiv.textContent = `${data}`;
  } catch (error) {
    resultDiv.textContent = "Error sending request.";
  }
});
