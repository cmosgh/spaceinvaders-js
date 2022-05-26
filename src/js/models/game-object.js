import Shot from './shot'

function GameObject(x, y, img) {
    this.x = x
    this.y = y
    this.img = img
    this.active = true
}

GameObject.prototype.draw = function (ctx) {
    this.active && ctx.drawImage(this.img, this.x, this.y, 40, 40)
}

GameObject.prototype.move = function (dx, dy) {
    this.x += dx
    this.y += dy
}

GameObject.prototype.shoot = function (dy, color = "#00F") {
    return new Shot(this.x + 20, this.y + 10, dy, color)
}

GameObject.prototype.isHitBy = function (shot) {
    if (!shot) {
        return
    }

    const isBetween = (x, a, b) => {
        return a < x && x < b
    }

    return this.active &&
        isBetween(shot.x, this.x, this.x + 40) &&
        isBetween(shot.y - shot.dy / 2, this.y, this.y + 20)
}

export default GameObject