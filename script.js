// Global variables
let allCourses = [];
let filteredCourses = [];

// Load courses from JSON file
async function loadCourses() {
    try {
        const response = await fetch('rit_courses.json');
        const data = await response.json();
        allCourses = data.courses;
        filteredCourses = [...allCourses];
        
        populateDepartmentFilter();
        displayCourses();
        updateCourseCount();
        
    } catch (error) {
        console.error('Error loading courses:', error);
        document.getElementById('courseList').innerHTML = `
            <div class="no-courses">
                <p>Error loading courses. Please make sure rit_courses.json is in the same directory.</p>
            </div>
        `;
    }
}

// Populate department filter dropdown with unique departments
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

// Display courses in the course list
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    
    if (filteredCourses.length === 0) {
        courseList.innerHTML = `
            <div class="no-courses">
                <p>No courses found matching your criteria.</p>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    filteredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseList.appendChild(courseCard);
    });
}

// Create a course card element
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    // Create prerequisites display
    let prerequisitesHTML;
    if (course.prerequisites.length === 0) {
        prerequisitesHTML = '<span class="no-prerequisites">None</span>';
    } else {
        prerequisitesHTML = `
            <div class="prerequisites">
                ${course.prerequisites.map(prereq => 
                    `<span class="prerequisite-tag">${prereq}</span>`
                ).join('')}
            </div>
        `;
    }
    
    // Create terms display
    const termsHTML = `
        <div class="terms">
            ${course.terms.map(term => 
                `<span class="term-tag">${term}</span>`
            ).join('')}
        </div>
    `;
    
    // Create level badge
    const levelClass = `level-${course.level}`;
    const levelHTML = `<span class="level-badge ${levelClass}">${course.level} Level</span>`;
    
    card.innerHTML = `
        <div class="course-header">
            <div class="course-code">${course.courseCode}</div>
            <div class="course-credits">${course.credits} Credits</div>
        </div>
        <div class="course-title">${course.title}</div>
        <div class="course-department">${course.department}</div>
        <div class="course-description">${course.description}</div>
        <div class="course-details">
            <div class="detail-row">
                <span class="detail-label">📋 Prerequisites:</span>
                <span class="detail-value">${prerequisitesHTML}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">📅 Terms Offered:</span>
                <span class="detail-value">${termsHTML}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">🎯 Course Level:</span>
                <span class="detail-value">${levelHTML}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Filter courses based on selected criteria
function filterCourses() {
    const departmentFilter = document.getElementById('departmentFilter').value;
    const levelFilter = document.getElementById('levelFilter').value;
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    
    filteredCourses = allCourses.filter(course => {
        // Department filter
        const matchesDepartment = departmentFilter === 'all' || course.department === departmentFilter;
        
        // Level filter
        const matchesLevel = levelFilter === 'all' || course.level.toString() === levelFilter;
        
        // Search filter
        const matchesSearch = searchTerm === '' || 
            course.courseCode.toLowerCase().includes(searchTerm) ||
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm);
        
        return matchesDepartment && matchesLevel && matchesSearch;
    });
    
    displayCourses();
    updateCourseCount();
}

// Update course count display
function updateCourseCount() {
    const courseCount = document.getElementById('courseCount');
    const total = allCourses.length;
    const filtered = filteredCourses.length;
    
    if (filtered === total) {
        courseCount.textContent = `Showing all ${total} courses`;
    } else {
        courseCount.textContent = `Showing ${filtered} of ${total} courses`;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    
    // Add event listeners for filters
    document.getElementById('departmentFilter').addEventListener('change', filterCourses);
    document.getElementById('levelFilter').addEventListener('change', filterCourses);
    
    // Add search with debounce
    let searchTimeout;
    document.getElementById('searchBox').addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterCourses, 300);
    });
});