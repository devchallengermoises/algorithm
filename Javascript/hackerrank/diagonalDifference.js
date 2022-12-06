/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer. */


function diagonalDifference(arr) {    
    const n = arr.length;
    let d1 = 0, d2 = 0;
    
    for (let i = 0; i < n; i++)
    {
        d1 += arr[i][i]; 
        d2 += arr[n-i-1][i];
    }
    
    return Math.abs(d1 - d2);
    
}