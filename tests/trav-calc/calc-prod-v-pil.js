// let test = "2024-06-28T14:45:51.538Z";
const getDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return formatter.format(dateObject);
}
// console.log(getDdMmYyyy(test));  // Aug 31, 2024

const getTime = (dateString) => {
    const dateObject = new Date(dateString);
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return timeFormatter.format(dateObject).replace(' ', '');
};
// console.log(getHhMmSs(test));  // 2:41PM

const getZone = (dateString) => {
    const dateObject = new Date(dateString);

    // GMT offset
    const offsetFormatter = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' });
    const offsetParts = offsetFormatter.formatToParts(dateObject);
    const gmtOffset = offsetParts.find(part => part.type === 'timeZoneName')?.value;

    // Timezone Abbreviation
    const nameFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'full' });
    const nameParts = nameFormatter.formatToParts(dateObject);
    const timezoneName = nameParts.find(part => part.type === 'timeZoneName')?.value;

    // Manually derive an abbreviation (if not directly available)
    const timezoneAbbreviation = timezoneName.split(' ').map(word => word[0]).join('').toUpperCase();

    return {
        offset: gmtOffset,
        abbr: timezoneAbbreviation,
        str: `${timezoneAbbreviation}/${gmtOffset}`,
    };
}

const getRemainingTime = (expiration) => {
    const now = new Date();
    const expirationDate = new Date(expiration);
    const difference = expirationDate - now;

    if (difference <= 0) {
        return "Session expired";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}
// const expirationDate = new Date('2024-09-15T15:00:00');
// console.log(getRemainingTime(expirationDate));

//================================================================
function pretifyNum(num) { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
function getD(n) { return n.split('').slice(0, n.length - 6).join('') }

const toLog = [];
const [resetTime, currentTime] = [new Date('9/12/2024, 16:30:00'), new Date()];
const timeDiff = (currentTime - resetTime) / 1000 / 60 / 60;

const [rD, rT, cD, cT, h] = [getD(getDate(resetTime)), getTime(resetTime),
getD(getDate(currentTime)), getTime(currentTime), timeDiff.toFixed(1)];
toLog.push(`  Time:   ${h}h  | ${rD}, ${rT} - ${cD}, ${cT}`);
toLog.push('--------------------------------------');

const prodPH = 540 * 4;
const prodLost = prodPH * timeDiff;
toLog.push(`  Lost: -${pretifyNum(prodLost.toFixed(0))} | (-${pretifyNum(prodPH)}/h)`);

// ADD UPDATES HERE ===================================================================================
const resGained = (4 * 1760) + (4 * 1240) + (4 * 760) + (4 * 360) + (4 * 160) + (4 * 800) + (4 * 1360)
    + (4 * 240) + (4 * 40) + (4 * 920) + (4 * 1720) + (4 * 440) + (4 * 1320) + (4 * 440) + (4 * 1360)
    + (4 * 1200) + (4 * 1120) + (4 * 2680) + (4 * 680) + (4 * 800) + (4 * 1720) + (4 * 440) + (4 * 2640)
    + (4 * 800) + (4 * 600) + (4 * 840) + (4 * 720) + (4 * 360) + (4 * 160) + (4 * 2480) + (4 * 520)
    + (4 * 480) + (4 * 400) + (4 * 120) + (4 * 280) + (4 * 1360) + (4 * 240) + (4 * 200) + (4 * 600)
    + (4 * 760) + (4 * 680) + (4 * 2040) + (4 * 720) + (4 * 1760) + (4 * 2680) + (4 * 1120) + (4 * 1960)
    + (4 * 1560) + (4 * 2000) + (4 * 800) + (4 * 200) + (4 * 680) + (4 * 160) + (4 * 1800) + (4 * 3240)
    + (4 * 1640) + (4 * 280) + (4 * 1240) + (4 * 1600) + (4 * 400) + (4 * 440) + (4 * 640) + (4 * 720)
    + (4 * 560) + (4 * 600) + (4 * 2000) + (4 * 400) + (4 * 2120) + (4 * 520) + (4 * 2360) + (4 * 1960)
    + (4 * 2520) + (4 * 1080) + (4 * 3280) + (4 * 600) + (4 * 360) + (4 * 1760) + (4 * 320) + (4 * 320)
    + (4 * 1400) + (4 * 320) + (4 * 480) + (4 * 400) + (4 * 160) + (4 * 1480) + (4 * 1520) + (4 * 1560)
    + (4 * 3080) + (4 * 2800) + (4 * 480) + (4 * 1880) + (4 * 280) + (4 * 760) + (4 * 1200) + (4 * 1360)
    + (4 * 1960) + (4 * 3000) + (4 * 1320) + (4 * 1720) + (4 * 4360) + (4 * 760) + (4 * 3000) + (4 * 3000)
    + (4 * 480) + (4 * 480) + (4 * 960);

// ====================================================================================================
toLog.push(`Gained: +${pretifyNum(resGained)} | (+${pretifyNum((resGained / timeDiff).toFixed(0))}/h)`);
toLog.push('--------------------------------------');

const finalSum = resGained - prodLost;
toLog.push(`   Sum: ${finalSum >= 0 ? '+' : ''}${pretifyNum(finalSum.toFixed(0))} | (${finalSum >= 0 ? 'POSITIVE' : 'NEGATIVE'})`);

const hoursAhead = finalSum / 4 / 360;
const isAhead = hoursAhead >= 0 ? '(AHEAD)' : '(BEHIND)';
toLog.push(`Status:  ${hoursAhead.toFixed(1)}h  | ${isAhead}`);

toLog.forEach(x => console.log(x));





















