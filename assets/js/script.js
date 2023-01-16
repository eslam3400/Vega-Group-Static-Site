const foundedAtElem = document.getElementById('founded-at');

calculateFoundedAt();

function calculateFoundedAt() {
    const foundedAt = new Date('2009-01-01');
    const today = new Date();
    const diff = today.getFullYear() - foundedAt.getFullYear();
    foundedAtElem.innerText = diff;
}