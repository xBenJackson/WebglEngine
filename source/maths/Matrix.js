/*
    Matrix class
    Used to create and manipulate a matrix for webgl
*/

/* .. Create Matrix Class .. */
class Matrix {
    /*
        Constructor
        Creates a new matrix
        @returns new Matrix
    */
    constructor() {
        // Create list of elements in (this) matrix
        this.elements = new Float32Array( 16 );

        // Setup basic matrix
        this.elements[ 0 ]  = 1;
        this.elements[ 5 ]  = 1;
        this.elements[ 10 ] = 1;
        this.elements[ 15 ] = 1;

    };

    /*
        Transpose
        Transpose the values of a matrix
        @pram Matrix: the source matrix
        @returns void
    */
    transpose( matrix ) {
        // Set matrix to given matrix or (this)
        matrix = matrix || this;

        // Cache matrix values
        const element01 = matrix.elements[ 1 ];
        const element02 = matrix.elements[ 2 ];
        const element03 = matrix.elements[ 3 ];
        const element12 = matrix.elements[ 6 ];
        const element13 = matrix.elements[ 7 ];
        const element23 = matrix.elements[ 11 ];

        // Apply manipulation
        this.elements[ 0 ]  = matrix.elements[ 0 ];
        this.elements[ 1 ]  = matrix.elements[ 4 ];
        this.elements[ 2 ]  = matrix.elements[ 8 ];
        this.elements[ 3 ]  = matrix.elements[ 12 ];
        this.elements[ 4 ]  = element01;
        this.elements[ 5 ]  = matrix.elements[ 5 ];
        this.elements[ 6 ]  = matrix.elements[ 9 ];
        this.elements[ 7 ]  = matrix.elements[ 13 ];
        this.elements[ 8 ]  = element02;
        this.elements[ 9 ]  = element12;
        this.elements[ 10 ] = matrix.elements[ 10 ];
        this.elements[ 11 ] = matrix.elements[ 14 ];
        this.elements[ 12 ] = element03;
        this.elements[ 13 ] = element13;
        this.elements[ 14 ] = element23;
        this.elements[ 15 ] = matrix.elements[ 15 ];
    };

    /*
        Invert
        Inverts this matrix with another given matrix
        @pram Matrix: the source matrix
        @returns void
    */
    invert( matrix ) {
        // Set matrix to given matrix or (this)
        matrix = matrix || this;

        const b00 = matrix.elements[ 0 ]  * matrix.elements[ 5 ]  - matrix.elements[ 1 ]  * matrix.elements[ 4 ];
        const b01 = matrix.elements[ 0 ]  * matrix.elements[ 6 ]  - matrix.elements[ 2 ]  * matrix.elements[ 4 ];
        const b02 = matrix.elements[ 0 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 4 ];
        const b03 = matrix.elements[ 1 ]  * matrix.elements[ 6 ]  - matrix.elements[ 2 ]  * matrix.elements[ 5 ];
        const b04 = matrix.elements[ 1 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 5 ];
        const b05 = matrix.elements[ 2 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 6 ];
        const b06 = matrix.elements[ 8 ]  * matrix.elements[ 13 ] - matrix.elements[ 9 ]  * matrix.elements[ 12 ];
        const b07 = matrix.elements[ 8 ]  * matrix.elements[ 14 ] - matrix.elements[ 10 ] * matrix.elements[ 12 ];
        const b08 = matrix.elements[ 8 ]  * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 12 ];
        const b09 = matrix.elements[ 9 ]  * matrix.elements[ 14 ] - matrix.elements[ 10 ] * matrix.elements[ 13 ];
        const b10 = matrix.elements[ 9 ]  * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 13 ];
        const b11 = matrix.elements[ 10 ] * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 14 ];

        // Calculate the determinant
        let determinant = b00 * b11 -
                          b01 * b10 +
                          b02 * b09 +
                          b03 * b08 -
                          b04 * b07 +
                          b05 * b06;

        // If invalid determinant, return
        if (!determinant) { return; }

        // Flip determinant
        determinant = 1.0 / determinant;

        // Apply manipulation
        this.elements[ 0 ]  = (matrix.elements[ 5 ]  * b11 - matrix.elements[ 6 ]  * b10 + matrix.elements[ 7 ]  * b09) * determinant;
        this.elements[ 1 ]  = (matrix.elements[ 2 ]  * b10 - matrix.elements[ 1 ]  * b11 - matrix.elements[ 3 ]  * b09) * determinant;
        this.elements[ 2 ]  = (matrix.elements[ 13 ] * b05 - matrix.elements[ 14 ] * b04 + matrix.elements[ 15 ] * b03) * determinant;
        this.elements[ 3 ]  = (matrix.elements[ 10 ] * b04 - matrix.elements[ 9 ]  * b05 - matrix.elements[ 11 ] * b03) * determinant;
        this.elements[ 4 ]  = (matrix.elements[ 6 ]  * b08 - matrix.elements[ 4 ]  * b11 - matrix.elements[ 7 ]  * b07) * determinant;
        this.elements[ 5 ]  = (matrix.elements[ 0 ]  * b11 - matrix.elements[ 2 ]  * b08 + matrix.elements[ 3 ]  * b07) * determinant;
        this.elements[ 6 ]  = (matrix.elements[ 14 ] * b02 - matrix.elements[ 12 ] * b05 - matrix.elements[ 15 ] * b01) * determinant;
        this.elements[ 7 ]  = (matrix.elements[ 8 ]  * b05 - matrix.elements[ 10 ] * b02 + matrix.elements[ 11 ] * b01) * determinant;
        this.elements[ 8 ]  = (matrix.elements[ 4 ]  * b10 - matrix.elements[ 5 ]  * b08 + matrix.elements[ 7 ]  * b06) * determinant;
        this.elements[ 9 ]  = (matrix.elements[ 1 ]  * b08 - matrix.elements[ 0 ]  * b10 - matrix.elements[ 3 ]  * b06) * determinant;
        this.elements[ 10 ] = (matrix.elements[ 12 ] * b04 - matrix.elements[ 13 ] * b02 + matrix.elements[ 15 ] * b00) * determinant;
        this.elements[ 11 ] = (matrix.elements[ 9 ]  * b02 - matrix.elements[ 8 ]  * b04 - matrix.elements[ 11 ] * b00) * determinant;
        this.elements[ 12 ] = (matrix.elements[ 5 ]  * b07 - matrix.elements[ 4 ]  * b09 - matrix.elements[ 6 ]  * b06) * determinant;
        this.elements[ 13 ] = (matrix.elements[ 0 ]  * b09 - matrix.elements[ 1 ]  * b07 + matrix.elements[ 2 ]  * b06) * determinant;
        this.elements[ 14 ] = (matrix.elements[ 13 ] * b01 - matrix.elements[ 12 ] * b03 - matrix.elements[ 14 ] * b00) * determinant;
        this.elements[ 15 ] = (matrix.elements[ 8 ]  * b03 - matrix.elements[ 9 ]  * b01 + matrix.elements[ 10 ] * b00) * determinant;
    };

    /*
        Adjugate
        Calculates the adjugate of a matrix
        @pram Matrix: the source matrix
        @returns void
    */
    adjugate( matrix ) {
        const b00 = matrix.elements[ 0 ]  * matrix.elements[ 5 ]  - matrix.elements[ 1 ]  * matrix.elements[ 4 ];
        const b01 = matrix.elements[ 0 ]  * matrix.elements[ 6 ]  - matrix.elements[ 2 ]  * matrix.elements[ 4 ];
        const b02 = matrix.elements[ 0 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 4 ];
        const b03 = matrix.elements[ 1 ]  * matrix.elements[ 6 ]  - matrix.elements[ 2 ]  * matrix.elements[ 5 ];
        const b04 = matrix.elements[ 1 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 5 ];
        const b05 = matrix.elements[ 2 ]  * matrix.elements[ 7 ]  - matrix.elements[ 3 ]  * matrix.elements[ 6 ];
        const b06 = matrix.elements[ 8 ]  * matrix.elements[ 13 ] - matrix.elements[ 9 ]  * matrix.elements[ 12 ];
        const b07 = matrix.elements[ 8 ]  * matrix.elements[ 14 ] - matrix.elements[ 10 ] * matrix.elements[ 12 ];
        const b08 = matrix.elements[ 8 ]  * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 12 ];
        const b09 = matrix.elements[ 9 ]  * matrix.elements[ 14 ] - matrix.elements[ 10 ] * matrix.elements[ 13 ];
        const b10 = matrix.elements[ 9 ]  * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 13 ];
        const b11 = matrix.elements[ 10 ] * matrix.elements[ 15 ] - matrix.elements[ 11 ] * matrix.elements[ 14 ];

        // Apply manipulation
        this.elements[ 0 ]  = matrix.elements[ 5 ]  * b11 - matrix.elements[ 6 ]  * b10 + matrix.elements[ 7 ]  * b09;
        this.elements[ 1 ]  = matrix.elements[ 2 ]  * b10 - matrix.elements[ 1 ]  * b11 - matrix.elements[ 3 ]  * b09;
        this.elements[ 2 ]  = matrix.elements[ 13 ] * b05 - matrix.elements[ 14 ] * b04 + matrix.elements[ 15 ] * b03;
        this.elements[ 3 ]  = matrix.elements[ 10 ] * b04 - matrix.elements[ 9 ]  * b05 - matrix.elements[ 11 ] * b03;
        this.elements[ 4 ]  = matrix.elements[ 6 ]  * b08 - matrix.elements[ 4 ]  * b11 - matrix.elements[ 7 ]  * b07;
        this.elements[ 5 ]  = matrix.elements[ 0 ]  * b11 - matrix.elements[ 2 ]  * b08 + matrix.elements[ 3 ]  * b07;
        this.elements[ 6 ]  = matrix.elements[ 14 ] * b02 - matrix.elements[ 12 ] * b05 - matrix.elements[ 15 ] * b01;
        this.elements[ 7 ]  = matrix.elements[ 8 ]  * b05 - matrix.elements[ 10 ] * b02 + matrix.elements[ 11 ] * b01;
        this.elements[ 8 ]  = matrix.elements[ 4 ]  * b10 - matrix.elements[ 5 ]  * b08 + matrix.elements[ 7 ]  * b06;
        this.elements[ 9 ]  = matrix.elements[ 1 ]  * b08 - matrix.elements[ 0 ]  * b10 - matrix.elements[ 3 ]  * b06;
        this.elements[ 10 ] = matrix.elements[ 12 ] * b04 - matrix.elements[ 13 ] * b02 + matrix.elements[ 15 ] * b00;
        this.elements[ 11 ] = matrix.elements[ 9 ]  * b02 - matrix.elements[ 8 ]  * b04 - matrix.elements[ 11 ] * b00;
        this.elements[ 12 ] = matrix.elements[ 5 ]  * b07 - matrix.elements[ 4 ]  * b09 - matrix.elements[ 6 ]  * b06;
        this.elements[ 13 ] = matrix.elements[ 0 ]  * b09 - matrix.elements[ 1 ]  * b07 + matrix.elements[ 2 ]  * b06;
        this.elements[ 14 ] = matrix.elements[ 13 ] * b01 - matrix.elements[ 12 ] * b03 - matrix.elements[ 14 ] * b00;
        this.elements[ 15 ] = matrix.elements[ 8 ]  * b03 - matrix.elements[ 9 ]  * b01 + matrix.elements[ 10 ] * b00;
    };

    /*
        Determinant
        Calculates the determinant of (this) matrix
        @returns number
    */
    determinant() {
        let b0 = this.elements[ 0 ]  * this.elements[ 5 ]  - this.elements[ 1 ]  * this.elements[ 4 ];
        let b1 = this.elements[ 0 ]  * this.elements[ 6 ]  - this.elements[ 2 ]  * this.elements[ 4 ];
        let b2 = this.elements[ 1 ]  * this.elements[ 6 ]  - this.elements[ 2 ]  * this.elements[ 5 ];
        let b3 = this.elements[ 8 ]  * this.elements[ 13 ] - this.elements[ 9 ]  * this.elements[ 12 ];
        let b4 = this.elements[ 8 ]  * this.elements[ 14 ] - this.elements[ 10 ] * this.elements[ 12 ];
        let b5 = this.elements[ 9 ]  * this.elements[ 14 ] - this.elements[ 10 ] * this.elements[ 13 ];
        let b6 = this.elements[ 0 ]  * b5 - this.elements[ 1 ]  * b4 + this.elements[ 2 ]  * b3;
        let b7 = this.elements[ 4 ]  * b5 - this.elements[ 5 ]  * b4 + this.elements[ 6 ]  * b3;
        let b8 = this.elements[ 8 ]  * b2 - this.elements[ 9 ]  * b1 + this.elements[ 10 ] * b0;
        let b9 = this.elements[ 12 ] * b2 - this.elements[ 13 ] * b1 + this.elements[ 14 ] * b0;

        // Calculate the determinant
        return (
            this.elements[ 7 ] * b6 -
            this.elements[ 3 ] * b7 +
            this.elements[ 15 ] * b8 -
            this.elements[ 11 ] * b9
        );
    };

    /*
        Multiply
        Multiplies another matrix into (this) matrix
        @pram Matrix: the matrix to be multiplied into (this) matrix
        @returns void
    */
    multiply( matrix ) {
        this.elements[ 0 ] = matrix.elements[ 0 ] * this.elements[ 0 ] + matrix.elements[ 1 ] * this.elements[ 4 ] + matrix.elements[ 2 ] * this.elements[ 8 ]  + matrix.elements[ 3 ] * this.elements[ 12 ];
        this.elements[ 1 ] = matrix.elements[ 0 ] * this.elements[ 1 ] + matrix.elements[ 1 ] * this.elements[ 5 ] + matrix.elements[ 2 ] * this.elements[ 9 ]  + matrix.elements[ 3 ] * this.elements[ 13 ];
        this.elements[ 2 ] = matrix.elements[ 0 ] * this.elements[ 2 ] + matrix.elements[ 1 ] * this.elements[ 6 ] + matrix.elements[ 2 ] * this.elements[ 10 ] + matrix.elements[ 3 ] * this.elements[ 14 ];
        this.elements[ 3 ] = matrix.elements[ 0 ] * this.elements[ 3 ] + matrix.elements[ 1 ] * this.elements[ 7 ] + matrix.elements[ 2 ] * this.elements[ 11 ] + matrix.elements[ 3 ] * this.elements[ 15 ];

        this.elements[ 4 ] = matrix.elements[ 4 ] * this.elements[ 0 ] + matrix.elements[ 5 ] * this.elements[ 4 ] + matrix.elements[ 6 ] * this.elements[ 8 ]  + matrix.elements[ 7 ] * this.elements[ 12 ];
        this.elements[ 5 ] = matrix.elements[ 4 ] * this.elements[ 1 ] + matrix.elements[ 5 ] * this.elements[ 5 ] + matrix.elements[ 6 ] * this.elements[ 9 ]  + matrix.elements[ 7 ] * this.elements[ 13 ];
        this.elements[ 6 ] = matrix.elements[ 4 ] * this.elements[ 2 ] + matrix.elements[ 5 ] * this.elements[ 6 ] + matrix.elements[ 6 ] * this.elements[ 10 ] + matrix.elements[ 7 ] * this.elements[ 14 ];
        this.elements[ 7 ] = matrix.elements[ 4 ] * this.elements[ 3 ] + matrix.elements[ 5 ] * this.elements[ 7 ] + matrix.elements[ 6 ] * this.elements[ 11 ] + matrix.elements[ 7 ] * this.elements[ 15 ];

        this.elements[ 8 ]  = matrix.elements[ 8 ] * this.elements[ 0 ] + matrix.elements[ 9 ] * this.elements[ 4 ] + matrix.elements[ 10 ] * this.elements[ 8 ]  + matrix.elements[ 11 ] * this.elements[ 12 ];
        this.elements[ 9 ]  = matrix.elements[ 8 ] * this.elements[ 1 ] + matrix.elements[ 9 ] * this.elements[ 5 ] + matrix.elements[ 10 ] * this.elements[ 9 ]  + matrix.elements[ 11 ] * this.elements[ 13 ];
        this.elements[ 10 ] = matrix.elements[ 8 ] * this.elements[ 2 ] + matrix.elements[ 9 ] * this.elements[ 6 ] + matrix.elements[ 10 ] * this.elements[ 10 ] + matrix.elements[ 11 ] * this.elements[ 14 ];
        this.elements[ 11 ] = matrix.elements[ 8 ] * this.elements[ 3 ] + matrix.elements[ 9 ] * this.elements[ 7 ] + matrix.elements[ 10 ] * this.elements[ 11 ] + matrix.elements[ 11 ] * this.elements[ 15 ];

        this.elements[ 12 ] = matrix.elements[ 12 ] * this.elements[ 0 ] + matrix.elements[ 13 ] * this.elements[ 4 ] + matrix.elements[ 14 ] * this.elements[ 8 ]  + matrix.elements[ 15 ] * this.elements[ 12 ];
        this.elements[ 13 ] = matrix.elements[ 12 ] * this.elements[ 1 ] + matrix.elements[ 13 ] * this.elements[ 5 ] + matrix.elements[ 14 ] * this.elements[ 9 ]  + matrix.elements[ 15 ] * this.elements[ 13 ];
        this.elements[ 14 ] = matrix.elements[ 12 ] * this.elements[ 2 ] + matrix.elements[ 13 ] * this.elements[ 6 ] + matrix.elements[ 14 ] * this.elements[ 10 ] + matrix.elements[ 15 ] * this.elements[ 14 ];
        this.elements[ 15 ] = matrix.elements[ 12 ] * this.elements[ 3 ] + matrix.elements[ 13 ] * this.elements[ 7 ] + matrix.elements[ 14 ] * this.elements[ 11 ] + matrix.elements[ 15 ] * this.elements[ 15 ];
    };

    /*
        Set
        Set all matrix values from a given array
        @pram number[]: list of values that will be copied to matrix in order
        @returns void
    */
    set( array ) {
        for(let i = 0; i < (this.elements.length > array.length ? array.length : this.elements.length); i++) {
            this.elements[ i ] = array[ i ];
        }
    };

    /*
        Set All
        Set all matrix values to a given value
        @pram number: number that will be applied to all
        @returns void
    */
    setAll( value ) {
        for(let i = 0; i < this.elements.length; i++) {
            this.elements[ i ] = value;
        }
    };

    /*
        Clone
        Returns a Matrix with the same elements as (this) Matrix
        @returns new Matrix
    */
    clone() {
        return Matrix.FromArray( this.asArray() );
    };

    /*
        Copy
        Clone all elements in given matrix into (this) matrix
        @pram Matrix: matrix that will be copied
        @returns void
    */
    copy( matrix ) {
        this.set( matrix.asArray() );
    };

    /*
        As Array
        Returns (this) matrix elements in array form in order
        @returns number[]
    */
    asArray() {
        // Create array to fill elements
        const array = [];

        // Fill array with all elements
        for(let element of this.elements) {
            array.push( element );
        }

        // Return array
        return array;
    };

    /*
        To String
        Returns string form of this matrix
        @returns String
    */
    toString() {
        // Generate String array of all elements
        let string = "{";

        // Add all elements
        for(let i = 0; i < this.elements.length; i++) {
            string += this.elements[ i ] + (i < this.elements.length - 1 ? ", " : "");
            string += ((i + 1) % 4 == 0) && (i != this.elements.length - 1) ? "\n" : "";
        }

        // Finalize String
        string += "}";

        // Return String
        return string;
    };
};

/* Static Matrix Properties */

/* Static Matrix Methods */

/*
    Identity
    Create a matrix with a basic identity
    @returns new Matrix
*/
Matrix.Identity = function() {
    return Matrix.FromArray([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
};

/*
    From Array
    Returns all values in order from given numbers in array as a matrix
    @pram number[]: list of values that will be set
    @returns new Matrix
*/
Matrix.FromArray = function( array ) {
    // Create new matrix
    const matrix = new Matrix();

    // Apply values to matrix
    for(let i = 0; i < (matrix.elements.length > array.length ? array.length : matrix.elements.length); i++) {
        matrix.elements[ i ] = array[ i ]
    }

    return matrix;
};

/* Export Class */
export default Matrix;
