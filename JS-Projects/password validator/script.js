const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    {regex: /.{8,}/, index: 0},          // Minimum of 8 characters
    {regex: /[0-9]/, index: 1},          // At least one number
    {regex: /[a-z]/, index: 2},          // At least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3},   // At least one special character
    {regex: /[A-Z]/, index: 4}           // At least one uppercase letter
];

passwordInput.addEventListener("keyup",(e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    })
})

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    // if (passwordInput.type==="password") {
    //     passwordInput.type = "text"
    // } else {
    //     passwordInput.type = "password"
    // }
    // OR
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});