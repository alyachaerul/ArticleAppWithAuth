const {
    Articles
} = require('../models')
const BaseController = require('./baseController')

class ArticleController extends BaseController {
    constructor() {
        super(Articles)
    }
}

module.exports = ArticleController