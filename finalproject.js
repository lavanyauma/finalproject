// Show forms based on user action
function showLogin() {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('menuSection').style.display = 'none';
    document.getElementById('reviewSection').style.display = 'none';
}

function showSignup() {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('menuSection').style.display = 'none';
    document.getElementById('reviewSection').style.display = 'none';
}

function showMenu() {
    document.getElementById('authForms').style.display = 'none';
    document.getElementById('menuSection').style.display = 'block';
    document.getElementById('reviewSection').style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    alert('Logged in as: ' + email);
    showMenu();
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;


    alert('Signed up with email: ' + email);
    showLogin(); 
});


function addToCart(dishName, price) {

    alert(dishName + ' added to cart for $' + price);
}

function rate(stars) {
    let ratingStars = document.querySelectorAll('.rating span');
    ratingStars.forEach((star, index) => {
        if(index < stars) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    const stars = document.querySelectorAll('.rating span.active').length;

    alert('Thank you for your ' + stars + '-star review: ' + reviewText);
}
