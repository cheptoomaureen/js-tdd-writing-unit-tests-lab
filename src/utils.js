// Your code here
export function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const processedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the processed word is equal to its reverse
    return processedWord === processedWord.split('').reverse().join('');
}
