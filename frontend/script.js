const modal = document.getElementById("auth-modal");
const formContainer = document.getElementById("form-container");
const toggleFormText = document.getElementById("toggle-form");
const formErrorTextContainer = document.getElementById("error-text");

function openModal(mode = 'signup') {
  modal.classList.remove("hidden");
  showForm(mode);
}

function closeModal() {
  modal.classList.add("hidden");
}

function showFormError(message) {
    formErrorTextContainer.innerText = message;
}

function showForm(mode) {
  showFormError("");
  if (mode === "signup") {
    formContainer.innerHTML = `
      <h2>Register</h2>
      <form onsubmit="handleSignup(event)">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <select name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    `;
    toggleFormText.innerHTML = `Already have an account? <span onclick="showForm('login')">Login</span>`;
  } else {
    formContainer.innerHTML = `
      <h2>Login</h2>
      <form onsubmit="handleLogin(event)">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    `;
    toggleFormText.innerHTML = `Don't have an account? <span onclick="showForm('signup')">Register</span>`;
  }
}

async function handleSignup(event) {
    try {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const state = await response.json();

        if (state.error) {
            showFormError(state?.message);
        } else {
            alert("Signed up successfully! Please use login form to access aquarium!");
            closeModal();
        }
    } catch (e) {
        alert("Something went wrong!!");
    }
}

async function handleLogin(event) {
    try {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const state = await response.json();

    if (!state.success) {
        showFormError(state?.message);
    } else {
        window.location.pathname = '/aquarium';
    }
} catch (e) {
        alert("Something went wrong!!");
}
}

const facts = [
  "Octopuses have three hearts!",
  "Fish sleep with their eyes open.",
  "Your digital fish remember you!",
  "Some species change color when happy.",
  "Tap a fish and it may follow your finger!"
];

let factIdx = 0;
setInterval(() => {
    const factContainer = document.getElementById("fun-fact");
    if (factContainer) {

        factContainer.textContent = facts[factIdx % facts.length];
        factIdx++;
    }
}, 3000);
