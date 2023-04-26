/*
    Vector2 class
    Stores 2-Dimensional set of values that can be used to map a position, or velocity, etc..
    x: number
    y: number
*/

/* .. Create Vector2 Class .. */
class Vector2 {
    // Constructor
    constructor( x , y ) {
        this.x = x || 0;
        this.y = y || 0;
    };

    /*
        Add
        @pram Vector2: that will be added
        Returns Vector2
    */
    add( vector2 ) {
        return new Vector2( this.x + vector2.x , this.y + vector2.y );
    };

    /*
        Add In Place
        @pram Vector2: that will be added
        Returns void
    */
    addInPlace( vector2 ) {
        this.x += vector2.x;
        this.y += vector2.y;
    };

    /*
        Subtract
        @pram Vector2: that will be subtracted
        Returns Vector2
    */
    subtract( vector2 ) {
        return new Vector2( this.x - vector2.x , this.y - vector2.y );
    };

    /*
        Subtract In Place
        @pram Vector2: that will be subtracted
        Returns void
    */
    subtractInPlace( vector2 ) {
        this.x -= vector2.x;
        this.y -= vector2.y;
    };

    /*
        Multiply
        @pram Vector2: that will be multiplied
        Returns Vector2
    */
    multiply( vector2 ) {
        return new Vector2( this.x * vector2.x , this.y * vector2.y );
    };

    /*
        Multiply In Place
        @pram Vector2: that will be multiplied
        Returns void
    */
    multiplyInPlace( vector2 ) {
        this.x *= vector2.x;
        this.y *= vector2.y;
    };

    /*
        Divide
        @pram Vector2: that will be divided
        Returns Vector2
    */
    divide( vector2 ) {
        return new Vector2( this.x / vector2.x , this.y / vector2.y );
    };

    /*
        Divide In Place
        @pram Vector2: that will be divided
        Returns void
    */
    divideInPlace( vector2 ) {
        this.x /= vector2.x;
        this.y /= vector2.y;
    };

    /*
        Scale
        @pram number: that Vector2 will be scaled by
        Returns Vector2
    */
    scale( factor ) {
        return new Vector2( this.x * factor , this.y * factor );
    };

    /*
        Scale In Place
        @pram number: that Vector2 will be scaled by
        Returns void
    */
    scaleInPlace( factor ) {
        this.x *= factor;
        this.y *= factor;
    };

    /*
        Compress
        @pram number: that Vector2 will be compressed by
        Returns Vector2
    */
    compress( factor ) {
        return new Vector2( this.x / factor , this.y / factor );
    };

    /*
        Compress In Place
        @pram number: that Vector2 will be compressed by
        Returns void
    */
    compressInPlace( factor ) {
        this.x /= factor;
        this.y /= factor;
    };
};

/* Static Vector2 Methods */

/*
    Zero
    Returns Vector2
*/
Vector2.Zero = function() {
    return new Vector2( 0 , 0 );
};

/*
    One
    Returns Vector2
*/
Vector2.One = function() {
    return new Vector2( 1 , 1 );
};

/*
    Random
    @pram number: maximum number random can reach ( default 1 )
    Returns Vector2
*/
Vector2.Random = function( max ) {
    return new Vector2(
        Math.random() * ( max || 1 ),
        Math.random() * ( max || 1 )
    );
};

/*
    Minimum
    @pram Vector2: first set of values
    @pram Vector2: second set of values
    Returns Vector2
*/
Vector2.Minimum = function( v1 , v2 ) {
    return new Vector2(
        Math.min( v1.x , v2.x ),
        Math.min( v1.y , v2.y )
    );
};

/*
    Maximum
    @pram Vector2: first set of values
    @pram Vector2: second set of values
    Returns Vector2
*/
Vector2.Maximum = function( v1 , v2 ) {
    return new Vector2(
        Math.max( v1.x , v2.x ),
        Math.max( v1.y , v2.y )
    );
};

/*
    Clamp
    @pram Vector2: values to be tested
    @pram Vector2: minumum values
    @pram Vector2: maximum values
    Returns Vector2
*/
Vector2.Clamp = function( vector2 , min , max ) {
    return new Vector2(
        Math.min( Math.max( vector2.x , min.x ) , max.x ),
        Math.min( Math.max( vector2.y , min.y ) , max.y )
    );
};

/*
    Distance
    @pram Vector2: first point in 2-Dimensional space
    @pram Vector2: second point in 2-Dimensional space
    Returns number
*/
Vector2.Distance = function( v1 , v2 ) {
    return Math.sqrt(
        Math.pow( (v2.x - v1.x) , 2 ) +
        Math.pow( (v2.y - v2.y) , 2 )
    );
};

/* Export Class */
export default Vector2;
