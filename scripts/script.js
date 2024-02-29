function changeColor(select) {
    let selectedOption = select.options[select.selectedIndex];

    select.style.color = selectedOption.style.color;
}