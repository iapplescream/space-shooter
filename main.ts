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
effects.blizzard.startScreenEffect(100000000000000000000)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 2 4 4 4 . 
    . . . . . . . . . 7 2 2 4 . . . 
    . . . . . . . . 7 7 2 7 . . . . 
    8 8 8 b b 8 7 7 7 b 2 b 7 . . . 
    5 . 7 . . . 7 7 b b 2 7 7 7 4 . 
    5 9 9 6 6 9 7 b b b 2 2 2 7 4 4 
    5 9 9 6 6 9 7 7 b b 2 7 7 7 4 . 
    5 . 7 . . . 7 7 7 b 2 b 7 . . . 
    8 8 8 b b 8 7 7 7 7 2 7 . . . . 
    . . . . . . . . 7 7 2 2 4 . . . 
    . . . . . . . . . 2 2 2 4 4 4 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
    statusbar.setColor(7, 2)
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
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . 5 5 5 2 2 2 2 2 
        . . . . . . . . 5 5 5 2 2 2 2 2 
        . . . 2 2 2 2 2 5 5 5 2 2 2 2 2 
        . . . 2 2 2 2 2 5 5 5 2 2 2 2 2 
        . . . 2 2 2 2 2 5 5 5 2 2 2 2 2 
        . . . 2 2 2 2 2 5 5 5 2 2 2 2 2 
        . . . 2 2 2 2 2 5 5 5 2 2 2 2 2 
        . . . . . . . . 5 5 5 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyship.x = scene.screenWidth()
    enemyship.vx = 0 - enemyspeed
    enemyship.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    statusbar.max += 200
    statusbar.setColor(7, 2)
    statusbar.max = 300
    statusbar.attachToSprite(enemyship)
    pause(enemyspawntime)
})
game.onUpdateInterval(500, function () {
    enemyspeed += 0.5
    // hello
    enemyspeed += Math.min(enemyspeed, 0.5)
    enemyspawntime += -300
    enemyspawntime += Math.max(enemyspeed, 500)
})
