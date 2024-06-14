function handleClick(element) {
    const img = element.querySelector('img');
    const status = element.querySelector('.status');
    
    if (img.style.backgroundColor === 'green') {
        img.style.backgroundColor = 'red';
        status.textContent = 'A231 AWARIA';
        status.style.color = 'red';
    } else {
        img.style.backgroundColor = 'green';
        status.textContent = 'Gokart';
        status.style.color = 'green';
    }
}
