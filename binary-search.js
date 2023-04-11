/*二分查找法
给定一个有序数组nums,查找其中一个元素值为target的值,返回这个值的索引.
*/

/* @parameter {number[]} nums
@parameter target
@return {int[]} index  */

var binarySearch = function(nums,target){
    let left = 0;
    let right = nums.length - 1 ;
    while(left <= right){//while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环;
        let mid = left + (left + right)/2;
        if(nums[mid] === target){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
}
/* 二分查找
n/2,n/4,....,n/2^k,
N/2^k = 1,
k = logN.
二分查找时间复杂度为logN.
*/