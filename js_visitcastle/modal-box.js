
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    const modal = document.getElementById('confirmationModal');
    const confirmButton = document.getElementById('confirmSubmit');
    const cancelButton = document.getElementById('cancelSubmit');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      modal.showModal();
    });
  
    confirmButton.addEventListener('click', () => {
      modal.close();
      form.submit();
    });
  
    cancelButton.addEventListener('click', () => {
      modal.close();
    });
  });
  