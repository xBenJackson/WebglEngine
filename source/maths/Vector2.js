/*
    Vector2 class
    Stores 2-dimensional set of values that can be used to map a position, velocity, etc..
*/

/* .. Create Vector2 Class .. */
class Vector2 {
    /*
        Constructor
        Creates a new Vector2
        @pram number: x coordinate ( default 0 )
        @pram number: y coordinate ( default 0 )
        @returns new Vector2
    */
    constructor( x , y ) {
        this.x = x || 0;
        this.y = y || 0;
    };

    /*
        Add
        Returns new vector with all values added by given vector
        @pram Vector2: that will be added
        @returns new Vector2
    */
    add( vector2 ) {
        return new Vector2(
            this.x + vector2.x,
            this.y + vector2.y
        );
    };

    /*
        Add In Place
        Add all the values in (this) vector by another given vector
        @pram Vector2: that will be added
        @returns void
    */
    addInPlace( vector2 ) {
        this.x += vector2.x;
        this.y += vector2.y;
    };

    /*
        Subtract
        Returns new vector with all values subtracted by given vector
        @pram Vector2: that will be subtracted
        @returns new Vector2
    */
    subtract( vector2 ) {
        return new Vector2(
            this.x - vector2.x,
            this.y - vector2.y
        );
    };

    /*
        Subtract In Place
        Subtract all the values in (this) vector by another given vector
        @pram Vector2: that will be subtracted
        @returns void
    */
    subtractInPlace( vector2 ) {
        this.x -= vector2.x;
        this.y -= vector2.y;
    };

    /*
        Multiply
        Returns new vector with all values multiplied by given vector
        @pram Vector2: that will be multiplied
        @returns new Vector2
    */
    multiply( vector2 ) {
        return new Vector2(
            this.x * vector2.x,
            this.y * vector2.y
        );
    };

    /*
        Multiply In Place
        Multiply all the values in (this) vector by another given vector
        @pram Vector2: that will be multiplied
        @returns void
    */
    multiplyInPlace( vector2 ) {
        this.x *= vector2.x;
        this.y *= vector2.y;
    };

    /*
        Divide
        Returns new vector with all values divided by given vector
        @pram Vector2: that will be divided
        @returns new Vector2
    */
    divide( vector2 ) {
        return new Vector2(
            this.x / vector2.x,
            this.y / vector2.y
        );
    };

    /*
        Divide In Place
        Divide all the values in (this) vector by another given vector
        @pram Vector2: that will be divided
        @returns void
    */
    divideInPlace( vector2 ) {
        this.x /= vector2.x;
        this.y /= vector2.y;
    };

    /*
        Scale
        Returns new vector with all values multiplied by given factor
        @pram number: that Vector2 will be scaled by
        @returns new Vector2
    */
    scale( factor ) {
        return new Vector2(
            this.x * factor,
            this.y * factor
        );
    };

    /*
        Scale In Place
        Multiply all the values in (this) vector by given factor
        @pram number: that Vector2 will be scaled by
        @returns void
    */
    scaleInPlace( factor ) {
        this.x *= factor;
        this.y *= factor;
    };

    /*
        Compress
        Returns new vector with all values divided by given factor
        @pram number: that Vector2 will be compressed by
        @returns new Vector2
    */
    compress( factor ) {
        return new Vector2(
            this.x / factor,
            this.y / factor
        );
    };

    /*
        Compress In Place
        Divide all the values in (this) vector by given factor
        @pram number: that Vector2 will be compressed by
        @returns void
    */
    compressInPlace( factor ) {
        this.x /= factor;
        this.y /= factor;
    };

    /*
        Floor
        Removes decimals from all values in (this) vector
        @returns void
    */
    floor() {
        this.x = Math.floor( this.x );
        this.y = Math.floor( this.y );
    };

    /*
        Ceil
        Rounds all values up in (this) vector
        @returns void
    */
    ceil() {
        this.x = Math.ceil( this.x );
        this.y = Math.ceil( this.y );
    };

    /*
        Round
        Rounds all values in (this) vector
        @returns void
    */
    round() {
        this.x = Math.round( this.x );
        this.y = Math.round( this.y );
    };

    /*
        Magnitude
        Returns the magnitude of this vector ( also refered to as length )
        @returns number
    */
    magnitude() {
        return Math.sqrt(
            Math.pow( this.x , 2 ) +
            Math.pow( this.y , 2 )
        );
    };

    /*
        Normalize
        Returns the normalized version of (this) vector
        @returns new Vector2
    */
    normalize() {
        // Clone vector
        const clone = this.clone();

        // Normalize cloned vector
        clone.normalizeInPlace()

        // Return normalized clone
        return clone;
    };

    /*
        Normalize In Place
        Normalize (this) vector
        @returns void
    */
    normalizeInPlace() {
        // Get magnitude of vector
        const magnitude = this.magnitude();

        // If magnitude is zero, vector can't be normalized, return
        if(magnitude == 0) {
            return;
        }

        // Compress vector by magnitude to acheive a normalized vector
        this.compressInPlace( magnitude );
    };

    /*
        Negate
        Makes all positive values negative, all negative values positive
        @returns void
    */
    negate() {
        this.x *= -1;
        this.y *= -1;
    };

    /*
        Clone
        Returns a vector with the same values as (this)
        @returns new Vector2
    */
    clone() {
        return new Vector2( this.x , this.y );
    };

    /*
        Copy
        Copy's all of another vector's values into (this) vector
        @pram Vector2: vector that will be copied
        @returns void
    */
    copy( vector2 ) {
        this.x = vector2.x;
        this.y = vector2.y;
    };

    /*
        Equals
        Returns true or false depending on if (this) vector matches given vector
        @pram Vector2: vector that will be compared
        @returns boolean
    */
    equals( vector2 ) {
        return (
            this.x == vector2.x &&
            this.y == vector2.y
        );
    };

    /*
        Set
        Sets all of vectors values individually
        @pram number: x coordinate
        @pram number: y coordinate
        @returns void
    */
    set( x , y ) {
        this.x = x;
        this.y = y;
    };

    /*
        Set All
        Sets all of vectors values to given number
        @pram number: number that all coordinates will be set too
        @returns void
    */
    setAll( value ) {
        this.x = value;
        this.y = value;
    };

    /*
        As Array
        Returns (this) vectors values in array form in order
        @returns number[]
    */
    asArray( value ) {
        return [ this.x , this.y ];
    };

    /*
        To String
        Returns string form of this vector
        @returns String
    */
    toString() {
        return "{x: " + this.x + ", y: " + this.y + "}";
    };
};

/* Static Vector2 Properties */

/*
    ZERO
    Static final version of a Vector2 filled with all zeros
*/
Vector2.ZERO = new Vector2( 0 , 0 );

/*
    ONE
    Static final version of a Vector2 with all ones
*/
Vector2.ONE = new Vector2( 1 , 1 );

/* Static Vector2 Methods */

/*
    Zero
    Returns a vector filled with zeros
    @returns new Vector2
*/
Vector2.Zero = function() {
    return new Vector2( 0 , 0 );
};

/*
    One
    Returns a vector filled with ones
    @returns new Vector2
*/
Vector2.One = function() {
    return new Vector2( 1 , 1 );
};

/*
    Random
    Returns a vector with random values between 0 and given maximum value ( default 1 )
    @pram number: maximum number random can reach ( default 1 )
    @returns new Vector2
*/
Vector2.Random = function( max ) {
    return new Vector2(
        Math.random() * ( max || 1 ),
        Math.random() * ( max || 1 )
    );
};

/*
    Minimum
    Returns a vector with the minimum values between both given vectors
    @pram Vector2: first set of values
    @pram Vector2: second set of values
    @returns new Vector2
*/
Vector2.Minimum = function( v1 , v2 ) {
    return new Vector2(
        Math.min( v1.x , v2.x ),
        Math.min( v1.y , v2.y )
    );
};

/*
    Maximum
    Returns a vector with the maximum values between both given vectors
    @pram Vector2: first set of values
    @pram Vector2: second set of values
    @returns new Vector2
*/
Vector2.Maximum = function( v1 , v2 ) {
    return new Vector2(
        Math.max( v1.x , v2.x ),
        Math.max( v1.y , v2.y )
    );
};

/*
    Clamp
    Returns a vector clamped between a minimum and a maximum vector
    @pram Vector2: vector to be clamped
    @pram Vector2: minumum values
    @pram Vector2: maximum values
    @returns new Vector2
*/
Vector2.Clamp = function( vector2 , min , max ) {
    return new Vector2(
        Math.min( Math.max( vector2.x , min.x ) , max.x ),
        Math.min( Math.max( vector2.y , min.y ) , max.y )
    );
};

/*
    Distance
    Returns the distance between two vectors
    @pram Vector2: first point in 2-dimensional space
    @pram Vector2: second point in 2-dimensional space
    @returns number
*/
Vector2.Distance = function( v1 , v2 ) {
    return Math.sqrt(
        Math.pow( (v2.x - v1.x) , 2 ) +
        Math.pow( (v2.y - v2.y) , 2 )
    );
};

/*
    Dot Product
    Returns the dot product of two vectors
    @pram Vector2: first vector
    @pram Vector2: second vector
    @returns number
*/
Vector2.Dot = function( v1 , v2 ) {
    return (
        (v1.x * v2.x) +
        (v1.y * v2.y)
    );
};

/*
    Lerp
    Returns a point on the linear interpolation between the start and end vector
    @pram Vector2: start vector
    @pram Vector2: end vector
    @pram number: amount
    @returns new Vector2
*/
Vector2.Lerp = function( start , end , amount ) {
    return new Vector2(
        start.x + (end.x - start.x) * amount,
        start.y + (end.y - start.y) * amount
    );
};

/*
    From Array
    Returns all values in order from given numbers in array as a vector
    @pram number[]: list of coordinates that will be set
    @returns Vector2
*/
Vector2.FromArray = function( array ) {
    return new Vector2(
        array[ 0 ],
        array[ 1 ]
    );
};

/* Export Class */
export default Vector2;
