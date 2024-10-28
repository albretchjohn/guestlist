const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let guest of people) {
    if (guest === 'Lola' || guest === 'Phil') {
        refused.textContent += `${guest}, `
    } else {
        admitted.textContent += `${guest}, `
    }
    
};

//remove the last two characters which are "," and whitespace and add .
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
