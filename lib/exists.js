import regex from './regex.js'
import req from './request.js'
import { RequestError } from 'request-promise/errors'

async function exists(identifier) {

    const id = identifier.toString().replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)
    if (!$) throw new RequestError('Not found')

    return $ ? true : false

}

export {
    exists
}