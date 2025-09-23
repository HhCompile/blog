// 输入：nums1 = [1,2,3], nums2 = [2,5,6]
// 输出：[1,2,2,3,5,6]
// 函数示范：const merge = function (nums1, nums2) {
// // 返回合并后的数组
//   return result
// }

// const merge = function (nums1, nums2) {
//   const result = nums1.concat(nums2)

//   const newArray = result.sort((a, b) => a - b)

//   // 返回合并后的数组
//   return newArray
// }

// const nums1 = [1, 2, 3]
// const nums2 = [2, 5, 6]

// const newArray = merge(nums1, nums2)

// console.log('当前行：', 32, '[ newArray ] ==>', newArray)

/**
 *
 *  输入： arr: [1, [2, [3 ,4], 5], 6]
 *
 *  输出：一个扁平化后的array，例如：[1, 2, 3 ,4, 5, 6]
 *
 **/
s
function newArray(arr) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (!Array.isArray(element)) {
      newArr.push(element)
    } else {
      newArr.push(...newArray(element))
    }
  }

  return newArr
}

const num1 = [1, [2, [3, 4], 5], 6]

console.log(newArray(num1), 1)
