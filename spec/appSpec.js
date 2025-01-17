import { PasswordChecker } from "../src/passwordChecker.js";

describe("Mininum 8 character", function () {
   
    it("should return 'good' when the password is >= 8", function () {
        const password = "password";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("good length");
    });

    it("should return 'bad' when the password is < 8", function () {    
        const password = "pass";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("bad length");
    });
});

describe("Special character", function () { 

    it("should return 'countain special character' when the password contains special character", function () {
        const password = "password@";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe("countain special character");
    });

    it("should return 'does not countain special character' when the password does not contain special character", function () {
        const password = "password";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe('does not countain special character');
    });

});

