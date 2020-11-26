// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );

tracks = [{
    "track": 1,
    "name": "Mimi-box example audio - 1",
    "length": "0:21",
    "file": "Mimi-box example audio - 1"
}, {
    "track": 2,
    "name": "Mimi-box example audio - 2",
    "length": "0:01",
    "file": "Mimi-box example audio - 2"
}, {
    "track": 3,
    "name": "Mimi-box example audio - 3a",
    "length": "0:01",
    "file": "Mimi-box example audio - 3a"
}, {
    "track": 4,
    "name": "Mimi-box example audio - 3aa",
    "length": "0:03",
    "file": "Mimi-box example audio - 3aa"
}, {
    "track": 5,
    "name": "Mimi-box example audio - 3b",
    "length": "0:03",
    "file": "Mimi-box example audio - 3b"
}, {
    "track": 6,
    "name": "Mimi-box example audio - 3bb",
    "length": "0:03",
    "file": "Mimi-box example audio - 3bb"
}, {
    "track": 7,
    "name": "Mimi-box example audio - 3c",
    "length": "0:02",
    "file": "Mimi-box example audio - 3c"
}, {
    "track": 8,
    "name": "AMimi-box example audio - 3cc",
    "length": "0:03",
    "file": "Mimi-box example audio - 3cc"
}, {
    "track": 9,
    "name": "Mimi-box example audio - 3d",
    "length": "0:03",
    "file": "Mimi-box example audio - 3d"
}, {
    "track": 10,
    "name": "Mimi-box example audio - 3e",
    "length": "0:03",
    "file": "Mimi-box example audio - 3e"
}, {
    "track": 11,
    "name": "Mimi-box example audio - 3f",
    "length": "0:04",
    "file": "Mimi-box example audio - 3f"
}, {
    "track": 12,
    "name": "Mimi-box example audio - 3g",
    "length": "0:02",
    "file": "Mimi-box example audio - 3g"
}, {
    "track": 13,
    "name": "Mimi-box example audio - 3h",
    "length": "0:04",
    "file": "Mimi-box example audio - 3h"
}, {
    "track": 14,
    "name": "Mimi-box example audio - 3i",
    "length": "0:04",
    "file": "Mimi-box example audio - 3i"
}, {
    "track": 15,
    "name": "Mimi-box example audio - 3j",
    "length": "0:04",
    "file": "Mimi-box example audio - 3j"
}, {
    "track": 16,
    "name": "Mimi-box example audio - 3k",
    "length": "0:03",
    "file": "Mimi-box example audio - 3k"
}, {
    "track": 17,
    "name": "Mimi-box example audio - 3l",
    "length": "0:04",
    "file": "Mimi-box example audio - 3l"
}, {
    "track": 18,
    "name": "Mimi-box example audio - 3m",
    "length": "0:03",
    "file": "Mimi-box example audio - 3m"
}, {
    "track": 19,
    "name": "Mimi-box example audio - 3n",
    "length": "0:03",
    "file": "Mimi-box example audio - 3n"
}, {
    "track": 20,
    "name": "Mimi-box example audio - 3o",
    "length": "0:02",
    "file": "Mimi-box example audio - 3o"
}, {
    "track": 21,
    "name": "Mimi-box example audio - 3p",
    "length": "0:02",
    "file": "Mimi-box example audio - 3p"
}, {
    "track": 22,
    "name": "Mimi-box example audio - 3q",
    "length": "0:04",
    "file": "Mimi-box example audio - 3q"
}, {
    "track": 23,
    "name": "Mimi-box example audio - 3r",
    "length": "0:02",
    "file": "Mimi-box example audio - 3r"
}, {
    "track": 24,
    "name": "Mimi-box example audio - 3s",
    "length": "0:02",
    "file": "Mimi-box example audio - 3s"
}, {
    "track": 25,
    "name": "Mimi-box example audio - 3t",
    "length": "0:03",
    "file": "Mimi-box example audio - 3t"
}, {
    "track": 26,
    "name": "Mimi-box example audio - 3u",
    "length": "0:04",
    "file": "Mimi-box example audio - 3u"
}, {
    "track": 27,
    "name": "Mimi-box example audio - 3v",
    "length": "0:02",
    "file": "Mimi-box example audio - 3v"
}, {
    "track": 28,
    "name": "Mimi-box example audio - 3w",
    "length": "0:03",
    "file": "Mimi-box example audio - 3w"
}, {
    "track": 29,
    "name": "Mimi-box example audio - 3x",
    "length": "0:02",
    "file": "Mimi-box example audio - 3x"
}, {
    "track": 30,
    "name": "Mimi-box example audio - 3y",
    "length": "0:02",
    "file": "Mimi-box example audio - 3y"
}, {
    "track": 31,
    "name": "Mimi-box example audio - 3z",
    "length": "0:02",
    "file": "Mimi-box example audio - 3z"
}, {
    "track": 32,
    "name": "Mimi-box example audio - 4",
    "length": "0:02",
    "file": "Mimi-box example audio - 4"
}, {
    "track": 33,
    "name": "Mimi-box example audio - 5",
    "length": "0:06",
    "file": "Mimi-box example audio - 5"
}, {
    "track": 34,
    "name": "Mimi-box example audio - 6",
    "length": "0:15",
    "file": "Mimi-box example audio - 6"
}, {
    "track": 35,
    "name": "Mimi-box example audio - 7",
    "length": "0:22",
    "file": "Mimi-box example audio - 7"
}, {
    "track": 36,
    "name": "Mimi-box example audio - 7b",
    "length": "0:03",
    "file": "Mimi-box example audio - 7b"
}, {
    "track": 37,
    "name": "Mimi-box example audio - 8",
    "length": "0:24",
    "file": "Mimi-box example audio - 8"
}, {
    "track": 38,
    "name": "Mimi-box example audio - 9",
    "length": "0:24",
    "file": "Mimi-box example audio - 9"
}, {
    "track": 39,
    "name": "Mimi-box example audio - 10a",
    "length": "0:02",
    "file": "Mimi-box example audio - 10a"
}, {
    "track": 40,
    "name": "Mimi-box example audio - 10b",
    "length": "0:02",
    "file": "Mimi-box example audio - 10b"
}, {
    "track": 41,
    "name": "Mimi-box example audio - 10c",
    "length": "0:02",
    "file": "Mimi-box example audio - 10c"
}, {
    "track": 42,
    "name": "Mimi-box example audio - 10d",
    "length": "0:03",
    "file": "Mimi-box example audio - 10d"
}, {
    "track": 43,
    "name": "Mimi-box example audio - 10e",
    "length": "0:03",
    "file": "Mimi-box example audio - 10e"
}, {
    "track": 44,
    "name": "AMimi-box example audio - 10f",
    "length": "0:05",
    "file": "Mimi-box example audio - 10f"
}, {
    "track": 45,
    "name": "Mimi-box example audio - 11a",
    "length": "0:03",
    "file": "Mimi-box example audio - 11a"
}, {
    "track": 46,
    "name": "Mimi-box example audio - 11b",
    "length": "0:04",
    "file": "Mimi-box example audio - 11b"
}, {
    "track": 47,
    "name": "Mimi-box example audio - 11c",
    "length": "0:05",
    "file": "Mimi-box example audio - 11c"
}, {
    "track": 48,
    "name": "Mimi-box example audio - 12a",
    "length": "0:03",
    "file": "Mimi-box example audio - 12a"
}, {
    "track": 49,
    "name": "Mimi-box example audio - 12b",
    "length": "0:03",
    "file": "Mimi-box example audio - 12b"
}, {
    "track": 50,
    "name": "Mimi-box example audio - 12c",
    "length": "0:08",
    "file": "Mimi-box example audio - 12c"
}, {
    "track": 51,
    "name": "Mimi-box example audio - 12d",
    "length": "0:04",
    "file": "Mimi-box example audio - 12d"
}, {
    "track": 52,
    "name": "Mimi-box example audio - 12e",
    "length": "0:03",
    "file": "Mimi-box example audio - 12e"
}, {
    "track": 53,
    "name": "Mimi-box example audio - 12f",
    "length": "0:04",
    "file": "Mimi-box example audio - 12f"
}, {
    "track": 54,
    "name": "Mimi-box example audio - 12g",
    "length": "0:03",
    "file": "Mimi-box example audio - 12g"
}, {
    "track": 55,
    "name": "Mimi-box example audio - 12h",
    "length": "0:03",
    "file": "Mimi-box example audio - 12h"
}, {
    "track": 56,
    "name": "Mimi-box example audio - 12i",
    "length": "0:03",
    "file": "Mimi-box example audio - 12i"
}, {
    "track": 57,
    "name": "Mimi-box example audio - 13a",
    "length": "0:04",
    "file": "Mimi-box example audio - 13a"
}, {
    "track": 58,
    "name": "Mimi-box example audio - 13b",
    "length": "0:04",
    "file": "Mimi-box example audio - 13b"
}, {
    "track": 59,
    "name": "Mimi-box example audio - 13c",
    "length": "0:02",
    "file": "Mimi-box example audio - 13c"
}, {
    "track": 60,
    "name": "Mimi-box example audio - 13d",
    "length": "0:02",
    "file": "Mimi-box example audio - 13d"
}, {
    "track": 61,
    "name": "Mimi-box example audio - 13e",
    "length": "0:02",
    "file": "Mimi-box example audio - 13e"
}, {
    "track": 62,
    "name": "Mimi-box example audio - 14a",
    "length": "0:04",
    "file": "Mimi-box example audio - 14a"
}, {
    "track": 63,
    "name": "Mimi-box example audio - 14b",
    "length": "0:05",
    "file": "Mimi-box example audio - 14b"
}, {
    "track": 64,
    "name": "Mimi-box example audio - 14c",
    "length": "0:04",
    "file": "Mimi-box example audio - 14c"
}, {
    "track": 65,
    "name": "Mimi-box example audio - 14d",
    "length": "0:08",
    "file": "Mimi-box example audio - 14d"
}, {
    "track": 66,
    "name": "Mimi-box example audio - 14e",
    "length": "0:04",
    "file": "Mimi-box example audio - 14e"
}, {
    "track": 67,
    "name": "Mimi-box example audio - 14f",
    "length": "0:04",
    "file": "Mimi-box example audio - 14f"
}, {
    "track": 68,
    "name": "Mimi-box example audio - 14g",
    "length": "0:06",
    "file": "Mimi-box example audio - 14g"
}, {
    "track": 69,
    "name": "Mimi-box example audio - 14h",
    "length": "0:05",
    "file": "Mimi-box example audio - 14h"
}, {
    "track": 70,
    "name": "Mimi-box example audio - 14i",
    "length": "0:05",
    "file": "Mimi-box example audio - 14i"
}, {
    "track": 71,
    "name": "Mimi-box example audio - 14j",
    "length": "0:04",
    "file": "Mimi-box example audio - 14j"
}, {
    "track": 72,
    "name": "Mimi-box example audio - 14k",
    "length": "0:05",
    "file": "Mimi-box example audio - 14k"
}, {
    "track": 73,
    "name": "Mimi-box example audio - 14l",
    "length": "0:11",
    "file": "Mimi-box example audio - 14l"
}, {
    "track": 74,
    "name": "Mimi-box example audio - 14m",
    "length": "0:16",
    "file": "Mimi-box example audio - 14m"
}, {
    "track": 75,
    "name": "Mimi-box example audio - 14n",
    "length": "0:13",
    "file": "Mimi-box example audio - 14n"
}, {
    "track": 76,
    "name": "Mimi-box example audio - 15a",
    "length": "0:02",
    "file": "Mimi-box example audio - 15a"
}, {
    "track": 77,
    "name": "Mimi-box example audio - 15b",
    "length": "0:04",
    "file": "Mimi-box example audio - 15b"
}, {
    "track": 78,
    "name": "Mimi-box example audio - 15c",
    "length": "0:02",
    "file": "Mimi-box example audio - 15c"
}, {
    "track": 79,
    "name": "Mimi-box example audio - 15d",
    "length": "0:04",
    "file": "Mimi-box example audio - 15d"
}, {
    "track": 80,
    "name": "Mimi-box example audio - 15e",
    "length": "0:03",
    "file": "Mimi-box example audio - 15e"
}, {
    "track": 81,
    "name": "Mimi-box example audio - 15f",
    "length": "0:05",
    "file": "Mimi-box example audio - 15f"
}]

// <li>
//     <div class="plItem">
//         <div class="plNum">01.</div>
//         <div class="plTitle">Mimi-box example audio - 1</div>
//         <div class="plLength">0:22</div>
//     </div>
// </li>

function loadTrackList(htmlParent) {
  listParent = document.getElementById(htmlParent);
  tdbody = document.createElement("tbody");
  // tdbody.className = "table-wrapper";

  for (i = 0; i < tracks.length; i++) {
    li = document.createElement("li");
    plItem = document.createElement("div");
    plItem.className = "plItem";

    plNum = document.createElement("td");
    plNum.className = "plNum";
    plNum.innerHTML = tracks[i].track + ".";

    plTitle = document.createElement("td");
    plTitle.className = "plTitle";
    plTitle.innerHTML = tracks[i].name;

    plLength = document.createElement("td");
    plLength.className = "plLength";
    plLength.innerHTML = tracks[i].length;

    tr = document.createElement("tr");

    tr.appendChild(plNum);
    tr.appendChild(plTitle);
    tr.appendChild(plLength);

    tdbody.appendChild(tr);
  }
  listParent.appendChild(tdbody);

  setTrackCount("trackCount");
}

function setTrackCount(trackCount) {
  document.getElementById(trackCount).innerHTML += tracks.length;
}

// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
jQuery(function ($) {
    var supportsAudio = !! document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false;
        mediaPath = './example audio script/',
        extension = '',
        tracks,
        trackCount = tracks.length,
        npAction = $('#npAction'),
        npTitle = $('#npTitle'),
        audio = $('#audio1').bind('play', function () {
            playing = true;
            npAction.text('Now Playing...');
        }).bind('pause', function () {
            playing = false;
            npAction.text('Paused...');
        }).bind('ended', function () {
            npAction.text('Paused...');
            // if ((index + 1) < trackCount) {
            //     index++;
            //     loadTrack(index);
            //     audio.play();
            // } else {
            //     audio.pause();
            //     index = 0;
            //     loadTrack(index);
            // }
            audio.pause();
        }).get(0),
        btnPrev = $('#btnPrev').click(function () {
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        btnNext = $('#btnNext').click(function () {
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        tr = $('#plList tr').click(function () {
            var id = parseInt($(this).index());
            // console.log("selected track " + id);
            // if (id !== index) {
                playTrack(id);
            // }
        }),
        loadTrack = function (id) {
          // console.log("Loading track " + id);
            $('.plSel').removeClass('plSel');
            $('#plList tr:eq(' + id + ')').addClass('plSel');
            npTitle.text(tracks[id].name);
            index = id;
            audio.src = mediaPath + tracks[id].file + extension;
        },
        playTrack = function (id) {
            loadTrack(id);
            audio.play();
        };
        extension = audio.canPlayType('audio/wav') ? '.wav' : audio.canPlayType('audio/wav') ? '.wav' : '';
        loadTrack(index);
    }
});
