function calculateLove() {
    const yourName = document.getElementById('yourName').value.trim();
    const partnerName = document.getElementById('partnerName').value.trim();

    if (!yourName || !partnerName) {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = calculatePercentage(yourName, partnerName);

    displayResult(yourName, partnerName, lovePercentage);
}

function calculatePercentage(name1, name2) {
    const combinedNames = (name1 + name2).toLowerCase();

    // Special case: If the names are "oasis" and "pratikshya", return "infinity"
    if (combinedNames === "oasispratikshya" || combinedNames === "pratikshyaoasis") {
        return "infinity";
    }

    let loveCount = 0;

    for (const char of combinedNames) {
        loveCount += char.charCodeAt(0);
    }

    return loveCount % 101; // To get a percentage between 0 and 100
}

function displayResult(name1, name2, percentage) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${name1} and ${name2}'s Love Percentage:</p>
                               <h2>${percentage}%</h2>`;
}
