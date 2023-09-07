document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch("leaderboard.json")
        .then(response => response.json())
        .then(data => {
            // Sort the data by score (assuming score is a numeric value)
            data.sort((a, b) => b.score - a.score);

            // Populate the leaderboard table
            const leaderboardData = document.getElementById("leaderboard-data");
            data.forEach((entry, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.name}</td>
                    <td>${entry.score}</td>
                `;
                leaderboardData.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
