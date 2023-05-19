const creditsAnchor = document.createElement('a');
creditsAnchor.innerText = `Dario Corsi`;
creditsAnchor.target = '_blank';
creditsAnchor.href = 'https://dariocorsi.com/';
creditsAnchor.title = `Coded with heart emoji by Dario Corsi`
creditsAnchor.style.cssText = `
background:rgba(0,0,0,.5);
color:#fff;
font-family: helvetica, arial, sans-serif;
font-size:8px !important;
position:fixed;
bottom:4px;
right:4px;
border-radius:2px;
padding:4px 6px !important;
text-decoration:none;
text-transform:uppercase;
letter-spacing: .15em;
z-index:99999;
`;

document.body.appendChild(creditsAnchor);