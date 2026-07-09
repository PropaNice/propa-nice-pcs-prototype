function selectBuild(buildName) {
  const details = document.getElementById('details');
  details.value = `I am interested in the ${buildName}. My budget is around £___ and I want to use it for ___`;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function sendQuote(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const budget = document.getElementById('budget').value.trim();
  const details = document.getElementById('details').value.trim();

  const message = `Quote request from ${name}\nBudget: ${budget}\nDetails: ${details}`;

  document.getElementById('message-output').textContent =
    'Copy this message and send it to PropaNice PCs:\n\n' + message;
}
