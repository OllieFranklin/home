# Tetris Project

The code follows the Model View Controller pattern. This allows for decoupling of the game logic, controls, and display. This will allow me to easily change the way the game is displayed in the future, or more importantly will allow for unit testing of the game logic. As I have a very specific plan for the mechanics of the game, I would like to be able to test my Model, which will require the unit tests to act as the controller, and will not require a view at all. The model provides GameState and KeyState objects that a View or Controller can use to communicate with the Model, however this system requires some optimisation.

