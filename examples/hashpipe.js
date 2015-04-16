var neslySound = require('../');
var Song = neslySound.Song;
var write = neslySound.write;

var squareMusic = [
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',

    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',

    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',

    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3'
];

var square2Music = [
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',

    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3'
];

var triMusic = [
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',

    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2'
];

var noiseMusic = [
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F'
];

var song = new Song();

song.square1(squareMusic, 1/8);
song.square2(square2Music, 1/8);
song.triangle(triMusic, 1/8);
song.noise(noiseMusic, 1/8);

song.compile();
write();
