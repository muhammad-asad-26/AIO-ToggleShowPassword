import "./ui/ToggleShowPassword.css";
import defaultEyeClosedIcon from "./assets/eye_slash.svg";
import defaultEyeOpenIcon from "./assets/eye.svg";

export default function ToggleShowPassword({ eyeOpen, eyeClosed }) {
    const item = `input[type="password"]`;

    function handlePasswordToggle() {
        // eslint-disable-next-line consistent-this
        const button = this;
        const inputType = button.previousSibling.getAttribute("type");
        const input = button.previousSibling;

        if (inputType === "password") {
            input.setAttribute("type", "text");
            button.classList.remove("show-val");
            button.classList.add("hide-val");
        } else {
            input.setAttribute("type", "password");
            button.classList.add("show-val");
            button.classList.remove("hide-val");
        }
    }

    function waitFor(elementClass, callback) {
        const observer = new MutationObserver(() => {
            if (document.querySelector(elementClass)) {
                observer.disconnect();
                callback();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    function handlePasswords() {
        const passwords = [...document.querySelectorAll(`input[type="password"]`)];
        passwords.forEach(password => {
            const parent = password.parentNode;
            if (!parent.classList.contains(".toggle-password")) {
                parent.classList.add("toggle-password");
                parent.insertAdjacentHTML(
                    "beforeend",
                    `<button type="button" class="toggle-password-button show-val" tabindex="-1">
                        <img src=${eyeOpen ? eyeOpen.value.uri : defaultEyeOpenIcon} class="icon-hide" />
                        <img src=${eyeClosed ? eyeClosed.value.uri : defaultEyeClosedIcon} class="icon-show" />
                    </button>`
                );

                const toggleBtn = document.querySelector(".toggle-password-button");
                toggleBtn.addEventListener("click", handlePasswordToggle);
            }
        });
    }

    waitFor(item, () => handlePasswords());
    return null;
}
