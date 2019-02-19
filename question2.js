

// code taken from: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/



const app = document.getElementById('todo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(people => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = "id:  " + people.userId;

      const h2 = document.createElement('h2');
      h2.textContent = "id:  " + people.id;

      const p = document.createElement('p');
      people.id = people.title.substring(0, 300);
      p.textContent = `${people.id}...`;

      const compl  =  document.createElement('p');
      compl.textContent = "completed:  " + people.completed;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(compl);
    });
  } else {
    const errorMessage = document.createElement('heeey');
    errorMessage.textContent = `it's not working!`;
    app.appendChild(errorMessage);
  }
}



request.send();

