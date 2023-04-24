// The algorithm that implements the minimum heap based on the array 
// 基于数组的最小堆的实现算法
class Minheap () {
    constructor () {
        this.heap = [];
    }
    // 获取父节点的索引
    getParentIndex (index) {
        return (index - 1) >> 1;
    };
    // 获取左节点的索引
    getLeftIndex (index) {
        return index * 2 + 1;
    }
    // 获取右节点的索引
    getRightIndex (index) {
        return index * 2 + 2;
    }
    // 交换两个节点的值
    swap (index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    // 上移操作
    shiftUp (index) {
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    // 下移操作
    shiftDown (index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    // 插入操作
    insert (value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }  
    // 删除堆顶操作
    pop () {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    // 获取堆顶操作
    peek () {
        return this.heap[0];
    }
    // 获取堆的大小
    size () {
        return this.heap.length;
    }
    
}