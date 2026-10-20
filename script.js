/* === 1. STATO DELL'APPLICAZIONE ===
   Conserviamo in memoria il passo attuale, le risposte date e la taglia gruppo. */
const TOTAL_QUESTIONS = 8;
let currentStep = 1;
let selectedGroupSize = 2;
const userAnswers = {};

/* === 2. GESTIONE DELLE SCHEDE (TABS) ===
   Permette il passaggio fluido tra "Candidatura Gruppo" e "Test Domande". */
function switchTab(targetTab) {
  // 1. Riferimenti ai pulsanti della barra tab
  const btnGroup = document.querySelector('#tab-btn-group');
  const btnQuiz = document.querySelector('#tab-btn-quiz');

  // 2. Riferimenti ai contenitori delle due schede
  const contentGroup = document.querySelector('#tab-content-group');
  const contentQuiz = document.querySelector('#tab-content-quiz');

  // 3. Attiviamo la scheda scelta e disattiviamo l'altra
  if (targetTab === 'group') {
    btnGroup.classList.add('active');
    btnQuiz.classList.remove('active');
    contentGroup.classList.add('active');
    contentQuiz.classList.remove('active');
  } else {
    btnQuiz.classList.add('active');
    btnGroup.classList.remove('active');
    contentQuiz.classList.add('active');
    contentGroup.classList.remove('active');
  }
}

/* === 3. GESTIONE CANDIDATURA DI GRUPPO ===
   Selezione dimensione gruppo (2, 3 o 4) e generazione dinamica degli slot. */
function setGroupSize(count, clickedBtn) {
  selectedGroupSize = count;

  // Aggiorna lo stile del pulsante attivo tra 2, 3 e 4
  const allButtons = document.querySelectorAll('.size-option-btn');
  allButtons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  clickedBtn.classList.add('active');

  // Ridisegna gli avatar degli slot in base al numero scelto
  renderSlots(count);

  // Feedback visivo con un toast simpatico
  triggerToast('👥 Gruppo impostato a ' + count + ' persone!');
}

function renderSlots(count) {
  const container = document.querySelector('#slots-preview-container');

  // Il primo slot è sempre "TU"
  let slotsHTML = '<div class="slot-avatar user-slot" title="Il tuo profilo">TU</div>';

  // Gli slot successivi sono pulsanti "+" per invitare coinquilini
  for (let i = 1; i < count; i++) {
    slotsHTML += '<div class="slot-avatar empty-slot" title="Aggiungi coinquilino" onclick="openInviteModal()">' +
      '<span class="material-symbols-rounded">add</span>' +
      '</div>';
  }

  container.innerHTML = slotsHTML;
}

function activateGroupMode() {
  // Mostra un feedback ed accompagna l'utente alla scheda del test
  triggerToast('🎉 Gruppo creato! Passiamo al Test di Compatibilità...');
  setTimeout(function () {
    switchTab('quiz');
  }, 700);
}

/* === 4. GESTIONE QUIZ STEP-BY-STEP (DOMANDE E RISPOSTE) ===
   Mostra una domanda alla volta, memorizza le risposte e gestisce l'avanzamento. */
function selectAnswer(questionNumber, optionKey, clickedCard) {
  // 1. Troviamo la card della domanda e deselezioniamo l'altra opzione
  const questionCard = clickedCard.closest('.question-card');
  const allOptions = questionCard.querySelectorAll('.option-card');
  allOptions.forEach(function (card) {
    card.classList.remove('selected');
    const radioInput = card.querySelector('input[type="radio"]');
    if (radioInput) radioInput.checked = false;
  });

  // 2. Evidenziamo l'opzione selezionata dall'utente e spuntiamo l'input radio
  clickedCard.classList.add('selected');
  const currentRadio = clickedCard.querySelector('input[type="radio"]');
  if (currentRadio) currentRadio.checked = true;

  // 3. Memorizziamo la risposta nell'oggetto di stato
  userAnswers[questionNumber] = optionKey;

  // 4. Aggiorniamo i contatori e l'indicatore grafico
  updateQuizProgress();
  triggerToast('🎯 Risposta registrata!');

  // 5. Avanzamento automatico fluido alla domanda successiva dopo 350ms
  setTimeout(function () {
    if (currentStep === questionNumber && currentStep < TOTAL_QUESTIONS) {
      jumpToStep(currentStep + 1);
    } else if (currentStep === TOTAL_QUESTIONS) {
      showCompletionCard();
    }
  }, 350);
}

function updateQuizProgress() {
  // Calcola quante domande sono state risposte finora
  const answeredCount = Object.keys(userAnswers).length;

  // Aggiorna i testi del contatore sia nella barra tab che nel quiz
  document.querySelector('#tab-quiz-badge').textContent = answeredCount + '/' + TOTAL_QUESTIONS;
  document.querySelector('#answered-counter-pill').textContent = answeredCount + ' / ' + TOTAL_QUESTIONS + ' Risposte';

  // Aggiorna lo stato visivo delle 8 barrette segmentate
  const allSegments = document.querySelectorAll('.segment-bar');
  allSegments.forEach(function (segment, index) {
    const stepNum = index + 1;
    segment.classList.remove('completed', 'active');

    if (userAnswers[stepNum]) {
      segment.classList.add('completed');
    } else if (stepNum === currentStep) {
      segment.classList.add('active');
    }
  });

  // Aggiorna il badge di stato ("DA RISPONDERE" oppure "RISPOSTA REGISTRATA")
  const badge = document.querySelector('#stepper-status-badge');
  const badgeText = document.querySelector('#stepper-status-text');

  if (userAnswers[currentStep]) {
    badge.className = 'stepper-status-badge done';
    badgeText.textContent = 'RISPOSTA REGISTRATA';
  } else {
    badge.className = 'stepper-status-badge pending';
    badgeText.textContent = 'DA RISPONDERE';
  }
}

function jumpToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > TOTAL_QUESTIONS) return;

  currentStep = stepNumber;

  // Nascondi la card di completamento e mostra il contenitore domande
  document.querySelector('#completion-card').classList.remove('active');
  document.querySelector('#wizard-navigation-panel').style.display = 'flex';

  // Mostra solo la card corrispondente al passo corrente
  const allCards = document.querySelectorAll('.question-card');
  allCards.forEach(function (card) {
    const qNum = parseInt(card.getAttribute('data-q'), 10);
    if (qNum === currentStep) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Aggiorna i testi dello stepper (es. "Domanda 3 di 8", "STEP 3/8")
  document.querySelector('#stepper-question-title').textContent = 'Domanda ' + currentStep + ' di ' + TOTAL_QUESTIONS;
  document.querySelector('#stepper-step-pill').textContent = 'STEP ' + currentStep + '/' + TOTAL_QUESTIONS;

  // Abilita o disabilita il pulsante "Precedente" se siamo alla prima domanda
  const btnPrev = document.querySelector('#btn-prev');
  btnPrev.disabled = (currentStep === 1);

  // Aggiorna l'etichetta del pulsante "Avanti" o "Completa"
  const nextLabel = document.querySelector('#btn-next-label');
  nextLabel.textContent = (currentStep === TOTAL_QUESTIONS) ? 'COMPLETA' : 'AVANTI';

  // Rinfresca le tacche di avanzamento
  updateQuizProgress();
}

function changeStep(direction) {
  const target = currentStep + direction;
  if (target >= 1 && target <= TOTAL_QUESTIONS) {
    jumpToStep(target);
  } else if (target > TOTAL_QUESTIONS) {
    showCompletionCard();
  }
}

function skipQuestion() {
  triggerToast('⏭️ Quesito saltato');
  if (currentStep < TOTAL_QUESTIONS) {
    jumpToStep(currentStep + 1);
  } else {
    showCompletionCard();
  }
}

function showCompletionCard() {
  // Nasconde le domande e visualizza la schermata riassuntiva
  const allCards = document.querySelectorAll('.question-card');
  allCards.forEach(function (card) {
    card.classList.remove('active');
  });

  document.querySelector('#completion-card').classList.add('active');
  document.querySelector('#wizard-navigation-panel').style.display = 'none';

  const answeredCount = Object.keys(userAnswers).length;
  document.querySelector('#completion-summary-text').innerHTML =
    'Hai risposto a <strong>' + answeredCount + ' di ' + TOTAL_QUESTIONS + '</strong> quesiti di compatibilità convivenza.';
}

/* === 5. MODALI, POPUP E NOTIFICHE TOAST ===
   Gestione dell'apertura/chiusura delle finestre e notifica a scomparsa. */
function triggerToast(message) {
  const toast = document.querySelector('#toast-popup');
  const msgSpan = document.querySelector('#toast-message');

  msgSpan.textContent = message;
  toast.classList.add('show');

  // Nascondi automaticamente il toast dopo 2.2 secondi
  setTimeout(function () {
    toast.classList.remove('show');
  }, 2200);
}

function openInviteModal() {
  document.querySelector('#modal-invite').classList.add('active');
}

function copyInviteLink() {
  const input = document.querySelector('#invite-link-field');
  input.select();
  triggerToast('📋 Link d\'invito copiato negli appunti!');
  closeModal('modal-invite');
}

function calculateCompatibility() {
  const answeredCount = Object.keys(userAnswers).length;

  // Aggiorniamo la dimensione del gruppo nel riepilogo
  document.querySelector('#summary-group-size').textContent = selectedGroupSize + ' Persone';

  // Mostriamo il modale col punteggio
  document.querySelector('#modal-result').classList.add('active');
}

function shareGroupProfile() {
  triggerToast('🚀 Scheda candidatura generata e pronta da inviare!');
  closeModal('modal-result');
}

function closeModal(modalId) {
  document.querySelector('#' + modalId).classList.remove('active');
}

function closeModalOnBackdrop(event, modalId) {
  // Chiude il modale solo se l'utente clicca fuori dalla scheda (sul backdrop)
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

/* === 6. INIZIALIZZAZIONE ALL'AVVIO ===
   Predispone gli slot e lo stato della prima domanda. */
renderSlots(selectedGroupSize);
jumpToStep(1);
