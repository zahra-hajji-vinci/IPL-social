export class PasswordChecker {

    minimum8Characters(password) {
        return password.length >= 8 ? "good length" : "bad length";
    }

    specialCharacter(password) {
        return password.match(/[!@#$%^&*(),.?":{}|<>]/) ? "contains special character" : "does not countains special character";
    }

    minimumOneNumber(password) {
        return password.match(/[0-9]/) ? "contains number" : "does not contain number";
    }

    notContainsIPL(password) {
        if (password.match(/ipl/i)) {
            return "contains IPL";
        }
        return("does not contain IPL");
    }
}