# utility-libraries

## mem-cache 

creates a cache that accepts objects as keys and stores anything init. It has a specific limit after which it removes in LIFO manner. 

### How to use
var memcache = new MemCache();
/**
memcache.addCache({a:3, b:4}, {asdf:4});
memcache.addCache({a:3, b:5}, {asdf:7});
memcache.addCache({a:3, b:1}, "test");
memcache.addCache({a:3, b:1}, "tesasdft");
console.log(memcache.getCache({a:3, b:1}));
**/


