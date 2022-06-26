import requestPromise from 'request-promise'
import cheerio from 'cheerio'
      
async function req(url, qs = {}) {

    try {
        let $ = await requestPromise({
            uri: url,
            qs,
            transform: function (body) {
                return cheerio.load(body, { decodeEntities: false })
            }
        })
        return $
    }
    catch (e) {
        return null
    }

}

export {
    req
}