var fortune = [
    "Invinge frica ori ea te va invinge",
    "Riurile au nevoe de izvor",
    "Nu te teme de necunoscut",
    "Te asteapta o surpriza placuta",
    "Fii simplu"
];
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortune.length);
    return fortune[idx];
};
