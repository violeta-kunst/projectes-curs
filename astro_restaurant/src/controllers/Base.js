const APIURL = 'https://app.nocodb.com/api/v2/tables/m1fwgyajti42mh6/records?limit=25&shuffle=0&offset=0';
const TOKEN = 'OaUyxRywul6C2-8KSsR0gzKTBsWEquVigUOdtpZo';

class BaseController {
    constructor(tableId, resourceName) {
        this.tableId = tableId;
        this.resourceName = resourceName;
    }

    async getAll() {
        const response = await fetch(`${APIURL}&tableId=${this.tableId}`, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.list;
    }
}

export default BaseController;
