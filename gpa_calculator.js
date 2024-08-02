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
    const marks = Array.from(document.getElementsByClassName('marks')).map(input => parseFloat(input.value));
    const gpa = marks.reduce((acc, mark) => acc + mark, 0) / marks.length;

    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
});
