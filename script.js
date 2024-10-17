const careerPaths = [
    {
        category: "technology",
        careers: [
            { name: "Software Developer", description: "Builds and maintains software applications." },
            { name: "Data Scientist", description: "Analyzes data to help companies make decisions." },
            { name: "Cybersecurity Specialist", description: "Ensures the security of data and networks." }
        ]
    },
    {
        category: "business",
        careers: [
            { name: "Business Analyst", description: "Analyzes business processes and identifies improvements." },
            { name: "Marketing Manager", description: "Leads marketing efforts to promote products." },
            { name: "Project Manager", description: "Oversees and coordinates project development and execution." }
        ]
    },
    {
        category: "creative",
        careers: [
            { name: "Graphic Designer", description: "Designs visuals and artwork for brands or clients." },
            { name: "Writer", description: "Creates written content for books, websites, or marketing materials." },
            { name: "Photographer", description: "Captures and edits visual images." }
        ]
    }
];

// Function to display career paths based on user selection
function showCareerPaths() {
    const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(input => input.value);
    const careerResults = document.getElementById('careerResults');
    careerResults.innerHTML = '';

    if (selectedInterests.length === 0) {
        careerResults.innerHTML = '<p>Please select at least one interest to see career recommendations.</p>';
        return;
    }

    selectedInterests.forEach(interest => {
        const category = careerPaths.find(path => path.category === interest);

        category.careers.forEach(career => {
            const careerCard = document.createElement('div');
            careerCard.classList.add('career-card');
            careerCard.innerHTML = `
                <h3>${career.name}</h3>
                <p>${career.description}</p>
            `;
            careerResults.appendChild(careerCard);
        });
    });
}
