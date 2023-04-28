/*
    Scene class
    Used to give life to a canvas.
    Render geometry, lights, shadows, etc.
    Physics, collision
*/

import Color from '../maths/Color.js';

/* .. Create Scene Class .. */
class Scene {
    /*
        Constructor
        Creates a new Scene
        @pram <Canvas>: Canvas element that will be tied to this scene
        @pram SceneSettings: Settings that will be applied to this scene ( optional )
        @returns new Scene
    */
    constructor( canvas , settings ) {
        // If no canvas given, return
        if(!canvas) {
            console.error("[Error]: No canvas provided at `Scene` construction.");
            return;
        }

        // Canvas reference
        this.canvas = canvas;

        // Settings reference
        this.settings = settings || {};

        // Create canvas context
        this.gl = this.canvas.getContext( "webgl" , {
            antialias : this.settings.antialias || false, // Apply anti-aliasing settings ( false by default )
        } );

        // Check if canvas context was not created
        if(!this.gl) {
            console.error("[Error]: Failed to initialize WebGL. Your browser or device may not support it.");
            return;
        }

        // Clear color of (this) scene
        // Plain color that will be applied to background in every frame
        // This can be set to null (if) 100% of the screen will always be covered up by geometry ( ex. skybox )
        this.clearColor = Color.Black();

        // Test render
        this.render();
    };

    /*
        Render
        Render (this) scene once from point of active camera
        @returns void
    */
    render() {
        // If no context, return
        if(!this.gl) { return; }

        // Apply clear color if one exists
        if(this.clearColor) {
            this.gl.clearColor(
                this.clearColor.r / 255, // Red value
                this.clearColor.g / 255, // Green value
                this.clearColor.b / 255, // Blue value
                                    1.0  // Fully opaque
            );

            // Clear the color buffer with specified clear color
            this.gl.clear( this.gl.COLOR_BUFFER_BIT );
        }
    };

    /*
        To String
        Returns string form of this scene
        @returns String
    */
    toString() {
        return "";
    };
};

/* Static Scene Properties */


/* Static Scene Methods */


/* Export Class */
export default Scene;
