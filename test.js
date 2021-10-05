// A utility method to swap two numbers.
function swap(arr, a, b)
    {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

function sortInWave( arr, n)
    {
        // Traverse all even elements
        for (let i = 0; i < n; i+=2)
        {
            // If current even element
            // is smaller than previous
            if (i>0 && arr[i-1] > arr[i] )
                swap(arr, i-1, i);
   
            // If current even element
            // is smaller than next
            if (i<n-1 && arr[i] < arr[i+1] )
                swap(arr, i, i + 1);
        }

        return arr
    }
     
    let arr = [10, 90, 49, 2, 1, 5, 23];
    let n = arr.length;
    console.log(sortInWave(arr, n));
    
    // Time Complexcity ----> O(n)
    // Space Complexcity ---> O(1)





    