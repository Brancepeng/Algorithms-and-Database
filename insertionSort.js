/* 
插入排序工作原理:构建一个有序数列(一开始数组长度为1,只给定一个元素),对于未排序数据,
在已排序数列中从后向前扫描,找到相应位置然后插入.
*/
/* 算法步骤:
1.将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2.从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
*/

/* 
 示例 :
输入： nums = [7,3,5,2,1,3,1,8]

输出： [1, 1, 2, 3, 3, 5, 7, 8] 
*/

/* @paramter {number[]} nums */
var insertionSort = function (nums) {
    for (i = 1; i < nums.length; i++) {//让我们阅读第一个数值,假设它已经位于正确的位置,因为没有其他值可以与他相比较.只要小于数组的长度,我们就从第二个索引开始;
        //现在我们将当前值存储在一个名为current的变量中,然后将其设置为nums[i]的值.
        var current = nums[i];
        //我们需要另一个循环来查看nums[i]之前的所有值,若果他们更大,我们需要将它向右移动.
        //可以用for循环或者while循环,这里while更好.
        //令j=i-1;从后向前,由i-1开始,循环nums[i]之前的所有值,如果我们在该索引处的值大于the current,
        //那么我们需要将此值向右移动,所以我们将索引(j+1)处的值设置为索引j处的值.然后减少j;
        var j = i - 1;
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        //在这个while循环后,所有比当前值更大的值都会向右移动.
        //最后我们可以将当前值存储在索引j+1处;
        nums[j + 1] = current;
    }
    return nums;
}
//写一个插入算法;
//1.给定一个无序数组
//2.将这个无序数组排序
//3.时间复杂度为N^2
//4.空间复杂度为1
//5.稳定排序
//6.原地排序
//7.插入排序的前提是无序数组
//8.插入排序的思想是构建一个有序序列,对于未排序数据,在已排序序列中从后向前扫描,找到相应位置插入

var insertSort = function (nums){
    for(var i = 1; i < nums.length; i++){
        var current = nums[i];
        var j = i - 1;
        while(j >= 0 && nums[j] > current){
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = current;
    }
    return nums;
}

var testInsertSort = function (){
    var nums = [7,3,5,2,1,3,1,8];
    var result = insertSort(nums);
    console.log(result);
}


//优化后的代码
/**
 * Sorts an array in ascending order using insertion sort.
 * @param {number[]} nums - The input array to be sorted.
 * @returns {number[]} - The sorted array in ascending order.
 */
function insertionSort(nums) {
    if (!Array.isArray(nums)) {
      throw new TypeError('Expected an array.');
    }
    
    if (nums.length < 2) {
      return nums;
    }
  
    for (let i = 1; i < nums.length; i++) {
      const current = nums[i];
      let j = i - 1;
  
      while (j >= 0 && nums[j] > current) {
        nums[j + 1] = nums[j];
        j--;
      }
  
      nums[j + 1] = current;
    }
  
    return nums;
  }
  
  console.log(insertionSort([7, 3, 5, 2, 1, 3, 1, 8]));