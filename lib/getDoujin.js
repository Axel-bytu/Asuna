import regex from './regex.js'
import req from './request.js'
import { RequestError } from 'request-promise'
import { doujinScraper } from './scraper.js'

async function getDoujin(identifier, simplified = false) {

    //if identifier is an url, convert it to a proper id
    const id = identifier.toString().replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)
    if (!$) throw new RequestError('Not found')

    return doujinScraper($, id, simplified)
    
}

export {
    getDoujin
}