let coeff = 0
basic.forever(function () {
    led.plot(4, 4)
    coeff = 10
    basic.pause(input.lightLevel() * coeff)
    led.unplot(4, 4)
})
