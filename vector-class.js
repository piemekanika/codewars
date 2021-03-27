class Vector {
    constructor(components) {
        this.components = components
    }

    add({ components }) {
        if (components.length !== this.components.length) {
            throw new Error('Cannot use addition')
        }

        const newComponents = this.components.map((component, index) => {
            return component + components[index]
        })

        return new Vector(newComponents)
    }

    subtract({ components }) {
        if (components.length !== this.components.length) {
            throw new Error('Cannot use subtraction')
        }

        const newComponents = this.components.map((component, index) => {
            return component - components[index]
        })

        return new Vector(newComponents)
    }

    dot({ components }) {
        if (components.length !== this.components.length) {
            throw new Error('Cannot use dotting')
        }

        return this.components.reduce((acc, cur, index) => {
            return acc + cur * components[index]
        }, 0)
    }

    norm() {
        return Math.sqrt(this.components.reduce((acc, cur) => acc + cur ** 2, 0))
    }

    toString() {
        return `(${this.components.toString()})`
    }

    equals({ components }) {
        return this.components.every((component, index) => component === components[index])
    }
}
