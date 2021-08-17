# ABOUT
This Web application calculates the reward points of a customer based on transaction amount of past three months. 

The application contains data.js file which contains a dataset with the following format: 
    [{ "transaction_id": 1,
        "transaction_amount": 458 
        "name": "andy", 
        "date": "27-06-2021", 
    }]

### Calculating Reward Points:
    The application uses following logic to calculate reward points:
    
    1. If transaction amount > 50 and amount < 100 
        then reward point = transaction amount-50
    2. If transaction amount > 100
        then reward point = (2*(transaction amount-100) + 50)
    3. If transaction amount < 50
        then reward point = 0


# Starting the Application

1. Installing dependencies

        yarn install

2. Running Application
    
        yarn start





