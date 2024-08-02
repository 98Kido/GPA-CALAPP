document.getElementById('add-course').addEventListener('click', function() {
    const container = document.getElementById('course-container');
    const div = document.createElement('div');
    div.classList.add('course-input');
    div.innerHTML = `
        <label for="course">Course Name:</label>
        <input type="text" class="course" placeholder="Course Name">
        <label for="marks">Obtained Marks:</label>
        <input type="number" class="marks" placeholder="Obtained Marks">
    `;
    container.appendChild(div);
});

document.getElementById('calculate-gpa').addEventListener('click', function() {
    const markInputs = document.getElementsByClassName('marks');
    const marks = Array.from(markInputs).map(input => parseFloat(input.value)).filter(value => !isNaN(value));
    
    if (marks.length === 0) {
        document.getElementById('result').textContent = 'Please enter some marks.';
        return;
    }
    
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const gpa = total / marks.length;
    
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
});
