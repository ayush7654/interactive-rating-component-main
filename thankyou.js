document.addEventListener('DOMContentLoaded', function () {
    const givenRating = localStorage.getItem('ratingGiven');
    const score = document.getElementById('givenscore');
    
    if (givenRating) {
        score.textContent = givenRating;
        
    }
    });