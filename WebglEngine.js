/*
    Webgl Engine
    Webgl based, 3-Dimensional engine
    Project start: 4-24-23
    Version: 1
    Made by: Ben Jackson
*/

/* .. Import Dependencies .. */
import Scene from './source/core/Scene.js';

import Color from './source/maths/Color.js';
import Vector2 from './source/maths/Vector2.js';
import Vector3 from './source/maths/Vector3.js';
import Matrix from './source/maths/Matrix.js';

/* .. Create Engine .. */
const Engine = {};

/* .. Include Dependencies .. */
Engine.Scene = Scene;

Engine.Color = Color;
Engine.Vector2 = Vector2;
Engine.Vector3 = Vector3;
Engine.Matrix = Matrix;

/* .. Export Engine .. */
export default Engine;
