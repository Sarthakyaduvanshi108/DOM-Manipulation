document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Password strength regex: कम से कम 8 characters, 1 uppercase, 1 number, 1 special char
  const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!strongPassword.test(password)) {
    message.innerHTML = "❌ Password must be 8+ chars, include uppercase, number & special char.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.innerHTML = "❌ Passwords do not match!";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "✅ Registration successful!";
  message.style.color = "green";
});

// Dynamic feedback on password strength
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  if (password.length < 6) {
    message.innerHTML = "⚠️ Weak password";
    message.style.color = "orange";
  } else {
    message.innerHTML = "💪 Stronger password";
    message.style.color = "blue";
  }
});
