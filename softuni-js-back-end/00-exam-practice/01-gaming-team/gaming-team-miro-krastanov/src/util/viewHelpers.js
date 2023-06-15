exports.getPlatformOptions = function (platform) {
    const platforms = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];

    const options = platforms.map((title, index) => ({
        title: title,
        value: title,
        selected: platform.toLowerCase() == title.toLowerCase(),
    }));

    return options;
}

exports.platformIsValid = function (platform) {
    const platforms = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];
    let flag = false;
    platforms.forEach(x => {
        if (platform == x) flag = true;
    });
    return flag;
}