// Your tests here
import { isPalindrome } from "../utils"; 

describe("isPalindrome()", () => {
    it("checks if word is a palindrome", () => {
        const word = "racecar";
        expect(isPalindrome(word)).toBe(true);
    });

    it("checks if word is not a palindrome", () => {
        const word = "car";
        expect(isPalindrome(word)).toBe(false);
    });
    const word = "test"
});
