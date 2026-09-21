const KEY = "cedarline-usability-study-draft-v1";

const tasks = [
  {id:"t1", title:"Task 1 — Start the correct claim", scenario:"Start reporting the parking-lot collision for the 2023 Honda CR-V and choose the loss type that fits best."},
  {id:"t2", title:"Task 2 — Handle uncertainty", scenario:"Continue with the information available. The parking lot is known, but the exact time is not."},
  {id:"t3", title:"Task 3 — Safety and evidence", scenario:"No one appears injured. The car can move, but you are not sure it should be driven. Photos are not available right now."},
  {id:"t4", title:"Task 4 — Contact and review", scenario:"Choose text contact if available, then review the report before sending it."},
  {id:"t5", title:"Task 5 — Correct and submit", scenario:"Notice one wrong detail on review. Show how you would correct it, return to review, and submit."}
];

const surveyItems = [
  "I understood what I needed to do at each step.",
  "I felt comfortable continuing when I did not know an exact detail.",
  "It was clear what information I could add later.",
  "I felt confident I could find and correct a mistake before submitting.",
  "The amount of information on each screen felt manageable.",
  "I understood what would happen after I submitted the report.",
  "Overall, the claim-reporting process felt easy to use."
];

function outcomeOptions(name) {
  const values = ["Success","Success with assistance","Failure"];
  return values.map(function(value){
    return '<label><input type="radio" name="' + name + '" value="' + value + '"> ' + value + '</label>';
  }).join("");
}

function ratingOptions(name) {
  return '<div class="rating">' + [1,2,3,4,5,6,7].map(function(n){
    return '<label title="' + n + '"><input type="radio" name="' + name + '" value="' + n + '"><span>' + n + '</span></label>';
  }).join("") + '</div>';
}

function renderTasks() {
  const container = document.querySelector("#tasks");
  container.innerHTML = tasks.map(function(task){
    return '<div class="task-block" data-task="' + task.id + '">' +
      '<h3>' + task.title + '</h3>' +
      '<p class="task-scenario">' + task.scenario + '</p>' +
      '<div class="field"><span>Outcome</span><div class="outcome-row">' + outcomeOptions(task.id + "_outcome") + '</div></div>' +
      '<div class="form-grid" style="margin-top:12px">' +
        '<div class="field"><label for="' + task.id + '_assist">Highest assistance level</label>' +
          '<select id="' + task.id + '_assist"><option value="0">0 — none</option><option value="1">1 — neutral prompt</option><option value="2">2 — directional hint</option><option value="3">3 — explicit instruction</option></select></div>' +
        '<div class="field"><span>Ease rating (1 difficult → 7 easy)</span>' + ratingOptions(task.id + "_ease") + '</div>' +
        '<div class="field full"><label for="' + task.id + '_notes">Observed behavior / notes</label><textarea id="' + task.id + '_notes"></textarea></div>' +
      '</div>' +
    '</div>';
  }).join("");
}

function renderSurvey() {
  const container = document.querySelector("#survey");
  container.innerHTML = surveyItems.map(function(item,index){
    return '<div class="task-block">' +
      '<p><strong>' + (index + 1) + '. ' + item + '</strong></p>' +
      ratingOptions("survey_" + (index + 1)) +
    '</div>';
  }).join("");
}

function selected(name) {
  const el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : "";
}

function collect() {
  return {
    schemaVersion: 1,
    participantId: document.querySelector("#participantId").value,
    device: document.querySelector("#device").value,
    priorClaimExperience: document.querySelector("#claimExperience").value,
    webFormComfort: document.querySelector("#formComfort").value,
    consent: document.querySelector("#consent").checked,
    preInterview: {
      experienceAndExpectations: document.querySelector("#preClaim").value,
      stressors: document.querySelector("#preStress").value
    },
    tasks: tasks.map(function(task){
      return {
        id: task.id,
        outcome: selected(task.id + "_outcome"),
        assistanceLevel: document.querySelector("#" + task.id + "_assist").value,
        easeRating: selected(task.id + "_ease"),
        notes: document.querySelector("#" + task.id + "_notes").value
      };
    }),
    postSurvey: surveyItems.map(function(item,index){
      return {item:item, rating:selected("survey_" + (index + 1))};
    }),
    openResponses: {
      mostConfusing: document.querySelector("#confusing").value,
      mostHelpful: document.querySelector("#helpful").value,
      changeOne: document.querySelector("#changeOne").value,
      expectedButMissing: document.querySelector("#missing").value
    },
    moderatorSummary: document.querySelector("#moderatorSummary").value,
    criticalIncidents: document.querySelector("#criticalIncidents").value,
    exportedAt: new Date().toISOString()
  };
}

function restore(data) {
  if (!data) return;
  const mappings = [
    ["participantId","participantId"],
    ["device","device"],
    ["claimExperience","priorClaimExperience"],
    ["formComfort","webFormComfort"]
  ];
  mappings.forEach(function(pair){
    const el = document.querySelector("#" + pair[0]);
    if (el && data[pair[1]] != null) el.value = data[pair[1]];
  });

  document.querySelector("#consent").checked = Boolean(data.consent);
  document.querySelector("#preClaim").value = data.preInterview && data.preInterview.experienceAndExpectations || "";
  document.querySelector("#preStress").value = data.preInterview && data.preInterview.stressors || "";

  (data.tasks || []).forEach(function(task){
    const outcome = Array.from(document.querySelectorAll('input[name="' + task.id + '_outcome"]')).find(function(el){return el.value === task.outcome;});
    if (outcome) outcome.checked = true;

    const assist = document.querySelector("#" + task.id + "_assist");
    if (assist) assist.value = task.assistanceLevel || "0";

    const ease = Array.from(document.querySelectorAll('input[name="' + task.id + '_ease"]')).find(function(el){return el.value === task.easeRating;});
    if (ease) ease.checked = true;

    const notes = document.querySelector("#" + task.id + "_notes");
    if (notes) notes.value = task.notes || "";
  });

  (data.postSurvey || []).forEach(function(item,index){
    const radio = Array.from(document.querySelectorAll('input[name="survey_' + (index + 1) + '"]')).find(function(el){return el.value === item.rating;});
    if (radio) radio.checked = true;
  });

  document.querySelector("#confusing").value = data.openResponses && data.openResponses.mostConfusing || "";
  document.querySelector("#helpful").value = data.openResponses && data.openResponses.mostHelpful || "";
  document.querySelector("#changeOne").value = data.openResponses && data.openResponses.changeOne || "";
  document.querySelector("#missing").value = data.openResponses && data.openResponses.expectedButMissing || "";
  document.querySelector("#moderatorSummary").value = data.moderatorSummary || "";
  document.querySelector("#criticalIncidents").value = data.criticalIncidents || "";
}

function status(message) {
  document.querySelector("#runnerStatus").textContent = message;
}

function saveLocal() {
  localStorage.setItem(KEY, JSON.stringify(collect()));
  status("Saved locally.");
}

function exportJson() {
  const data = collect();
  if (!data.participantId) {
    status("Choose a participant ID before exporting.");
    document.querySelector("#participantId").focus();
    return;
  }
  if (!data.consent) {
    status("Confirm participant consent before exporting session notes.");
    document.querySelector("#consent").focus();
    return;
  }

  saveLocal();
  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = data.participantId.toLowerCase() + "-session.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  status("Anonymized session JSON exported.");
}

renderTasks();
renderSurvey();

try {
  restore(JSON.parse(localStorage.getItem(KEY) || "null"));
} catch (error) {
  localStorage.removeItem(KEY);
}

document.querySelector("#saveLocal").addEventListener("click", saveLocal);
document.querySelector("#exportJson").addEventListener("click", exportJson);
document.querySelector("#clearSession").addEventListener("click", function(){
  if (!window.confirm("Clear the local session draft from this browser?")) return;
  localStorage.removeItem(KEY);
  window.location.reload();
});

let saveTimer;
document.querySelector("#studyForm").addEventListener("input", function(){
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveLocal, 500);
});
