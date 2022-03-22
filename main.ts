namespace SpriteKind {
    export const enemyboss = SpriteKind.create()
    export const powerupp = SpriteKind.create()
    export const powerUP = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerupp, function (sprite, otherSprite) {
    double_fire_mode = sprites.create(img`
        2 9 2 b . . . . . . . . . . . . 
        7 7 4 b . . . . . . . . . . . . 
        2 9 2 b . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 9 2 b . . . . . . . . . . . . 
        7 7 4 b . . . . . . . . . . . . 
        2 9 2 b . . . . . . . . . . . . 
        `, SpriteKind.Player)
    double_fire_mode.setPosition(48, 7)
    double_fire_mode.lifespan = 5000
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 b . . . . . . . . 
        2 2 2 2 2 2 2 b . . . . . . . . 
        2 2 2 2 2 2 2 b . . . . . . . . 
        2 2 2 2 2 2 2 b . . . . . . . . 
        2 2 2 2 2 2 2 b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    if (double_fire_mode && double_fire_mode.lifespan > 0) {
        projectile.y += -5
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 b . . . . . . . . 
            2 2 2 2 2 2 2 b . . . . . . . . 
            2 2 2 2 2 2 2 b . . . . . . . . 
            2 2 2 2 2 2 2 b . . . . . . . . 
            2 2 2 2 2 2 2 b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        projectile.y += 5
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    enemydeath(statusbar.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
    info.changeScoreBy(1)
    pause(5000)
})
function enemydeath (enemy: Sprite) {
    enemy.destroy(effects.fire, 5000)
    if (Math.percentChance(10)) {
        power_up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 8 8 7 7 7 7 8 8 8 8 . . . 
            . . 8 8 8 7 8 8 7 8 8 8 8 . . . 
            . . 8 8 8 7 8 8 7 8 8 8 8 . . . 
            . . 8 8 8 7 7 7 7 8 8 8 8 . . . 
            . . 8 8 8 7 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 7 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 7 8 8 8 8 8 8 8 . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.powerupp)
        power_up.x = enemy.x
        power_up.y = enemy.y
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 5000)
    enemydeath(otherSprite)
})
let enemyship: Sprite = null
let power_up: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let double_fire_mode: Sprite = null
let mySprite: Sprite = null
effects.blizzard.startScreenEffect(1000000000000000000009999999999999999999999999999999)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777
    77777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbb77777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777777777777777777777777bbbbb777777777777bbbbb777777777777777
    7777777777777777777777777777777777777777777777777bbbbb777777777777777777bbbbb7777777777777777777777777777777777777777777777bbbbb777777777777bbbbb777777777777777
    7777777777777777777777777777777777777777777777777bbbbb777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777
    7777777777777777777777777777777777777777777777777bbbbb777777777777777777bbbbb7777777777777777777777777777777777777777777bbbbb777777777777777bbbbb777777777777777
    77777777777777777bbbbb77777777777777bbbbb77777777bbbbb777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777bbbbb777777777777777
    77777777777777777bbbbb77777777777777bbbbb77777777bbbbb777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    77777777777777777bbbbb77777777777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    77777777777777777bbbbb77777777777777bbbbb77777777777777777777777777777777777777777777777777777777bbbbb777777777777777777bbbbb77777777777777777777777777777777777
    77777777777777777bbbbb77777777777777bbbbb77777777777777777777777777777777777777777777777777777777bbbbb7bbbbbbb77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777bbbbb7bbbbbbb77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777bbbbb7bbbbbbb77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777bbbbb7bbbbbbb77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777bbbbbbb77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbb777777777777bbbbb7777777777777777777777777777777bbbbb777777777777777777777bbbbb7777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbb777777777777bbbbbb777777777777777777777777777777bbbbb777777777777777777777bbbbb7777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbb777777777777bbbbbbb77777777777777777777777777777bbbbb777777777777777777777bbbbb77777777777777777777777bbbbb777777777777777
    777777777777777777777777777777777bbbbb777777777777bbbbbbbbb777777777777777777777777777bbbbb777777777777777777777bbbbb7777777777777777777777bbbbbb777777777777777
    77777777777777777777777777777777777777777777777777bbbbbbbbbb77777777777777777777777777bbbbb777777777777777777777bbbbb7777777777777777777777bbbbbb777777777777777
    7bbbbb77777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777bbbbb77777777777777777777777777777777777777777777777bbbbbbb777777777777777
    7bbbbb7777777777777777777777777777777777777777777777bbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb777777777777777
    7bbbbb77777777777777777777777777777777777777777777777bbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbb7777777777777777
    7bbbbb7777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777777777777777777777777777777777777777777777777777777bbbbbb7777777777777777
    7bbbbb7777777777777777777777777bbbbbb7777777777777777777bbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777
    7777777777777777777777777777777bbbbbb77777777777777777777bbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777
    7777777777777777777777777777777bbbbbb777777777777777777777bbbbbbbbb77777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777
    7777777777777777777777777777777bbbbbb7777777777777777777777bbbbbbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777bbbbbb77777777777777777777777bbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777bbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb7777777777777777777777777777777bbbbbbbbb77777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb77777777777777bbbbb7777777777777bbbbbbbbb7777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb77777777777777bbbbbb7777777777777bbbbbbbbb777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb77777777777777bbbbbb77777777777777bbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777bbbbb77777777777777bbbbbb777777777777777bbbbbbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777bbbbb77777777777777777777777bbbbbb7777777777777777bbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777bbbbbbbbbb777777777777777777777777bbbbb77777777777777777bbbbbbbbb7777777777777bbbbb77777777777777777777777777777777777777777777bbbbb77777777777777
    77777777777777bbbbbbbbbb77777777777777777777777777777777777777777777777bbbbbbbbb777777777777bbbbb77777777777777777777777777777777777777777777bbbbb7777bbbbb77777
    77777777777777bbbbbbbbbb777777777777777777777777777777777777777777777777bbbbbbbbb77777777777bbbbb77777777777777777777777777777777777777777777bbbbb7777bbbbb77777
    77777777777777bbbbbbbbbb777777777777777777777777777bbbbb77777777777777777bbbbbbbb77777777777bbbbb77777777777777777777777777777777777777777777bbbbb7777bbbbb77777
    77777777777777bbbbb77777777777777777777777777777777bbbbb777777777777777777bbbbbbb77777777777bbbbb7777777777777bbbbb7777777777777777bbbbb77777bbbbb7777bbbbb77777
    777777777777777777777777777777777777777777777777777bbbbb7777777777777777777bbbbbb77777777777777777777777777777bbbbb7777777777777777bbbbb77777777777777bbbbb77777
    777777777777777777777777777777777777777777777777777bbbbb77777777777777777777bbbbb77777777777777777777777777777bbbbb7777777777777777bbbbb777777777777777777777777
    777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777bbbbb7777777777777777bbbbb777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777777bbbbb777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777bbbbb7777777777777777777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777bbbbb7777777777777777777777bbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777bbbbb777bbbbb77777777777777bbbbb777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777
    7777777777777777777777777777777777777777777777bbbbb777bbbbb77777777777777bbbbb777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777
    777777777777777777777777777777777777777777777777777777bbbbb77777777777777bbbbb777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777
    777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777bbbbb7777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777
    777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777bbbbb7777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777777777bbbbb77777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb7777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb77777777777777777777777777777777777777777777777bbbbbb7777777777777777777777777777777777bbbbb77777777777777777777777777777777777
    7777777777777777777777777777bbbbb777777777777777777777777777777777777777777777bbbbbbbb7777777777777777777777777777777777777777777777777777777777777bbbbb77777777
    7777777777777777777777777777bbbbb777777777777777777777777777777777777bbbbbb77bbbbbbbbb7777777777777777777777777777777777777777777777777777777777777bbbbb77777777
    77777777777777777bbbbbb77777bbbbb777777777777777777777777777777777777bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777bbbbb77777777
    77777777777777777bbbbbb77777bbbbb777777777777777777777777777777777777bbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777777777777777777bbbbb77777777
    77777777777777777bbbbbb7777777777777777777777777777777777777777777777bbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777bbbbb77777777
    77777777777777777bbbbbb7777777777777777777777777777777777777777777777bbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777bbbbbb777777777777777777777777777777777777777777777777bbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777bbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777bbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777bbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777bbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777bbbbbbb777777777777777777777777777777777777777777bbbbbbb777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777bbbbbbb777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777bbbbbbb777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777bbbbbbb777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
mySprite = sprites.create(img`
    . . . . . . 4 f c c . . . . . . 
    . . . . c f f a c c . . . . . . 
    . . . . c a 4 f f a . . . . . . 
    . . . . c d d d d c . . . . . . 
    . . . . . f d d f . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . 8 8 8 8 . . . f b b b 
    . . d d d 8 8 8 8 d d d b b b b 
    . . d . . 8 8 8 8 . . . f . . . 
    . . d . . 8 f 8 8 . . . f . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
let enemyspeed = 20
let enemyspawntime = 2000
game.onUpdateInterval(2000, function () {
	
})
forever(function () {
    enemyship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 7 2 7 2 7 2 . . . . 
        . . . . . . 2 7 2 7 2 . . . . . 
        . . . . . . 2 7 2 7 2 . . . . . 
        . . . . . . . 7 2 7 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyship.x = scene.screenWidth()
    enemyship.vx = 0 - enemyspeed
    enemyship.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    statusbar.setColor(9, 2)
    statusbar.max = 100
    statusbar.attachToSprite(enemyship)
    pause(enemyspawntime)
})
forever(function () {
    enemyship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 8 8 8 8 8 8 . . . 
        . . . . . . 8 8 3 7 3 3 8 . . . 
        . . . . . . 8 3 3 3 7 3 7 . . . 
        . . . . . . 8 3 7 3 3 3 3 . . . 
        . . . . . . 8 9 9 9 3 7 8 . . . 
        . . . . . . 9 9 7 9 3 9 8 . . . 
        . . . . . . 8 8 3 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyship.x = scene.screenWidth()
    enemyship.vx = 0 - enemyspeed
    enemyship.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    statusbar.value += 200
    statusbar.setColor(9, 2)
    statusbar.max = 300
    statusbar.attachToSprite(enemyship)
    pause(enemyspawntime)
})
game.onUpdateInterval(500, function () {
    enemyspeed = 20
    enemyspeed += 0
    // hello
    enemyspeed += Math.min(enemyspeed, 0.5)
    enemyspawntime += -350
    enemyspawntime += Math.max(enemyspeed, 500)
})
