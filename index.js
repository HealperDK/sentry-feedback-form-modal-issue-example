import * as Sentry from "@sentry/browser";

// Initialize Sentry
Sentry.init({
    // dsn: "https://568bf2670b44bb594f400742501985d4@o574649.ingest.us.sentry.io/5725912",

});


const modalDialog = document.getElementById('modalDialog');
const modalButton = document.getElementById('modal-btn');
const sentryFeedbackButton = document.getElementById('sentry-feedback-btn');
const modalCloseButton = document.getElementById('modal-close-btn');


function openModal() {
    modalDialog.showModal();
}

function closeModal() {
    modalDialog.close();
}

async function openSentryUserFeedbackForm() {
    const sentryFeedback = Sentry.feedbackIntegration({
        autoInject: false,
    });
    // console.log(feedback)
    //
    // const form = await feedback.createForm();
    // form.appendToDom();
    // form.open();
    const form = await sentryFeedback.createForm();
    form.appendToDom();
    form.open();


// Create and render the button
//     const widget = feedback.createWidget();


// Later, when it's time to clean up:
//     widget.removeFromDom();

}


modalButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
sentryFeedbackButton.addEventListener('click', openSentryUserFeedbackForm);