async function shellSort(arr, size, bars) {
  let swaps = 0; // store the swap count
  let comparisons = 0;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < size; i += 1) {
      let temp = arr[i];
      let j;
      updateColor(bars, i, comparing_ele_color);
      await waitforme(delay);

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        updateColor(bars, j, traverse_color);
        comparisons++;
        updateComps(comparisons);
        await waitforme(Math.max(delay - 100, 50));

        arr[j] = arr[j - gap];
        swaps++;
        updateSwaps(swaps);
        updateColor(bars, j - gap, comparing_ele_color);
        updateColor(bars, j, "red");
        await waitforme(delay);
      }

      arr[j] = temp;
      updateColor(bars, j, sorted_color);
      await waitforme(delay);
    }
  }
}
