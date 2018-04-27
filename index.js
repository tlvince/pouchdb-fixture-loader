const { promisify } = require('util')
const couchDBCompile = require('couchdb-compile')

const couchDBCompileP = promisify(couchDBCompile)

const insertFixtures = (PouchDB, fixturePath) =>
  couchDBCompileP(fixturePath)
    .then(compileDoc => {
      const dbName = compileDoc._id
      const docs = Object.keys(compileDoc)
        .filter(id => id !== '_id') // DB name
        .map(id => compileDoc[id])
      const db = new PouchDB(dbName)
      return db.bulkDocs(docs)
    })

module.exports = (PouchDB, fixturePaths = []) => {
  const promises = fixturePaths.map(fixturePath => insertFixtures(PouchDB, fixturePath))
  return Promise.all(promises)
}
