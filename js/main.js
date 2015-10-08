angular.module('gdgApp', [])
.controller('gdgController', function() {
  var gdg = this;
  gdg.imageBaseUrl = 'http://devfest2015.gdggeorgetown.com/images/';
    // gdg.imageBaseUrl = './images/'; //local
  gdg.introductions = [{
    paragraph: 'DevFest is a large community organised annual event with sessions & code labs for developers, students, startups and anyone interested to learn the latest trends and technical knowledge of Google platform, product APIs & open source technologies.'
  }, {
    paragraph: 'This year, GDG DevFest George Town 2015 theme is "Code Better, Aim Higher". Focus will be on Android, Polymer and GameDev, featuring a solid lineup of local and international speakers. '
  }, {
    paragraph: 'Alongside of DevFest, there will also be the launching of @CAT. @CAT which stands for Accelerator for Creative, Analytics & Technology, is a an exciting new programme formed by the Penang State Government via InvestPenang aimed at accelerating emerging tech start-ups & entrepreneurs gain access to mentors, training, shared facilities, co-working space, professional assistance, and other value added services that will move them onto the fast track of success.'
  }];

  gdg.speakers = [{
    name: 'Amit Chopra',
    title: 'SEA Regional Lead',
    company: 'Google',
    image: 'speaker-amit.jpg'
  }, {
    name: 'Yohan Totting',
    title: 'Google Developer Expert',
    company: 'Google Developer Relation',
    image: 'speaker-yohan.jpg'
  }, {
    name: 'Shuan Thing',
    title: 'Director of Operations',
    company: 'MobileAds.com',
    image: 'speaker-shuanting.jpg'
  }, {
    name: 'Gareth Davies',
    title: 'Chief Technology Officer',
    company: 'Mindvalley',
    image: 'speaker-gareth.jpg'
  }, {
    name: 'Jecelyn Yeen',
    title: 'Director',
    company: 'Women Who Code KL',
    image: 'speaker-jecelyn.jpg'
  }, {
    name: 'Vin Lim',
    title: 'Community Manager',
    company: 'Google Developers Group George Town',
    image: 'speaker-vin.jpg'
  }, {
    name: 'Shawn Beck',
    title: 'Indie Game Developer',
    company: 'Velocibox',
    image: 'speaker-shawn.jpg'
  }, {
    name: 'Julia Koh',
    title: 'Executive Director',
    company: 'Brand 360',
    image: 'speaker-julia.jpg'
  }, ];
  gdg.schedules = [{
    time: '8.00 am',
    main: {
      title: 'Registration'
    }
  }, {
    time: '9.00 am',
    main: {
      title: 'Welcome Address'
    }
  }, {
    time: '9.05 am',
    main: {
      title: 'Opening Keynote by YAB Lim Guan Eng Penang Chief Minister',
      speaker: 'Launch of DevFest George Town 2015 '
    }
  }, {
    time: '11.00 am',
    main: {
      title: 'Opening Keynote',
      speaker: 'Prashant Pathmanaban - Industry Head, Google Malaysia'
    },
    labA: {
      title: 'Press Conference',
      speaker: ''
    },
  }, {
    time: '12.00 pm',
    main: {
      title: 'Lunch Break',
      span: true
    },
  }, {
    time: '1.00 pm',
    main: {
      title: 'An Indie on The Steam Train to PlayStation',
      speaker: 'Shawn Beck - Indie Game Developer, Velocibox'
    },
    labA: {
      title: 'Development Workflow & Continuous Integration',
      speaker: 'Gareth Davies - Chief Technology Office, Mindvalley'
    },
    labB: {
      title: 'Responsive Web Design with HTML5',
      speaker: 'Jecelyn Yeen - Women Who Code KL'
    }
  }, {
    time: '3.00 pm',
    main: {
      title: 'Break & Networking',
      span: true
    },
  }, {
    time: '4.00 pm',
    main: {
      title: 'Material Design',
      speaker: 'Taylor Ling, Google Developer Expert'
    },
    labA: {
      title: 'Building Your First Polymer Web App',
      speaker: 'Vin Lim - Community Manager, GDG George Town'
    },
    labB: {
      title: 'Design Sprint',
      speaker: 'Chelle Obligacion-Gray - Google Developers Relation'
    }
  }, {
    time: '6.00 pm',
    main: {
      title: 'Closing',
      span: true
    },
  }, ];
  gdg.partners = [{
    name: 'google',
    image: 'sponsor-googledev.png',
    link: 'https://developers.google.com/'
  }, {
    name: 'wtm',
    image: 'sponsor-wtm.png',
    link: 'https://www.womentechmakers.com/'
  }, {
    name: 'mdec',
    image: 'sponsor-mdec.png',
    link: 'http://www.mdec.my/'
  }, {
    name: 'peatix',
    image: 'sponsor-peatix.png',
    link: 'http://peatix.com/event/57529/'
  }, {
    name: 'acat',
    image: 'sponsor-acat.png',
    link: 'https://www.womentechmakers.com/'
  }, {
    name: 'investpenang',
    image: 'sponsor-investpenang.png',
    link: 'http://www.investpenang.gov.my/'
  }, ];

})