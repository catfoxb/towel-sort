module.exports = function towelSort(matrix) {

    if (!Array.isArray(matrix)) return [];

    matrix.forEach((array, index) => {
        if (index % 2 !== 0) {
            array.reverse();
        }
    });

    return matrix.flat();
};
