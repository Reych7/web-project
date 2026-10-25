const workers = [
    { name: "Alpha", active: true, load: 45 },
    { name: "Beta", active: true, load: 50 },
    { name: "Delta", active: true, load: 30 }
];

const availableWorkerNames = workers
    .filter(w => w.active && w.load < 60) // аналог .Where()
    .map(w => w.name);                    // аналог .Select()

console.log(availableWorkerNames); // ["Alpha", "Delta"]

