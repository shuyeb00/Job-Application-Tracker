let currentTab = "all";
const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200", "text-black"]

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    
    for (const t of tabs) {
        const tabName = document.getElementById('tab-' + t)
        if (t === tab) {
            tabName.classList.remove(...tabInactive)
            tabName.classList.add(...tabActive)
        }
        else {
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for (const page of pages) {
        page.classList.add("hidden");
    }

    emptyState.classList.add("hidden")

    if (tab === "all") {
        allContainer.classList.remove("hidden")
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden")
        }
    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden")
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden")
        }
    } else {
        rejectedContainer.classList.remove("hidden")
        if (rejectedContainer.children.length < 1) {
            emptyState.classList.remove("hidden")
        }
    }
    updateStat() 
}

// stat update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");
const availableStat = document.getElementById("available");

totalStat.innerText = allContainer.children.length

switchTab(currentTab)

document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status")
    const parent = card.parentNode;

    if (clickedElement.classList.contains("interview")) {
        status.innerText = "Interviewed"
        interviewContainer.appendChild(card)
        updateStat()
    }
    if (clickedElement.classList.contains("rejected")) {
        status.innerText = "Rejected"
        rejectedContainer.appendChild(card)
        updateStat()
    }
    if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card)
        updateStat()
    }
});

function updateStat() {
    // totalStat.innerText = allContainer.children.length
    // interviewStat.innerText = interviewContainer.children.length
    // rejectStat.innerText = rejectedContainer.children.length
    
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    }

    totalStat.innerText = counts["all"];
    interviewStat.innerText = counts["interview"];
    rejectStat.innerText = counts["rejected"];

    availableStat.innerText = counts[currentTab];

    if(counts[currentTab] < 1) {
        emptyState.classList.remove("hidden")
    } else {
        emptyState.classList.add("hidden")
    }
}

updateStat() 