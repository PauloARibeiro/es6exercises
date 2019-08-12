class Contacts {
  constructor() {
    this.contactList = [
      { name: "Paulo", number: 915736073, id: 0 },
      { name: "jonh", number: 915736073, id: 1 },
      { name: "jonh", number: 935736073, id: 2 }
    ];
    this.listContainer = document.querySelector('[data-js="contact-list"]');
    this.addContactButton = document.querySelector('[data-js="submit-contact"]');
    this.filterVodafone = document.querySelector('[data-js="filter-vodafone"]');
    this.filterNos = document.querySelector('[data-js="filter-nos"]');

    this.addEvents();
    this.render(this.contactList);
  }

  addEvents() {
    // INIT ALL EVENTS
    this.addContactButton.addEventListener("click", this.addContact.bind(this));
    this.filterVodafone.addEventListener("click", this.filter.bind(this));
    this.filterNos.addEventListener("click", this.filter.bind(this));
  }

  // ADD CONTACT
  addContact() {
    // GET THE INPUT VALUES
    const name = document.querySelector('[data-js="input-name"]').value;
    const number = parseInt(document.querySelector('[data-js="input-number"]').value);

    // CHECK IF VALUES ARE EMPTY
    if (!name || name === "") return alert("Name is empty");
    if (!number || number === "") return alert("Number is empty");

    // CHECK IF CONTACT INTRODUCED ALREADY EXISTS IN LIST
    const inList = this.contactList.find(contact => contact.number === number);

    // GENERATE NEW ID
    const id = this.contactList.length + 1;

    // IF CONTACT EXISTS ALERT USER IF NOT ADD TO LIST
    inList ? alert("Contact already exists") : this.contactList.push({ name, number, id });

    // RENDER INTO DOM
    return this.render(this.contactList);
  }

  // DELETE CONTACT
  deleteContact(event) {
    // GET THE ID TO DELETE
    const id = parseInt(event.target.closest(".delete-contact").getAttribute("data-js-id"));

    // FILTER LIST
    this.contactList = this.contactList.filter(contact => contact.id !== id);

    // RENDER INTO DOM
    return this.render(this.contactList);
  }

  // FILTER
  filter(event) {
    const filterString = event.target.getAttribute("data-js");
    let newList = [];
    let some;
    let every;

    // WHAT SHOULD IT FILTER BY
    if (filterString === "filter-vodafone") {
      newList = this.contactList.filter(contact => contact.number.toString().slice(0, 2) === "91");
      some = this.contactList.some(contact => contact.number.toString().slice(0, 2) === "91");
      every = this.contactList.every(contact => contact.number.toString().slice(0, 2) === "91");

      if (newList.length !== 0) this.render(newList);
    } else {
      newList = this.contactList.filter(
        contact =>
          contact.number.toString().slice(0, 2) === "93" ||
          contact.number.toString().slice(0, 2) === "96"
      );
      some = this.contactList.some(
        contact =>
          contact.number.toString().slice(0, 2) === "93" ||
          contact.number.toString().slice(0, 2) === "96"
      );
      every = this.contactList.every(
        contact =>
          contact.number.toString().slice(0, 2) === "93" ||
          contact.number.toString().slice(0, 2) === "96"
      );

      if (newList.length !== 0) this.render(newList);
    }

    if (every) return alert("whoah all of your contacts have the same operator");
    if (some) return alert("Some of your contacts have the same operator");
  }

  // RENDER CONTACTS IN TO DOM
  render(list) {
    // RESET ALL HTML INSIDE THE LIST
    this.listContainer.innerHTML = "";

    if (list.length <= 0) {
      return (this.listContainer.innerHTML = '<h1 class="no-contacts">No Contacts</h1>');
    }

    // LOOP THROUGH ALL THE CONTACTS AND ADD THEM TO THE DOM
    list.map(contact => {
      // DESTRUCTOR
      const { name, number, id } = contact;
      // USE OF TEMPLATE STRINGS
      this.listContainer.innerHTML += `<div class="contact">
        <div class="contact-info">
          <h4>${name}</h4>
          <h6>${number}</h6>
        </div>

        <div class="contact-options">
          <div class="delete-contact" data-js="delete-contact" data-js-id="${id}">
            <img src="img/delete.svg" alt="delete ${name}" />
          </div>
        </div>
        </div>`;
    });

    // ADD EVENT TO DELETE BUTTON
    // TALK ABOUT ARRAY FROM, COULD ALSO USE SPREAD
    [...document.querySelectorAll('[data-js="delete-contact"]')].map(button =>
      button.addEventListener("click", this.deleteContact.bind(this))
    );
  }
}

// INIT CLASS
const contacts = new Contacts();
