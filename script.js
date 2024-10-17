const careerPaths = [
    {
        category: "technology",
        icon: "fas fa-laptop-code",
        careers: [
            { 
                name: "Software Developer", 
                description: "Builds and maintains software applications.", 
                icon: "fas fa-code",
                youtube: [
                    { name: "Traversy Media", link: "https://www.youtube.com/c/TraversyMedia" },
                    { name: "The Net Ninja", link: "https://www.youtube.com/c/thenetninja" }
                ],
                websites: [
                    { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
                    { name: "Codecademy", link: "https://www.codecademy.com/" }
                ]
            },
            { 
                name: "Data Scientist", 
                description: "Analyzes data to help companies make data-driven decisions.", 
                icon: "fas fa-database",
                youtube: [
                    { name: "StatQuest with Josh Starmer", link: "https://www.youtube.com/c/StatQuest" },
                    { name: "Kaggle", link: "https://www.youtube.com/c/Kaggle" }
                ],
                websites: [
                    { name: "Kaggle", link: "https://www.kaggle.com/" },
                    { name: "DataCamp", link: "https://www.datacamp.com/" }
                ]
            },
            { 
                name: "Cybersecurity Specialist", 
                description: "Ensures the security of data and networks.", 
                icon: "fas fa-lock",
                youtube: [
                    { name: "Cybersecurity TV", link: "https://www.youtube.com/c/CybersecurityTV" },
                    { name: "NetworkChuck", link: "https://www.youtube.com/c/NetworkChuck" }
                ],
                websites: [
                    { name: "Cybrary", link: "https://www.cybrary.it/" },
                    { name: "Udemy Cybersecurity Courses", link: "https://www.udemy.com/topic/cyber-security/" }
                ]
            },
            { 
                name: "Cloud Engineer", 
                description: "Designs and manages cloud-based systems and infrastructure.", 
                icon: "fas fa-cloud",
                youtube: [
                    { name: "Cloud Academy", link: "https://www.youtube.com/c/CloudAcademy" },
                    { name: "AWS Online Tech Talks", link: "https://www.youtube.com/user/AmazonWebServices" }
                ],
                websites: [
                    { name: "AWS Training and Certification", link: "https://aws.amazon.com/training/" },
                    { name: "Coursera Cloud Computing", link: "https://www.coursera.org/specializations/cloud-computing" }
                ]
            },
            { 
                name: "DevOps Engineer", 
                description: "Facilitates collaboration between software development and IT operations.", 
                icon: "fas fa-tools",
                youtube: [
                    { name: "DevOps Academy", link: "https://www.youtube.com/c/DevOpsAcademy" },
                    { name: "TechWorld with Nana", link: "https://www.youtube.com/c/TechWorldwithNana" }
                ],
                websites: [
                    { name: "Udacity DevOps Nanodegree", link: "https://www.udacity.com/course/devops-nanodegree--nd9991" },
                    { name: "Codecademy DevOps", link: "https://www.codecademy.com/learn/paths/devops" }
                ]
            }
        ]
    },
    {
        category: "business",
        icon: "fas fa-briefcase",
        careers: [
            { 
                name: "Business Analyst", 
                description: "Analyzes business processes and identifies improvements.", 
                icon: "fas fa-chart-line",
                youtube: [
                    { name: "BA Times", link: "https://www.youtube.com/c/BATimes" },
                    { name: "The Business Analyst", link: "https://www.youtube.com/c/TheBusinessAnalyst" }
                ],
                websites: [
                    { name: "Coursera Business Analytics", link: "https://www.coursera.org/specializations/business-analytics" },
                    { name: "LinkedIn Learning Business Analysis", link: "https://www.linkedin.com/learning/topics/business-analysis" }
                ]
            },
            { 
                name: "Marketing Manager", 
                description: "Leads marketing efforts to promote products or services.", 
                icon: "fas fa-bullhorn",
                youtube: [
                    { name: "Neil Patel", link: "https://www.youtube.com/user/neilvkpatel" },
                    { name: "HubSpot", link: "https://www.youtube.com/c/hubspot" }
                ],
                websites: [
                    { name: "HubSpot Academy", link: "https://academy.hubspot.com/" },
                    { name: "Google Digital Garage", link: "https://learndigital.withgoogle.com/digitalgarage" }
                ]
            },
            { 
                name: "Project Manager", 
                description: "Oversees and coordinates project development and execution.", 
                icon: "fas fa-tasks",
                youtube: [
                    { name: "Project Management Institute", link: "https://www.youtube.com/user/PMInstitute" },
                    { name: "LinkedIn Learning", link: "https://www.youtube.com/user/LinkedInLearning" }
                ],
                websites: [
                    { name: "Coursera Project Management", link: "https://www.coursera.org/specializations/project-management" },
                    { name: "PMI.org", link: "https://www.pmi.org/" }
                ]
            },
            { 
                name: "Financial Analyst", 
                description: "Provides insights on financial performance and business planning.", 
                icon: "fas fa-chart-pie",
                youtube: [
                    { name: "Wall Street Prep", link: "https://www.youtube.com/c/WallStreetPrep" },
                    { name: "Corporate Finance Institute", link: "https://www.youtube.com/c/CorporateFinanceInstitute" }
                ],
                websites: [
                    { name: "Investopedia", link: "https://www.investopedia.com/" },
                    { name: "Coursera Financial Analysis", link: "https://www.coursera.org/specializations/financial-analysis" }
                ]
            },
            { 
                name: "HR Manager", 
                description: "Manages employee relations, recruitment, and training within a company.", 
                icon: "fas fa-user-friends",
                youtube: [
                    { name: "HR Basics", link: "https://www.youtube.com/c/HRBasics" },
                    { name: "SHRM", link: "https://www.youtube.com/user/SHRMVideo" }
                ],
                websites: [
                    { name: "SHRM Certification", link: "https://www.shrm.org/certification/pages/default.aspx" },
                    { name: "Coursera Human Resource Management", link: "https://www.coursera.org/learn/human-resource-management" }
                ]
            }
        ]
    },
    {
        category: "creative",
        icon: "fas fa-paint-brush",
        careers: [
            { 
                name: "Graphic Designer", 
                description: "Designs visuals and artwork for brands or clients.", 
                icon: "fas fa-image",
                youtube: [
                    { name: "Envato Tuts+", link: "https://www.youtube.com/user/EnvatoTuts" },
                    { name: "Spoon Graphics", link: "https://www.youtube.com/c/SpoonGraphics" }
                ],
                websites: [
                    { name: "Canva", link: "https://www.canva.com/learn/design/" },
                    { name: "Adobe Creative Cloud Tutorials", link: "https://helpx.adobe.com/creative-cloud/tutorials.html" }
                ]
            },
            { 
                name: "Writer", 
                description: "Creates written content for books, websites, or marketing materials.", 
                icon: "fas fa-pencil-alt",
                youtube: [
                    { name: "Writing with Jenna Moreci", link: "https://www.youtube.com/c/JennaMoreci" },
                    { name: "The Write Channel", link: "https://www.youtube.com/c/TheWriteChannel" }
                ],
                websites: [
                    { name: "Grammarly", link: "https://www.grammarly.com/blog/" },
                    { name: "Purdue OWL", link: "https://owl.purdue.edu/owl/purdue_owl.html" }
                ]
            },
            { 
                name: "Photographer", 
                description: "Captures and edits visual images.", 
                icon: "fas fa-camera",
                youtube: [
                    { name: "Peter McKinnon", link: "https://www.youtube.com/c/PeterMcKinnon" },
                    { name: "The Slanted Lens", link: "https://www.youtube.com/c/TheSlantedLens" }
                ],
                websites: [
                    { name: "Digital Photography School", link: "https://digital-photography-school.com/" },
                    { name: "Fstoppers", link: "https://fstoppers.com/" }
                ]
            },
            { 
                name: "Animator", 
                description: "Creates animations and visual effects for various media.", 
                icon: "fas fa-film",
                youtube: [
                    { name: "Blender Guru", link: "https://www.youtube.com/user/AndrewPPrice" },
                    { name: "Animation Mentor", link: "https://www.youtube.com/user/AnimationMentor" }
                ],
                websites: [
                    { name: "Animation Resources", link: "https://animationresources.org/" },
                    { name: "Toon Boom Learn", link: "https://learn.toonboom.com/" }
                ]
            },
            { 
                name: "Web Designer", 
                description: "Designs and maintains websites and user interfaces.", 
                icon: "fas fa-desktop",
                youtube: [
                    { name: "Web Design with Nina", link: "https://www.youtube.com/c/WebDesignwithNina" },
                    { name: "DesignCourse", link: "https://www.youtube.com/c/DesignCourse" }
                ],
                websites: [
                    { name: "W3Schools", link: "https://www.w3schools.com/" },
                    { name: "CSS-Tricks", link: "https://css-tricks.com/" }
                ]
            }
        ]
    },
    {
        category: "healthcare",
        icon: "fas fa-hospital",
        careers: [
            { 
                name: "Doctor", 
                description: "Diagnoses and treats medical conditions.", 
                icon: "fas fa-user-md",
                youtube: [
                    { name: "Med School Insiders", link: "https://www.youtube.com/c/MedSchoolInsiders" },
                    { name: "Armando Hasudungan", link: "https://www.youtube.com/c/ArmandoHasudungan" }
                ],
                websites: [
                    { name: "Khan Academy Health & Medicine", link: "https://www.khanacademy.org/science/health-and-medicine" },
                    { name: "Medscape", link: "https://www.medscape.com/" }
                ]
            },
            { 
                name: "Nurse", 
                description: "Provides patient care and support in healthcare settings.", 
                icon: "fas fa-user-nurse",
                youtube: [
                    { name: "RegisteredNurseRN", link: "https://www.youtube.com/c/RegisteredNurseRN" },
                    { name: "Nurse Blake", link: "https://www.youtube.com/c/NurseBlake" }
                ],
                websites: [
                    { name: "Nursing World", link: "https://www.nursingworld.org/" },
                    { name: "American Nurses Association", link: "https://www.nursingworld.org/our-certifications/" }
                ]
            },
            { 
                name: "Physical Therapist", 
                description: "Helps patients improve their physical abilities through therapy.", 
                icon: "fas fa-procedures",
                youtube: [
                    { name: "Bob & Brad", link: "https://www.youtube.com/c/BobandBrad" },
                    { name: "PhysioTutors", link: "https://www.youtube.com/c/PhysioTutors" }
                ],
                websites: [
                    { name: "American Physical Therapy Association", link: "https://www.apta.org/" },
                    { name: "Physiopedia", link: "https://www.physio-pedia.com/" }
                ]
            },
            { 
                name: "Pharmacist", 
                description: "Dispenses medications and advises patients on their use.", 
                icon: "fas fa-pills",
                youtube: [
                    { name: "Pharmacy Times", link: "https://www.youtube.com/c/PharmacyTimes" },
                    { name: "The Drug Library", link: "https://www.youtube.com/c/TheDrugLibrary" }
                ],
                websites: [
                    { name: "American Pharmacists Association", link: "https://www.pharmacist.com/" },
                    { name: "Pharmacy Careers", link: "https://www.pharmacycareers.com/" }
                ]
            },
            { 
                name: "Occupational Therapist", 
                description: "Helps patients improve their ability to perform daily activities.", 
                icon: "fas fa-user-injured",
                youtube: [
                    { name: "OT Potential", link: "https://www.youtube.com/c/OTPOTENTIAL" },
                    { name: "The Occupational Therapy Channel", link: "https://www.youtube.com/c/TheOccupationalTherapyChannel" }
                ],
                websites: [
                    { name: "American Occupational Therapy Association", link: "https://www.aota.org/" },
                    { name: "OT Corner", link: "https://otcorner.com/" }
                ]
            }
        ]
    },
    {
        category: "engineering",
        icon: "fas fa-cogs",
        careers: [
            { 
                name: "Civil Engineer", 
                description: "Designs and supervises construction of infrastructure projects.", 
                icon: "fas fa-building",
                youtube: [
                    { name: "Civil Engineering Basics", link: "https://www.youtube.com/c/CivilEngineeringBasics" },
                    { name: "The Constructor", link: "https://www.youtube.com/c/TheConstructor" }
                ],
                websites: [
                    { name: "ASCE", link: "https://www.asce.org/" },
                    { name: "Coursera Civil Engineering", link: "https://www.coursera.org/specializations/civil-engineering" }
                ]
            },
            { 
                name: "Mechanical Engineer", 
                description: "Designs and develops mechanical systems and devices.", 
                icon: "fas fa-wrench",
                youtube: [
                    { name: "Learn Engineering", link: "https://www.youtube.com/c/LearnEngineering" },
                    { name: "Real Engineering", link: "https://www.youtube.com/c/RealEngineering" }
                ],
                websites: [
                    { name: "Mechanical Engineering Magazine", link: "https://www.asme.org/topics-resources/content/mechanical-engineering-magazine" },
                    { name: "Engineering.com", link: "https://www.engineering.com/" }
                ]
            },
            { 
                name: "Electrical Engineer", 
                description: "Works with electrical systems and electronics.", 
                icon: "fas fa-bolt",
                youtube: [
                    { name: "ElectroBOOM", link: "https://www.youtube.com/c/ElectroBOOM" },
                    { name: "EEVblog", link: "https://www.youtube.com/c/EEVblog" }
                ],
                websites: [
                    { name: "Institute of Electrical and Electronics Engineers (IEEE)", link: "https://www.ieee.org/" },
                    { name: "All About Circuits", link: "https://www.allaboutcircuits.com/" }
                ]
            },
            { 
                name: "Chemical Engineer", 
                description: "Applies chemistry and engineering principles to processes.", 
                icon: "fas fa-flask",
                youtube: [
                    { name: "LearnChemE", link: "https://www.youtube.com/c/LearnChemE" },
                    { name: "AIChE", link: "https://www.youtube.com/c/AIChE" }
                ],
                websites: [
                    { name: "American Institute of Chemical Engineers", link: "https://www.aiche.org/" },
                    { name: "Chemical Engineering Portal", link: "https://www.chemicalengineering.com/" }
                ]
            },
            { 
                name: "Software Engineer", 
                description: "Designs and develops software applications.", 
                icon: "fas fa-code",
                youtube: [
                    { name: "Programming with Mosh", link: "https://www.youtube.com/c/programmingwithmosh" },
                    { name: "The Net Ninja", link: "https://www.youtube.com/c/thenetninja" }
                ],
                websites: [
                    { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/" },
                    { name: "W3Schools", link: "https://www.w3schools.com/" }
                ]
            }
        ]
    },
    {
        category: "education",
        icon: "fas fa-chalkboard-teacher",
        careers: [
            { 
                name: "Teacher", 
                description: "Educates students in various subjects.", 
                icon: "fas fa-user-graduate",
                youtube: [
                    { name: "TeacherTube", link: "https://www.youtube.com/user/TeacherTube" },
                    { name: "Edutopia", link: "https://www.youtube.com/c/edutopia" }
                ],
                websites: [
                    { name: "Teachers Pay Teachers", link: "https://www.teacherspayteachers.com/" },
                    { name: "Edutopia", link: "https://www.edutopia.org/" }
                ]
            },
            { 
                name: "Professor", 
                description: "Conducts research and teaches at the university level.", 
                icon: "fas fa-user-graduate",
                youtube: [
                    { name: "CrashCourse", link: "https://www.youtube.com/user/crashcourse" },
                    { name: "Khan Academy", link: "https://www.youtube.com/user/khanacademy" }
                ],
                websites: [
                    { name: "ResearchGate", link: "https://www.researchgate.net/" },
                    { name: "Academia.edu", link: "https://www.academia.edu/" }
                ]
            },
            { 
                name: "Educational Administrator", 
                description: "Manages educational institutions and policies.", 
                icon: "fas fa-school",
                youtube: [
                    { name: "National Association of Secondary School Principals", link: "https://www.youtube.com/user/nasspvideo" },
                    { name: "School Leaders", link: "https://www.youtube.com/c/SchoolLeaders" }
                ],
                websites: [
                    { name: "American Educational Research Association", link: "https://www.aera.net/" },
                    { name: "National Center for Education Statistics", link: "https://nces.ed.gov/" }
                ]
            },
            { 
                name: "Librarian", 
                description: "Manages library resources and helps users find information.", 
                icon: "fas fa-book",
                youtube: [
                    { name: "The Library Teacher", link: "https://www.youtube.com/c/TheLibraryTeacher" },
                    { name: "Librarian Problems", link: "https://www.youtube.com/c/LibrarianProblems" }
                ],
                websites: [
                    { name: "American Library Association", link: "https://www.ala.org/" },
                    { name: "Library Journal", link: "https://www.libraryjournal.com/" }
                ]
            },
            { 
                name: "Instructional Designer", 
                description: "Designs educational programs and materials.", 
                icon: "fas fa-pencil-alt",
                youtube: [
                    { name: "Instructional Design & Technology", link: "https://www.youtube.com/c/InstructionalDesignandTechnology" },
                    { name: "The eLearning Coach", link: "https://www.youtube.com/c/TheeLearningCoach" }
                ],
                websites: [
                    { name: "Association for Educational Communications and Technology", link: "https://www.aect.org/" },
                    { name: "eLearning Industry", link: "https://elearningindustry.com/" }
                ]
            }
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
        // Display category icon
        const categoryHeader = document.createElement('h2');
        categoryHeader.innerHTML = `<i class="${category.icon}"></i> ${category.category.charAt(0).toUpperCase() + category.category.slice(1)}`;
        careerResults.appendChild(categoryHeader);

        category.careers.forEach(career => {
            const careerCard = document.createElement('div');
            careerCard.classList.add('career-card');
            careerCard.innerHTML = `
                <h3><i class="${career.icon}"></i> ${career.name}</h3>
                <p>${career.description}</p>
                <h4>YouTube Channels:</h4>
                <ul>
                    ${career.youtube.map(channel => `<li><a href="${channel.link}" target="_blank">${channel.name}</a></li>`).join('')}
                </ul>
                <h4>Resources:</h4>
                <ul>
                    ${career.websites.map(website => `<li><a href="${website.link}" target="_blank">${website.name}</a></li>`).join('')}
                </ul>
            `;
            careerResults.appendChild(careerCard);
        });
    }
}
