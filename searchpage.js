function showCarbonsField() {
    document.getElementById("specified-carbons").style.display = "block";
}
function hideCarbonsField() {
    document.getElementById("specified-carbons").style.display = "none";
}
function detectAlgorithm() {
    if (document.getElementById("algorithm").value == "bpat-s") {
        document.getElementById("bpat-only").style.display = "block";
    } else {
        document.getElementById("bpat-only").style.display = "none";
    }
}

function submit() {
    var fields = document.getElementsByClassName("form-control");
    var data = {};
    var valid = true;
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.value == "" || field.value == null) {
            field.parentElement.classList.add("has-error");
            valid = false;
        } else {
            data[field.id] = field.value;
        }
    }
    if (valid == true) {
        console.log(data);
        document.getElementsByClassName("container")[0].innerHTML += "<br><br>" + JSON.stringify(data);
    } else {
        alert("Please correct the fields marked in red.")
    }
}