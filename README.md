# Plant water App

### HTML Setup:
- Button
    - Why? On click, change the water level
- Image
    - Why? To give feedback to the user about how the plant is doing
- Some div
    - Why? To show the user the current water level

1) Grab those DOM elements.
    - That means they'll need ids
2) Initialize some state (`let waterLevel = 0;`)
    - water level starts at 0
3) Add an event listener to the button
    - On click:
        1) State: Water level increments (state)
        2) View: Change textContent of water level div
        3) View: The image changes to match the current water level