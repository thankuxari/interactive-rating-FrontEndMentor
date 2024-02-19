const rating = document.getElementsByName('rating');
const ratingContainer = document.getElementById('rating-container');
const thankContainer = document.getElementById('thankyou-container');
const submitBtn = document.getElementById('btn-submit');

submitBtn.addEventListener('click',displayThanks);

function displayThanks(){


    //Store the selected value
    let resultSelected;

    //Counter for empty input
    let errorCounter = 0;

    //Get selected value
    for(let i = 0; i < rating.length; i++){ 
        if(rating[i].type === 'radio'){
            
            if(rating[i].checked){
                resultSelected = rating[i].value; 
            }else{
                errorCounter++;
            }
        }
    }

    //Error handling
    if(errorCounter === 5){
        alert('Please submit a rating');
        return;
    }

    //Hide Rating Container
    ratingContainer.style.display = 'none';

    //Display Hidden thankyou Container
    thankContainer.style.display = 'flex';

    //Display selected
    const result = thankContainer.querySelector('h3');
    result.innerHTML = 'You selected ' +resultSelected+ ' out of 5';
    // console.log(result);
}

