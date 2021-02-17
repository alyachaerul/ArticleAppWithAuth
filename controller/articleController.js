const {
    Articles
} = require('../models')
const {
    nanoid
} = require('nanoid')

function get(query) {
    return Articles.findAll({
        where: query, //where menerima sebuah objek, dan query merupakan sebuah objek
        // sort: "DESC" --> melakukan sorting dari besar ke kecil, kalo kecil ke besar ASC. kalo banyak yg diproses bikin fungsi baru
    })
}

function add(data) {
    return Articles.create({
        id: nanoid(),
        ...data
    })
}

function edit(id, data) {
    return Articles.update(data, {
        where: {
            id
        }
    })
}

function remove(id) {
    return Articles.destroy({
        where: {
            id
        }
    })
}
module.exports = {
    get,
    add,
    edit,
    remove
}