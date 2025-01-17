export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8 ? "good length" : "bad length";
    }

    specialCharacter(password) {
        return password.match(/[!@#$%^&*(),.?":{}|<>]/) ? "contains special character" : "does not countains special character";
    }

    minimumOneNumber(password) {
        if(password.match(/[0-9]/)) {
            return "contains number";
        }
        if(password.match(/[a-zA-Z]/)) {
            return "does not contain number";
        }
    }
}