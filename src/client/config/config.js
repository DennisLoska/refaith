import albumCover from '../assets/images/zeitkapsel.webp';

import s1 from '../assets/music/1_ERFOLGSERLEBNIS_MASTER.wav';
import s2 from '../assets/music/2_HODL_MASTER.wav';
import s3 from '../assets/music/3_WENN_ICH_DICH_FINDE_MASTER.wav';
import s4 from '../assets/music/4_NUTZE_DIE_ZEIT_MASTER.wav';
import s5 from '../assets/music/5_WORTE_MASTER.wav';
import s6 from '../assets/music/6_VERGANGENHEIT_MASTER.wav';
import s7 from '../assets/music/7_ICH_LASSE_LOS_MASTER.wav';
import s8 from '../assets/music/8_INTERLUDE.mp3';
import s9 from '../assets/music/9_EINES_TAGES_MASTER.wav';
import s10 from '../assets/music/10_DAS_ALTE_IST_VORBEI_MASTER.wav';
import s11 from '../assets/music/11_FUER_TINI.mp3';
import s12 from '../assets/music/12_FUER_MARIA_MASTER.wav';
import s13 from '../assets/music/13_MEIN_ZIEL_MASTER.wav';
import s14 from '../assets/music/14_DAS_KREUZ_MASTER.wav';
import s15 from '../assets/music/15_MEIN_LEBEN_MASTER.wav';
import s16 from '../assets/music/16_ZEITKAPSEL_MASTER.wav';
import s17 from '../assets/music/17_SCHICKSAL_CARGO_TRIBUT_MASTER.wav';
import s18 from '../assets/music/18_STREBEN_NACH_GLUECK_MASTER.wav';
import s19 from '../assets/music/19_ICH_MUSS_JETZT_GEHEN_MASTER.wav';
import s20 from '../assets/music/20_UEBERWINDUNG_MASTER.wav';
import s21 from '../assets/music/21_OUTRO_MASTER.wav';

const ARTIST = 'Re:Faith';

const videoList = [
  'https://www.youtube.com/embed/kd0-fneZc3I',
  'https://www.youtube.com/embed/EdochGwCCmk',
  'https://www.youtube.com/embed/scOac8PDlZQ',
  'https://www.youtube.com/embed/ode0aZ_K0OM',
  'https://www.youtube.com/embed/IEarhbx9fBI',
  'https://www.youtube.com/embed/AuCkaMwk7mU',
  'https://www.youtube.com/embed/VeJ4O_wyNoc',
  'https://www.youtube.com/embed/gXKGFEBQ0vw'
];

const playlist = 'https://www.youtube.com/watch?v=KnPP_5AnErQ&list=PLWdXki6J_NQR5L2clEDhgFH8UG7lehIk0';

const audioList = {
  zeitkapsel: [
    {
      name: 'Erfolgserlebnis',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s1
    },
    {
      name: 'HODL',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s2
    },
    {
      name: 'Wenn ich dich finde',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s3
    },
    {
      name: 'Nutze die Zeit',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s4
    },
    {
      name: 'Worte',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s5
    },
    {
      name: 'Vergangenheit',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s6
    },
    {
      name: 'Ich lasse los',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s7
    },
    {
      name: 'Interlude',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s8
    },
    {
      name: 'Eines Tages',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s9
    },
    /*
   {
     name: 'Das Alte ist Vorbei',
     singer: ARTIST,
     cover: albumCover,
     musicSrc: s10
   },
   */
    {
      name: 'Für Tini',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s11
    },
    {
      name: 'Für Maria',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s12
    },
    {
      name: 'Mein Ziel',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s13
    },
    {
      name: 'Das Kreuz',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s14
    },
    {
      name: 'Mein Leben',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s15
    },
    {
      name: 'Zeitkapsel',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s16
    },
    {
      name: 'Schicksal',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s17
    },
    {
      name: 'Streben nach Glück',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s18
    },
    {
      name: 'Ich muss jetzt gehen',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s19
    },
    {
      name: 'Überwindung',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s20
    },
    {
      name: 'Outro',
      singer: ARTIST,
      cover: albumCover,
      musicSrc: s21
    },
  ]
};

export default {
  videoList,
  audioList,
  playlist
};
