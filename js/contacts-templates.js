function generateEditOverlay(i) {
    return /*html*/ `
    <div class="overlay-bg" id="edit-background">
        <div class="addContactContainer" id="overlay-container">
            <div class="addContactLeftPart">
                <img class="addContactJoinLogo" src="./img/logo.png">
                <div class="overlayHeadline">Edit contact</div>
                <div class="textTasksAre-border"></div>
            </div>
            <div class="addContactRightPart">
                <img class="closeAddContact" src="./img/cancel-icon.png" onclick="closeEditOverlay()">
                <img class="closeAddContact-rs" src="./img/cancel-white.svg" onclick="closeEditOverlayResponsive()">
                <div class="userInfo">
                    <div class="overlay-user-initials-container">
                        <div class="overlay-user-initials">${contacts[i]['initials']}</div>
                    </div>

                    <form class="save-contact-form" onsubmit="saveContact(${i}); return false;">
                        <div class="contactDetailsContainer">
                            <div class="contactsDetailsFrame">
                                <input id="edit-name" class="style-input styleUserIcon" required type="text"
                                placeholder="Name">
                            </div>
                            <div class="contactsDetailsFrame">
                                <input id="edit-email" class="style-input styleUserLetter" required type="email"
                                placeholder="Email">
                            </div>
                            <div class="contactsDetailsFrame">
                            <input id="edit-phone" class="style-input input-icon-phone" placeholder="Phone"
                             required type="text" oninput="validateInput(this)">
                            </div>
                        </div>
                        <button class="overlay-save-frame">
                            <div class="overlay-save-btn">
                                <div class="overlay-save-btn-text">Save</div>
                            </div>
                        </button>
                    </form>


                    <form class="edit-responsive-form" onsubmit="saveContactResponsive(${i}); return false;">
                        <div class="contactDetailsContainer">
                            <div class="contactsDetailsFrame">
                                <input id="edit-name-rs" class="style-input styleUserIcon" required type="text"
                                placeholder="Name">
                            </div>
                            <div class="contactsDetailsFrame">
                                <input id="edit-email-rs" class="style-input styleUserLetter" required type="email"
                                placeholder="Email">
                            </div>
                            <div class="contactsDetailsFrame">
                                <input id="edit-phone-rs"  class="style-input input-icon-phone" required
                                placeholder="Phone" type="text" oninput="validateInput(this)">
                            </div>
                        </div>
                        <button class="overlay-save-frame">
                            <div class="overlay-save-btn">
                                <div class="overlay-save-btn-text">Save</div>
                            </div>
                        </button>
                    </form>
            </div>
        </div>
    </div>
`;
}


function generateBusinessCard(i) {
    return /*html*/ `
    <div class="contactCard-main" id="contactCard-main">
        <div class="contactCard-header">
            <div class="contactCard-initials">${contacts[i]['initials']}</div>
            <div>
                <div class="contactCard-name">${contacts[i]['name']}</div>
                <a href="addTask.html" class="contactCard-task">+ Add Task</a>
            </div>
        </div>
        <div class="contactCard-text">
            <div>Contact Information</div>
            <div class="contactCard-edit-frame">
                <img src="./img/pen.png">
                <div onclick="editContact(${i})">Edit Contact</div>
            </div>
        </div>
        <div class="contactCard-email-frame">
            <div class="contactCard-email-headline">Email</div>
            <div class="contactCard-email">${contacts[i]['email']}</div>
        </div>
        <div class="contactCard-phone-frame">
            <div class="contactCard-phone-headline">Phone</div>
            <div class="contactCard-phone-number">${contacts[i]['phone']}</div>
        </div>
        <div class="edit-responsive"><img src="assets/img/contacts/edit-responsive.svg" onclick="editContactResponsive(${i})"></div>
        <div class="delete-contact" onclick="deleteContact(${i})">Delete Contact!</div>
    </div>
    `;
}


function generateHTMLforContactBook(i) {
    return /*html*/ `
    <div class="contact-book-container" id="contact-book-bg${i}" onclick="openBusinessCard(${i})">
        <div id="contactCircleBgColor${i}" class="contact-circle">${contacts[i]['initials']}</div>
        <div class="contact-book-frame">
            <div id="contact-book-name${i}" class="contact-book-name">${contacts[i]['name']}</div>
            <div class="contact-book-email">${contacts[i]['email']}</div>
        </div>
    </div>
    `;
}


function generateHTMLforContactBookResponsive(i) {
    return /*html*/ `
    <div class="contact-book-container" id="contact-book-bg${i}" onclick="openBusinessCardResponsive(${i}); addBackButton()">
        <div id="contactCircleBgColor${i}" class="contact-circle">${contacts[i]['initials']}</div>
        <div class="contact-book-frame">
            <div id="contact-book-name${i}" class="contact-book-name">${contacts[i]['name']}</div>
            <div class="contact-book-email">${contacts[i]['email']}</div>
        </div>
    </div>
    `;
}