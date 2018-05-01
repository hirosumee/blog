title: 'Chứng Khoán '
author: Ginne
tags:
  - Sort
categories:
  - Algorithm
date: 2018-04-30 22:30:00
---
# Bài toán chứng khoán

## Đề bài :

 > Cho trước lịch sử giao dịch của một mã chứng khoán trong n ngày. Hãy xác định k1 ngày có giá thấp nhất và k2 ngày có giá cao nhất.

## Input :

 > Mỗi bộ test gồm 2 dòng
Dòng 1 ghi 3 số n, k1, k2 với n<=106. k1+k2<=n và k1,k2<=100.
Dòng tiếp theo ghi n số nguyên theo thứ tự là giá của mã chứng khoán trong n ngày liên tiếp.
Bộ test cuối cùng chứa 3 số 0

## Output :

 >Với mỗi bộ test, ghi ra màn hình 3 dòng gồm:
Dòng 1 ghi số thứ tự bộ test
Dòng 2 ghi k1 ngày có giá thấp nhất theo thứ tự các ngày tăng dần. Nếu có nhiều danh sách cho kết quả giống nhau thì chọn danh sách thấp nhất theo thứ tự từ điển.
Dòng 3 ghi k2 ngày có giá cao nhất theo thứ tự các ngày giảm dần. Nếu có nhiều danh sách cho kết quả giống nhau thì chọn danh sách cao nhất theo thứ tự từ điển.

## Example :

| Input                | Output |
| -------------------- | ------ |
| 10 3 2               | Case 1 |
| 1 2 3 4 5 6 7 8 9 10 | 1 2 3  |
| 10 3 2               | 10 9   |
| 10 9 8 7 6 5 4 3 2 1 | Case 2 |
| 0 0 0                | 8 9 10 |
|                      | 2 1    |

## Solution :
 Bài này có khá nhiều cách giải . Nhưng mình sẽ giải theo cách nhanh gọn nhất .

1. Sắp xếp mảng theo chỉ số  chứng khoán ( từ nhỏ đến lớn ) . Bạn chú ý nếu  chỉ số  bằng nhau thì ta sẽ xét tiếp đến ngày tăng dần .
2. Bạn có thể chia thành 2 mảng con hoặc duyệt trực tiếp trên mảng mẹ đều được
3. Sắp xếp mảng thứ nhất ( k1 ngày nhỏ nhất ) theo ngày tăng
4. Sắp xếp mảng thứ 2 ( k2 ngày lớn nhất ) theo ngày giảm

## Code :
 Đây là mã nguồn mình viết : ngôn ngữ C++ .

 [Link SPOJ ](http://www.spoj.com/PTIT/problems/PTIT123C/)
 {% codeblock lang:C %}
 #include<bits/stdc++.h>
using namespace std;
struct ck{
    int value;
    int date;
};
bool sort_value(ck a,ck b){
    if(a.value==b.value){
        if(a.date<b.date){
            return true;
        }
    } else if(a.value < b.value){
        return true;
    }
    return false;
}
bool sort_date_greater(ck a,ck b){
    return a.date<b.date;
}
bool sort_date_less(ck a,ck b){
    return a.date>b.date;
}
ck arr[999999],a[100000],b[100000];
int main()
{


    int test=0;
    while(true){
        int n,k1,k2;
        cin>>n>>k1>>k2;

        if(n==0&&k1==0&&k2==0){
            break;
        }
        cout<<"Case "<<++test<<endl;
        for(int i=0;i<n;i++){
            cin>>arr[i].value;
            arr[i].date=i;
        }

        sort(arr,arr+n,sort_value);
        copy(arr,arr+k1,a);
        copy(arr+n-1-k2,arr+n,b);
        sort(a,a+k1,sort_date_greater);
        sort(b,b+k2,sort_date_less);
        for(int i=0;i<k1;i++){
            cout<<a[i].date+1<<" ";
        }
        cout<<endl;
        for(int i=0;i<k2;i++){
            cout<<b[i].date+1<<" ";
        }
        cout<<endl;
    }
}
 {% endcodeblock %}