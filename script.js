/* 
const res = document.getElementById('res');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

const res1 = document.getElementById('res1');
const btnStart1 = document.getElementById('start1');
const btnStop1 = document.getElementById('stop1');

function getCounter(el, startBtn, stopBtn) {
  let sec = 0;
  let min = 0;
  let hours = 0;
  let interval;
  let isActive = false;

  function updateCounter() {
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hours++;
      min = 0;
    }
    if (hours === 24) {
      hours = 0;
    }
    el.textContent = `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  startBtn.addEventListener('click', function () {
    if (!isActive) {
      interval = setInterval(updateCounter, 1000);
      isActive = true;
    }
  });

  stopBtn.addEventListener('click', function () {
    if (interval) {
      clearInterval(interval);
      interval = null;
      isActive = false;
    }
  });
}

getCounter(res, btnStart, btnStop);
 */
const counters = [
    {
        el: document.getElementById('res'),
        startBtn: document.getElementById('start'),
        stopBtn: document.getElementById('stop'),
        sec: 0,
        min: 0,
        hours: 0,
        interval: null,
        isActive: false
    },
];

function updateCounter(counter) {
    counter.sec++;
    if (counter.sec === 60) {
        counter.min++;
        counter.sec = 0;
    }
    if (counter.min === 60) {
        counter.hours++;
        counter.min = 0;
    }
    if (counter.hours === 24) {
        counter.hours = 0;
    }
    counter.el.textContent = `${counter.hours.toString().padStart(2, '0')}:${counter.min.toString().padStart(2, '0')}:${counter.sec.toString().padStart(2, '0')}`;
}

function startCounter(counter) {
    if (!counter.isActive) {
        counter.interval = setInterval(() => updateCounter(counter), 1000);
        counter.isActive = true;
    }
}

function stopCounter(counter) {
    if (counter.interval) {
        clearInterval(counter.interval);
        counter.interval = null;
        counter.isActive = false;
    }
}

counters.forEach((counter, index) => {
    counter.startBtn.addEventListener('click', () => startCounter(counter));
    counter.stopBtn.addEventListener('click', () => stopCounter(counter));
});
