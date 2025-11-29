// --- Calendar setup ---
  const calendarDates = document.getElementById('calendar-dates');
  const monthYear = document.getElementById('month-year');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');

  let today = new Date(); today.setHours(0,0,0,0);
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let selectedDate = null;

  function daysInMonth(year, month) { return new Date(year, month+1, 0).getDate(); }

  function renderCalendar(year, month) {
    calendarDates.innerHTML = '';
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    monthYear.textContent = monthNames[month] + " " + year;
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);

    for(let i=0;i<firstDay;i++){calendarDates.appendChild(document.createElement('div'));}
    for(let day=1;day<=totalDays;day++){
      const btn = document.createElement('button');
      btn.textContent = day;
      const dateObj = new Date(year, month, day);
      btn.dataset.date = dateObj.toISOString().slice(0,10);
      if(dateObj<today){btn.disabled=true;}
      if(selectedDate===btn.dataset.date){btn.classList.add('selected');}
      btn.addEventListener('click',()=>{selectedDate=btn.dataset.date;renderCalendar(year,month);});
      calendarDates.appendChild(btn);
    }
  }
  renderCalendar(currentYear,currentMonth);

  prevMonthBtn.addEventListener('click',()=>{let newMonth=currentMonth-1,newYear=currentYear;if(newMonth<0){newMonth=11;newYear--;}if(newYear<today.getFullYear()||(newYear===today.getFullYear()&&newMonth<today.getMonth())){return;}currentMonth=newMonth;currentYear=newYear;renderCalendar(currentYear,currentMonth);});
  nextMonthBtn.addEventListener('click',()=>{let newMonth=currentMonth+1,newYear=currentYear;if(newMonth>11){newMonth=0;newYear++;}currentMonth=newMonth;currentYear=newYear;renderCalendar(currentYear,currentMonth);});

  // --- Time picker ---
  const timeSelect = document.getElementById('time-select');
  const timeOptions = document.getElementById('time-options');
  let selectedTime = null;
  function padZero(n){return n<10?"0"+n:n;}
  function generateTimes(){
    const times=[];let start=10*60+30,end=20*60+30;
    for(let m=start;m<=end;m+=30){let hh=Math.floor(m/60),mm=m%60,ampm=hh>=12?"PM":"AM",hh12=hh%12||12;times.push(padZero(hh12)+":"+padZero(mm)+" "+ampm);}
    return times;
  }
  generateTimes().forEach(time=>{const div=document.createElement('div');div.textContent=time;div.addEventListener('click',()=>{selectedTime=time;timeSelect.textContent=time;timeOptions.style.display='none';});timeOptions.appendChild(div);});
  timeSelect.addEventListener('click',()=>{if(!selectedDate){alert("Please select a date first.");return;}timeOptions.style.display=(timeOptions.style.display==='block'?'none':'block');});
  document.addEventListener('click',e=>{if(!timeSelect.contains(e.target)&&!timeOptions.contains(e.target)){timeOptions.style.display='none';}});

  // --- Step navigation ---
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  document.getElementById('next-step1').addEventListener('click',()=>{
    if(!selectedDate || !document.getElementById('customers').value){alert("Select number of customers and date.");return;}
    step1.style.display='none';
    step2.style.display='flex';
  });
  document.getElementById('back-step2').addEventListener('click',()=>{
    step2.style.display='none';
    step1.style.display='flex';
  });
  document.getElementById('submit-btn').addEventListener('click',()=>{
    if(!selectedTime){alert("Select a time.");return;}
    alert("Reservation submitted!\nDate: "+selectedDate+"\nTime: "+selectedTime+"\nCustomers: "+document.getElementById('customers').value);
  });
</script>