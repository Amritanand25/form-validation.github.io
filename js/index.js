let formData = document.querySelectorAll("input");
let submit = document.getElementById('submit');

let eventSubmit = submit.addEventListener('click', event =>{
   formData.forEach( (item, index) => {
       event.preventDefault();
      validation(document.getElementById(`${item.id}`).value, item.id);
   })
   successfulSubmission();

});


function isValidUserName(itemVal, itemId)
{
    let parent = document.getElementById(`${itemId}`).parentElement;
    if(itemVal.length >= 3)
    {
     parent.className = "form-content success";
     
    }else{
        parent.className = "form-content error";
    }   
}

const isEmail = (emailVal, itemId) => {
    let at = emailVal.indexOf('@');
    let dot = emailVal.lastIndexOf('.');
    if(at+2 > dot)
    {
      return false;
    }
    if(dot == emailVal.length-1)
    return false;
    return true;
};


let pass;



function validation(itemVal, itemId)
{
    
    let parent = document.getElementById(`${itemId}`).parentElement;
    itemVal = itemVal.trim();

    if(itemId === "userid")
    {
        isValidUserName(itemVal, itemId);
    }
    if(itemId === "email")
    {
        if(isEmail(itemVal, itemId))
        {
            parent.className = "form-content success";
            
        }else{
            parent.className = "form-content error";
        }
    }
    if(itemId === "phone")
    {
        if(itemVal.length === 10 && itemVal[0] !== '0')
        {
            parent.className = "form-content success";  
            
        }else{
            parent.className = "form-content error";
        }
    }
    if(itemId === "password")
    {
        if(itemVal.length > 5)
        {
         pass = itemVal;
         parent.className = "form-content success"; 
        
        }else{
            parent.className = "form-content error";
        }
    }
    if(itemId === "cpassword")
    {
        if(itemVal.length > 5 && pass === itemVal)
        {
         parent.className = "form-content success"; 
        
        }else{
            parent.className = "form-content error";
        } 
    }
}

// console.log(eventSubmit);
function isValidSubmission()
{
    let formParent = document.getElementsByClassName('form-content');
    for ( let i = 0; i<formParent.length; i++)
    {
        if(formParent[i].className != "form-content success")
        return false;
        // console.log(formParent)
    }
    return true;
}

function successfulSubmission()
{
    let validSubmit = isValidSubmission();
    if(validSubmit == true)
    {
        swal("submitted!", "Your form is successfully submitted!", "success"); 
    }
    setTimeout( () => {
        formData.forEach( (item, index) => {
            item.value = "";
            item.parentElement.className = "form-content";
        })
    }, 1800)
    
   
}

