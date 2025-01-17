
export class PasswordChecker {

    minimum8Characters(password) {
        if (password.length >= 8) {
            return "good";
        }
    }


}