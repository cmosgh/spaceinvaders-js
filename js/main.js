const main = () => {
    const canvas = document.getElementById("canvas")
    let shipX = 230
    canvas.addEventListener("mousemove", function (e) {
        ship.x = e.offsetX - 20
    })
    canvas.addEventListener("mousedown", function (e) {
        if (shipShots.length < 3) {
            shipShots.push(ship.shoot(-20, "#F00"))
        }
    })
    const ctx = canvas.getContext("2d");
    let interval

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
            isBetween(shot.y - shot.dy/2, this.y, this.y + 20)
    }

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

    let invaderDx = -5
    let invaders = []
    let ship = new GameObject(shipX, 550, document.getElementById("ship"))
    let invaderShot, shipShots = []


    function init() {
        shipShots = []
        invaders = []
        const alienImg = document.getElementById("alien")
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 8; x++) {
                invaders.push(new GameObject(50 + x * 50, 20 + y * 50, alienImg))
            }
        }
    }

    function move() {
        let leftX = invaders[0].x
        let rightX = invaders[invaders.length - 1].x
        if (leftX <= 20 || rightX >= 440) invaderDx = -invaderDx
        invaders.forEach(inv => inv.move(invaderDx, 0.5))
        if (invaderShot && !invaderShot.move()) {
            invaderShot = null
        }

        if (!invaderShot) {
            let activeInvaders = invaders.filter(i => i.active)
            if (activeInvaders.length) {
                let selectedInvader = activeInvaders[Math.floor(Math.random() * activeInvaders.length)]
                invaderShot = selectedInvader.shoot(20)
            }
        }

        shipShots.forEach((ss, index) => {
            if (!ss.move()) {
                shipShots.splice(index, 1)
            } else {
                const hitInvaders = invaders.filter(i => i.isHitBy(ss))
                if (hitInvaders.length) {
                    hitInvaders.forEach(i => i.active = false)
                    shipShots.splice(index, 1)
                }
            }
        })

        if (ship.isHitBy(invaderShot)) {
            alert('Game OVER!')
            init()
        }
    }

    function draw() {
        ctx.fillStyle = "#ddd"
        ctx.fillRect(0, 0, 500, 600)
        invaderShot && invaderShot.draw(ctx)
        shipShots && shipShots.map(ss => ss.draw(ctx))
        invaders.forEach(inv => inv.draw(ctx))
        ship.draw(ctx)
    }

    function gameLoop() {
        move()
        draw()
    }


    function start() {
        init()
        interval = setInterval(gameLoop, 60)
    }

    start()
}

main()
