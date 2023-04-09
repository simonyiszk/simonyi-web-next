import type { ProfileType, StudentGroupType, AboutType, ImageType } from '../types';

const about: AboutType = {
  title: 'A szakkoli',
  text: 'A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. A szakkollégium 2003-ban vette fel Simonyi Károly, a Kar rajongva tisztelt professzora nevét. A Simonyi Károly Szakkollégium célja, hogy tagjai és a Kar hallgatói számára lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek elsajátítására. Ennek érdekében tanfolyamokat, konferenciákat és más szakmai rendezvényeket szervez, infrastruktúrával támogatja a hallgatók önálló szakmai munkáit. A szakkollégium céljai közé tartozik, hogy a tagjai által elért eredményeket minél szélesebb körben publikálja, a magyar felsőoktatás más egységeivel és a szakemberekkel megismertesse a szakkollégiumban folyó munkát.',
  wikiUrl: 'https://hu.wikipedia.org/wiki/Simonyi_K%C3%A1roly_Szakkoll%C3%A9gium'
};

const images: Array<ImageType & { title: string; description: string; width: number; height: number }> = [
  {
    url: '/images/lightbox/1.jpg',
    alt: '13. Simonyi Konferencia - 2016',
    title: '13. Simonyi Konferencia - 2016',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/2.jpg',
    alt: 'Kutyasétáltatás - 2018',
    title: 'Kutyasétáltatás - 2018',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/3.jpg',
    alt: '16. Simonyi Konferencia szervezői gárda - 2019',
    title: '16. Simonyi Konferencia szervezői gárda - 2019',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/4.jpg',
    alt: 'HA5KFU az E épület tetején - 2020',
    title: 'HA5KFU az E épület tetején - 2020',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/5.jpg',
    alt: 'Simonyi Nyári Tábor vetélkedő - 2021',
    title: 'Simonyi Nyári Tábor vetélkedő - 2021',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/6.jpg',
    alt: 'Simonyi Nyári Tábor csoportkép - 2021',
    title: 'Simonyi Nyári Tábor csoportkép - 2021',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/7.jpg',
    alt: '19. Simonyi Konferencia LEGO stand - 2022',
    title: '19. Simonyi Konferencia LEGO stand - 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/8.jpg',
    alt: 'Simonyi Nyári Tábor borkóstoló - 2022',
    title: 'Simonyi Nyári Tábor borkóstoló - 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/9.jpg',
    alt: 'Simonyi Nyári Tábor életkép- 2022',
    title: 'Simonyi Nyári Tábor életkép- 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/10.jpg',
    alt: 'Simonyi Nyári Tábor csoportkép - 2022',
    title: 'Simonyi Nyári Tábor csoportkép - 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/11.jpg',
    alt: 'Simonyi Nyári Tábor buli- 2022',
    title: 'Simonyi Nyári Tábor buli- 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/12.jpg',
    alt: 'Simonyi Félévnyitó és Felvételi Vacsora - 2022',
    title: 'Simonyi Félévnyitó és Felvételi Vacsora - 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/13.jpg',
    alt: '19. Simonyi Születésnapi buli - 2022',
    title: '19. Simonyi Születésnapi buli - 2022',
    description: '',
    width: 1920,
    height: 1080
  },
  {
    url: '/images/lightbox/14.jpg',
    alt: 'Simonyi Félévzáró, ami amúgy Szakestély - 2022',
    title: 'Simonyi Félévzáró, ami amúgy Szakestély - 2022',
    description: '',
    width: 1920,
    height: 1080
  }
];

const profiles: Array<ProfileType> = [
  {
    profilePicture: {
      url: '/images/simonyi/elnokok/1.png',
      alt: 'Piller Trisztán'
    },
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      {
        icon: 'email',
        link: {
          url: 'mailto:piller.trisztan@simonyi.bme.hu',
          title: 'piller.trisztan@simonyi.bme.hu',
          text: 'piller.trisztan@simonyi.bme.hu'
        }
      },
      { icon: 'github', link: { url: 'https://github.com/triszt4n/', title: 'github.com/triszt4n', text: '@triszt4n' } },
      { icon: 'linkedin', link: { url: 'https://linkedin.com/in/triszt4n/', title: 'linkedin.com/in/triszt4n', text: '@triszt4n' } }
    ]
  },
  {
    profilePicture: {
      url: '/images/simonyi/elnokok/2.png',
      alt: 'Kis Ákos'
    },
    name: 'Kis Ákos',
    title: 'Reszortvezető alelnök',
    socials: [
      { icon: 'email', link: { url: 'mailto:kis.akos@simonyi.bme.hu', title: 'kis.akos@simonyi.bme.hu', text: 'kis.akos@simonyi.bme.hu' } }
    ]
  },
  {
    profilePicture: {
      url: '/images/simonyi/elnokok/3.png',
      alt: 'Jászberényi Áron'
    },
    name: 'Jászberényi Áron',
    title: 'Alelnök',
    socials: [
      {
        icon: 'email',
        link: {
          url: 'mailto:jaszberenyi.aron@simonyi.bme.hu',
          title: 'jaszberenyi.aron@simonyi.bme.hu',
          text: 'jaszberenyi.aron@simonyi.bme.hu'
        }
      },
      {
        icon: 'linkedin',
        link: { url: 'https://linkedin.com/in/aron-jaszberenyi/', title: 'linkedin.com/in/aron-jaszberenyi', text: '@aron-jaszberenyi' }
      }
    ]
  },
  {
    profilePicture: {
      url: '/images/simonyi/elnokok/4.png',
      alt: 'Püspöki Péter'
    },
    name: 'Püspöki Péter',
    title: 'Alelnök',
    socials: [
      {
        icon: 'email',
        link: { url: 'mailto:puspoki.peter@simonyi.bme.hu', title: 'puspoki.peter@simonyi.bme.hu', text: 'puspoki.peter@simonyi.bme.hu' }
      }
    ]
  }
];

const groups: Array<StudentGroupType> = [
  {
    name: 'AC Studio & Live',
    logo: {
      url: '/images/simonyi/ac.svg',
      alt: ''
    },
    description:
      'Az AC Studio & Live felel a kollégiumban tartott kisebb-nagyobb rendezvények hangosításáért és fénytechnikájáért, továbbá kezelik, üzemeltetik és karbantartják a kollégium rendezvénytechnikai eszközparkját. A kör gazdagon felszerelt hangstúdiója alkalmas zenekarok, együttesek többsávos felvételeinek elkészítésére is, amit rajtuk kívül kollégiumi bandák és a Qpa csapatai is igénybe szoktak venni.',
    socials: [
      {
        icon: 'website',
        link: { url: 'https://acstudio.sch.bme.hu/', title: 'acstudio.sch.bme.hu', text: 'https://acstudio.sch.bme.hu/' }
      },
      { icon: 'email', link: { url: 'mailto:ac-info@simonyi.bme.hu', title: 'ac-info@simonyi.bme.hu', text: 'ac-info@simonyi.bme.hu' } },
      {
        icon: 'facebook',
        link: { url: 'https://www.facebook.com/acstudiolive/', title: 'facebook.com/acstudiolive', text: '/acstudiolive' }
      },
      {
        icon: 'instagram',
        link: { url: 'https://www.instagram.com/ac_studio_n_live/', title: 'instagram.com/ac_studio_n_live', text: '@ac_studio_n_live' }
      }
    ]
  },
  {
    name: 'Budavári Schönherz Stúdió',
    logo: {
      url: '/images/simonyi/bss.svg',
      alt: ''
    },
    description:
      'A Budavári Schönherz Stúdiót legtöbben a csütörtök esti élő adásairól és az egyetemi rendezvények közvetítéséről, videókról ismerik. Ott voltak a Gólyatáborban, a Gólyahéten, a QPA-n, de az év többi részében is megéri követni őket. Készítenek program- és filmajánlókat, interjúkat, és megörökítik az egyetemi bulikat. Az ezzel járó szerkesztési és technikai feladatokat is a kör tagjai végzik.',
    socials: [
      { icon: 'website', link: { url: 'https://bsstudio.hu/', title: 'bsstudio.hu', text: 'https://bsstudio.hu/' } },
      { icon: 'email', link: { url: 'mailto:bssinfo@sch.bme.hu', title: 'bssinfo@sch.bme.hu', text: 'bssinfo@sch.bme.hu' } },
      { icon: 'facebook', link: { url: 'https://www.facebook.com/bsstudio/', title: 'facebook.com/bsstudio', text: '/bsstudio' } },
      {
        icon: 'instagram',
        link: {
          url: 'https://www.instagram.com/budavari_schonherz_studio/',
          title: 'instagram.com/budavari_schonherz_studio',
          text: '@budavari_schonherz_studio'
        }
      },
      { icon: 'tiktok', link: { url: 'https://www.tiktok.com/@bsstudio_', title: 'tiktok.com/@bsstudio_', text: '@bsstudio_' } },
      { icon: 'youtube', link: { url: 'https://youtube.com/bsstudi0/', title: 'youtube.com/bsstudi0', text: '@bsstudi0' } }
    ],
    isDense: true
  },
  {
    name: 'HA5KFU Rádióamatőr Klub',
    logo: {
      url: '/images/simonyi/ha5kfu.svg',
      alt: ''
    },
    description:
      'A HA5KFU Rádióamatőr Klub nevét a hívójeléről kapta. 1954-es alakulásával a Villanykar legrégebbi köre, azóta foglalkoznak a rövidhullámú és URH rádióforgalmazással, műholdas kommunikációval és szoftverrádiós technológiákkal. A kollégium legtetején található műhelyükben pedig antennák és áramkörök épülnek, melyek az előbbi technológiákhoz szükségesek.',
    socials: [
      { icon: 'website', link: { url: 'https://ha5kfu.hu/', title: 'ha5kfu.hu', text: 'https://ha5kfu.hu/' } },
      { icon: 'email', link: { url: 'mailto:ha5kfu@simonyi.bme.hu', title: 'ha5kfu@simonyi.bme.hu', text: 'ha5kfu@simonyi.bme.hu' } },
      { icon: 'facebook', link: { url: 'https://www.facebook.com/ha5kfu/', title: 'facebook.com/ha5kfu', text: '/ha5kfu' } },
      { icon: 'instagram', link: { url: 'https://www.instagram.com/ha5kfu/', title: 'instagram.com/ha5kfu', text: '@ha5kfu' } }
    ]
  },
  {
    name: 'Kir-Dev',
    logo: {
      url: '/images/simonyi/kir-dev.svg',
      alt: ''
    },
    description:
      'A Kollégiumi Információs Rendszer Fejlesztők és Üzemeltetők (Kir-Dev) 2001-ben alakult, webalkalmazások fejlesztése és üzemeltetése a profiljuk. Ők fejlesztik a Profil és Körök (PéK) oldalt, melynek mára 30 ezernél is több felhasználója van. Emellett a Qpa, G7 és SCH-Pincér weboldalakat is a kör tagjai készítik. Főként Ruby on Rails, Node.js, React és Spring Boot keretrendszerekkel dolgoznak.',
    socials: [
      { icon: 'website', link: { url: 'https://kir-dev.hu/', title: 'kir-dev.hu', text: 'https://kir-dev.hu/' } },
      { icon: 'email', link: { url: 'mailto:kir-dev@sch.bme.hu', title: 'kir-dev@sch.bme.hu', text: 'kir-dev@sch.bme.hu' } },
      { icon: 'facebook', link: { url: 'https://facebook.com/kirdevteam/', title: 'facebook.com/kirdevteam', text: '/kirdevteam' } },
      { icon: 'instagram', link: { url: 'https://www.instagram.com/kir.dev/', title: 'instagram.com/kir.dev', text: '@kir.dev' } },
      { icon: 'youtube', link: { url: 'https://www.youtube.com/@kir-dev', title: 'youtube.com/@kir-dev', text: '@kir-dev' } }
    ]
  },
  {
    name: 'LEGO Kör',
    logo: {
      url: '/images/simonyi/lego.svg',
      alt: ''
    },
    description:
      'A LEGO Kör nevét a LEGO Mindstorms-ról kapta, ugyanis hosszú ideig ezen eszközök fejlesztése volt a fő profiljuk. Mára nemcsak ezzel foglalkoznak, nyitottak a mesterséges intelligencia, az ipari irányítástechnika, az űrtechnológia és az alternatív irányításmódok felé is. Eszközparkjuk lehetőséget nyújt innovatív ötletek megvalósításához. Náluk bárki megtalálhatja a számára megfelelő szakterületet.',
    socials: [
      { icon: 'website', link: { url: 'https://legokor.hu/', title: 'legokor.hu', text: 'https://legokor.hu/' } },
      { icon: 'email', link: { url: 'mailto:lego@sch.bme.hu', title: 'lego@sch.bme.hu', text: 'lego@sch.bme.hu' } },
      { icon: 'facebook', link: { url: 'https://facebook.com/Legokor/', title: 'facebook.com/Legokor', text: '/Legokor' } },
      { icon: 'instagram', link: { url: 'https://www.instagram.com/legokor/', title: 'instagram.com/legokor', text: '@legokor' } }
    ]
  },
  {
    name: 'Menedzsment Kör',
    logo: {
      url: '/images/simonyi/mgmt.svg',
      alt: ''
    },
    description:
      'A MGMT rendezvényeink és társadalmi felelősségvállalásunk koordinálásával foglalkozik. A tagok marketing, HR és gazdasági tapasztalatokra is szert tehetnek nálunk. Rendezvényeink a félévkezdő és -záró vacsorák, a Szakmai Hét, a Simonyi Nyári Tábor, illetve a Simonyi Szülinap. Tagjaink a szerzett tudást nemcsak egyetemi pályafutásuk során, hanem azután is számos területen tudják kamatoztatni.',
    socials: [{ icon: 'email', link: { url: 'mailto:mgmt@simonyi.bme.hu', title: 'mgmt@simonyi.bme.hu', text: 'mgmt@simonyi.bme.hu' } }]
  },
  {
    name: 'schdesign',
    logo: {
      url: '/images/simonyi/schdesign.svg',
      alt: ''
    },
    description:
      'A szakkollégium kreatív alkotóműhelyeként az schdesign kör feladata a különböző digitális műfajok ápolása, mint például az arculattervezés, a logótervezés, a webdesign, a UX design, a 3D modellezés vagy a nyomtatott grafikák készítése. Mindezt valós projekteken teszik – egyik legnagyobb munkájuk az évről évre megrendezésre kerülő Simonyi Konferencia és a Schönherz QPA arculatának megtervezése.',
    socials: [
      { icon: 'website', link: { url: 'https://schdesign.hu/', title: 'schdesign.hu', text: 'https://schdesign.hu/' } },
      { icon: 'email', link: { url: 'mailto:hello@schdesign.hu', title: 'hello@schdesign.hu', text: 'hello@schdesign.hu' } },
      {
        icon: 'facebook',
        link: { url: 'https://www.facebook.com/schdesignbme/', title: 'facebook.com/schdesignbme', text: '/schdesignbme' }
      },
      {
        icon: 'instagram',
        link: { url: 'https://www.instagram.com/schdesign.hu/', title: 'instagram.com/schdesign.hu', text: '@schdesign.hu' }
      },
      {
        icon: 'youtube',
        link: { url: 'https://www.youtube.com/@schdesignbme', title: 'youtube.com/@schdesignbme', text: '@schdesignbme' }
      }
    ]
  },
  {
    name: 'Schönherz Elektronikai Műhely',
    logo: {
      url: '/images/simonyi/sem.svg',
      alt: ''
    },
    description:
      'A Schönherz Elektronikai Műhely a kollégium gyakorlatias villanyos és informatikus szakembereit fogja össze. A munkák elvégzésére egy felszerelt műhely áll a hallgatók rendelkezésre: a villamos fejlesztésekhez oszcilloszkóp, labortápegységek, forrasztási felszerelés és barkácsoláshoz szükséges alapanyagok, barkácsgépek. Jól felszerelt műhelyünkben ötleteidnek csak a kitartásod szabhat határt!',
    socials: [
      { icon: 'website', link: { url: 'https://sem.sch.bme.hu/', title: 'sem.sch.bme.hu', text: 'https://sem.sch.bme.hu/' } },
      { icon: 'email', link: { url: 'mailto:sem@sch.bme.hu', title: 'sem@sch.bme.hu', text: 'sem@sch.bme.hu' } },
      {
        icon: 'facebook',
        link: {
          url: 'https://www.facebook.com/SchonherzElektronikaiMuhely/',
          title: 'www.facebook.com/SchonherzElektronikaiMuhely',
          text: '/SchonherzElektronikaiMuhely'
        }
      }
    ]
  },
  {
    name: 'SPOT',
    logo: {
      url: '/images/simonyi/spot.svg',
      alt: ''
    },
    description:
      'A SPOT tagjai minden villanykari eseményen részt vesznek, és fényképek formájában dokumentálják azokat. Emellett sokat fotóznak a műtermükben is, számos villanykaros önéletrajzában szerepelnek itt készült fotók. Archívumukban hosszú évekre visszamenőleg megtekinthető a villanykari közösség élete, csapatuk pedig folyamatosan fejlődik létszámban, és a belsős képzéseiknek hála szaktudásban is.',
    socials: [
      { icon: 'website', link: { url: 'https://spot.sch.bme.hu/', title: 'spot.sch.bme.hu', text: 'https://spot.sch.bme.hu/' } },
      { icon: 'email', link: { url: 'mailto:spot@simonyi.bme.hu', title: 'spot@simonyi.bme.hu', text: 'spot@simonyi.bme.hu' } },
      { icon: 'facebook', link: { url: 'https://www.facebook.com/bmespot/', title: 'facebook.com/bmespot', text: '/bmespot' } },
      { icon: 'instagram', link: { url: 'https://www.instagram.com/bmespot/', title: 'instagram.com/bmespot', text: '@bmespot' } }
    ]
  }
];

export { about, images, profiles, groups };
