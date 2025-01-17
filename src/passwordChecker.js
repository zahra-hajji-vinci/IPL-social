export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8 ? "good" : "bad";
    }

    specialCharacter(password) {
        if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            return "good";
        }
    }

}