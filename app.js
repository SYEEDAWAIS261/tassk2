function isPalindrome(str) {
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
            cleanStr += str.charAt(i).toLowerCase();
        }
    }

    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("12321")); // true






function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

// Test cases
console.log(findMinMax([1, -10, 45, 32, 89, 2])); // {min: -10, max: 89}
console.log(findMinMax([5, 5, 5, 5])); // {min: 5, max: 5}
console.log(findMinMax([99])); // {min: 99, max: 99}



function findMissingNumber(series) {
    const expectedSum = ((series.length + 1) / 2) * (2 * 11 + series.length * 1);
    let actualSum = 0;
    for (let num of series) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}

// Test cases
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 13 (expected to show only one missing number)
console.log(findMissingNumber([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])); // 0 (no missing numbers)
