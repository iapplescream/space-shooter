namespace SpriteKind {
    export const enemyboss = SpriteKind.create()
    export const powerupp = SpriteKind.create()
    export const powerUP = SpriteKind.create()
    export const shop = SpriteKind.create()
    export const giant = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const realboss = SpriteKind.create()
    export const tiny = SpriteKind.create()
    export const goldenbullet = SpriteKind.create()
    export const turret = SpriteKind.create()
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
    otherSprite.destroy(effects.rings, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
    scene.cameraShake(2, 1000)
    info.changeScoreBy(1)
    pause(2000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    turret = sprites.create(assets.image`myImage`, SpriteKind.turret)
    if (Math.percentChance(80)) {
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
    }
    turret.follow(mySprite)
    turret.setPosition(75, 48)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.tiny, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -75
    info.changeScoreBy(1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.realboss, function (sprite, otherSprite) {
    info.changeLifeBy(-10)
    scene.cameraShake(2, 1000)
    info.changeScoreBy(1)
    pause(2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(80)) {
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
    }
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.giant, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    info.changeScoreBy(1)
    pause(5000)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy()
    if (Math.percentChance(5)) {
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
        power_up.x = zombie.x
        power_up.y = zombie.y
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tiny, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(2, 1000)
    info.changeScoreBy(1)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.realboss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -0.5
    info.changeScoreBy(10)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeScoreBy(5)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.giant, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    scene.cameraShake(2, 1000)
    info.changeScoreBy(1)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
    info.changeScoreBy(1)
    pause(5000)
})
function enemydeath (enemy: Sprite) {
    statusbar.spriteAttachedTo().destroy()
    if (Math.percentChance(5)) {
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
    if (Math.percentChance(5)) {
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
    scene.cameraShake(2, 5000)
    info.changeScoreBy(1)
    pause(2000)
})
let statusbar: StatusBarSprite = null
let zombie: Sprite = null
let power_up: Sprite = null
let projectile: Sprite = null
let turret: Sprite = null
let double_fire_mode: Sprite = null
let mySprite: Sprite = null
effects.blizzard.startScreenEffect(1000000000000000000009999999999999999999999999999999)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777b77777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777727777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777727777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777772777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777277777777777777777777777277777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc77777777777777777777777777777777777777777777777777777777777b7777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc77777777777777777777777777777777777777777b77777777777777777b7777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc777777777777777777777777777777777777777777bb777777777777777b7777777777277777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeccccce7777777777777777777777777777777777777777777777777777777777b7777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee77777777777777777777777777777777777777777777277777777777777b777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbeeeeeee77777777777777777777777777777777777777777b777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee7777777777777777777777777c777777b777777777777777777777777772777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee77777777777777777777777777777777b7777777777777777777777777777777777777777777777b7777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee77777777777777777777777777777777b7777777777777777b7777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee777777777777777777bb777777777777b77777777777777777777777777777c777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777c77777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbeeefeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777772777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeffe777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbeeeeefe77777777777777777777c77777777777777777777777c7777777777777777777777777777777777b7777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbeeeeefe777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbeeeeeff777777777777777777777777777777777777777777777777777777777777777727777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbb2bbbcbbbbbbbbbbbbeeeeeef777777777777777777777777777777777777777777772777777b77777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeff777777777777777777777777777777777777777b77777777777777777777b77777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbbbeeeeefe777777777777777722222222777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777b777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777777777777777777777777777727777777777777727777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee777777777777777777777777777777777777777777777777777777777777777777777777777777777727777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeefeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbefeeeee777777777777777777777777777777777b7777777727777777777777777777777777777c7bb777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee77777777777777777777777777777777777777777777777777777777777777c777777777777777777777777777777777777cccccccccccccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeee77777777777777777b77777777777777777777777777777777777777777277777777777777777777777777777777777777ecccccccccccccee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeee77777777777777777b77777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeecccccccccee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee777777777777777777bb777777777777777777777777777777b77777777777777777777777777777777777777777777777eeeeecccccccccee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee77777777777777777777777777777777777777777777772777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeefeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeefeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee77777777777777777777777777777777777777777777777777727777777777777777777777777777777777777777777777eeeefeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee77777777777777777777777277777777777777777777777777777777777777777777777777777777777777777777777777eeeeefeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee77777777777777777777777777777777777777777777777777777777777777777777b27777777777777777777777777777eeeeeefeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefeee77777777777777777777777b7777777b777777777777777777777777777777777777777777777777777777777777777777eeeeeeeffeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777777777777727777777777777777777777777777777777777777777777777777777777777777777777777eefeeeeeefeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeffeeeeeeffeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeefeeeeeefefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeefe77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeefeeeeeefeeffe
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeefe777777777777777777777777777777777777777777bbbbb77777777777bbbbb77777777777777777777777777777777777eeefeeeeeefeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeefe777777777777777777777777777777777777777777bbbbb77777777777bbbbb7777777777777777b777777777777777777eeefeeeeeeffeeee
    bbbbbbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbeeeeffe777777777777777777777777777777777777777777bbbbb777bbbbb777bbbbb77777777777777777777777777777777777eeeefeeeefffeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777777777b777777777777777777777bbbbb777bbbbb777bbbbb77777777777777777777777777777777777eeeefeeeffefeeee
    bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777bbbbb777bbbbb777bbbbb77777777777777777777777777777777777eeeefffffeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777bbbbb777bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777bbbbb777bbbbb777bbbbb77777777777777777777777b77777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee777777777777777777777777777777777777777777bfffb777bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbeeeefee77777777777777b777777777777777777777777777bbbbff77bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeffeee777777777777777777777777777777777777772777bbbbbf77bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefeeeee7772777777777777c7777777777777777777777777bbbbff77bbbbb777bbbbb77777777b77777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbbbbfeeeeee777777777777777777777777777777777777777777bbbbf777bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeee777777777777777777777772777777777777777777bbbfb777bbbbb777bbbbb77777777777777777777777777777777777eeeeeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbeeeeeee777777777777777777777777777777777777777227bbfbb777bbbbb777bbbbb77777777777777777777777777777777777eeefeeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbeeeeeee777777777777777777777777777777777777777227bbfbb777bbbbb777bbbbb77777777777777777777777777777777777eeeefeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbeeeeeeee77777777777777777777777777777777777777227bbffb777bbbbb777bbbb5555577777777777777777b7777777777777eeeefeeeeeeefeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffeeeeeeeeeee77777777777777777777777777777777777272bbbff777bbbbb777bbbb577757777777777777777777777777777777eeeeefeeeeeeffee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffeeeeeee77777777777277777777777777777727777272bbbbbf77bbbbb777bbbb577757777777777777777777777777777777eeeeefeeeeeeefee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeffeeeeee777777777777777777777777777777277772772bbbbff7bbbbbbbbbbbb5bb757777777777777777777777777777777eeeeefeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeffeeeee777777777777777777777777777777277772cc2bbbbcffbbbbbbbbbbbb5bb757775577777777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccffeeee7777777777777777777777b7777777227772bb2bbbbbbffbbbbbbbbbbb5bb757775577777777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc7777777777777777777777777777777777727272bbbb2bbbbbbfbbbbbbbbbbb5bb757757577777777777777777777777777eeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc77777777777777777777777777777777727272bbbb2bbbbbbfbbbbbbbbbbb5bb75775757777777777777777777777777cccccccccbbbbbbbe
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc77777777777777777777777777777777727272bbbbb2bbbbbfbbbbbbbbbb5bbb75557757777777777777777777777777cccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc77777777777777777777777777777777727222bbbbb2bbbbbbbbbbbbbbb5bbbb77777757777777777777777777777777cccccccccbbbbbbbb
    bbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc777777777777c7777777777777777777727722bbbbb2bbbbbbbbbbbbbbb5bbbb77777577777777777777777777777777ccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc77777777777777777777777777777777727772bbbbb2bbbbbbbbbbbbbbbbbbbb77775777777777777777777777777777ccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc77777777777777777777777777777777727777bbbbb2bbbbbbbbbbbbbbbbbbbb77757777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc77777777777777777777777777777777772777bbbbb2bbbbbbbbbbbbbbbbbbbb77757777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc77777777777777777777777777777777777277bbbbb2bbbbbbbbbbbbbbbbbbbb775777777777b7777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc7777777777777777777777c777777777777727bbbbb2bbbbbbbbbbbbbbbbbbbb75777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc77777777777777777777cc7777777777777772bbbbb2bbbbbbbbbbbbbbbbbbbb55777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbccccccccc7777777777777777777c77b777777777777777bbbbb2bbbbbbbbbbbbbbbbbbb577777777b77777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc7777777b7777777777c7777777777777777777bbbbb2bbbbbbbbbbbbbbbbbb5577777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbb22bbbbbbbbbbbbbbbb55b77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbb2bbbbbbbbbbbbbbbb5bb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbb2bbbbbbbbbbbbbbbb5bb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbb2bbbbbbbbbbbbbbbbbbb77777777777777772777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbb2bbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc77777777777777777777777777777777777bb77bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777bb7777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777277777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc77777777777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccbcccccccccc
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
info.setLife(10)
let enemyspeed = 20
let enemyspawntime = 1500
game.onUpdateInterval(5000, function () {
    zombie = sprites.create(img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        `, SpriteKind.giant)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 10)
    statusbar.value += 200
    statusbar.setColor(9, 2, 7)
    statusbar.value = 500
    statusbar.attachToSprite(zombie)
})
game.onUpdateInterval(5000, function () {
    zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 7 f . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.tiny)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 45)
    statusbar.value += 200
    statusbar.setColor(9, 2, 7)
    statusbar.value = 500
    statusbar.attachToSprite(zombie)
})
game.onUpdateInterval(200000, function () {
    zombie = sprites.create(img`
        ................................
        ................................
        eeeee...........................
        eeeee....7777773777.............
        eeeee....7373737777.............
        ebebe....7373773773.............
        eeeee....7777773777.............
        eeeee....fff7777fff.............
        eeeb.....fff7777fff.............
        eeee.....fff7777fff.............
        eeee.....7777777777.............
        eeee.....7777777777.............
        ebee.....7777777777.............
        eeee66666666666666666666........
        eeee66666666666666626666........
        eebe66666662666666666626........
        eeee66267666666667666666........
        ebee6666.6662666666.6666........
        eeee6666.6666666666.6666........
        eeee666626666666266.6666........
        eeee6666.6666666666.6666........
        eeee6666.6666666666.6666........
        eeee6666.6666766666.6666........
        bee77777.8888888888.777.........
        eee77777.8888888288.777ff.......
        eee77777.8888888888.bbbffbbbbbbb
        eee77777.8888828888.bbbffbbbbbb.
        ...77777.8888888888....ffbbbbb..
        .........8888828888.............
        .........8888888888.............
        .........8888888888.............
        .........8888888888.............
        `, SpriteKind.realboss)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 2.5)
    statusbar.value += 200
    statusbar.setColor(9, 2, 7)
    statusbar.value = 1000
    statusbar.attachToSprite(zombie)
})
game.onUpdateInterval(2500, function () {
    zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 . . . . . . . . 
        . . . . 2 7 7 2 . . . . . . . . 
        . . . . 7 7 7 7 . . . . . . . . 
        . . . . 7 7 7 7 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        `, SpriteKind.Enemy)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 20)
    statusbar.value += 200
    statusbar.setColor(9, 2)
    statusbar.max = 100
    statusbar.attachToSprite(zombie)
})
forever(function () {
    music.playMelody("C5 C5 B C5 B C5 B C5 ", 385)
    music.playMelody("C5 C5 C5 B B C5 B C5 ", 385)
    music.playMelody("C5 A A B G C5 A C5 ", 395)
    music.playMelody("C5 C5 A C5 B B F C5 ", 120)
})
forever(function () {
    info.changeLifeBy(1)
    pause(5000)
    if (true) {
    	
    }
})
forever(function () {
    zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . f 7 7 7 f . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        `, SpriteKind.Enemy)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 20)
    statusbar.value += 200
    statusbar.setColor(9, 2)
    statusbar.max = 100
    statusbar.attachToSprite(zombie)
    pause(2000)
})
forever(function () {
    pause(1000000)
    info.changeLifeBy(1)
    pause(0.0000000000000000000000001)
})
game.onUpdateInterval(100000, function () {
    zombie = sprites.create(img`
        ................................
        ................................
        ................................
        .........7777773777.............
        .........7373737777.............
        .........7373773773.............
        .........7777773777.............
        .........fff7777fff.............
        .........fff7777fff.............
        .........fff7777fff.............
        .........7777777777.............
        .........7777777777.............
        .........7777777777.............
        ....66666666666666666666........
        ....66666666666666666666........
        ....66666666666666666666........
        ....66666666666666666666........
        ....6666.6666666666.6666........
        ....6666.6666666666.6666........
        ....6666.6666666666.6666........
        ....6666.6666666666.6666........
        ....6666.6666666666.6666........
        ....6666.6666666666.6666........
        .....777.8888888888.777.........
        .....777.8888888888.777.........
        .....777.8888888888.777.........
        .........8888888888.............
        .........8888888888.............
        .........8888888888.............
        .........8888888888.............
        .........8888888888.............
        .........8888888888.............
        `, SpriteKind.boss)
    zombie.x = scene.screenWidth()
    zombie.vx = 0 - enemyspeed
    zombie.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    zombie.follow(mySprite, 5)
    statusbar.value += 200
    statusbar.setColor(9, 2, 7)
    statusbar.value = 1000
    statusbar.attachToSprite(zombie)
})
