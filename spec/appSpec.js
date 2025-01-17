import { PasswordChecker } from "../src/passwordChecker.js";

// Test suite for minimum 8 characters requirement
describe("Mininum 8 character", function () {
    // Test case for password length >= 8
    it("should return 'good' when the password is >= 8", function () {
        const password = "password";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("good length");
    });

    // Test case for password length < 8
    it("should return 'bad' when the password is < 8", function () {
        const password = "pass";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("bad length");
    });
});

// Test suite for special character requirement
describe("Special character", function () {
    // Test case for password containing special character
    it("should return 'contains special character' when the password contains special character", function () {
        const password = "password@";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe("contains special character");
    });

    // Test case for password not containing special character
    it("should return 'does not contains special character' when the password does not contain special character", function () {
        const password = "password";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe("does not countains special character");
    });
});

// Test suite for minimum one number requirement
describe("Minimum one number", function () {
    // Test case for password containing a number
    it("should return 'contains number' when the password contains number", function () {
        const password = "password1";

        let result = new PasswordChecker().minimumOneNumber(password);

        expect(result).toBe("contains number");
    });

    // Test case for password not containing a number
    it("should return 'does not contain number' when the password does not contain number", function () {
        const password = "password";

        let result = new PasswordChecker().minimumOneNumber(password);

        expect(result).toBe("does not contain number");
    });
});

// Test suite for not containing 'IPL' requirement
describe("Not contains IPL", function () {
    // Test case for password containing 'IPL'
    it("should return 'contains IPL' when the password contains IPL", function () {
        const password = "passwordIPL";

        let result = new PasswordChecker().notContainsIPL(password);

        expect(result).toBe("contains IPL");
    });

    // Test case for password not containing 'IPL'
    it("should return 'does not contain IPL' when the password does not contain IPL", function () {
        const password = "password";

        let result = new PasswordChecker().notContainsIPL(password);

        expect(result).toBe("does not contain IPL");
    });
});

// Test suite for overall password verification
describe("Verify password", function () {
    // Test case for valid password
    it("should return 'good password' when the password is valid", function () {
        const password = "password@1";

        let result = new PasswordChecker().verifyPassword(password);

        expect(result).toBe("good password");
    });

    // Test case for invalid password
    it("should return 'bad password' when the password is invalid", function () {
        const password = "password";

        let result = new PasswordChecker().verifyPassword(password);

        expect(result).toBe("bad password");
    });
});
