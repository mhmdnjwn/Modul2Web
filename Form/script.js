function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    var namaError = document.getElementById("namaError");
    var emailError = document.getElementById("emailError");
    var alamatError = document.getElementById("alamatError");

    namaError.textContent = "";
    emailError.textContent = "";
    alamatError.textContent = "";

    var isValid = true;

    if (nama === "") {
        namaError.textContent = "Nama tidak boleh kosong";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email tidak boleh kosong";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Format email tidak valid";
        isValid = false;
    }

    if (alamat === "") {
        alamatError.textContent = "Alamat tidak boleh kosong";
        isValid = false;
    }

    if (nama === "" || email === "" || alamat === "") {
        alert("Harap isi semua data (nama, email, dan alamat).");
    } else {
        alert("Formulir berhasil dikirim:\nNama: " + nama + "\nEmail: " + email + "\nAlamat: " + alamat);
    }

    // if (validateForm()) {
    // var nama = document.getElementById("nama").value;
    // var email = document.getElementById("email").value;
    // var alamat = document.getElementById("alamat").value;
    // alert("Formulir berhasil dikirim:\nNama: " + nama + "\nEmail: " + email + "\nAlamat: " + alamat);
    // } else {
    // alert("Harap isi semua data (nama, email, dan alamat) dengan benar.");
    // }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}