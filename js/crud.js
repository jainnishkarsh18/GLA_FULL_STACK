var nameV, phoneV, emailV, passwordV;

function readform() {
    nameV = document.getElementById("name").value;
    phoneV = document.getElementById("phone").value;
    emailV = document.getElementById("email").value;
    passwordV = document.getElementById("pswd").value;
    if (nameV == "" || phoneV == "" || emailV == "" || passwordV == "") {
        alert("Fill all the fields");
        return;
    }

}
document.getElementById("insert").onclick = function() {
    readform();
    firebase
        .database()
        .ref("form/" + phoneV)
        .set({
            name: nameV,
            phone: phoneV,
            email: emailV,
            password: passwordV

        });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pswd").value = "";
    console.log(nameV, emailV, phoneV, passwordV);
    alert("data inserted");
}
document.getElementById("read").onclick = function() {
    readform();
    firebase
        .database()
        .ref("form/" + phoneV)
        .on("value", function(snapshot) {
            document.getElementById("name").value = snapshot.val().name;
            document.getElementById("email").value = snapshot.val().phone;
            document.getElementById("phone").value = snapshot.val().email;
            document.getElementById("pswd").value = snapshot.val().password;
        });
    console.log(nameV, emailV, phoneV, passwordV);
    alert("Read successfully");
}
document.getElementById("update").onclick = function() {
    readform();
    firebase
        .database()
        .ref("form/" + phoneV)
        .update({
            name: nameV,
            email: emailV,
            password: passwordV

        });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pswd").value = "";
    console.log(nameV, emailV, phoneV, passwordV);
    alert("data updated");
}
document.getElementById("delete").onclick = function() {
    readform();
    firebase
        .database()
        .ref("form/" + phoneV)
        .remove();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pswd").value = "";
    console.log(nameV, emailV, phoneV, passwordV);
    alert("data deleted");
}