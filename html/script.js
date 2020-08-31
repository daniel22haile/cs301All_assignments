function showFullName() {
    let fName = document.getElementById("first_name").value;
    let lName = document.getElementById("last_name").value;
    let full_name = fName + lName;
    document.getElementById("output").innerHTML = full_name;
}