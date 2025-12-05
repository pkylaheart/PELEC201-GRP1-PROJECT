/* ===========================
   CALENDAR
=========================== */
const calendarDates = document.getElementById('calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let today = new Date(); 
today.setHours(0,0,0,0);

let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDate = null;

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function renderCalendar(year, month) {
    calendarDates.innerHTML = "";
    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);

    for (let i = 0; i < firstDay; i++) {
        calendarDates.appendChild(document.createElement("div"));
    }

    for (let d = 1; d <= totalDays; d++) {
        const dateObj = new Date(year, month, d);
        const btn = document.createElement("button");
        btn.textContent = d;
        btn.dataset.date = dateObj.toISOString().slice(0, 10);

        if (dateObj < today) btn.disabled = true;
        if (selectedDate === btn.dataset.date) btn.classList.add("selected");

        btn.addEventListener("click", () => {
            selectedDate = btn.dataset.date;
            renderCalendar(year, month);
        });

        calendarDates.appendChild(btn);
    }
}
renderCalendar(currentYear, currentMonth);

prevMonthBtn.addEventListener("click", () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;

    if (newMonth < 0) {
        newMonth = 11;
        newYear--;
    }

    if (
        newYear < today.getFullYear() ||
        (newYear === today.getFullYear() && newMonth < today.getMonth())
    ) return;

    currentMonth = newMonth;
    currentYear = newYear;
    renderCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener("click", () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;

    if (newMonth > 11) {
        newMonth = 0;
        newYear++;
    }

    currentMonth = newMonth;
    currentYear = newYear;
    renderCalendar(currentYear, currentMonth);
});


/* ===========================
   TIME TABS (BREAKFAST/LUNCH/DINNER)
=========================== */
const timeGrid = document.getElementById("time-grid");
const timeTabs = document.querySelectorAll(".time-tab");

let selectedTime = null;

const timeGroups = {
    breakfast: ["10:30 AM", "11:00 AM", "11:30 AM"],
    lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
    dinner: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"]
};

function loadTimes(group) {
    timeGrid.innerHTML = "";
    selectedTime = null;

    timeGroups[group].forEach((time) => {
        let btn = document.createElement("button");
        btn.classList.add("time-btn");
        btn.textContent = time;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".time-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedTime = time;
        });

        timeGrid.appendChild(btn);
    });
}

// Load default = breakfast
loadTimes("breakfast");

// Tab switching
timeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        timeTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const group = tab.dataset.group;
        loadTimes(group);
    });
});


/* ===========================
   STEP NAVIGATION
=========================== */
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

document.getElementById("next-step1").addEventListener("click", () => {
    if (!selectedDate || !document.getElementById("customers").value) {
        alert("Please select number of customers and a date.");
        return;
    }

    step1.style.display = "none";
    step2.style.display = "flex";
});

document.getElementById("back-step2").addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "flex";
});

/* ===========================
   SUBMIT
=========================== */
document.getElementById("submit-btn").addEventListener("click", () => {
    if (!selectedTime) {
        alert("Please select a time.");
        return;
    }

    alert(
        "Reservation submitted!\n\n" +
        "Date: " + selectedDate +
        "\nTime: " + selectedTime +
        "\nCustomers: " + document.getElementById("customers").value
    );
});


/* ===========================
   POPUP (UNCHANGED)
=========================== */
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popup-ok");

if (!localStorage.getItem("popupDismissed")) {
    popup.classList.remove("hidden");
}

popupBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    localStorage.setItem("popupDismissed", "true");
});
