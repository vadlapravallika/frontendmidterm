const careerPaths = [
    {
        category: "technology",
        careers: [
            { name: "Software Developer", description: "Builds and maintains software applications." },
            { name: "Data Scientist", description: "Analyzes data to help companies make data-driven decisions." },
            { name: "Cybersecurity Specialist", description: "Ensures the security of data and networks." },
            { name: "Cloud Engineer", description: "Designs and manages cloud-based systems and infrastructure." },
            { name: "DevOps Engineer", description: "Facilitates collaboration between software development and IT operations." }
        ]
    },
    {
        category: "business",
        careers: [
            { name: "Business Analyst", description: "Analyzes business processes and identifies improvements." },
            { name: "Marketing Manager", description: "Leads marketing efforts to promote products or services." },
            { name: "Project Manager", description: "Oversees and coordinates project development and execution." },
            { name: "Financial Analyst", description: "Provides insights on financial performance and business planning." },
            { name: "HR Manager", description: "Manages employee relations, recruitment, and training within a company." }
        ]
    },
    {
        category: "creative",
        careers: [
            { name: "Graphic Designer", description: "Designs visuals and artwork for brands or clients." },
            { name: "Writer", description: "Creates written content for books, websites, or marketing materials." },
            { name: "Photographer", description: "Captures and edits visual images." },
            { name: "Animator", description: "Creates moving images or animations for media and advertising." },
            { name: "UX/UI Designer", description: "Designs user-friendly interfaces for websites and applications." }
        ]
    },
    {
        category: "healthcare",
        careers: [
            { name: "Doctor", description: "Diagnoses and treats illnesses and medical conditions." },
            { name: "Nurse", description: "Provides care to patients in various healthcare settings." },
            { name: "Pharmacist", description: "Dispenses medications and provides drug-related information." },
            { name: "Physical Therapist", description: "Helps patients improve mobility and manage pain through physical rehabilitation." },
            { name: "Psychologist", description: "Assesses and treats mental health issues through therapy." }
        ]
    },
    {
        category: "engineering",
        careers: [
            { name: "Mechanical Engineer", description: "Designs and builds mechanical systems and devices." },
            { name: "Civil Engineer", description: "Plans and constructs infrastructure projects like roads and bridges." },
            { name: "Electrical Engineer", description: "Works on electrical systems, from small circuits to large power networks." },
            { name: "Chemical Engineer", description: "Applies chemistry, physics, and engineering to manufacturing processes." },
            { name: "Biomedical Engineer", description: "Develops technologies and devices for healthcare." }
        ]
    },
    {
        category: "education",
        careers: [
            { name: "Teacher", description: "Educates students at various levels, from primary to secondary education." },
            { name: "College Professor", description: "Teaches and conducts research at the university level." },
            { name: "Instructional Designer", description: "Develops educational programs and materials for schools and businesses." },
            { name: "School Counselor", description: "Provides academic and emotional support to students." },
            { name: "Librarian", description: "Manages and organizes collections of books, media, and digital resources." }
        ]
    }
];

// Function to display career paths based on user selection
function showCareerPaths() {
    const selectedInterest = document.getElementById('interestSelect').value;
    const careerResults = document.getElementById('careerResults');
    careerResults.innerHTML = '';

    if (!selectedInterest) {
        careerResults.innerHTML = '<p>Please select an interest to see career recommendations.</p>';
        return;
    }

    const category = careerPaths.find(path => path.category === selectedInterest);

    if (category) {
        category.careers.forEach(career => {
            const careerCard = document.createElement('div');
            careerCard.classList.add('career-card');
            careerCard.innerHTML = `
                <h3>${career.name}</h3>
                <p>${career.description}</p>
            `;
            careerResults.appendChild(careerCard);
        });
    }
}
