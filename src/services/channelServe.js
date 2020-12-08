export default {
    async getChannels() {
        try{
            const resp = await fetch(`/x/web-interface/web/channel/category/list`)
            const data = await resp.json()
            return data.data.categories
        }catch (err){
            console.log('err: ', err);
        }
    }
}