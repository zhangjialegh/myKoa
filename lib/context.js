// module.exports = {
//   get url() {
//     return this.request.url;
//   },
//   get body() {
//     return this.respose.body;
//   },
//   set body(val) {
//     this.respose.body = val;
//   },
//   get method() {
//     return this.request.method
//   }
// }

const reqGetters = ['url', 'method'],
  resAccess = ['body'],
  proto = {}
for (const name of reqGetters) {
  proto.__defineGetter__(name, function () {
    return this['request'][name]
  })
}
for (const name of resAccess) {
  proto.__defineGetter__(name, function () {
    return this['response'][name]
  })
  proto.__defineSetter__(name, function (val) {
    return (this['response'][name] = val)
  })
}

module.exports = proto
