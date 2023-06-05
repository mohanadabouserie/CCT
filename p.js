/*
<option value="COMSER">Community Service</option>
<option value="CON">Conferences</option>
<option value="CUL">Cultural and Special Interests</option>
<option value="PUB">Publications</option>
<option value="STU">Student Associations</option>
*/
function updateSecondDropdown_Category_and_Club() {
    var firstDropdown = document.getElementById("activity_type");
    var secondDropdown = document.getElementById("actid");

    // Clear existing options in the second dropdown
    secondDropdown.innerHTML = "";

    // Get selected value from the first dropdown
    var selectedValue = firstDropdown.value;

    // Populate the second dropdown based on the selected value
    if (selectedValue === "COMSER") {
        Inner_HTML = ["3alRaseef", "Anti Cancer Team", "Hand in Hand", "Help Club", "Mashroo3 Kheir", "Revival", "Resala", "Volunteers in Action"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === "CON") {
        Inner_HTML = ["Cairo International Model United Nations (CIMUN)", "Debate Society"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === "CUL") {
        Inner_HTML = ["African Heritage Association", "AIESEC", "Astronomy Club","Developers Inc.", "Egyptian Folklore Troupe", "Enactus", "Entrepreneurs' Society", "Finance and Economics Club", "iRead Club", "Language and Intercultural Club", "Musicana", "Robotics Club", "Theater and Film Club"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === "PUB") {
        Inner_HTML = ["The Caravan"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === "STU") {
        Inner_HTML = ["Accounting Association ", "Anthropology, Sociology, Egyptology Student Association", "Mathematics, Actuarial, and Data Science Association", "Architecture Association", "Biology Association", "Business Association", "Chemistry Association", "Computer Science and Engineering Association", "Construction Engineering Association", "Economics Association", "Electronics and Communications Engineering Association", "Film Association", "Mass Communication Association", "Mechanical Engineering Association", "Political Science Students Association", "Psychology Association", "Society of Petroleum Engineers", "Society of Physics Students"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    }
}
/*
                  <option value="">--Select a Position--</option>
                  <option value="PRE">Presidency</option>
                  <option value="UP_B">Upper Board</option>
                  <option value="H_B">High Board</option>
                  <option value="MEM">Member</option>
*/
a=[
    "PRE","UP_B","H_B","MEM", "PER", "TR"
]
function update_pos() {
    var firstDropdown = document.getElementById("location");
    var secondDropdown = document.getElementById("activity_type2");

    // Clear existing options in the second dropdown
    secondDropdown.innerHTML = "";

    // Get selected value from the first dropdown
    var selectedValue = firstDropdown.value;

    // Populate the second dropdown based on the selected value
    if (selectedValue === a[0]) {
        Inner_HTML = ["President", "Vice President"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === a[1]) {
        Inner_HTML = ["Director"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === a[2]) {
        Inner_HTML = ["Manager"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    } else if (selectedValue === a[3]) {
        Inner_HTML = ["Member"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    }
    else if (selectedValue === a[4]) {
        Inner_HTML = ["Yearlong Leader", "Orientation Leader"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    }
    else if (selectedValue === a[5]) {
        Inner_HTML = ["Treasurer"];
        for (let i = 0; i < Inner_HTML.length; i++) {
            var element = document.createElement("option")
            element.innerHTML = Inner_HTML[i];
            secondDropdown.appendChild(element);
        }
    }
}
const toggleBtn = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", function() {
  menu.classList.toggle("hidden");
});
