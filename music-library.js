function Library(name, creator) {
  this.name = name; 
  this.creator = creator;
  this.playlists = []; 
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title; 
  this.rating = rating; 
  this.length = length; 
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.unshift(playlist);
};

Playlist.prototype.addTrack = function(track) {
  this.tracks.unshift(track);
};

Playlist.prototype.overallRating = function() {
  let ratingSum = 0; 
  this.tracks.forEach(track => {
    ratingSum += track.rating;
  })
  return ratingSum / this.tracks.length; 
};

Playlist.prototype.totalDuration = function() {
  let playlistDuration = 0; 
  this.tracks.forEach(track => {
    playlistDuration += track.length;
  })
  return playlistDuration; 
};

let library1 = new Library("superAwesomeFunTime", "Shnarf"); 
let playlist1 = new Playlist("thingsAndStuff"); 
let track1 = new Track("Smooze", 5, 4038); 
let track2 = new Track("Ooze", 4, 320); 
let track3 = new Track("Shmooze", 2, 124); 


library1.addPlaylist(playlist1);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
console.log(library1)
console.log(library1.playlists[0].tracks);
console.log(playlist1.overallRating());
console.log(playlist1.totalDuration());
