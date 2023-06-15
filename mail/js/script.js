const mailList = ['a','b','c','d','e',]

const form = document.getElementById('addEmailForm');

form.addEventListener('submit',
    function(event) {
        event.preventDefault();
        let userEmail = document.getElementById('addEmail').value
        
        
        for (let i = 0; i < mailList.length; i++) {
            // console.log('-', mailList[i]);
            if (userEmail == mailList[i]){
                // alert('yes')
                console.log('accpting number', userEmail, mailList[i])
                break;
                
            }
            else{
                // alert('no')
                console.log('non accpting number', userEmail, mailList[i])
            }
           
            
        }
        for (let i = 0; i < mailList.length; i++) {
            // console.log('-', mailList[i]);
            if (userEmail !== mailList[i]){
                // alert('yes')
                console.log('second loop', userEmail, mailList[i])
                break;
                
            }
            
           
            
        }
       
        
    }
);