const inputs = document.querySelectorAll(".otp-input");
const otpForm = document.getElementById("otp-form");
const submitBtn = document.getElementById("submit-btn");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.target.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
        checkOTP();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && !e.target.value) {
            inputs[index - 1].focus();
        }
    });
});

function checkOTP() {
    let otp = "";
    inputs.forEach((input) => otp += input.value);
    if (otp.length === 6) {
        otpForm.submit(); 
    }
}

function submitOTP() {
    otpForm.submit();
}