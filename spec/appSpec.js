import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker", function () {
   
    it("should return 'good' when the password is >= 8", function () {
        const password = "password";

        let result = new PasswordChecker().minimum8Characters(password);

        expect(result).toBe("good");
    });

});
