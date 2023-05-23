class Solution {
    // Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n) {
        // Calculate the average value per unit weight for each item.
        let avg = [];
        for (let i = 0; i < n; i++) {
            let w = arr[i].weight;
            let v = arr[i].value;
            avg[i] = v / w;
        }

        // Sort the items based on the average value per unit weight.
        this.merge(avg, 0, n - 1, arr);

        let max = 0;
        for (let i = 0; i < n && W > 0; i++) {
            let weight = arr[i].weight;
            let value = arr[i].value;

            if (W > weight) {
                // Add the entire item to the knapsack.
                W -= weight;
                max += value;
            } else {
                // Add a fraction of the item to the knapsack.
                max += avg[i] * W;
                W = 0;
            }
        }

        return max;
    }

    // Function to merge sort the average values array.
    merge(avg, l, r, arr) {
        if (l >= r) return;

        let mid = l + Math.floor((r - l) / 2);

        this.merge(avg, l, mid, arr);
        this.merge(avg, mid + 1, r, arr);

        this.mergeArray(avg, l, mid, r, arr);
    }

    // Function to merge two subarrays in the merge sort.
    mergeArray(avg, l, m, r, arr) {
        let leftLen = (m - l) + 1;
        let rightLen = r - m;

        let k = l;

        const left = [];
        const right = [];
        const wr = [];
        const wl = [];

        // Copy the left subarray of average values and corresponding weights.
        for (let i = 0; i < leftLen; i++) {
            left[i] = avg[i + l];
            wl[i] = arr[i + l];
        }

        // Copy the right subarray of average values and corresponding weights.
        for (let i = 0; i < rightLen; i++) {
            right[i] = avg[i + m + 1];
            wr[i] = arr[i + m + 1];
        }

        let i = 0;
        let j = 0;

        // Merge the left and right subarrays in sorted order.
        while (i < leftLen && j < rightLen) {
            if (left[i] < right[j]) {
                avg[k] = right[j];
                arr[k] = wr[j];
                j++;
            } else {
                avg[k] = left[i];
                arr[k] = wl[i];
                i++;
            }
            k++;
        }

        // Copy the remaining elements from the left subarray.
        while (i < leftLen) {
            avg[k] = left[i];
            arr[k] = wl[i];
            i++;
            k++;
        }

        // Copy the remaining elements from the right subarray.
        while (j < rightLen) {
            avg[k] = right[j];
            arr[k] = wr[j];
            j++;
            k++;
        }
    }
}
