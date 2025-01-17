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

    it("should return 'contains special character' when the password contains special character", function () {
        const password = "password@";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe("contains special character");
    });

    it("should return 'does not ccontains special character' when the password does not contain special character", function () {
        const password = "password";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe('does not countains special character');
    });

});

describe("Minimum one number", function () {

    it("should return 'contains number' when the password contains number", function () {
        const password = "password1";

        let result = new PasswordChecker().minimumOneNumber(password);

        expect(result).toBe("contains number");
    });

    it("should return 'does not contain number' when the password does not contain number", function () {
        const password = "password";

        let result = new PasswordChecker().minimumOneNumber(password);

        expect(result).toBe("does not contain number");
    });

});

describe("Not contains IPL", function () {

    it("should return 'contains IPL' when the password contains IPL", function () {
        const password = "passwordIPL";

        let result = new PasswordChecker().notContainsIPL(password);

        expect(result).toBe("contains IPL");
    });

    it("should return 'does not contain IPL' when the password does not contain IPL", function () {
        const password = "password";

        let result = new PasswordChecker().notContainsIPL(password);

        expect(result).toBe("does not contain IPL");
    });

});

describe("Verify password", function () {

    it("should return 'good password' when the password is valid", function () {
        const password = "password@1";

        let result = new PasswordChecker().verifyPassword(password);

        expect(result).toBe("good password");
    });

    it("should return 'bad password' when the password is invalid", function () {
        const password = "password";

        let result = new PasswordChecker().verifyPassword(password);

        expect(result).toBe("bad password");
    });
});

