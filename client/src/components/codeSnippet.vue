<template>
    <div>
        <div v-for="problem in problems" :key="problem.id">
            <h4 class="mt-5"><b>{{ problem.name }}</b></h4>
            <pre><p class="mt-2"><b>The Problem:</b> {{ problem.description }}</p></pre>

            <div class="snippet">
                <pre><p>{{ problem.code }}</p></pre>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
    name: 'codeSnippet',
    data () {
        return {
            problems: [
                {
                    id: 7,
                    name: 'Find Minimum in Rotated Sorted Array II',
                    description: `
                    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

                    (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

                    Find the minimum element.

                    The array may contain duplicates.
                    `,
                    code: String.raw`
                    var findMin = function(nums) {
                        let max = nums[0];
                        
                        for (let i = 1; i < nums.length; i++) {
                            if (nums[i] < max) {
                                max = nums[i];
                            }
                        }
                        
                        return max;
                    };
                    `
                },
                {
                    id: 6,
                    name: 'Single Number II',
                    description: `
                    Given a non-empty array of integers, every element appears three times except for one, 
                    which appears exactly once. Find that single one.

                    Note:

                    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
                    `,
                    code: String.raw`
                    var singleNumber = function(nums) {
                        let obj = {};
                        
                        nums.forEach(num => {
                            if (obj[num]) {
                                obj[num]++;
                            }else {
                                obj[num] = 1;
                            }
                        });
                        
                        for (let key in obj) {
                            if (obj[key] === 1) return key;
                        }
                    };
                    `
                },
                {
                    id: 5,
                    name: 'Best Time to Buy and Sell Stock II',
                    description: `
                    Say you have an array for which the ith element is the price of a given stock on day i.

                    Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
                    (i.e., buy one and sell one share of the stock multiple times).

                    Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
                    `,
                    code: String.raw`
                    var maxProfit = function(prices) {
                        let profit = 0;
                        
                        for (let i = 0; i < prices.length - 1; i++) {
                            if (prices[i] < prices[i + 1]) {
                                profit += prices[i + 1] - prices[i]        
                            }
                        }
                        
                        return profit;
                    };
                    `
                },
                {
                    id: 4,
                    name: 'Reverse String',
                    description: `
                    Write a function that reverses a string. The input string is given as an array of characters char[].

                    Do not allocate extra space for another array, 
                    you must do this by modifying the input array in-place with O(1) extra memory.

                    You may assume all the characters consist of printable ascii characters.
                    `,
                    code: String.raw`
                    var reverseString = function(s) {
                        return s.reverse();
                    };
                    `
                },
                {
                    id: 3,
                    name: 'Jewels and Stones',
                    description: `
                    You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
                    Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

                    The letters in J are guaranteed distinct, and all characters in J and S are letters. 
                    Letters are case sensitive, so "a" is considered a different type of stone from "A"
                    `,
                    code: String.raw`
                    var numJewelsInStones = function(J, S) {
                        let count = 0;
                        
                        [...S].forEach(char => {
                            if (J.indexOf(char) !== -1) count++;
                        });
                        
                        return count;
                    };
                    `
                },
                {
                    id: 2,
                    name: 'Subtract the Product and Sum of Digits of an Integer',
                    description: `
                    Given an integer number n, return the difference between the product of its digits and the sum of its digits.
                    `,
                    code: String.raw`
                    var subtractProductAndSum = function(n) {
                        let product = 1;
                        let sum = 0;
                        
                        String(n).split('').forEach(num => {
                            product *= parseInt(num);
                            sum += parseInt(num);
                        })
                        
                        return product - sum;
                        
                    };
                    `
                },
                {
                    id: 1,
                    name: 'Defanging an IP Address',
                    description: `
                    Given a valid (IPv4) IP address, return a defanged version of that IP address. 
                    A defanged IP address replaces every period "." with "[.]".`,
                    code: String.raw`
                    var defangIPaddr = address => address.replace(/\./g, '[.]')
                    `
                },
            ]
        }
    }
}

</script>

<style scoped>
    .snippet {
        background-color: #C6CCD1;
    }
</style>