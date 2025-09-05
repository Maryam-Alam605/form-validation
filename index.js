document
  .getElementById("admissionForm")
  .addEventListener("submit", function (prevent) {
    prevent.preventDefault();
    let formIsValid = true;

    function setError(inputField, errorField, showtext) {
      errorField.textContent = showtext;
      errorField.style.color = "red";
      errorField.style.fontSize = "13px";
      formIsValid = false;
    }

    function clearError(errorField) {
      errorField.textContent = "";
    }

    // First Name
    let firstInput = document.getElementById("firstname");
    let firstMsg = document.getElementById("fNameLabel");
    if (firstInput.value.trim() === "") {
      setError(firstInput, firstMsg, " *First name is required");
    } else {
      clearError(firstMsg);
    }

    // Last Name
    let lastInput = document.getElementById("lastname");
    let lastMsg = document.getElementById("lNameLabel");
    if (lastInput.value.trim() === "") {
      setError(lastInput, lastMsg, " *Last name is required");
    } else {
      clearError(lastMsg);
    }

    // Email
    let emailInput = document.getElementById("email");
    let emailMsg = document.getElementById("emailError");
    if (emailInput.value.trim() === "") {
      setError(emailInput, emailMsg, " *Enter email");
    } else {
      clearError(emailMsg);
    }

    // Phone Number
    let phoneInput = document.getElementById("phonenumber");
    let phoneMsg = document.getElementById("phoneError");
    if (phoneInput.value.trim() === "" || phoneInput.value.length < 10) {
      setError(phoneInput, phoneMsg, " *Enter phone number");
    } else {
      clearError(phoneMsg);
    }

    // Gender
    let maleOpt = document.getElementById("genderMale");
    let femaleOpt = document.getElementById("genderFemale");
    let genderMsg = document.getElementById("genderError");
    if (!maleOpt.checked && !femaleOpt.checked) {
      setError(maleOpt, genderMsg, " *Please select gender");
    } else {
      clearError(genderMsg);
    }

    // Address
    let addressInput = document.getElementById("Address");
    let addressMsg = document.getElementById("addressError");
    if (addressInput.value.trim() === "") {
      setError(addressInput, addressMsg, " *Address is required");
    } else {
      clearError(addressMsg);
    }

    // City
    let cityInput = document.getElementById("City");
    let cityMsg = document.getElementById("cityError");
    if (cityInput.value.trim() === "") {
      setError(cityInput, cityMsg, " *City is required");
    } else {
      clearError(cityMsg);
    }

    // Province
    let provinceInput = document.getElementById("Province");
    let provinceMsg = document.getElementById("provinceError");
    if (provinceInput.value === "Choose Province") {
      setError(provinceInput, provinceMsg, " *Please select province");
    } else {
      clearError(provinceMsg);
    }

    // Postal Code
    let zipInput = document.getElementById("inputZip");
    let zipMsg = document.getElementById("zipError");
    if (zipInput.value.trim() === "") {
      setError(zipInput, zipMsg, " *Postal code is required");
    } else {
      clearError(zipMsg);
    }

    // Hostel
    let hostelInput = document.getElementById("hostel");
    let hostelMsg = document.getElementById("hostelError");
    if (hostelInput.value === "Choose Hostel") {
      setError(hostelInput, hostelMsg, " *Please select hostel");
    } else {
      clearError(hostelMsg);
    }

    if (formIsValid) {
      alert("Form successfully validated and ready to submit!");
    }
  });
