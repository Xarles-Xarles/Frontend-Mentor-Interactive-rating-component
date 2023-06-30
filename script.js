function hide(chooseDisplay){
    const hidden = document.getElementById('thankYou');

    hidden.style.display = chooseDisplay;
}

const rated = document.getElementById('rating');

const btnRates = document.querySelectorAll('.number_flex');

btnRates.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        rated.innerHTML = btn.innerHTML;
    })
})



