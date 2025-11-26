// Vibe Coding Adventskalender 2024 - Main Application

document.addEventListener('DOMContentLoaded', () => {
    initSnowflakes();
    initCalendar();
    initModal();
    initMusic();
});

// =============================================
// DATE LOGIC - Türchen nur am richtigen Tag öffnen
// =============================================

function getCurrentAdventDay() {
    const now = new Date();
    const year = now.getFullYear();

    // Advent 2024: 1. Dezember bis 24. Dezember
    const adventStart = new Date(year, 11, 1); // Dezember = 11 (0-indexed)
    const adventEnd = new Date(year, 11, 24);

    if (now < adventStart) {
        return 0; // Noch nicht Advent
    }
    if (now > adventEnd) {
        return 24; // Nach dem 24. - alle Türchen offen
    }

    return now.getDate(); // Aktueller Tag im Dezember
}

function isDoorUnlocked(day) {
    const currentDay = getCurrentAdventDay();
    return day <= currentDay;
}

// =============================================
// SNOWFLAKES ANIMATION
// =============================================

function initSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '❋'];
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake(snowflakesContainer, snowflakeSymbols);
    }
}

function createSnowflake(container, symbols) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    // Random properties
    const startX = Math.random() * 100;
    const size = Math.random() * 1 + 0.5;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * -20;
    const opacity = Math.random() * 0.6 + 0.2;

    snowflake.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: -20px;
        font-size: ${size}rem;
        opacity: ${opacity};
        pointer-events: none;
        animation: snowfall ${duration}s linear ${delay}s infinite;
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        z-index: 1;
    `;

    container.appendChild(snowflake);
}

// Add snowfall keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes snowfall {
        0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) rotate(360deg) translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

// =============================================
// CALENDAR GRID
// =============================================

function initCalendar() {
    const grid = document.getElementById('calendarGrid');
    const openedDoors = getOpenedDoors();

    calendarData.forEach((door, index) => {
        const isUnlocked = isDoorUnlocked(door.day);
        const isOpened = openedDoors.includes(door.day) && isUnlocked;
        const doorElement = createDoorElement(door, isOpened, isUnlocked);
        grid.appendChild(doorElement);
    });
}

function createDoorElement(door, isOpened, isUnlocked) {
    const doorDiv = document.createElement('div');

    let classes = 'door';
    if (isOpened) classes += ' opened';
    if (!isUnlocked) classes += ' locked';

    doorDiv.className = classes;
    doorDiv.dataset.day = door.day;
    doorDiv.dataset.difficulty = door.difficulty;

    doorDiv.innerHTML = `
        <div class="door-front">
            <span class="door-number">${door.day}</span>
            <span class="door-icon">${door.icon}</span>
        </div>
    `;

    doorDiv.addEventListener('click', () => {
        if (isUnlocked) {
            openDoor(door);
        } else {
            showLockedMessage(door.day);
        }
    });

    return doorDiv;
}

function showLockedMessage(day) {
    // Kurze Animation für gesperrte Türchen
    const doorElement = document.querySelector(`.door[data-day="${day}"]`);
    doorElement.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        doorElement.style.animation = '';
    }, 500);
}

// Add shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// =============================================
// MODAL FUNCTIONALITY
// =============================================

function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    const copyBtn = document.getElementById('copyBtn');

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Copy prompt functionality
    copyBtn.addEventListener('click', copyPrompt);
}

function openDoor(door) {
    const overlay = document.getElementById('modalOverlay');
    const modalDay = document.getElementById('modalDay');
    const modalTitle = document.getElementById('modalTitle');
    const modalTask = document.getElementById('modalTask');
    const modalPrompt = document.getElementById('modalPrompt');
    const modalInstructions = document.getElementById('modalInstructions');
    const modalSkill = document.getElementById('modalSkill');
    const modalDifficulty = document.getElementById('modalDifficulty');

    // Fill content
    modalDay.textContent = `Türchen ${door.day}`;
    modalTitle.textContent = door.title;
    modalTask.textContent = door.task;
    modalPrompt.textContent = door.prompt;
    modalInstructions.textContent = door.instructions;
    modalSkill.textContent = door.skill;

    // Difficulty stars
    const stars = generateDifficultyStars(door.difficulty);
    modalDifficulty.innerHTML = `<span>Schwierigkeit:</span> ${stars}`;

    // Mark door as opened
    markDoorAsOpened(door.day);

    // Show modal
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Reset copy button
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.classList.remove('copied');
    copyBtn.querySelector('span').textContent = 'Kopieren';
}

function generateDifficultyStars(level) {
    let stars = '';
    for (let i = 1; i <= 3; i++) {
        if (i <= level) {
            stars += '<span class="difficulty-star">★</span>';
        } else {
            stars += '<span class="difficulty-star empty">★</span>';
        }
    }
    return stars;
}

async function copyPrompt() {
    const promptText = document.getElementById('modalPrompt').textContent;
    const copyBtn = document.getElementById('copyBtn');

    try {
        await navigator.clipboard.writeText(promptText);
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').textContent = 'Kopiert!';

        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Kopieren';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = promptText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').textContent = 'Kopiert!';

        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Kopieren';
        }, 2000);
    }
}

// =============================================
// MUSIC PLAYER
// =============================================

function initMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = musicToggle.querySelector('.music-icon');

    // Set volume
    bgMusic.volume = 0.3;

    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.textContent = '🔇';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(err => {
                console.log('Autoplay blocked:', err);
            });
            musicIcon.textContent = '🎵';
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
}

// =============================================
// LOCAL STORAGE - Track Opened Doors
// =============================================

function getOpenedDoors() {
    const stored = localStorage.getItem('vibecoding-advent-2025');
    return stored ? JSON.parse(stored) : [];
}

function markDoorAsOpened(day) {
    const opened = getOpenedDoors();
    if (!opened.includes(day)) {
        opened.push(day);
        localStorage.setItem('vibecoding-advent-2025', JSON.stringify(opened));

        // Update UI
        const doorElement = document.querySelector(`.door[data-day="${day}"]`);
        if (doorElement) {
            doorElement.classList.add('opened');
        }
    }
}

// =============================================
// HELPER: Reset Progress (for testing)
// =============================================

window.resetAdventProgress = function() {
    localStorage.removeItem('vibecoding-advent-2025');
    location.reload();
};

// Unlock all doors (for testing)
window.unlockAllDoors = function() {
    document.querySelectorAll('.door.locked').forEach(door => {
        door.classList.remove('locked');
    });
    console.log('🔓 Alle Türchen freigeschaltet (nur für Tests!)');
};

console.log('🎄 Vibe Coding Adventskalender 2025 loaded!');
console.log('📅 Aktueller Advent-Tag:', getCurrentAdventDay());
console.log('💡 Tipps:');
console.log('   - resetAdventProgress() - Fortschritt zurücksetzen');
console.log('   - unlockAllDoors() - Alle Türchen freischalten (Test)');
