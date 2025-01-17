export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8 ? "good length" : "bad length";
    }

    specialCharacter(password) {
        if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            return "countain special character";
        }
        if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            return "does not countain special character";
        }
    }

}