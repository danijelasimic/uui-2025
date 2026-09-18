
const buttons = document.querySelectorAll('.sec-button1');
const texts = document.querySelectorAll('.content p');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const targetId = button.getAttribute('data-text');

        texts.forEach(text => text.classList.add('hidden'));

        const activeText = document.getElementById(targetId);
        activeText.classList.remove('hidden');
    });
});

document.querySelectorAll('.cta-1, .cta-2').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.link;
        window.location.href = url; 
    });
});

function highlightText(node, regex) {
    if (node.nodeType === 3) { 
        const text = node.nodeValue;
        if (regex.test(text)) {
    
            const frag = document.createDocumentFragment();
            let lastIndex = 0;

            text.replace(regex, (match, offset) => {
              
                if (offset > lastIndex) {
                    frag.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
                }

            
                const mark = document.createElement("mark");
                mark.className = "search-highlight";
                mark.textContent = match;
                frag.appendChild(mark);

                lastIndex = offset + match.length;
            });

            if (lastIndex < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIndex)));
            }

            node.replaceWith(frag);
        }
    } else if (node.nodeType === 1 &&
               node.tagName !== "SCRIPT" &&
               node.tagName !== "STYLE") {
        node.childNodes.forEach(child => highlightText(child, regex));
    }
}

const searchInput = document.querySelector('.search-input');
const searchBar = document.querySelector('.search-bar');
let searchResults = document.querySelector('.search-results');

if (searchInput && searchBar) {
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.className = 'search-results';
        searchResults.innerHTML = '<p id="result-count"></p>';
        searchBar.closest('nav').insertAdjacentElement('afterend', searchResults);
    }

    const resultCount = searchResults.querySelector('#result-count');

    function clearSearchHighlights() {
        document.querySelectorAll('.search-highlight').forEach(mark => {
            mark.replaceWith(document.createTextNode(mark.textContent));
        });
        document.body.normalize();
    }

    function searchPage(query) {
        clearSearchHighlights();

        const term = query.trim();
        if (!term) {
            resultCount.textContent = '';
            searchResults.style.display = 'none';
            return;
        }

        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const wordPattern = new RegExp(
            '(^|[^\\p{L}\\p{N}_])(' + escapedTerm + '[\\p{L}\\p{N}_]*)',
            'giu'
        );
        let matchCount = 0;
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    if (!parent || /^(SCRIPT|STYLE|INPUT|TEXTAREA)$/i.test(parent.tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (parent.closest('.search-results, .search-bar, .menu-overlay')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach(node => {
            const text = node.nodeValue;
            wordPattern.lastIndex = 0;
            if (!wordPattern.test(text)) {
                return;
            }

            wordPattern.lastIndex = 0;
            const fragment = document.createDocumentFragment();
            let lastIndex = 0;

            text.replace(wordPattern, (match, prefix, word, offset) => {
                const matchStart = offset + prefix.length;
                if (matchStart > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchStart)));
                }

                const mark = document.createElement('mark');
                mark.className = 'search-highlight';
                mark.textContent = word;
                fragment.appendChild(mark);
                matchCount += 1;
                lastIndex = matchStart + word.length;
                return match;
            });

            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
            }
            node.replaceWith(fragment);
        });

        resultCount.textContent = matchCount === 1
            ? '1 result'
            : `${matchCount} results`;
        searchResults.style.display = 'block';
    }

    searchInput.addEventListener('input', event => searchPage(event.target.value));
    searchBar.closest('form')?.addEventListener('submit', event => event.preventDefault());
}

//hamburger
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtnX = document.getElementById('closeMenuBtnX');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('menu-open');
});


closeMenuBtnX.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
});


mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});




const testimonials = [
    {
        tag: "🛡️ Lightbox",
        text: "\"The first time I entered the environment, I instinctively reached out to touch what I saw. The textures, the light, the audio — everything felt so authentic that I forgot I was still in my studio. It's a new reality altogether.\"",
        author: "Jordan Lee, CEO Lightbox Venture",
        img1: "https://picsum.photos/seed/user1/70",
        img2: "https://picsum.photos/seed/user2/50",
        img3: "https://picsum.photos/seed/user3/50"
    },
    {
        tag: "⚡ CyberDyn",
        text: "\"Rendering speed and latency are practically non-existent. Our remote engineering teams collaborate inside complex CAD models as if they were standing right next to each other in the same room.\"",
        author: "Elena Rostova, Head of Product",
        img1: "https://picsum.photos/seed/user1/50",
        img2: "https://picsum.photos/seed/user2/70",
        img3: "https://picsum.photos/seed/user3/50"
    },
    {
        tag: "🌐 Nexus VR",
        text: "\"The depth simulation and motion tracking precision completely redefined our educational modules. Students retain information 4x faster because they are physically interacting with the curriculum.\"",
        author: "Marcus Vance, Lead Architect",
        img1: "https://picsum.photos/seed/user1/50",
        img2: "https://picsum.photos/seed/user2/50",
        img3: "https://picsum.photos/seed/user3/70"
    }
];

let currentIndex = 0;

const companyTag = document.getElementById("companyTag");
const testimonialText = document.getElementById("testimonialText");
const authorName = document.getElementById("authorName");
const testimonialBox = document.querySelector(".testimonial-box");
const avatars = document.querySelectorAll(".avatar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateTestimonial(index) {
  
    testimonialBox.classList.add("fade-out");

    setTimeout(() => {
        currentIndex = index;
        const data = testimonials[currentIndex];

        companyTag.textContent = data.tag;
        testimonialText.textContent = data.text;
        authorName.textContent = data.author;

   
        avatars.forEach((av, i) => {
            if (i === currentIndex) {
                av.classList.add("active");
            } else {
                av.classList.remove("active");
            }
        });


        requestAnimationFrame(() => {
            testimonialBox.classList.remove("fade-out");
        });

    }, 250);
}

if (nextBtn && prevBtn) {
   
    nextBtn.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(nextIndex);
    });

   
    prevBtn.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(prevIndex);
    });
}


avatars.forEach((avatar, index) => {
    avatar.addEventListener("click", () => {
        if (index !== currentIndex) {
            updateTestimonial(index);
        }
    });
});



let exploreCloseTimer;

function toggleExploreMore() {
    const drawer = document.getElementById('exploreDrawer');
    const button = document.querySelector('.button-learn');
    const isOpen = !drawer.classList.contains('active');

    clearTimeout(exploreCloseTimer);

    if (isOpen) {
        drawer.style.display = 'flex';
        drawer.classList.add('active');
        
        // Sakriva navigaciju odmah na otvaranju (samo na desktopu)
        if (window.innerWidth > 768) {
            const mainNav = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
            if (mainNav) {
                mainNav.style.setProperty('display', 'none', 'important');
            }
        }
    } else {
        drawer.classList.remove('active');
        exploreCloseTimer = setTimeout(() => {
            drawer.style.display = 'none';
        }, 400);


        if (window.innerWidth > 768) {
            const mainNav = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
            if (mainNav) {
                setTimeout(() => {
                    mainNav.style.display = ''; 
                }, 350); 
            }
        }
    }

    document.body.classList.toggle('explore-open', isOpen);
    
    if (isOpen) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Explore More';
    }
}