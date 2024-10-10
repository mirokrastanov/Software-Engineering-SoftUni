// name: 

/*
 * Complete the 'getRequestStatus' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY requests as parameter.
 */


// notes
// 1 req every 1 sec
// 2 req every 5 sec (max for single address)
// 5 req every 30 sec (max for single address)

function getRequestStatus(requests) {
    const domainRequests = {};
    const result = [];
    const SUCCESS_LIMIT = 5;
    const BLOCK_LIMIT = 25;

    for (let i = 0; i < requests.length; i++) {
        const domain = requests[i];
        const currentTime = i;

        if (!domainRequests[domain]) {
            domainRequests[domain] = { timestamps: [], successCount: 0 };
        }

        domainRequests[domain].timestamps = domainRequests[domain].timestamps.filter(timestamp => timestamp > currentTime - 30);

        if (domainRequests[domain].successCount >= SUCCESS_LIMIT) {
            result.push("{status: 429, message: Too many requests}");
        } else {
            if (domainRequests[domain].timestamps.length < SUCCESS_LIMIT) {
                domainRequests[domain].timestamps.push(currentTime);
                domainRequests[domain].successCount++;
                result.push("{status: 200, message: OK}");
            } else {
                result.push("{status: 429, message: Too many requests}");
            }
        }

        if (domainRequests[domain].successCount >= SUCCESS_LIMIT) {
            const remainingBlocked = BLOCK_LIMIT - (i - (domainRequests[domain].timestamps[0] || -1));
            if (remainingBlocked > 0) {
                if (result.length > (i - remainingBlocked)) {
                    for (let j = 0; j < remainingBlocked; j++) {
                        result[i + j] = "{status: 429, message: Too many requests}";
                    }
                }
            }
        }

        if (domainRequests[domain].timestamps.length === SUCCESS_LIMIT && (currentTime - domainRequests[domain].timestamps[0]) >= 30) {
            domainRequests[domain].successCount = 0;
            domainRequests[domain].timestamps = [];
        }
    }

    return result;
}

console.log(getRequestStatus(['dwa', 'ddwa', 'dwa', 'dwa', 'dwa', 'dwa', '9yhwer', 'dwa', 'dwadw', 'dwadwas', 'ugydwqi']));
