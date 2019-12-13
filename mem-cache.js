/**
 * MemCache is a cache solution where it takes an object and object as key value pair.
 * By default the cache size is set to 200 items to reduce memory consumption.
 */
export default class MemCache {
    constructor(cacheSize = 200) {
        this._cache = new Map();
        this._cacheSize = cacheSize;
    }

    getEncyrptedKey(obj) {
        let key = null;
        try {
            key = btoa(JSON.stringify(obj));
        } catch (e) {
            console.log(e);
        }

        return key;
    }

    /**
     * Encrypt the keys so that we dont refer them anymore inside the class to help GC
     * @param key
     * @returns {*}
     */
    getCache(key) {
        let encKey = this.getEncyrptedKey(key);

        if (encKey !== null) {
            if (this._cache.has(encKey)) {
                return this._cache.get(encKey);
            }
        }

        return false;
    }

    addCache(key, value) {
        let encKey = this.getEncyrptedKey(key);

        if (encKey !== null) {
            // check if the key exists, then update the value;
            if (this._cache.has(encKey)) {
                this._cache.set(encKey, value);
                return true;
            }

            this._cache.set(encKey, value);

            if (this._cache.size > this._cacheSize) {
                let entries = this._cache.entries();

                this._cache.delete(entries.next().value[0]);
            }

            return true;
        }

        return false;
    }

    clear() {
        this._cache.clear();
    }
}
