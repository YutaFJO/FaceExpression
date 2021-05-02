input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
// Aボタンを押したら、笑顔表示
input.onButtonPressed(Button.A, function () {
    x += 1
    if (x < 3) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (x == 3) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        x = 0
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . # . .
        # . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        . . . . #
        # # # . #
        # . # . .
        # # # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    z += 1
    if (z < 3) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (z == 3) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        z = 0
    }
})
// Bボタンを押したら、悲しい顔表示
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y < 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # # . # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (y == 3) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        y = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
let z = 0
let x = 0
let y = 0
y = 0
x = 0
z = 0
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    . . . . .
    `)
