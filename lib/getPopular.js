import req from './request.js'
import { RequestError } from 'request-promise/errors'
import { previewScraper } from './scraper.js'
     
async function getPopular() {

    const $ = await req('https://nhentai.net/')
    if (!$) throw new RequestError('Not found')

    return previewScraper($, 'popular')

}

export {
    getPopular
}