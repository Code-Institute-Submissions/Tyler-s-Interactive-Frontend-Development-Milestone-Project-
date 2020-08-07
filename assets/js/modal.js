document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('hamburger').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.button').addEventListener('click',
function() {
    document.querySelector('.content').style.display = 'none';
});

document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('.content').style.display = 'block';
});

document.querySelector('.button').addEventListener('click',
function() {
    document.querySelector('.sub-sent').style.display = 'block';
});

document.querySelector('.button').addEventListener('click',
function() {
    document.querySelector('.sub-sent-content').style.display = 'block';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.sub-sent-content').style.display = 'none';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.sub-sent').style.display = 'none';
});

document.querySelector('.button').addEventListener('click',
function() {
    document.querySelector('.btn-close').style.display = 'inline-block';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.btn-close').style.display = 'none';
});

document.querySelector('.btn-close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.btn-close').addEventListener('click',
function() {
    document.querySelector('.btn-close').style.display = 'none';
});

document.querySelector('.btn-close').addEventListener('click',
function() {
    document.querySelector('.sub-sent-content').style.display = 'none';
});

document.querySelector('.btn-close').addEventListener('click',
function() {
    document.querySelector('.sub-sent').style.display = 'none';
});

function checkforblank() {

    if (document.querySelector('.names').value == "") {
        alert('Please enter your name');
        return false;
    }
    if (document.querySelector('.emails').value == "") {
        alert('Please enter your email');
        return false;
    }
    if (document.querySelector('.text-area').value == "") {
        alert('Please enter your project description');
        return false;
    }
}

document.querySelector('.card-1-btn').addEventListener('click',
function() {
    document.querySelector('.bg-modal-2').style.display = 'flex';
});

document.querySelector('.close-2').addEventListener('click',
function() {
    document.querySelector('.bg-modal-2').style.display = 'none';
});

document.querySelector('.btn-close-2').addEventListener('click',
function() {
    document.querySelector('.bg-modal-2').style.display = 'none';
});


document.querySelector('.card-2-btn').addEventListener('click',
function() {
    document.querySelector('.bg-modal-3').style.display = 'flex';
});

document.querySelector('.close-3').addEventListener('click',
function() {
    document.querySelector('.bg-modal-3').style.display = 'none';
});

document.querySelector('.btn-close-3').addEventListener('click',
function() {
    document.querySelector('.bg-modal-3').style.display = 'none';
});


document.querySelector('.card-3-btn').addEventListener('click',
function() {
    document.querySelector('.bg-modal-4').style.display = 'flex';
});

document.querySelector('.close-4').addEventListener('click',
function() {
    document.querySelector('.bg-modal-4').style.display = 'none';
});

document.querySelector('.btn-close-4').addEventListener('click',
function() {
    document.querySelector('.bg-modal-4').style.display = 'none';
});








