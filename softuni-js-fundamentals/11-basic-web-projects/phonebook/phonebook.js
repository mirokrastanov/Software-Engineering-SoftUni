const fs = require('fs');

const phonebookJSON = fs.readFileSync('db.json');
const phonebook = JSON.parse(phonebookJSON, null, 2);

function getContacts() {
	return phonebook.slice();
}

function addContact(contact) {
	phonebook.push(contact);
	let jsonData = JSON.stringify(phonebook, null, 2);
	fs.writeFileSync('db.json', jsonData);
}

function hasContact(contact) {
	const contactExists = phonebook.some(x => x.name == contact.name && x.number == contact.number);
	return contactExists;

}

module.exports = {
	getContacts,
	addContact,
	hasContact,
};

console.log('phonebook');