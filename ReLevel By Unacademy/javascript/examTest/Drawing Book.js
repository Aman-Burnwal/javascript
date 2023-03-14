function pageCount(n, p) {
    // Write your code here


    // total numbers of page turn from front
    const requireFrontMove = Math.floor(p / 2);

    // here Math.floor will return minimum
    // p is number of page we need to reach
    // and we are deviding by 2 because from 1 turn it reaches 2 pages;


    // total pages = toatal number of pages devided by 2;
    const totalPages = Math.floor(n / 2);

    // suppose we have 11 pages and we need to move to 7nth page from back;

    // page number of        1,   23,   45,   67,     89,    1011
    // moving from back       5    4     3     3      1

    // total page = 5;
    // p = 7;
    // front move 3;

    // so 5 - 3 = 2;
    const requireBackMove = totalPages - requireFrontMove;

    // now we will return minimum in both
    return Math.min(requireFrontMove, requireBackMove);


}