import { PasswordChecker } from "../src/passwordChecker.js";

describe("Mininum 8 character", function () {
   
    it("should return 'good' when the password is >= 8", function () {
        const password = "password";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("good");
    });

    it("should return 'bad' when the password is < 8", function () {    
        const password = "pass";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("bad");
    });
});

describe("Special character", function () { 

    it("should return 'good' when the password contains special character", function () {
        const password = "password@";

        let result = new PasswordChecker().specialCharacter(password);

        expect(result).toBe("good");
    });

});

