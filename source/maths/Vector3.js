/*
    Vector3 class
    Stores 3-dimensional set of values that can be used to map a position, velocity, etc..
*/

/* .. Create Vector3 Class .. */
class Vector3 {
    /*
        Constructor
        Creates a new Vector3
        @pram number: x coordinate ( default 0 )
        @pram number: y coordinate ( default 0 )
        @pram number: z coordinate ( default 0 )
        @returns new Vector3
    */
    constructor( x , y , z ) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    };

    /*
        Add
        Returns new vector with all values added by given vector
        @pram Vector3: that will be added
        @returns new Vector3
    */
    add( vector3 ) {
        return new Vector3(
            this.x + vector3.x,
            this.y + vector3.y,
            this.z + vector3.z
        );
    };

    /*
        Add In Place
        Add all the values in (this) vector by another given vector
        @pram Vector3: that will be added
        @returns void
    */
    addInPlace( vector3 ) {
        this.x += vector3.x;
        this.y += vector3.y;
        this.z += vector3.z;
    };

    /*
        Subtract
        Returns new vector with all values subtracted by given vector
        @pram Vector3: that will be subtracted
        @returns new Vector3
    */
    subtract( vector3 ) {
        return new Vector3(
            this.x - vector3.x,
            this.y - vector3.y,
            this.z - vector3.z
        );
    };

    /*
        Subtract In Place
        Subtract all the values in (this) vector by another given vector
        @pram Vector3: that will be subtracted
        @returns void
    */
    subtractInPlace( vector3 ) {
        this.x -= vector3.x;
        this.y -= vector3.y;
        this.z -= vector3.z;
    };

    /*
        Multiply
        Returns new vector with all values multiplied by given vector
        @pram Vector3: that will be multiplied
        @returns new Vector3
    */
    multiply( vector3 ) {
        return new Vector3(
            this.x * vector3.x,
            this.y * vector3.y,
            this.z * vector3.z
        );
    };

    /*
        Multiply In Place
        Multiply all the values in (this) vector by another given vector
        @pram Vector3: that will be multiplied
        @returns void
    */
    multiplyInPlace( vector3 ) {
        this.x *= vector3.x;
        this.y *= vector3.y;
        this.z *= vector3.z;
    };

    /*
        Divide
        Returns new vector with all values divided by given vector
        @pram Vector3: that will be divided
        @returns new Vector3
    */
    divide( vector3 ) {
        return new Vector3(
            this.x / vector3.x,
            this.y / vector3.y,
            this.z / vector3.z
        );
    };

    /*
        Divide In Place
        Divide all the values in (this) vector by another given vector
        @pram Vector3: that will be divided
        @returns void
    */
    divideInPlace( vector3 ) {
        this.x /= vector3.x;
        this.y /= vector3.y;
        this.z /= vector3.z;
    };

    /*
        Scale
        Returns new vector with all values multiplied by given factor
        @pram number: that Vector3 will be scaled by
        @returns new Vector3
    */
    scale( factor ) {
        return new Vector3(
            this.x * factor,
            this.y * factor,
            this.z * factor
        );
    };

    /*
        Scale In Place
        Multiply all the values in (this) vector by given factor
        @pram number: that Vector3 will be scaled by
        @returns void
    */
    scaleInPlace( factor ) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    };

    /*
        Compress
        Returns new vector with all values divided by given factor
        @pram number: that Vector3 will be compressed by
        @returns new Vector3
    */
    compress( factor ) {
        return new Vector3(
            this.x / factor,
            this.y / factor,
            this.z / factor
        );
    };

    /*
        Compress In Place
        Divide all the values in (this) vector by given factor
        @pram number: that Vector3 will be compressed by
        @returns void
    */
    compressInPlace( factor ) {
        this.x /= factor;
        this.y /= factor;
        this.z /= factor;
    };

    /*
        Floor
        Removes decimals from all values in (this) vector
        @returns void
    */
    floor() {
        this.x = Math.floor( this.x );
        this.y = Math.floor( this.y );
        this.z = Math.floor( this.z );
    };

    /*
        Ceil
        Rounds all values up in (this) vector
        @returns void
    */
    ceil() {
        this.x = Math.ceil( this.x );
        this.y = Math.ceil( this.y );
        this.z = Math.ceil( this.z );
    };

    /*
        Round
        Rounds all values in (this) vector
        @returns void
    */
    round() {
        this.x = Math.round( this.x );
        this.y = Math.round( this.y );
        this.z = Math.round( this.z );
    };

    /*
        Magnitude
        Returns the magnitude of this vector ( also refered to as length )
        @returns number
    */
    magnitude() {
        return Math.sqrt(
            Math.pow( this.x , 2 ) +
            Math.pow( this.y , 2 ) +
            Math.pow( this.z , 2 )
        );
    };

    /*
        Normalize
        Returns the normalized version of (this) vector
        @returns new Vector3
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
        this.z *= -1;
    };

    /*
        Clone
        Returns a vector with the same values as (this)
        @returns new Vector3
    */
    clone() {
        return new Vector3( this.x , this.y , this.z );
    };

    /*
        Copy
        Copy's all of another vector's values into (this) vector
        @pram Vector3: vector that will be copied
        @returns void
    */
    copy( vector3 ) {
        this.x = vector3.x;
        this.y = vector3.y;
        this.z = vector3.z;
    };

    /*
        Equals
        Returns true or false depending on if (this) vector matches given vector
        @pram Vector3: vector that will be compared
        @returns boolean
    */
    equals( vector3 ) {
        return (
            this.x == vector3.x &&
            this.y == vector3.y &&
            this.z == vector3.z
        );
    };

    /*
        Set
        Sets all of vectors values individually
        @pram number: x coordinate
        @pram number: y coordinate
        @pram number: z coordinate
        @returns void
    */
    set( x , y , z ) {
        this.x = x;
        this.y = y;
        this.z = z;
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
        this.z = value;
    };

    /*
        As Array
        Returns (this) vectors values in array form in order
        @returns number[]
    */
    asArray( value ) {
        return [ this.x , this.y , this.z ];
    };

    /*
        From Array
        Sets all values in order from given numbers in array
        @pram number[]: list of coordinates that will be set
        @returns void
    */
    fromArray( array ) {
        this.x = array[ 0 ];
        this.y = array[ 1 ];
        this.z = array[ 2 ];
    };

    /*
        To String
        Returns string form of this vector
        @returns String
    */
    toString() {
        return "{x: " + this.x + ", y: " + this.y + ", z: " + this.z + "}";
    };
};

/* Static Vector3 Properties */

/*
    ZERO
    Static final version of a Vector3 filled with all zeros
*/
Vector3.ZERO = new Vector3( 0 , 0 , 0 );

/*
    ONE
    Static final version of a Vector3 with all ones
*/
Vector3.ONE = new Vector3( 1 , 1 , 1 );

/* Static Vector3 Methods */

/*
    Zero
    Returns a vector filled with zeros
    @returns new Vector3
*/
Vector3.Zero = function() {
    return new Vector3( 0 , 0 , 0 );
};

/*
    One
    Returns a vector filled with ones
    @returns new Vector3
*/
Vector3.One = function() {
    return new Vector3( 1 , 1 , 1 );
};

/*
    Random
    Returns a vector with random values between 0 and given maximum value ( default 1 )
    @pram number: maximum number random can reach ( default 1 )
    @returns new Vector3
*/
Vector3.Random = function( max ) {
    return new Vector3(
        Math.random() * ( max || 1 ),
        Math.random() * ( max || 1 ),
        Math.random() * ( max || 1 )
    );
};

/*
    Minimum
    Returns a vector with the minimum values between both given vectors
    @pram Vector3: first set of values
    @pram Vector3: second set of values
    @returns new Vector3
*/
Vector3.Minimum = function( v1 , v2 ) {
    return new Vector3(
        Math.min( v1.x , v2.x ),
        Math.min( v1.y , v2.y ),
        Math.min( v1.z , v2.z )
    );
};

/*
    Maximum
    Returns a vector with the maximum values between both given vectors
    @pram Vector3: first set of values
    @pram Vector3: second set of values
    @returns new Vector3
*/
Vector3.Maximum = function( v1 , v2 ) {
    return new Vector3(
        Math.max( v1.x , v2.x ),
        Math.max( v1.y , v2.y ),
        Math.max( v1.z , v2.z )
    );
};

/*
    Clamp
    Returns a vector clamped between a minimum and a maximum vector
    @pram Vector3: vector to be clamped
    @pram Vector3: minumum values
    @pram Vector3: maximum values
    @returns new Vector3
*/
Vector3.Clamp = function( vector3 , min , max ) {
    return new Vector3(
        Math.min( Math.max( vector3.x , min.x ) , max.x ),
        Math.min( Math.max( vector3.y , min.y ) , max.y ),
        Math.min( Math.max( vector3.z , min.z ) , max.z )
    );
};

/*
    Distance
    Returns the distance between two vectors
    @pram Vector3: first point in 3-dimensional space
    @pram Vector3: second point in 3-dimensional space
    @returns number
*/
Vector3.Distance = function( v1 , v2 ) {
    return Math.sqrt(
        Math.pow( (v2.x - v1.x) , 2 ) +
        Math.pow( (v2.y - v1.y) , 2 ) +
        Math.pow( (v2.z - v1.z) , 2 )
    );
};

/*
    Dot Product
    Returns the dot product of two vectors
    @pram Vector3: first vector
    @pram Vector3: second vector
    @returns number
*/
Vector3.Dot = function( v1 , v2 ) {
    return (
        (v1.x * v2.x) +
        (v1.y * v2.y) +
        (v1.z * v2.z)
    );
};

/*
    Lerp
    Returns a point on the linear interpolation between the start and end vector
    @pram Vector3: start vector
    @pram Vector3: end vector
    @pram number: amount
    @returns new Vector3
*/
Vector3.Lerp = function( start , end , amount ) {
    return new Vector3(
        start.x + (end.x - start.x) * amount,
        start.y + (end.y - start.y) * amount,
        start.z + (end.z - start.z) * amount
    );
};

/* Export Class */
export default Vector3;
