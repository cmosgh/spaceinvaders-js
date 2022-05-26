function Shot(x, y, dy, color) {
    this.x = x
    this.y = y
    this.dy = dy
    this.color = color
}

Shot.prototype.move = function () {
    this.y += this.dy
    return this.y > 0 && this.y < 600
}

Shot.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x - 1, this.y, 3, 20)
}

export default Shot