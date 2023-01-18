db.getCollection('people').updateOne(
    { firstName: 'Kate' },
    { $set: { firstName: 'George', lastName: 'Doe' } },
    { multi: true }
)