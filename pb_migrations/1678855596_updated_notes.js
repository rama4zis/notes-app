migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umclneybxoghqrd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b9ewmvy9",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umclneybxoghqrd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b9ewmvy9",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
