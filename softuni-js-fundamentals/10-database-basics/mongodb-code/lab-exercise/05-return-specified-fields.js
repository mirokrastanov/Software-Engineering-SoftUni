db.getCollection('people').find(
    { firstName: 'Michael' },
    { lastName: 1 }
)