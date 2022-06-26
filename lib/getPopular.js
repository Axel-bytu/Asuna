import req from './request.js'
let { RequestError } = (await import('request-promise/errors.js')).default
import { previewScraper } from './scraper.js'
     
async function getPopular() {

    const $ = await req('https://nhentai.net/')
    if (!$) throw new RequestError('Not found')

    return previewScraper($, 'popular')

}

export {
    getPopular
}