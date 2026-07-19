const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

function toggleNavigation() {
  const isOpen = body.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', isOpen.toString());
}

function closeNavigation() {
  if (body.classList.contains('nav-open')) {
    body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
}

function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll('.reveal-item');
  const revealPoint = window.innerHeight * 0.85;

  revealItems.forEach(item => {
    const elementTop = item.getBoundingClientRect().top;
    if (elementTop < revealPoint) {
      item.classList.add('is-visible');
    }
  });
}

function handleScroll() {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  updateActiveNav();
  revealOnScroll();
}

menuToggle?.addEventListener('click', toggleNavigation);
navLinks.forEach(link => {
  link.addEventListener('click', closeNavigation);
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  handleScroll();
  revealOnScroll();
});

const chatToggle = document.querySelector('.chat-toggle');
const chatPanel = document.querySelector('.chat-panel');
const chatClose = document.querySelector('.chat-close');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-form input');
const chatMessages = document.querySelector('.chat-messages');

function appendChatMessage(role, text) {
  const wrapper = document.createElement('div');
  wrapper.className = `message ${role}`;
  const message = document.createElement('p');
  message.textContent = text;
  wrapper.appendChild(message);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatResponse(text) {
  const query = text.trim().toLowerCase();

  const answers = [
    {
      test: /\b(service|services|software|website|web|app|mobile|cloud|ai|machine learning|ml|design|ui\/ux|marketing|security|cyber|consulting)\b/,
      reply: 'NIGURU TECHNOLOGIES offers software development, website development, mobile apps, cloud migration, AI/ML, UI/UX design, digital marketing, cybersecurity, and IT consulting for businesses seeking digital transformation.'
    },
    {
      test: /\b(intern|internship|training|project experience|student)\b/,
      reply: 'Our internship program includes frontend, backend, full stack, UI/UX, AI, cloud, DevOps, cybersecurity and data analytics tracks with mentorship and real-world projects.'
    },
    {
      test: /\b(career|careers|jobs|hiring|openings|positions|recruitment)\b/,
      reply: 'We hire developers, designers, QA engineers, AI specialists, digital marketing professionals, business analysts, and support staff. Check the careers section or ask for the latest openings.'
    },
    {
      test: /\b(contact|email|phone|website|address|reach|support)\b/,
      reply: 'For business enquiries, email us at info@nigurutechnologies.com, call +91-XXXXXXXXXX, or visit www.nigurutechnologies.com. Our registered office is in Tumakuru, Karnataka, India.'
    },
    {
      test: /\b(about|company|who|what|mission|vision|profile)\b/,
      reply: 'NIGURU TECHNOLOGIES PRIVATE LIMITED is an Indian private limited company providing cutting-edge technology solutions, digital services, and consulting with a focus on quality, innovation, and customer success.'
    },
    {
      test: /\b(process|how|work|begin|start|estimate|quote)\b/,
      reply: 'To start a project, share your goals, timeline and budget. We help define requirements, propose a technology stack, and deliver scalable solutions aligned with your business needs.'
    }
  ];

  for (const answer of answers) {
    if (answer.test.test(query)) {
      return answer.reply;
    }
  }

  return 'I can answer questions about NIGURU TECHNOLOGIES services, internships, careers, contact details, company profile, and project support. Please ask anything about the website or business and I will provide a clear response.';
}

function sendChatMessage(text) {
  if (!text.trim()) return;
  appendChatMessage('user', text);
  chatInput.value = '';
  setTimeout(() => {
    appendChatMessage('bot', getChatResponse(text));
  }, 650);
}

function openChat() {
  chatPanel.classList.add('open');
  chatToggle.setAttribute('aria-expanded', 'true');
  chatPanel.setAttribute('aria-hidden', 'false');
  chatInput.focus();
}

function closeChat() {
  chatPanel.classList.remove('open');
  chatToggle.setAttribute('aria-expanded', 'false');
  chatPanel.setAttribute('aria-hidden', 'true');
}

chatToggle?.addEventListener('click', () => {
  if (chatPanel.classList.contains('open')) {
    closeChat();
  } else {
    openChat();
  }
});

chatClose?.addEventListener('click', closeChat);

chatForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (chatInput) sendChatMessage(chatInput.value);
});
