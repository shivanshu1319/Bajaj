const axios = require('axios');

async function createInvestmentAccount() {
    try {
        const apiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
        const requestData = {
            name: 'Shivanshu Mishra',
            email: 'shivanshu1319.be21@chitkara.edu.in',
            rollNumber: '2110991319',
            phone: '9026566243'
        };

        const response = await axios.post(apiUrl, requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Account created successfully:', response.data);
     
        buyStocks(response.data.accountNumber); 
    } catch (error) {
        console.error('Error creating account:', error.response ? error.response.data : error.message);
    }
}

async function buyStocks(accountNumber) {
    try {
        const apiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
        const requestData = {
            company: 'Bajaj', 
            currentPrice: 1000, 
            accountNumber: accountNumber,
            githubRepoLink: 'https://github.com/' 
        };

        const response = await axios.post(apiUrl, requestData, {
            headers: {
                'Content-Type': 'application/json',
                'bfhl-auth': '2110991319' 
            }
        });

        console.log('Stocks bought successfully:', response.data);
    } catch (error) {
        console.error('Error buying stocks:', error.response ? error.response.data : error.message);
    }
}

createInvestmentAccount();
