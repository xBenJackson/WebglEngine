/*
    Color class
    Stores values that can be used to render colors
*/

/* .. Create Color Class .. */
class Color {
    /*
        Constructor
        Creates a new Color
        @pram number: amount of red [ 0 - 255 ] ( default 0 )
        @pram number: amount of green [ 0 - 255 ] ( default 0 )
        @pram number: amount of blue [ 0 - 255 ] ( default 0 )
        @returns new Color
    */
    constructor( r , g , b ) {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
    };

    /*
        Clone
        Returns a color with the same values as (this)
        @returns new Color
    */
    clone() {
        return new Color( this.r , this.g , this.b );
    };

    /*
        Copy
        Copy's all of another color's values into (this) color
        @pram Color: color that will be copied
        @returns void
    */
    copy( color ) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
    };

    /*
        Equals
        Returns true or false depending on if (this) color matches given color
        @pram Color: color that will be compared
        @returns boolean
    */
    equals( color ) {
        return (
            this.r == color.r &&
            this.g == color.g &&
            this.b == color.b
        );
    };

    /*
        Set
        Sets all of colors values individually
        @pram number: amount of red
        @pram number: amount of green
        @pram number: amount of blue
        @returns void
    */
    set( r , g , b ) {
        this.r = r;
        this.g = g;
        this.b = b;
    };

    /*
        Set All
        Sets all of colors values to given number
        @pram number: number that all colors will be set too
        @returns void
    */
    setAll( value ) {
        this.r = value;
        this.g = value;
        this.b = value;
    };

    /*
        As Array
        Returns (this) colors values in array form in order
        @returns number[]
    */
    asArray( value ) {
        return [ this.r , this.g , this.b ];
    };

    /*
        As Hex String
        Returns (this) colors values as a hex string
        @returns String
    */
    asHexString() {
        // String that will be built
        let hexString = "#";

        // Get red, green, and blue values
        const r = Number( this.r ).toString( 16 );
        const g = Number( this.g ).toString( 16 );
        const b = Number( this.b ).toString( 16 );

        // Build hex string
        hexString += this.r <= 15 ? ("0" + r) : r;
        hexString += this.g <= 15 ? ("0" + g) : g;
        hexString += this.b <= 15 ? ("0" + b) : b;

        // Return new hex string
        return hexString.toUpperCase();
    };

    /*
        To String
        Returns string form of this color
        @returns String
    */
    toString() {
        return "{r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
    };
};

/* Static Color Properties */

/*
    BLACK
    Static final version of a Color that is black
*/
Color.BLACK = new Color( 0 , 0 , 0 );

/*
    WHITE
    Static final version of a Color that is white
*/
Color.WHITE = new Color( 255 , 255 , 255 );

/* Static Color Methods */

/*
    Black
    Returns a Color that is black
    @returns new Color
*/
Color.Black = function() {
    return new Color( 0 , 0 , 0 );
};

/*
    Gray
    Returns a Color that is gray
    @returns new Color
*/
Color.Gray = function() {
    return new Color( 127 , 127 , 127 );
};

/*
    White
    Returns a Color that is white
    @returns new Color
*/
Color.White = function() {
    return new Color( 255 , 255 , 255 );
};

/*
    Red
    Returns a Color that is red
    @returns new Color
*/
Color.Red = function() {
    return new Color( 255 , 0 , 0 );
};

/*
    Green
    Returns a Color that is green
    @returns new Color
*/
Color.Green = function() {
    return new Color( 0 , 255 , 0 );
};

/*
    Blue
    Returns a Color that is blue
    @returns new Color
*/
Color.Blue = function() {
    return new Color( 0 , 0 , 255 );
};

/*
    Yellow
    Returns a Color that is yellow
    @returns new Color
*/
Color.Yellow = function() {
    return new Color( 255 , 255 , 0 );
};

/*
    Magenta
    Returns a Color that is magenta
    @returns new Color
*/
Color.Magenta = function() {
    return new Color( 255 , 0 , 255 );
};

/*
    Purple
    Returns a Color that is purple
    @returns new Color
*/
Color.Purple = function() {
    return new Color( 127 , 0 , 127 );
};

/*
    Random
    Returns a color with random values between 0 and 255 ( inclusive )
    @returns new Color
*/
Color.Random = function( max ) {
    return new Color(
        Math.round( Math.random() * 255 + 1 ),
        Math.round( Math.random() * 255 + 1 ),
        Math.round( Math.random() * 255 + 1 )
    );
};

/*
    Lerp
    Returns a point on the linear interpolation between the start and end color
    @pram Color: start color
    @pram Color: end color
    @pram number: amount
    @returns new Color
*/
Color.Lerp = function( start , end , amount ) {
    return new Color(
        start.r + (end.r - start.r) * amount,
        start.g + (end.g - start.g) * amount,
        start.b + (end.b - start.b) * amount
    );
};

/*
    From Array
    Returns all values in order from given numbers in array as a color
    @pram number[]: list of colors that will be set
    @returns new Color
*/
Color.FromArray = function( array ) {
    return new Color(
        array[ 0 ],
        array[ 1 ],
        array[ 2 ]
    );
};

/*
    From Hex String
    Returns a color from a given hex string
    @pram String: hex string that will be converted
    @returns new Color
*/
Color.FromHexString = function( hexString ) {
    // If hex string is not valid, return black color
    if (hexString.substring( 0 , 1 ) !== "#" || hexString.length !== 7) {
        return new Color( 0 , 0 , 0 );
    }

    // Get red, green, and blue values
    const r = parseInt( hexString.substring( 1 , 3 ) , 16 );
    const g = parseInt( hexString.substring( 3 , 5 ) , 16 );
    const b = parseInt( hexString.substring( 5 , 7 ) , 16 );

    // Return new color from color values
    return new Color( r , g , b );
};

/* Export Class */
export default Color;
