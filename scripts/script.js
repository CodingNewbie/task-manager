function changeColor(select) {
    let selectedOption = select.options[select.selectedIndex];

    select.style.color = selectedOption.style.color;
}

function saveTask() {
    console.log("Saving...");

    const name = $("#inputName").val();
    const assignee = $("#inputAssignee").val();
    const dueDate = $("#inputDueDate").val();
    const section = $("#inputSection").val();
    const priority = $("#inputPriority").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();
    const description = $("#inputDescription").val();

    let x = new Task(name, assignee, dueDate, section, priority, status, budget, description);
    console.log(x);
}

function init() {
    console.log("This is a task manager");
}

window.onload = init;