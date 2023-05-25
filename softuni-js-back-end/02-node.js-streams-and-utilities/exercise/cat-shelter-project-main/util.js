const fs = require('fs/promises');

exports.replaceData = (html, data) => {
    return Object.keys(data).reduce((result, key) => {
        result = result.replace(`{{${key}}}`, data[key])

        return result;
    }, html)
};

exports.addCatOptionTemplate = (breed, disabled = false) => `
<option value="${breed} Cat" ${disabled ? 'disabled' : ''}>${breed} Cat</option>
`;