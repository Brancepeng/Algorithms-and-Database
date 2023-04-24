/*二分查找法
给定一个有序数组nums,查找其中一个元素值为target的值,返回这个值的索引.
*/

/* 二分查找
n/2,n/4,....,n/2^k,
N/2^k = 1,
k = logN.
二分查找时间复杂度为logN.
*/
//写一个二分查找算法
//1.给定一个有序数组   2.给定一个目标值
//3.找到这个目标值在数组中的索引
//4.如果没有找到,返回-1
//5.如果找到,返回索引
//6.时间复杂度为logN
//7.空间复杂度为1
//8.二分查找的前提是有序数组
var binarySearch = function(nums,target){  //nums是一个有序数组
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = left + (right - left)/2;
        if(nums[mid] === target){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}

var testBinarySearch = function (){

    var nums = [1,2,3,4,5,6,7,8,9,10];
    var target = 10;
    var result = binarySearch(nums,target);
    console.log(result);
};


//优化后的代码
/**
 * 二分查找算法
 * @param {array} nums - 已排序的数组
 * @param {number} target - 目标值
 * @returns {number} 如果目标值在数组中存在，则返回其索引；否则返回 -1。
 */
function binarySearch(nums, target) {
  // 输入参数类型和边界检查
  if (!Array.isArray(nums) || nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  // 注意 mid 要取整数部分
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// 测试
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 输出 9