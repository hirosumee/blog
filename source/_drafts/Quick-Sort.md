title: Quick Sort
author: Ginne
tags:
  - Algorithm
  - Quicksort
categories:
  - Algorithm
date: 2018-04-06 22:17:00
---
## QuickSort
Bắt đầu series giải thuật . Trong bài viết này mình sẽ giới thiệu về  thuật toán : [Quicksort](https://vi.wikipedia.org/wiki/S%E1%BA%AFp_x%E1%BA%BFp_nhanh)

### QuickSort là gì ?
Quick sort là : 
+ là một kiểu sắp xếp phân chia ( part sort )
+ là một thuật toán chia để trị ( conquer ) giống với Merge Sort

### Phân tích :
Ý tưởng của quick sort trình bày như sau :   
+ Mang tư tưởng  chia để trị  nên khác với các thuật toán sắp xếp khác  ta chia danh sách cần sắp xếp a[1,n] thành 2 phần bằng nhau.
+ 2 phần này được xác định bởi so sánh các phần tử của danh sách với một phần tử chốt gọi là pivot hoặc key .
+ Ví dụ :với sắp xếp dãy tăng dần
	+  những phần tử nhỏ hơn hoặc bằng pivot sẽ được đưa về bên trái .
	+  ngược lại về bên phải.
+ Tiếp tục lặp lại cho đến khi các danh sách con có độ dài bằng 1.

### Cách chọn pivot :

 Tùy theo các chọn pivot mà thuật toans quicksort có nhiều biến thể khác nhau .Dưới đây là 1 số cách chọn :
+ Phần tử ở đầu.
+ Phần tử ở cuối.
+ Phần tử ở giữa.
+ Phần tử ngẫu nhiên ( ta sử dụng hàm random để chọn ).
    
### Cách chia : 
Cách chia hiệu quả nhất là :
+ Duyệt từ  2 đầu của dãy .
+ Tìm phần tử đầu tiên không thỏa mãn quy luật ở cả 2 đầu .
+ Đảo giá trị của 2 phần tử này cho nhau .
+ Lặp đến khi 2 đầu gặp nhau .

{% asset_img quickSort.png quicksort %}

### Mã nguồn :

{% codeblock lang:python %}
arr = [1, 3, 4, 2, 5, 6, 4, 7]


# enter input data
def quicksort(left, right):
    if left < right:
        pivot = int((left + right) / 2)
        x = left
        y = right
        while x <= y:
            while arr[x] < arr[pivot]:
                x += 1
            while arr[y] > arr[pivot]:
                y -= 1
            if x <= y:
                arr[x], arr[y] = arr[y], arr[x]
                x += 1
                y -= 1
        # if left < y:
        #     quicksort(left, y)
        # if right > x:
        #     quicksort(x, right)
        if left < y:
            quicksort(left, y)
            quicksort(y+1, right)


quicksort(0, len(arr) - 1)

print(arr)

{% endcodeblock %}