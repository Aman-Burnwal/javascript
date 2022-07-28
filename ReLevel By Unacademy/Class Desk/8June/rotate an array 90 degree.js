// Rotate a square matrix by 90 degrees in a clockwise

// direction without using any extra space.

// Logic:
// ● Square Cycle: In every iteration, the elements mat[i][j] top leftmost element, mat[j][n-1-i] top
// rightmost element, mat[n-1-i][n-1-j] bottom rightmost element, mat[n-1-j][i] bottom leftmost
// element, are getting rotated or swapped with their neighbors.
// ● There will be floor(N/2) square cycles in an NxN matrix. In each square cycle, we will swap
// corresponding elements while rotating in a clockwise direction.