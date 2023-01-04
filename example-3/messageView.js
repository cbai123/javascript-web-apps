class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const message = document.createElement('div');
    message.id = 'message';
    message.textContent = document.querySelector('#message-input').value

    document.querySelector('#main-container').append(message);
  }

  hideMessage() {
     const message = document.querySelector('#message');
     message.remove();
  }
}

module.exports = MessageView;