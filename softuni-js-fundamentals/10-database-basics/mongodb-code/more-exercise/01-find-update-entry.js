db.getCollection('people').updateOne(
    { firstName: 'Kate' },
    { $set:{ firstName: 'George', age: 25 } }
)