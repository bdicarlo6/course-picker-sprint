// Course data embedded directly
let allCourses = [
    {
      "id": "ACCT-110",
      "courseCode": "ACCT-110",
      "title": "Financial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "An introduction to financial reporting for corporations. Topics include the accounting cycle, financial statements, revenue recognition, and analysis of financial performance.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "ACCT-210",
      "courseCode": "ACCT-210",
      "title": "Managerial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Introduction to the use of accounting information by managers. Explores cost accounting, budgeting, performance evaluation, and strategic decision making.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "ACCT-305",
      "courseCode": "ACCT-305",
      "title": "The Accounting Profession",
      "department": "Accounting",
      "credits": 3,
      "description": "Examination of the accounting profession including ethics, professional standards, career paths, and contemporary issues facing accountants.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "ACCT-360",
      "courseCode": "ACCT-360",
      "title": "Intermediate Financial Accounting I",
      "department": "Accounting",
      "credits": 3,
      "description": "In-depth study of financial reporting standards, including revenue recognition, cash and receivables, inventory, and property, plant, and equipment.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall"],
      "level": 300
    },
    {
      "id": "ACCT-365",
      "courseCode": "ACCT-365",
      "title": "Intermediate Financial Accounting II",
      "department": "Accounting",
      "credits": 3,
      "description": "Continuation of ACCT-360 covering long-term liabilities, stockholders' equity, earnings per share, and statement of cash flows.",
      "prerequisites": ["ACCT-360"],
      "terms": ["Spring"],
      "level": 300
    },
    {
      "id": "ACCT-420",
      "courseCode": "ACCT-420",
      "title": "Personal and Small Business Taxation",
      "department": "Accounting",
      "credits": 3,
      "description": "Federal income taxation of individuals and small businesses including sole proprietorships, partnerships, and S corporations.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "ACCT-430",
      "courseCode": "ACCT-430",
      "title": "Cost Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Advanced study of cost systems, cost behavior analysis, budgeting, variance analysis, and performance measurement.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MGMT-101",
      "courseCode": "MGMT-101",
      "title": "Business 1: Introduction to Business",
      "department": "Management",
      "credits": 3,
      "description": "Introduction to business communication, planning, and analysis. Develops foundational skills for business professionals.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-102",
      "courseCode": "MGMT-102",
      "title": "Business 2: Business Planning and Professional Development",
      "department": "Management",
      "credits": 3,
      "description": "Continuation of MGMT-101 focusing on business planning, professional development, and career readiness.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-215",
      "courseCode": "MGMT-215",
      "title": "Organizational Behavior",
      "department": "Management",
      "credits": 3,
      "description": "Study of individual and group behavior in organizations. Topics include motivation, leadership, team dynamics, and organizational culture.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200
    },
    {
      "id": "MGMT-360",
      "courseCode": "MGMT-360",
      "title": "Digital Entrepreneurship",
      "department": "Management",
      "credits": 3,
      "description": "Explores entrepreneurship in the digital age, including business model innovation, lean startup methodologies, and digital venture creation.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGMT-560",
      "courseCode": "MGMT-560",
      "title": "Strategic Management",
      "department": "Management",
      "credits": 3,
      "description": "Capstone course integrating functional areas of business. Develops skills in strategic analysis, planning, and implementation.",
      "prerequisites": ["MGMT-215", "MKTG-230", "FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 500
    },
    {
      "id": "MGIS-130",
      "courseCode": "MGIS-130",
      "title": "Information Systems & Technology",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to management information systems including systems thinking, data management, business processes, and the role of technology in organizations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGIS-230",
      "courseCode": "MGIS-230",
      "title": "Database Design and Applications",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to database concepts, design, and SQL. Students learn to design, implement, and query relational databases.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "MGIS-340",
      "courseCode": "MGIS-340",
      "title": "Emerging Business Technologies",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Examination of cutting-edge technologies and their business applications including AI, blockchain, IoT, and cloud computing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-360",
      "courseCode": "MGIS-360",
      "title": "Building a Web Business",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Development of e-commerce and web-based business applications. Covers web technologies, online business models, and digital marketing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-425",
      "courseCode": "MGIS-425",
      "title": "Systems Analysis and Design",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Methods for analyzing business requirements and designing information systems. Covers SDLC, agile methodologies, and system modeling.",
      "prerequisites": ["MGIS-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-230",
      "courseCode": "MKTG-230",
      "title": "Principles of Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Introduction to marketing concepts including market research, consumer behavior, segmentation, targeting, positioning, and the marketing mix.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200
    },
    {
      "id": "MKTG-310",
      "courseCode": "MKTG-310",
      "title": "Marketing Research",
      "department": "Marketing",
      "credits": 3,
      "description": "Methods for collecting, analyzing, and interpreting marketing data. Covers research design, sampling, questionnaire development, and statistical analysis.",
      "prerequisites": ["MKTG-230", "STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-330",
      "courseCode": "MKTG-330",
      "title": "Consumer Behavior",
      "department": "Marketing",
      "credits": 3,
      "description": "Psychological, sociological, and cultural factors influencing consumer decision making. Applications to marketing strategy.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-350",
      "courseCode": "MKTG-350",
      "title": "Professional Sales",
      "department": "Marketing",
      "credits": 3,
      "description": "Development of consultative selling skills including prospecting, needs analysis, presentation techniques, and relationship management.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-370",
      "courseCode": "MKTG-370",
      "title": "Advertising & Promotion Management",
      "department": "Marketing",
      "credits": 3,
      "description": "Integrated marketing communications including advertising, public relations, sales promotion, and direct marketing strategies.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-410",
      "courseCode": "MKTG-410",
      "title": "Search Engine Marketing & Analytics",
      "department": "Marketing",
      "credits": 3,
      "description": "Digital marketing strategies focusing on SEO, SEM, web analytics, and data-driven marketing decision making.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-430",
      "courseCode": "MKTG-430",
      "title": "Social Media Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Strategic use of social media platforms for marketing purposes. Covers content strategy, community management, and social media analytics.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-489",
      "courseCode": "MKTG-489",
      "title": "Seminar in Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Capstone course integrating marketing concepts through case analysis, strategic planning, and applied projects.",
      "prerequisites": ["MKTG-310", "MKTG-330"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "FINC-220",
      "courseCode": "FINC-220",
      "title": "Corporate Finance",
      "department": "Finance",
      "credits": 3,
      "description": "Introduction to financial management including time value of money, capital budgeting, risk and return, and capital structure decisions.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "FINC-320",
      "courseCode": "FINC-320",
      "title": "Professional Financial Management",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced financial management topics including working capital management, dividend policy, and corporate restructuring.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-352",
      "courseCode": "FINC-352",
      "title": "Financial Management II",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced corporate finance topics including mergers and acquisitions, international finance, and derivatives.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-362",
      "courseCode": "FINC-362",
      "title": "Intermediate Investments",
      "department": "Finance",
      "credits": 3,
      "description": "Analysis of investment vehicles including stocks, bonds, and portfolios. Covers valuation, risk management, and portfolio theory.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-460",
      "courseCode": "FINC-460",
      "title": "Financial Analysis and Modeling",
      "department": "Finance",
      "credits": 3,
      "description": "Development of financial models using Excel for valuation, forecasting, and decision analysis. Emphasis on practical applications.",
      "prerequisites": ["FINC-320"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "HSPT-210",
      "courseCode": "HSPT-210",
      "title": "Introduction to Hospitality Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Overview of the hospitality industry including lodging, food service, tourism, and event management sectors.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "HSPT-320",
      "courseCode": "HSPT-320",
      "title": "Hotel Operations Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Management of hotel operations including front office, housekeeping, food and beverage, and property management systems.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "HSPT-340",
      "courseCode": "HSPT-340",
      "title": "Event Planning and Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Planning and execution of meetings, conferences, and special events. Covers budgeting, logistics, and vendor management.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "STAT-145",
      "courseCode": "STAT-145",
      "title": "Introduction to Statistics I",
      "department": "Statistics",
      "credits": 3,
      "description": "Descriptive statistics, probability, sampling distributions, confidence intervals, and hypothesis testing.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 100
    },
    {
      "id": "STAT-146",
      "courseCode": "STAT-146",
      "title": "Introduction to Statistics II",
      "department": "Statistics",
      "credits": 3,
      "description": "Continuation of STAT-145 covering ANOVA, regression, chi-square tests, and nonparametric methods.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "DECS-310",
      "courseCode": "DECS-310",
      "title": "Operations Management",
      "department": "Decision Sciences",
      "credits": 3,
      "description": "Management of operations and supply chains including process analysis, quality management, inventory control, and project management.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "BANA-255",
      "courseCode": "BANA-255",
      "title": "Data Literacy, Analytics, and Decision Making",
      "department": "Business Analytics",
      "credits": 3,
      "description": "Introduction to data analysis for business decisions. Covers data visualization, descriptive analytics, and business intelligence tools.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "INTB-225",
      "courseCode": "INTB-225",
      "title": "Global Business Environment",
      "department": "International Business",
      "credits": 3,
      "description": "Analysis of the global business environment including economic, political, cultural, and legal factors affecting international operations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "BLEG-250",
      "courseCode": "BLEG-250",
      "title": "Law, Business, and Society",
      "department": "Business Law",
      "credits": 3,
      "description": "Legal and regulatory environment of business including contracts, torts, employment law, and business ethics.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    }
];

let filteredCourses = [];
let mySchedule = [];

// Confetti Animation
class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#F76902', '#000000', '#FFFFFF'];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles(x, y) {
        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8 - 5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                size: Math.random() * 8 + 4,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                life: 1,
                decay: Math.random() * 0.015 + 0.015
            });
        }
        
        this.animate();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.3; // gravity
            p.rotation += p.rotationSpeed;
            p.life -= p.decay;
            
            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            this.ctx.save();
            this.ctx.globalAlpha = p.life;
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        }
        
        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

const confetti = new Confetti();

// Initialize page
function initializePage() {
    filteredCourses = [...allCourses];
    populateDepartmentFilter();
    displayCourses();
    updateCourseCount();
    loadScheduleFromStorage();
}

// Populate department filter
function populateDepartmentFilter() {
    const departments = [...new Set(allCourses.map(course => course.department))].sort();
    const departmentFilter = document.getElementById('departmentFilter');
    
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        departmentFilter.appendChild(option);
    });
}

// Display courses
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    
    if (filteredCourses.length === 0) {
        courseList.innerHTML = `
            <div class="no-courses">
                <div class="no-courses-icon">📚</div>
                <p>No courses found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    filteredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseList.appendChild(courseCard);
    });
}

// Create course card
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    const isAdded = mySchedule.some(c => c.id === course.id);
    
    const prerequisitesHTML = course.prerequisites.length === 0
        ? '<span class="no-prereq">None</span>'
        : `<div class="prerequisites-list">
            ${course.prerequisites.map(prereq => 
                `<span class="prereq-tag">${prereq}</span>`
            ).join('')}
           </div>`;
    
    const termsHTML = `
        <div class="terms-list">
            ${course.terms.map(term => 
                `<span class="term-tag">${term}</span>`
            ).join('')}
        </div>
    `;
    
    card.innerHTML = `
        <div class="course-card-header">
            <div class="course-code">${course.courseCode}</div>
            <div class="course-credits">${course.credits} Credits</div>
        </div>
        <div class="course-title">${course.title}</div>
        <div class="course-department">${course.department}</div>
        <div class="course-description">${course.description}</div>
        <div class="course-meta">
            <div class="meta-row">
                <span class="meta-label">Prerequisites:</span>
                <div class="meta-value">${prerequisitesHTML}</div>
            </div>
            <div class="meta-row">
                <span class="meta-label">Terms Offered:</span>
                <div class="meta-value">${termsHTML}</div>
            </div>
        </div>
        <button class="add-btn ${isAdded ? 'added' : ''}" data-course-id="${course.id}">
            ${isAdded ? '✓ Added to Schedule' : '+ Add to Schedule'}
        </button>
    `;
    
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
        if (!isAdded) {
            addToSchedule(course, e);
        }
    });
    
    return card;
}

// Add course to schedule
function addToSchedule(course, event) {
    if (mySchedule.some(c => c.id === course.id)) return;
    
    mySchedule.push(course);
    saveScheduleToStorage();
    displaySchedule();
    updateTotalCredits();
    displayCourses(); // Refresh to update button states
    
    // Confetti effect
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    confetti.createParticles(x, y);
}

// Remove from schedule
function removeFromSchedule(courseId) {
    mySchedule = mySchedule.filter(c => c.id !== courseId);
    saveScheduleToStorage();
    displaySchedule();
    updateTotalCredits();
    displayCourses(); // Refresh to update button states
}

// Display schedule
function displaySchedule() {
    const scheduleList = document.getElementById('scheduleList');
    
    if (mySchedule.length === 0) {
        scheduleList.innerHTML = `
            <div class="empty-schedule">
                <div class="empty-icon">📚</div>
                <p>No courses added yet</p>
                <span>Start building your schedule!</span>
            </div>
        `;
        return;
    }
    
    scheduleList.innerHTML = '';
    mySchedule.forEach(course => {
        const item = document.createElement('div');
        item.className = 'schedule-item';
        
        item.innerHTML = `
            <div class="schedule-item-header">
                <div class="schedule-course-code">${course.courseCode}</div>
                <div class="schedule-credits">${course.credits} CR</div>
            </div>
            <div class="schedule-title">${course.title}</div>
            <div class="schedule-terms">
                ${course.terms.map(term => 
                    `<span class="schedule-term-tag">${term}</span>`
                ).join('')}
            </div>
            <button class="remove-btn" data-course-id="${course.id}">Remove</button>
        `;
        
        item.querySelector('.remove-btn').addEventListener('click', () => {
            removeFromSchedule(course.id);
        });
        
        scheduleList.appendChild(item);
    });
}

// Update total credits
function updateTotalCredits() {
    const total = mySchedule.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = total;
}

// Filter courses
function filterCourses() {
    const departmentFilter = document.getElementById('departmentFilter').value;
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    
    filteredCourses = allCourses.filter(course => {
        const matchesDepartment = departmentFilter === 'all' || course.department === departmentFilter;
        const matchesSearch = searchTerm === '' || 
            course.courseCode.toLowerCase().includes(searchTerm) ||
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.department.toLowerCase().includes(searchTerm);
        
        return matchesDepartment && matchesSearch;
    });
    
    displayCourses();
    updateCourseCount();
}

// Update course count
function updateCourseCount() {
    const total = allCourses.length;
    const filtered = filteredCourses.length;
    
    if (filtered === total) {
        document.getElementById('courseCount').textContent = `Showing all ${total} courses`;
    } else {
        document.getElementById('courseCount').textContent = `Showing ${filtered} of ${total} courses`;
    }
}

// Local storage functions
function saveScheduleToStorage() {
    localStorage.setItem('ritSchedule', JSON.stringify(mySchedule));
}

function loadScheduleFromStorage() {
    const saved = localStorage.getItem('ritSchedule');
    if (saved) {
        mySchedule = JSON.parse(saved);
        displaySchedule();
        updateTotalCredits();
    }
}

// Clear schedule
function clearSchedule() {
    if (mySchedule.length === 0) return;
    
    if (confirm('Are you sure you want to clear your entire schedule?')) {
        mySchedule = [];
        saveScheduleToStorage();
        displaySchedule();
        updateTotalCredits();
        displayCourses();
    }
}

// Export schedule
function exportSchedule() {
    if (mySchedule.length === 0) {
        alert('Your schedule is empty. Add some courses first!');
        return;
    }
    
    let text = 'MY RIT COURSE SCHEDULE - Spring 2025\n';
    text += '='.repeat(50) + '\n\n';
    
    mySchedule.forEach(course => {
        text += `${course.courseCode} - ${course.title}\n`;
        text += `Department: ${course.department}\n`;
        text += `Credits: ${course.credits}\n`;
        text += `Terms: ${course.terms.join(', ')}\n`;
        text += `Prerequisites: ${course.prerequisites.length > 0 ? course.prerequisites.join(', ') : 'None'}\n`;
        text += `Description: ${course.description}\n`;
        text += '\n' + '-'.repeat(50) + '\n\n';
    });
    
    const total = mySchedule.reduce((sum, course) => sum + course.credits, 0);
    text += `\nTOTAL CREDITS: ${total}\n`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rit-schedule.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    
    document.getElementById('departmentFilter').addEventListener('change', filterCourses);
    
    let searchTimeout;
    document.getElementById('searchBox').addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterCourses, 300);
    });
    
    document.getElementById('clearSchedule').addEventListener('click', clearSchedule);
    document.getElementById('exportSchedule').addEventListener('click', exportSchedule);
});