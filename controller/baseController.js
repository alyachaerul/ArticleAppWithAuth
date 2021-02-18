const {
    nanoid
} = require('nanoid')

class BaseController {
    constructor(model) {
        this.model = model
    }

    get(query) {
        return this.model.findAll({
            where: query, //where menerima sebuah objek, dan query merupakan sebuah objek
            // sort: "DESC" --> melakukan sorting dari besar ke kecil, kalo kecil ke besar ASC. kalo banyak yg diproses bikin fungsi baru
        })
    }

    add(data) {
        return this.model.create({
            id: nanoid(),
            ...data
        })
    }

    edit(id, data) {
        return this.model.update(data, {
            where: {
                id
            }
        })
    }

    remove(id) {
        return this.model.destroy({
            where: {
                id
            }
        })
    }

}

module.exports = BaseController