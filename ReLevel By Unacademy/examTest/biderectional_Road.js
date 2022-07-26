/*
Amy went to a state which has N cities, numbered from 1 to N.
There is bidirectional road connecting city X and Y if: X-Y>=K.
She has Q queries. In each query she has two integers A and B and she wants to know if 
there exists a path from city A to cityB
Help her by answering her queries. You are given T Independent test cases.


Constraints
1<=T<=10
1<=N<=10 ^7
1<=Q<=10^5
1< K < N


All input values are integers.

Input Format

First-line contains T.
First line of each test case consists of three space separated integers N, K and Q. Next Q, lines of each test case 
consist of two space separated

integers A and B. (1<=A, B<=N)

Output Format
For each test case, print in a newline for each query 1 if a path exits from city A to city Botherwise print 0
For each test case, print in a newline for each query: 1 if a path exits from city A to city B otherwise print 0.

Sample Input 1
1
3 2 2
1 2
1 3

Sample Output 1
0
1

*/