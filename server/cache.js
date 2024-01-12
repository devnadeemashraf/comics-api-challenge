class Cache {
    constructor() {
        this.cache = {}
    }

    // Method to store data in the cache
    set(key, value) {
        this.cache[key] = value;
    }

    // Method to retrieve data from the cache
    get(key) {
        return this.cache[key];
    }

    // Method to check if a key exists in the cache
    has(key) {
        return key in this.cache;
    }

    // Method to remove a key-value pair from the cache
    remove(key) {
        delete this.cache[key];
    }

    // Method to clear the entire cache
    clear() {
        this.cache = {};
    }
}

export default new Cache();