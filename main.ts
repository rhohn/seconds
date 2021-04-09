input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    level += -1
    basic.showNumber(level)
})
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - level * 1000)
    basic.clearScreen()
    basic.showString("SCORE:", 50)
basic.showNumber(score)
    basic.clearScreen()
    basic.showNumber(level)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    level += 1
    basic.showNumber(level)
})
let score = 0
let elapsed = 0
let start = 0
let level = 0
basic.showString("PICK LEVEL", 50)
level = 0
basic.clearScreen()
basic.showNumber(0)
