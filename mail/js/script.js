const mailList = ['a','b','c','d','e',]

const form = document.getElementById('addEmailForm');

form.addEventListener('submit',
    function(event) {
        event.preventDefault();
        let userEmail = document.getElementById('addEmail').value
        
        let scope = 0
        for (let i = 0; i < mailList.length; i++) {
            
            if (userEmail == mailList[i]){
                scope = 1

            }
            
        }
        if (scope == 1){
            console.log('accepted')
        }
        else {
            console.log('denied')
        }
        
    }
);

// take a let outseide the cicle and condition
// modify it in a condition of true or false
// bring it outside of the cycle to verify the value in another condition