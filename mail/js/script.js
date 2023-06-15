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
                console.log('accepting ', userEmail, mailList[i])
                // break;
                
            }
            else{
                // alert('no')
                console.log('non accepting ', userEmail, mailList[i])
            }
           
            
        }
        
      
       
        
    }
);