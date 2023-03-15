migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umclneybxoghqrd")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umclneybxoghqrd")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
