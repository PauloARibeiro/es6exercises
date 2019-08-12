class Contacts {
  // ---
  // CONSTRUCTOR
  // ---
  // constructor should hold all inital values such as buttons, lists, events etc.
  //----------------------
  // ---
  // ADD CONTACT METHOD
  // ---
  // This method should do the following:
  // 1) Take in the values from input
  // 2) Check if inputs are empty
  // 3) FIND if number introduced already exists
  // 4) Alert user of any the errors mentioned above, if there aren't any PUSH no contact to list, and render dom
  //----------------------
  // ---
  // DELETE CONTACT METHOD
  // ---
  // This method should do the following:
  // 1) Get the id of the selected contact to delete
  // 2) FILTER through array and remove number
  // 3) Render dom
  //----------------------
  // ---
  // FILTER CONTACT METHOD
  // ---
  // This method should do the following:
  // 1) User should filter by the following operators vodafone(91) or nos(93 & 96)
  // 2) FILTER through list and check if the numbers match the selected operators
  // 3) Find out if SOME of the contacts have the same operators
  // 4) Find out if EVERY contact has the same operators
  // 5) Alert user if there are SOME or EVERY with the same operators
  // 6) List should update in other words render dom
  //----------------------
  // ---
  // RENDER
  // ---
  // This method should do the following:
  // 1) Check if list has contacts, if not, alert user
  // 2) MAP through list and render each contact to dom
  // 3) Add delete button events. Try to use SPREAD
  //----------------------
}

// INIT CLASS
const contacts = new Contacts();
