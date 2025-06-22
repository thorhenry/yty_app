// Team data structure
const teamsData = {
    'cook': {
        name: 'Cooked FC',
        stadium: 'Kitchen Arena',
        manager: 'Mr. Grey',
        capacity: 45000,
        founded: 2023,
        titles: 0,
        colors: ['#1a237e', '#90caf9'],
        shortName: 'BMFC',
        logo: 'images/club-logos/omara.svg'
    },
    'imoizy': {
        name: 'Imoizy.T',
        stadium: 'IT',
        manager: 'Imoizy.T',
        capacity: 40000,
        founded: 2022,
        titles: 0,
        colors: ['#283593', '#64b5f6'],
        shortName: 'IFC',
        logo: 'images/club-logos/imoizy.svg'
    },
    'smiles': {
        name: 'Chutosmiles',
        stadium: 'Smiles Arena',
        manager: 'Chuto Smiles',
        capacity: 38000,
        founded: 2023,
        titles: 0,
        colors: ['#1565c0', '#4fc3f7'],
        shortName: 'CSFC',
        logo: 'images/club-logos/chutosmiles.svg'
    },
    'newton': {
        name: 'Newton FC',
        stadium: 'Emirates Stadium',
        manager: 'Isaac Newton',
        capacity: 42000,
        founded: 2024,
        titles: 0,
        colors: ['#0d47a1', '#29b6f6'],
        shortName: 'NFC',
        logo: 'images/club-logos/kingkai.svg'
    },
    'offer': {
        name: 'Offfer_Art',
        stadium: 'Art Park',
        manager: 'Offer Art',
        capacity: 36000,
        founded: 2024,
        titles: 0,
        colors: ['#1e88e5', '#81d4fa'],
        shortName: 'OAFC',
        logo: 'images/club-logos/offer-art.svg'
    },
    'ghost': {
        name: 'Ghost Da Killer',
        stadium: 'Winner Stadium',
        manager: 'Grayson',
        capacity: 39000,
        founded: 2024,
        titles: 0,
        colors: ['#1976d2', '#4dd0e1'],
        shortName: 'GFC',
        logo: 'images/club-logos/ghost.svg'
    },
    'thor': {
        name: 'Thorvisual',
        stadium: 'Thunder Ground',
        manager: 'Thor Henry',
        capacity: 41000,
        founded: 2025,
        titles: 0,
        colors: ['#2196f3', '#80deea'],
        shortName: 'TFC',
        logo: 'images/club-logos/thorvisual.svg'
    },
    'kenno': {
        name: 'Kenno',
        stadium: 'K-Arena',
        manager: 'Kenno',
        capacity: 37000,
        founded: 2024,
        titles: 0,
        colors: ['#42a5f5', '#4dd0e1'],
        shortName: 'KFC',
        logo: 'images/club-logos/urban.svg'
    }
};

// Utility functions for team data
const teamUtils = {
    // Get all teams
    getAllTeams: () => Object.values(teamsData),
    
    // Get team by ID
    getTeamById: (teamId) => teamsData[teamId],
    
    // Get team short name
    getTeamShortName: (teamId) => teamsData[teamId]?.shortName || teamId,
    
    // Get team colors
    getTeamColors: (teamId) => teamsData[teamId]?.colors || ['#1a237e', '#90caf9'],
    
    // Get team name
    getTeamName: (teamId) => teamsData[teamId]?.name || teamId,
    
    // Get all team IDs
    getAllTeamIds: () => Object.keys(teamsData),
    
    // Get team stats
    getTeamStats: (teamId) => {
        const team = teamsData[teamId];
        if (!team) return null;
        return {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        };
    }
};

// Page content management
const pages = {
    home: 'home',
    fixtures: 'fixtures',
    results: 'results',
    table: 'table',
    cups: 'cups',
    'champions-league': 'champions-league',
    teams: 'teams',
    search: 'search',
    friendlies: 'friendlies'
};

// Current active page
let currentPage = 'home';

// Match data structure
const matchData = {
    fixtures: [
        // Matchday 1 - June 16, 2025
        { id: 'f1', matchday: 1, date: '2025-06-16', time: '20:00', homeTeam: 'cook', awayTeam: 'newton', status: 'completed', score: { home: 5, away: 2 } },
        { id: 'f2', matchday: 1, date: '2025-06-16', time: '20:00', homeTeam: 'imoizy', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f3', matchday: 1, date: '2025-06-16', time: '20:00', homeTeam: 'smiles', awayTeam: 'thor', status: 'completed', score: { home: 0, away: 1 } },
        { id: 'f4', matchday: 1, date: '2025-06-16', time: '20:00', homeTeam: 'offer', awayTeam: 'ghost', status: 'completed', score: { home: 1, away: 6 } },
        // Matchday 2 - June 17, 2025
        { id: 'f5', matchday: 2, date: '2025-06-17', time: '20:00', homeTeam: 'kenno', awayTeam: 'cook', status: 'completed', score: { home: 4, away: 1 } },
        { id: 'f6', matchday: 2, date: '2025-06-17', time: '20:00', homeTeam: 'thor', awayTeam: 'newton', status: 'completed', score: { home: 2, away: 1 } },
        { id: 'f7', matchday: 2, date: '2025-06-17', time: '20:00', homeTeam: 'ghost', awayTeam: 'imoizy', status: 'completed', score: { home: 3, away: 1 } },
        { id: 'f8', matchday: 2, date: '2025-06-17', time: '20:00', homeTeam: 'offer', awayTeam: 'smiles', status: 'completed', score: { home: 1, away: 3 } },
        // Matchday 3 - June 18, 2025
        { id: 'f9', matchday: 3, date: '2025-06-18', time: '20:00', homeTeam: 'ghost', awayTeam: 'cook', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f10', matchday: 3, date: '2025-06-18', time: '20:00', homeTeam: 'offer', awayTeam: 'thor', status: 'completed', score: { home: 2, away: 4 } },
        { id: 'f11', matchday: 3, date: '2025-06-18', time: '20:00', homeTeam: 'smiles', awayTeam: 'kenno', status: 'completed', score: { home: 1, away: 3 } },
        { id: 'f12', matchday: 3, date: '2025-06-18', time: '20:00', homeTeam: 'imoizy', awayTeam: 'newton', status: 'completed', score: { home: 6, away: 4 } },
        // Matchday 4 - June 19, 2025
        { id: 'f13', matchday: 4, date: '2025-06-19', time: '20:00', homeTeam: 'cook', awayTeam: 'thor', status: 'completed', score: { home: 1, away: 3 } },
        { id: 'f14', matchday: 4, date: '2025-06-19', time: '20:00', homeTeam: 'kenno', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 2 } },
        { id: 'f15', matchday: 4, date: '2025-06-19', time: '20:00', homeTeam: 'newton', awayTeam: 'offer', status: 'completed', score: { home: 0, away: 1 } },
        { id: 'f16', matchday: 4, date: '2025-06-19', time: '20:00', homeTeam: 'imoizy', awayTeam: 'smiles', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 5 - June 20, 2025
        { id: 'f17', matchday: 5, date: '2025-06-20', time: '20:00', homeTeam: 'cook', awayTeam: 'offer', status: 'completed', score: { home: 7, away: 1 } },
        { id: 'f18', matchday: 5, date: '2025-06-20', time: '20:00', homeTeam: 'ghost', awayTeam: 'smiles', status: 'completed', score: { home: 4, away: 0 } },
        { id: 'f19', matchday: 5, date: '2025-06-20', time: '20:00', homeTeam: 'thor', awayTeam: 'imoizy', status: 'completed', score: { home: 4, away: 3 } },
        { id: 'f20', matchday: 5, date: '2025-06-20', time: '20:00', homeTeam: 'kenno', awayTeam: 'newton', status: 'completed', score: { home: 4, away: 4 } },
        // Matchday 6 - June 21, 2025
        { id: 'f21', matchday: 6, date: '2025-06-21', time: '20:00', homeTeam: 'smiles', awayTeam: 'cook', status: 'completed', score: { home: 3, away: 8 } },
        { id: 'f22', matchday: 6, date: '2025-06-21', time: '20:00', homeTeam: 'imoizy', awayTeam: 'offer', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'f23', matchday: 6, date: '2025-06-21', time: '20:00', homeTeam: 'newton', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 6 } },
        { id: 'f24', matchday: 6, date: '2025-06-21', time: '20:00', homeTeam: 'kenno', awayTeam: 'thor', status: 'completed', score: { home: 1, away: 2 } },
        // Matchday 7 - June 22, 2025
        { id: 'f25', matchday: 7, date: '2025-06-22', time: '20:00', homeTeam: 'cook', awayTeam: 'imoizy', status: 'completed', score: { home: 1, away: 0 } },
        { id: 'f26', matchday: 7, date: '2025-06-22', time: '20:00', homeTeam: 'smiles', awayTeam: 'newton', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f27', matchday: 7, date: '2025-06-22', time: '20:00', homeTeam: 'offer', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f28', matchday: 7, date: '2025-06-22', time: '20:00', homeTeam: 'ghost', awayTeam: 'thor', status: 'completed', score: { home: 1, away: 3 } },
        // Matchday 8 - June 23, 2025
        { id: 'f29', matchday: 8, date: '2025-06-23', time: '20:00', homeTeam: 'thor', awayTeam: 'cook', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f30', matchday: 8, date: '2025-06-23', time: '20:00', homeTeam: 'ghost', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f31', matchday: 8, date: '2025-06-23', time: '20:00', homeTeam: 'offer', awayTeam: 'newton', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f32', matchday: 8, date: '2025-06-23', time: '20:00', homeTeam: 'smiles', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 9 - June 24, 2025
        { id: 'f33', matchday: 9, date: '2025-06-24', time: '20:00', homeTeam: 'cook', awayTeam: 'smiles', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f34', matchday: 9, date: '2025-06-24', time: '20:00', homeTeam: 'offer', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f35', matchday: 9, date: '2025-06-24', time: '20:00', homeTeam: 'ghost', awayTeam: 'newton', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f36', matchday: 9, date: '2025-06-24', time: '20:00', homeTeam: 'thor', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 10 - June 25, 2025
        { id: 'f37', matchday: 10, date: '2025-06-25', time: '20:00', homeTeam: 'newton', awayTeam: 'cook', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f38', matchday: 10, date: '2025-06-25', time: '20:00', homeTeam: 'kenno', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f39', matchday: 10, date: '2025-06-25', time: '20:00', homeTeam: 'thor', awayTeam: 'smiles', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f40', matchday: 10, date: '2025-06-25', time: '20:00', homeTeam: 'ghost', awayTeam: 'offer', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 11 - June 26, 2025
        { id: 'f41', matchday: 11, date: '2025-06-26', time: '20:00', homeTeam: 'imoizy', awayTeam: 'cook', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f42', matchday: 11, date: '2025-06-26', time: '20:00', homeTeam: 'newton', awayTeam: 'smiles', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f43', matchday: 11, date: '2025-06-26', time: '20:00', homeTeam: 'kenno', awayTeam: 'offer', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f44', matchday: 11, date: '2025-06-26', time: '20:00', homeTeam: 'thor', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 12 - June 27, 2025
        { id: 'f45', matchday: 12, date: '2025-06-27', time: '20:00', homeTeam: 'cook', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f46', matchday: 12, date: '2025-06-27', time: '20:00', homeTeam: 'newton', awayTeam: 'thor', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f47', matchday: 12, date: '2025-06-27', time: '20:00', homeTeam: 'imoizy', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f48', matchday: 12, date: '2025-06-27', time: '20:00', homeTeam: 'smiles', awayTeam: 'offer', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 13 - June 28, 2025
        { id: 'f49', matchday: 13, date: '2025-06-28', time: '20:00', homeTeam: 'offer', awayTeam: 'cook', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f50', matchday: 13, date: '2025-06-28', time: '20:00', homeTeam: 'smiles', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f51', matchday: 13, date: '2025-06-28', time: '20:00', homeTeam: 'imoizy', awayTeam: 'thor', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f52', matchday: 13, date: '2025-06-28', time: '20:00', homeTeam: 'newton', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 14 - June 29, 2025
        { id: 'f53', matchday: 14, date: '2025-06-29', time: '20:00', homeTeam: 'cook', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f54', matchday: 14, date: '2025-06-29', time: '20:00', homeTeam: 'thor', awayTeam: 'offer', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f55', matchday: 14, date: '2025-06-29', time: '20:00', homeTeam: 'kenno', awayTeam: 'smiles', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'f56', matchday: 14, date: '2025-06-29', time: '20:00', homeTeam: 'newton', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } }
    ]
};

// Match utility functions
const matchUtils = {
    // Get all fixtures
    getAllFixtures: () => matchData.fixtures,
    // Get all completed results
    getAllResults: () => matchData.fixtures.filter(match => match.status === 'completed'),
    // Get fixtures by matchday
    getFixturesByMatchday: (matchday) => matchData.fixtures.filter(match => match.matchday === matchday),
    // Get results by matchday
    getResultsByMatchday: (matchday) => matchData.fixtures.filter(match => match.matchday === matchday && match.status === 'completed'),
    // Format match date
    formatMatchDate: (date, time) => {
        const matchDate = new Date(`${date}T${time}`);
        return matchDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    },
    // Get team name
    getTeamName: (teamId) => teamUtils.getTeamName(teamId),
    // Get team short name
    getTeamShortName: (teamId) => teamUtils.getTeamShortName(teamId),
    // Get venue from home team
    getVenue: (homeTeamId) => teamUtils.getTeamById(homeTeamId).stadium
};

// Global news array for use in both home page and search
const news = [
    {
        title: 'Season Kickoff',
        content: 'The new season is about to begin with exciting matches lined up.',
        date: '2025-05-11'
    },
    {
        title: 'Season Fixtures Confirmed',
        content: 'The Season fixtures and Dates have been confirmed, First games will be played on 12 May 2025',
        date: '2025-05-10'
    },
    {
        title: 'Offer_Art FC Unveils New Stadium',
        content: 'Offer_Art FC has officially opened the new Art Arena, a state-of-the-art facility for fans and players.',
        date: '2025-05-10'
    },
    {
        title: 'imoizy FC Signs Star Striker',
        content: 'imoizy FC has completed the signing of a top striker to boost their attacking options this season.',
        date: '2025-05-03'
    },
    {
        title: 'Giveaway FC Manager Wins Award',
        content: 'Giveaway FC manager smiles Sam has been named Manager of the Month after a string of impressive results.',
        date: '2025-05-05'
    },
    {
        title: 'offer Da Killer Youth Academy Success',
        content: 'offer FC youth academy graduates have made their debut in the first team, impressing fans and coaches alike.',
        date: '2024-05-07'
    }
];

// Function to get page content
function getPageContent(page) {
    switch(page) {
        case 'home': {
            // Dynamic Latest News
            // Use global news array
            // ... existing code ...
            // Upcoming Matches (next 3 scheduled from all competitions)
            function getUpcomingMatches() {
                // League
                const leagueUpcoming = matchData.fixtures.filter(f => f.status === 'scheduled');
                // YTY Cup
                const ytyUpcoming = ytyCupFixtures.filter(f => f.status === 'scheduled');
                // Super Cup
                const superUpcoming = superCupFixture.status === 'scheduled' ? [superCupFixture] : [];
                // Champions League
                const clUpcoming = typeof championsLeagueFixtures !== 'undefined' ? championsLeagueFixtures.filter(f => f.status === 'scheduled') : [];
                // Combine and sort by date
                const all = [
                    ...leagueUpcoming.map(f => ({...f, competition: 'League'})),
                    ...ytyUpcoming.map(f => ({...f, competition: 'YTY Cup'})),
                    ...superUpcoming.map(f => ({...f, competition: 'Super Cup'})),
                    ...clUpcoming.map(f => ({...f, competition: 'Champions League'})),
                ];
                return all.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
            }
            const upcomingMatches = getUpcomingMatches();
            // Mini League Table (top 4 and bottom 2)
            const leagueTable = computeLeagueTable();
            const top4 = leagueTable.slice(0, 4);
            const bottom2 = leagueTable.slice(-2);
            // Show only the 3 most recent news items on the home page, sorted by date descending
            const homeNews = news.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
            return `
                <section class="home-section" style="padding:2em 0;">
                    <div class="home-welcome" style="text-align:center;margin-bottom:2.5em;">
                        <img src="images/logo.svg" alt="Elite League Logo" style="width:70px;height:70px;margin-bottom:0.7em;">
                        <h2 style="font-size:2.1em;font-weight:800;letter-spacing:0.01em;color:var(--primary-color);margin-bottom:0.2em;">Welcome to Elite League</h2>
                        <p style="color:var(--text-color);font-size:1.13em;max-width:500px;margin:0 auto;">Your hub for all things Elite League: fixtures, results, tables, cups, and more. Stay updated and explore the competition!</p>
                    </div>
                    <div class="home-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2.5em;align-items:start;max-width:1800px;margin:0 auto;">
                        <div class="home-news" style="background:var(--card-bg);border-radius:14px;box-shadow:var(--shadow);padding:1.5em;max-width:500px;margin:0 auto;width:100%;">
                            <h3 style="color:var(--primary-color);font-size:1.18em;font-weight:700;margin-bottom:1em;">Latest News</h3>
                            <div class="news-list">
                                ${homeNews.map(n => `
                                    <div class="news-card" style="margin-bottom:1.1em;">
                                        <h4 style="margin:0 0 0.2em 0;font-size:1.08em;color:var(--accent-color);font-weight:700;">${n.title}</h4>
                                        <p style="margin:0 0 0.2em 0;color:var(--text-color);font-size:0.97em;">${n.content}</p>
                                        <span style="font-size:0.92em;color:var(--secondary-text);">${n.date}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="home-fixtures" style="background:var(--card-bg);border-radius:14px;box-shadow:var(--shadow);padding:1.5em;max-width:500px;margin:0 auto;width:100%;">
                            <h3 style="color:var(--primary-color);font-size:1.18em;font-weight:700;margin-bottom:1em;">Upcoming Matches</h3>
                            <div class="fixtures-list">
                                ${upcomingMatches.length === 0 ? `<div style='color:var(--text-color);font-size:1.05em;'>No upcoming matches</div>` :
                                    upcomingMatches.map(match => `
                                        <div class="fixture-card" style="margin-bottom:1em;background:var(--card-bg);border-radius:10px;padding:1em;">
                                            <div class="match-details" style="display:flex;flex-direction:column;gap:0.5em;">
                                                <div class="team home" style="display:flex;align-items:center;gap:0.5em;">
                                                    <img src="${teamsData[match.homeTeam]?.logo || 'images/club-logos/tbd.svg'}" alt="${teamsData[match.homeTeam]?.name || 'TBD'}" class="team-logo-small" style="width:24px;height:24px;border-radius:50%;background:#fff;">
                                                    <span style="color:var(--text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${teamsData[match.homeTeam]?.name || 'TBD'}</span>
                                                </div>
                                                <div class="vs" style="color:var(--secondary-text);font-size:0.9em;text-align:center;">vs</div>
                                                <div class="team away" style="display:flex;align-items:center;gap:0.5em;">
                                                    <img src="${teamsData[match.awayTeam]?.logo || 'images/club-logos/tbd.svg'}" alt="${teamsData[match.awayTeam]?.name || 'TBD'}" class="team-logo-small" style="width:24px;height:24px;border-radius:50%;background:#fff;">
                                                    <span style="color:var(--text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${teamsData[match.awayTeam]?.name || 'TBD'}</span>
                                                </div>
                                            </div>
                                            <div class="match-info" style="display:flex;align-items:center;justify-content:space-between;font-size:0.9em;color:var(--secondary-text);margin-top:0.5em;">
                                                <div class="date">${match.date} ${match.time || ''}</div>
                                                <div class="venue" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${teamsData[match.homeTeam]?.stadium || 'TBD'}</div>
                                            </div>
                                        </div>
                                    `).join('')
                                }
                            </div>
                        </div>
                        <div class="home-table" style="background:var(--card-bg);border-radius:14px;box-shadow:var(--shadow);padding:1.5em;max-width:350px;margin:0 auto;width:100%;">
                            <h3 style="color:var(--primary-color);font-size:1.18em;font-weight:700;margin-bottom:1em;">League Table (Top 4 & Bottom 2)</h3>
                            <div style="width:100%;background:none;box-shadow:none;overflow-x:auto;">
                                <table class="league-table" style="margin-bottom:1em;width:100%;border-radius:14px;overflow:hidden;min-width:200px;">
                                    <thead>
                                        <tr>
                                            <th style="color:var(--text-color);padding:0.8em 0.5em;text-align:left;width:15%;">Pos</th>
                                            <th style="color:var(--text-color);padding:0.8em 0.5em;text-align:left;width:60%;">Team</th>
                                            <th style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;width:12.5%;">P</th>
                                            <th style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;width:12.5%;">Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${top4.map((team, idx) => `
                                            <tr class="cl-qualifier">
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;">${idx + 1}</td>
                                                <td style="display:flex;align-items:center;gap:0.5em;color:var(--text-color);padding:0.8em 0.5em;">
                                                    <img src="${teamsData[team.teamId].logo}" alt="${team.name} logo" style="width:20px;height:20px;border-radius:50%;background:#fff;">
                                                    <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px;">${team.name}</span>
                                                </td>
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;">${team.played}</td>
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;">${team.points}</td>
                                            </tr>
                                        `).join('')}
                                        ${bottom2.map((team, idx) => `
                                            <tr class="relegated">
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;">${leagueTable.length - 2 + idx + 1}</td>
                                                <td style="display:flex;align-items:center;gap:0.5em;color:var(--text-color);padding:0.8em 0.5em;">
                                                    <img src="${teamsData[team.teamId].logo}" alt="${team.name} logo" style="width:20px;height:20px;border-radius:50%;background:#fff;">
                                                    <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px;">${team.name}</span>
                                                </td>
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;">${team.played}</td>
                                                <td style="color:var(--text-color);padding:0.8em 0.5em;text-align:center;">${team.points}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                            <a href="#table" class="view-full-table-btn" style="display:block;text-align:center;background:var(--primary-color);color:white;text-decoration:none;padding:0.8em;border-radius:8px;font-weight:500;margin-top:1em;transition:all 0.3s ease;">
                                <i class="fas fa-table" style="margin-right:0.5em;"></i>
                                View Full Table
                            </a>
                        </div>
                        <div class="home-links" style="background:var(--card-bg);border-radius:14px;box-shadow:var(--shadow);padding:1.5em;max-width:500px;margin:0 auto;width:100%;display:flex;flex-direction:column;gap:1em;align-items:center;justify-content:center;">
                            <h3 style="color:var(--primary-color);font-size:1.18em;font-weight:700;margin-bottom:0.5em;">Quick Links</h3>
                            <div class="links-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:1em;width:100%;">
                                <a href="#fixtures" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-calendar-alt" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Fixtures</span>
                                </a>
                                <a href="#results" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-futbol" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Results</span>
                                </a>
                                <a href="#table" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-table" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Table</span>
                                </a>
                                <a href="#teams" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-users" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Teams</span>
                                </a>
                                <a href="#cups" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-trophy" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">YTY Cup</span>
                                </a>
                                <a href="#friendlies" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-handshake" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Friendlies</span>
                                </a>
                                <a href="#hall-of-fame" class="link-card" style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:10px;padding:1em;text-align:center;text-decoration:none;color:var(--text-color);transition:all 0.3s ease;">
                                    <i class="fas fa-medal" style="font-size:1.5em;color:var(--accent-color);margin-bottom:0.5em;"></i>
                                    <span style="display:block;font-weight:600;">Hall of Fame</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        case 'fixtures': {
            const matchdays = Array.from(new Set(matchData.fixtures.map(match => match.matchday))).sort((a, b) => a - b);
            const teams = Object.values(teamsData).map(t => t.name).sort();
            return `
                <section class="fixtures-section">
                    <h2>Fixtures</h2>
                    <div class="matchday-selector-bar">
                        <label for="fixturesMatchdaySelect">Matchday:</label>
                        <select id="fixturesMatchdaySelect">
                            <option value="all">All Matchdays</option>
                            ${matchdays.map(md => `<option value="${md}">Matchday ${md}</option>`).join('')}
                        </select>
                        <label for="fixturesTeamSelect">Team:</label>
                        <select id="fixturesTeamSelect">
                            <option value="all">All Teams</option>
                            ${teams.map(name => `<option value="${name}">${name}</option>`).join('')}
                        </select>
                        <label for="fixturesStatusSelect">Status:</label>
                        <select id="fixturesStatusSelect">
                            <option value="all">All</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div class="fixtures-container">
                        <div class="no-fixtures-message" style="display:none;text-align:center;color:var(--secondary-text);padding:2em 0;font-size:1.1em;">No fixtures found for the selected filters.</div>
                        ${matchdays.map(matchday => `
                            <div class="fixture-week" data-matchday="${matchday}">
                                <h3>Matchday ${matchday}</h3>
                                <div class="fixture-list">
                                    ${matchUtils.getFixturesByMatchday(matchday).map(match => {
                                        return `
                                            <div class="fixture-card ${match.status === 'completed' ? 'completed' : ''}"
                                                 data-home="${teamUtils.getTeamName(match.homeTeam)}"
                                                 data-away="${teamUtils.getTeamName(match.awayTeam)}"
                                                 data-status="${match.status}">
                                                <div class="match-details">
                                                    <div class="team home">
                                                        <img src="${teamUtils.getTeamById(match.homeTeam).logo}" 
                                                             alt="${matchUtils.getTeamName(match.homeTeam)}" 
                                                             class="team-logo-small">
                                                        <span>${matchUtils.getTeamName(match.homeTeam)}</span>
                                                    </div>
                                                    ${match.status === 'completed' && match.score ? 
                                                        `<div class="score">${match.score.home} - ${match.score.away}</div>` :
                                                        `<div class="vs">vs</div>`
                                                    }
                                                    <div class="team away">
                                                        <img src="${teamUtils.getTeamById(match.awayTeam).logo}" 
                                                             alt="${matchUtils.getTeamName(match.awayTeam)}" 
                                                             class="team-logo-small">
                                                        <span>${matchUtils.getTeamName(match.awayTeam)}</span>
                                                    </div>

                                                </div>
                                                <div class="match-info" style="display:flex;align-items:center;justify-content:space-between;font-size:0.9em;color:var(--secondary-text);margin-top:0.5em;">
                                                    <div class="date">${match.date} ${match.time || ''}</div>
                                                    <div class="venue" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${teamsData[match.homeTeam]?.stadium || 'TBD'}</div>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        case 'results': {
            const matchdays = Array.from(new Set(matchData.fixtures.filter(match => match.status === 'completed').map(match => match.matchday))).sort((a, b) => a - b);
            const teams = Object.values(teamsData).map(t => t.name).sort();
            return `
                <section class="results-section">
                    <h2>Match Results</h2>
                    <div class="matchday-selector-bar">
                        <label for="resultsMatchdaySelect">Matchday:</label>
                        <select id="resultsMatchdaySelect">
                            <option value="all">All Matchdays</option>
                            ${matchdays.map(md => `<option value="${md}">Matchday ${md}</option>`).join('')}
                        </select>
                        <label for="resultsTeamSelect">Team:</label>
                        <select id="resultsTeamSelect">
                            <option value="all">All Teams</option>
                            ${teams.map(name => `<option value="${name}">${name}</option>`).join('')}
                        </select>
                        <label for="resultsStatusSelect">Status:</label>
                        <select id="resultsStatusSelect">
                            <option value="all">All</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div class="results-container">
                        <div class="no-results-message" style="display:none;text-align:center;color:var(--secondary-text);padding:2em 0;font-size:1.1em;">No results found for the selected filters.</div>
                        ${matchdays.map(matchday => {
                            const matches = matchUtils.getResultsByMatchday(matchday);
                            if (matches.length === 0) {
                                return `
                                    <div class="result-week" data-matchday="${matchday}">
                                        <h3>Matchday ${matchday}</h3>
                                        <div class="result-list">
                                            <div class="no-results-yet" style="text-align:center;color:var(--secondary-text);padding:2em 0;font-size:1.1em;">
                                                No results yet - matches are scheduled
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }
                            return `
                                <div class="result-week" data-matchday="${matchday}">
                                    <h3>Matchday ${matchday}</h3>
                                    <div class="result-list">
                                        ${matches.map(match => `
                                        <div class="result-card"
                                             data-home="${teamUtils.getTeamName(match.homeTeam)}"
                                             data-away="${teamUtils.getTeamName(match.awayTeam)}"
                                             data-status="${match.status}">
                                            <div class="match-details">
                                                <div class="team home">
                                                    <img src="${teamUtils.getTeamById(match.homeTeam).logo}" 
                                                         alt="${matchUtils.getTeamName(match.homeTeam)}" 
                                                         class="team-logo-small">
                                                    <span>${matchUtils.getTeamName(match.homeTeam)}</span>
                                                </div>
                                                <div class="score">${match.score.home} - ${match.score.away}</div>
                                                <div class="team away">
                                                    <img src="${teamUtils.getTeamById(match.awayTeam).logo}" 
                                                         alt="${matchUtils.getTeamName(match.awayTeam)}" 
                                                         class="team-logo-small">
                                                    <span>${matchUtils.getTeamName(match.awayTeam)}</span>
                                                </div>
                                            </div>
                                            <div class="match-info">
                                                <div class="date">${matchUtils.formatMatchDate(match.date, match.time)}</div>
                                                <div class="venue">${matchUtils.getVenue(match.homeTeam)}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>
            `;
        }

        case 'table': {
            // Find all unique completed matchdays
            const completedMatchdays = matchData.fixtures.filter(m => m.status === 'completed').map(m => m.matchday);
            const uniqueMatchdays = Array.from(new Set(completedMatchdays)).sort((a, b) => a - b);
            const lastMatchday = uniqueMatchdays[uniqueMatchdays.length - 1];

            // Compute league table for the latest matchday
            const leagueTable = computeLeagueTable(lastMatchday);
            const formSymbol = { w: '✔', d: '–', l: '✗' };

            // For each team, find their last two played matchdays
            const teamLastTwoMatchdays = {};
            Object.keys(teamsData).forEach(teamId => {
                const played = matchData.fixtures
                    .filter(m => m.status === 'completed' && (m.homeTeam === teamId || m.awayTeam === teamId))
                    .map(m => m.matchday)
                    .sort((a, b) => b - a); // Changed to descending order to get most recent first
                const last = played[0];      // Get first item (most recent)
                const prev = played[1];      // Get second item (previous)
                teamLastTwoMatchdays[teamId] = { last, prev };
            });

            // For each team, get their position after their last and previous matches
            const teamMoveMap = {};
            Object.keys(teamsData).forEach(teamId => {
                const { last, prev } = teamLastTwoMatchdays[teamId];
                let lastPos = null, prevPos = null;
                
                if (last !== undefined) {
                    const table = computeLeagueTable(last);
                    lastPos = table.findIndex(t => t.teamId === teamId) + 1;
                }
                if (prev !== undefined) {
                    const table = computeLeagueTable(prev);
                    prevPos = table.findIndex(t => t.teamId === teamId) + 1;
                }
                
                let moveAttr = 'same';
                if (prevPos !== null && lastPos !== null) {
                    if (lastPos > prevPos) moveAttr = 'down';      // Changed comparison logic
                    else if (lastPos < prevPos) moveAttr = 'up';   // Changed comparison logic
                }
                teamMoveMap[teamId] = moveAttr;
            });

            return `
                <section class="table-section">
                    <h2>League Table</h2>
                    <div class="table-container">
                        <table class="league-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                    <th>Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${leagueTable.map((team, idx, arr) => {
                                    const moveAttr = teamMoveMap[team.teamId] || 'same';
                                    return `
                                        <tr class="${idx < 4 ? 'cl-qualifier' : ''} ${idx >= arr.length - 2 ? 'relegated' : ''}">
                                            <td>${idx + 1}</td>
                                            <td class="table-team-cell">
                                                <span class="move-indicator" data-move="${moveAttr}"></span>
                                                <img src="${teamsData[team.teamId].logo}" alt="${team.name} logo" class="table-team-badge">
                                                <span class="table-team-name">${team.name}</span>
                                            </td>
                                            <td>${team.played}</td>
                                            <td>${team.won}</td>
                                            <td>${team.drawn}</td>
                                            <td>${team.lost}</td>
                                            <td>${team.goalsFor}</td>
                                            <td>${team.goalsAgainst}</td>
                                            <td>${team.goalDiff > 0 ? '+' : ''}${team.goalDiff}</td>
                                            <td>${team.points}</td>
                                            <td>
                                                <div class="form-badges">
                                                    ${team.form.map((r, i, arr) => `<span class="form-badge ${r.toLowerCase()}${i === arr.length - 1 ? ' latest-form' : ''}">${formSymbol[r.toLowerCase()] || ''}</span>`).join('')}
                                                </div>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="table-legend-simple">
                        Champions League qualification <span class="legend-color cl"></span> &nbsp;&nbsp;
                        Relegation zone <span class="legend-color rel"></span>
                    </div>
                </section>
            `;
        }

        case 'cups': {
            function renderFixtureCardYTY(fixture) {
                const tbdLogo = 'images/club-logos/tbd.svg';
                function getTeam(teamId) {
                    if (teamId === 'tbd') return { name: 'TBD', logo: tbdLogo };
                    return { name: teamsData[teamId]?.name || teamId, logo: teamsData[teamId]?.logo || tbdLogo };
                }
                const home = getTeam(fixture.homeTeam);
                const away = getTeam(fixture.awayTeam);
                const status = fixture.status;
                const score = fixture.score;
                const pens = fixture.penalties;
                let scoreDisplay = '';
                if (status === 'completed' && score) {
                    scoreDisplay = `${score.home} - ${score.away}`;
                    if (pens && (pens.home > 0 || pens.away > 0)) {
                        scoreDisplay += ` <span class='pen-label'>(pens ${pens.home}-${pens.away})</span>`;
                    }
                }
                return `
                    <div class="fixture-card${status === 'completed' ? ' completed' : ''}">
                        <div class="match-details">
                            <div class="team home">
                                <img src="${home.logo}" alt="${home.name}" class="team-logo-small">
                                <span>${home.name}</span>
                            </div>
                            ${status === 'completed' && score ?
                                `<div class="score">${scoreDisplay}</div>` :
                                `<div class="vs">vs</div>`
                            }
                            <div class="team away">
                                <img src="${away.logo}" alt="${away.name}" class="team-logo-small">
                                <span>${away.name}</span>
                            </div>
                        </div>
                        <div class="match-info">
                            <div class="date">${fixture.date} ${fixture.time || ''}</div>
                            <div class="venue">${fixture.homeTeam !== 'tbd' && teamsData[fixture.homeTeam] ? teamsData[fixture.homeTeam].stadium : 'TBD'}</div>
                            <div class="match-status ${status}">${fixture.round}</div>
                        </div>
                    </div>
                `;
            }
            // Group fixtures by round
            const rounds = [
                { label: 'Quarter Finals', key: 'Quarter Final' },
                { label: 'Semi Finals - 1st Leg', key: 'Semi Final - 1st Leg' },
                { label: 'Semi Finals - 2nd Leg', key: 'Semi Final - 2nd Leg' },
                { label: 'Final', key: 'Final' }
            ];
            return `
                <section class="cups-section">
                    <h2>Cups & Competitions</h2>
                    <div class="cups-container">
                        <div class="yty-cup-section">
                            <h3 style="display:flex;align-items:center;justify-content:center;gap:0.7em;font-size:1.5rem;font-weight:700;color:var(--text-color);margin-bottom:0.5em;text-shadow:0 2px 12px rgba(255,20,147,0.10);background:none;border-radius:0;padding:0;">
                                YTY Cup
                            </h3>
                            <div class="cup-info">
                                <div class="cup-status">Bracket</div>
                                ${rounds.map(round => {
                                    const fixtures = ytyCupFixtures.filter(f => f.round === round.key);
                                    if (!fixtures.length) return '';
                                    return `
                                        <div class="cup-round">
                                            <h4>${round.label}</h4>
                                            ${fixtures.map(f => renderFixtureCardYTY(f)).join('')}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        <div class="super-cup-section">
                            <h3>Super Cup</h3>
                            <div class="super-cup-super" style="display:flex;flex-direction:column;align-items:center;justify-content:center;margin:2.5rem 0 0 0;">
                                <div style="font-size:1.5rem;font-weight:700;color:var(--text-color);letter-spacing:0.04em;text-shadow:0 2px 12px rgba(255,20,147,0.10);margin-bottom:0.7rem;">
                                    Super Cup Final
                                </div>
                                <div style="display:flex;align-items:center;gap:2.5rem;margin:1.5rem 0;">
                                    <div style="display:flex;flex-direction:column;align-items:center;">
                                        <img src="${superCupFixture.homeTeam === 'tbd' ? 'images/club-logos/tbd.svg' : teamsData[superCupFixture.homeTeam]?.logo}" alt="Home Team" style="width:90px;height:90px;border-radius:50%;box-shadow:0 2px 16px rgba(0,0,0,0.12);background:#fff;">
                                        <span style="margin-top:0.7em;font-weight:700;font-size:1.15em;color:var(--primary-color);text-align:center;max-width:120px;">${superCupFixture.homeTeam === 'tbd' ? 'TBD' : teamsData[superCupFixture.homeTeam]?.name}</span>
                                    </div>
                                    <div style="font-size:2.5rem;font-weight:800;color:var(--secondary-color);">vs</div>
                                    <div style="display:flex;flex-direction:column;align-items:center;">
                                        <img src="${superCupFixture.awayTeam === 'tbd' ? 'images/club-logos/tbd.svg' : teamsData[superCupFixture.awayTeam]?.logo}" alt="Away Team" style="width:90px;height:90px;border-radius:50%;box-shadow:0 2px 16px rgba(0,0,0,0.12);background:#fff;">
                                        <span style="margin-top:0.7em;font-weight:700;font-size:1.15em;color:var(--primary-color);text-align:center;max-width:120px;">${superCupFixture.awayTeam === 'tbd' ? 'TBD' : teamsData[superCupFixture.awayTeam]?.name}</span>
                                    </div>
                                </div>
                                <div style="font-size:1.15em;color:var(--secondary-text);margin-bottom:0.5em;">${superCupFixture.date} ${superCupFixture.time}</div>
                                <div style="font-size:1.05em;color:var(--secondary-color);font-weight:500;margin-bottom:0.5em;">League Winner vs YTY Cup Winner</div>
                                <div style="font-size:1.05em;color:var(--secondary-text);margin-bottom:0.5em;">
                                    Venue: ${superCupFixture.homeTeam !== 'tbd' && teamsData[superCupFixture.homeTeam] ? teamsData[superCupFixture.homeTeam].stadium : 'TBD'}
                                </div>
                                <div style="margin-top:1.2em;">
                                    ${superCupFixture.status === 'completed' && superCupFixture.score ?
                                        `<span style="font-size:1.7em;font-weight:800;color:var(--primary-color);">${superCupFixture.score.home} - ${superCupFixture.score.away}</span>` :
                                        `<span style="font-size:1.3em;color:var(--secondary-text);">Scheduled</span>`
                                    }
                                    ${superCupFixture.penalties && (superCupFixture.penalties.home > 0 || superCupFixture.penalties.away > 0) ?
                                        `<span style="margin-left:1em;font-size:1.1em;color:var(--accent-color);">(pens ${superCupFixture.penalties.home}-${superCupFixture.penalties.away})</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        case 'champions-league': {
            // Get Champions League fixtures
            const championsLeagueFixtures = getChampionsLeagueFixtures();
            // Get unique team IDs from the fixtures
            const clTeamIds = Array.from(new Set(championsLeagueFixtures.flatMap(f => [f.homeTeam, f.awayTeam])));
            // Compute dynamic group table from completed fixtures
            function computeCLGroupTable() {
                const table = {};
                clTeamIds.forEach(teamId => {
                    table[teamId] = {
                        teamId,
                        name: teamsData[teamId]?.name || teamId,
                        played: 0,
                        won: 0,
                        drawn: 0,
                        lost: 0,
                        goalsFor: 0,
                        goalsAgainst: 0,
                        points: 0
                    };
                });
                championsLeagueFixtures.forEach(fix => {
                    if (fix.status === 'completed' && fix.score) {
                        const home = table[fix.homeTeam];
                        const away = table[fix.awayTeam];
                        home.played++;
                        away.played++;
                        home.goalsFor += fix.score.home;
                        home.goalsAgainst += fix.score.away;
                        away.goalsFor += fix.score.away;
                        away.goalsAgainst += fix.score.home;
                        if (fix.score.home > fix.score.away) {
                            home.won++;
                            home.points += 3;
                            away.lost++;
                        } else if (fix.score.home < fix.score.away) {
                            away.won++;
                            away.points += 3;
                            home.lost++;
                        } else {
                            home.drawn++;
                            away.drawn++;
                            home.points++;
                            away.points++;
                        }
                    }
                });
                // Sort by points, then goal difference, then goals for
                return Object.values(table).sort((a, b) => {
                    if (b.points !== a.points) return b.points - a.points;
                    const gdA = a.goalsFor - a.goalsAgainst;
                    const gdB = b.goalsFor - b.goalsAgainst;
                    if (gdB !== gdA) return gdB - gdA;
                    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
                    return a.name.localeCompare(b.name);
                });
            }
            const clGroupTable = computeCLGroupTable();
            // Group CL fixtures by matchday
            const clMatchdays = Array.from(new Set(championsLeagueFixtures.map(f => f.matchday))).sort((a, b) => a - b);
            return `
                <section class="champions-league-section">
                    <h2 style="font-size:1.5rem;font-weight:700;color:var(--text-color);text-align:center;margin-bottom:1.5rem;">Champions League</h2>
                    <div class="cl-group-container" style="max-width:700px;margin:0 auto;">
                        <h3 style="font-size:1.2rem;font-weight:700;color:var(--accent-color);margin-bottom:0.7em;text-align:center;">Group Stage</h3>
                        <div class="cl-table-scroll" style="width:100%;overflow-x:auto;margin:0 -1rem;padding:0 1rem;">
                            <table class="league-table" style="margin-bottom:2em;min-width:600px;">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>GF</th>
                                        <th>GA</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${clGroupTable.map((row, idx) => `
                                        <tr class="${idx < 2 ? 'cl-qualifier' : ''}">
                                            <td>${idx + 1}</td>
                                            <td style="display:flex;align-items:center;gap:0.5em;"><img src="${teamsData[row.teamId].logo}" alt="${row.name} logo" style="width:28px;height:28px;border-radius:50%;background:#fff;">${row.name}</td>
                                            <td>${row.played}</td>
                                            <td>${row.won}</td>
                                            <td>${row.drawn}</td>
                                            <td>${row.lost}</td>
                                            <td>${row.goalsFor}</td>
                                            <td>${row.goalsAgainst}</td>
                                            <td>${row.points}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                        <div class="table-legend-simple">
                            Champions League Final qualification <span class="legend-color cl"></span>
                        </div>
                        <h3 style="font-size:1.2rem;font-weight:700;color:var(--accent-color);margin-bottom:0.7em;text-align:center;">Fixtures</h3>
                        <div class="cl-fixtures-container">
                            ${clMatchdays.map(md => {
                                const matches = championsLeagueFixtures.filter(f => f.matchday === md);
                                return `
                                    <div class="fixture-week" data-matchday="${md}">
                                        <h3>Matchday ${md}</h3>
                                        <div class="fixture-list">
                                            ${matches.map(fix => `
                                                <div class="fixture-card ${fix.status === 'completed' ? 'completed' : ''}">
                                                    <div class="match-details">
                                                        <div class="team home">
                                                            <img src="${teamsData[fix.homeTeam]?.logo}" alt="${teamsData[fix.homeTeam]?.name}" class="team-logo-small">
                                                            <span>${teamsData[fix.homeTeam]?.name}</span>
                                                        </div>
                                                        ${fix.status === 'completed' && fix.score ?
                                                            `<div class='score'>${fix.score.home} - ${fix.score.away}</div>` :
                                                            `<div class='vs'>vs</div>`
                                                        }
                                                        <div class="team away">
                                                            <img src="${teamsData[fix.awayTeam]?.logo}" alt="${teamsData[fix.awayTeam]?.name}" class="team-logo-small">
                                                            <span>${teamsData[fix.awayTeam]?.name}</span>
                                                        </div>
                                                    </div>
                                                    <div class="match-info">
                                                        <div class="date">${fix.date} ${fix.time}</div>
                                                        <div class="venue">${teamsData[fix.homeTeam]?.stadium || 'TBD'}</div>
                                                        <div class="match-status ${fix.status}">${fix.status.charAt(0).toUpperCase() + fix.status.slice(1)}</div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <h3 style="font-size:1.2rem;font-weight:700;color:var(--accent-color);margin-bottom:0.7em;text-align:center;">Final</h3>
                        <div class="fixture-week" data-matchday="${championsLeagueFinal.matchday}">
                            <h3>Final</h3>
                            <div class="fixture-list">
                                <div class="fixture-card${championsLeagueFinal.status === 'completed' ? ' completed' : ''}">
                                    <div class="match-details">
                                        <div class="team home">
                                            <img src="${championsLeagueFinal.homeTeam === 'tbd' ? 'images/club-logos/tbd.svg' : teamsData[championsLeagueFinal.homeTeam]?.logo}" alt="${championsLeagueFinal.homeTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.homeTeam]?.name}" class="team-logo-small">
                                            <span>${championsLeagueFinal.homeTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.homeTeam]?.name}</span>
                                        </div>
                                        ${championsLeagueFinal.status === 'completed' && championsLeagueFinal.score ?
                                            `<div class='score'>${championsLeagueFinal.score.home} - ${championsLeagueFinal.score.away}</div>` :
                                            `<div class='vs'>vs</div>`
                                        }
                                        <div class="team away">
                                            <img src="${championsLeagueFinal.awayTeam === 'tbd' ? 'images/club-logos/tbd.svg' : teamsData[championsLeagueFinal.awayTeam]?.logo}" alt="${championsLeagueFinal.awayTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.awayTeam]?.name}" class="team-logo-small">
                                            <span>${championsLeagueFinal.awayTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.awayTeam]?.name}</span>
                                        </div>
                                    </div>
                                    <div class="match-info">
                                        <div class="date">${championsLeagueFinal.date} ${championsLeagueFinal.time}</div>
                                        <div class="venue">${championsLeagueFinal.homeTeam !== 'tbd' && teamsData[championsLeagueFinal.homeTeam] ? teamsData[championsLeagueFinal.homeTeam].stadium : 'TBD'}</div>
                                        <div class="match-status ${championsLeagueFinal.status}">${championsLeagueFinal.status.charAt(0).toUpperCase() + championsLeagueFinal.status.slice(1)}</div>
                                        ${championsLeagueFinal.penalties && (championsLeagueFinal.penalties.home > 0 || championsLeagueFinal.penalties.away > 0) ?
                                            `<span style='margin-left:1em;font-size:1em;color:var(--accent-color);'>(pens ${championsLeagueFinal.penalties.home}-${championsLeagueFinal.penalties.away})</span>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        case 'chatbot':
            return `
                <div class="chatbot-container" style="max-width:800px;margin:0 auto;padding:1rem;">
                    <div class="chatbot-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;">
                        <div class="chatbot-avatar" style="width:48px;height:48px;border-radius:50%;background:var(--primary-color);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.2rem;">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div>
                            <h2 style="margin:0;color:var(--text-color);">Dano Madit</h2>
                            <p style="margin:0;color:var(--text-muted);">Your Elite League assistant</p>
                        </div>
                    </div>
                    
                    <div class="chatbot-controls" style="margin-bottom:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;">
                        <button id="show-questions" style="width:100%;padding:1rem;border:none;border-radius:8px;background:var(--primary-color);color:white;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;transition:all 0.3s ease;">
                            <i class="fas fa-comments"></i>
                            Ask a Question
                        </button>
                    </div>

                    <div id="questions-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);z-index:1000;padding:2rem;overflow-y:auto;">
                        <div style="max-width:800px;margin:0 auto;background:var(--bg-color);border-radius:16px;padding:2rem;position:relative;">
                            <button id="close-questions" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--text-color);font-size:1.5rem;cursor:pointer;padding:0.5rem;">
                                <i class="fas fa-times"></i>
                            </button>
                            
                            <h2 style="margin:0 0 1.5rem;color:var(--text-color);">What would you like to know?</h2>
                            
                            <div class="questions-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">
                                <div class="question-category" style="background:var(--light-bg);border-radius:12px;padding:1.5rem;">
                                    <h3 style="margin:0 0 1rem;color:var(--primary-color);font-size:1.1rem;">
                                        <i class="fas fa-trophy"></i> League
                                    </h3>
                                    <div class="question-options" style="display:flex;flex-direction:column;gap:0.5rem;">
                                        <button class="question-btn" data-value="table" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-list-ol"></i> Show me the league table
                                        </button>
                                        <button class="question-btn" data-value="recent" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-history"></i> Show recent match results
                                        </button>
                                        <button class="question-btn" data-value="upcoming" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-calendar"></i> Show upcoming matches
                                        </button>
                                    </div>
                                </div>

                                <div class="question-category" style="background:var(--light-bg);border-radius:12px;padding:1.5rem;">
                                    <h3 style="margin:0 0 1rem;color:var(--primary-color);font-size:1.1rem;">
                                        <i class="fas fa-star"></i> Competitions
                                    </h3>
                                    <div class="question-options" style="display:flex;flex-direction:column;gap:0.5rem;">
                                        <button class="question-btn" data-value="champions" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-trophy"></i> Tell me about the Champions League
                                        </button>
                                        <button class="question-btn" data-value="cups" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-cup"></i> Show cup progression
                                        </button>
                                        <button class="question-btn" data-value="managers" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                            <i class="fas fa-user-tie"></i> Show manager rankings
                                        </button>
                                    </div>
                                </div>

                                <div class="question-category" style="background:var(--light-bg);border-radius:12px;padding:1.5rem;">
                                    <h3 style="margin:0 0 1rem;color:var(--primary-color);font-size:1.1rem;">
                                        <i class="fas fa-users"></i> Teams
                                    </h3>
                                    <div class="question-options" style="display:flex;flex-direction:column;gap:0.5rem;">
                                        ${Object.entries(teamsData).map(([id, team]) => `
                                            <button class="question-btn" data-value="team_${id}" style="text-align:left;padding:0.8rem;border:none;border-radius:8px;background:var(--bg-color);color:var(--text-color);cursor:pointer;transition:all 0.2s ease;">
                                                <i class="fas fa-shield-alt"></i> How is ${team.name} performing?
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="chatbot-messages" style="height:500px;overflow-y:auto;padding:1rem;background:var(--light-bg);border-radius:12px;">
                        <div class="message bot" style="display:flex;gap:0.8rem;max-width:85%;align-self:flex-start;margin-bottom:1rem;">
                            <div class="message-avatar" style="width:32px;height:32px;border-radius:50%;background:var(--primary-color);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.9rem;flex-shrink:0;">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="message-content" style="background:var(--light-bg);padding:0.8rem;border-radius:12px;color:var(--text-color);">
                                Hello! I'm Dano Madit, your Elite League assistant. Click "Ask a Question" to get information about:
                                • League standings and statistics
                                • Match results and predictions
                                • Upcoming fixtures
                                • Champions League updates
                                • Cup competitions progress
                                • Team performance analysis
                            </div>
                        </div>
                    </div>
                </div>
            `;

        case 'teams':
            return `
                <section class="teams-section">
                    <h2>Our Teams</h2>
                    <div class="teams-search">
                        <div class="search-input-wrapper">
                            <input type="text" id="teamsSearch" placeholder="Search teams by name, stadium, or manager..." class="search-input">
                            <button class="search-submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <div class="search-filters">
                            <button class="filter-btn active" data-filter="all">All</button>
                            <button class="filter-btn" data-filter="name">Name</button>
                            <button class="filter-btn" data-filter="stadium">Stadium</button>
                            <button class="filter-btn" data-filter="manager">Manager</button>
                        </div>
                    </div>
                    <div class="teams-grid">
                        ${teamUtils.getAllTeamIds().map(teamId => {
                            const team = teamUtils.getTeamById(teamId);
                            return `
                                <div class="team-card" data-team="${teamId}" data-name="${team.name.toLowerCase()}" data-stadium="${team.stadium.toLowerCase()}" data-manager="${team.manager.toLowerCase()}">
                                    <div class="team-badge">
                                        <img src="${team.logo}" alt="${team.name} logo" class="team-logo">
                                    </div>
                                    <div class="team-header">
                                        <h3>${team.name}</h3>
                                        <span class="team-stadium">${team.stadium}</span>
                                    </div>
                                    <div class="team-stats">
                                        <div class="stat-item">
                                            <i class="fas fa-calendar"></i>
                                            <span>Founded: ${team.founded}</span>
                                        </div>
                                        <div class="stat-item">
                                            <i class="fas fa-user-tie"></i>
                                            <span>Manager: ${team.manager}
                                                <img src="icons/verified-badge.svg" 
                                                     alt="Verified" 
                                                     class="verified-badge"
                                                     title="Verified Manager">
                                            </span>
                                        </div>
                                        <div class="stat-item">
                                            <i class="fas fa-users"></i>
                                            <span>Capacity: ${team.capacity.toLocaleString()}</span>
                                        </div>
                                        <div class="stat-item">
                                            <i class="fas fa-trophy"></i>
                                            <span>Titles: ${team.titles}</span>
                                        </div>
                                    </div>
                                    <button class="view-stats-btn" data-team="${teamId}">
                                        <i class="fas fa-chart-bar"></i> View Stats
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="no-results" style="display: none;">
                        <i class="fas fa-search"></i>
                        <p>No teams found matching your search</p>
                    </div>
                    <div class="team-stats-modal">
                        <div class="stats-content">
                            <button class="close-stats-btn">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="stats-header">
                                <img src="" alt="" class="stats-team-logo">
                                <div class="stats-team-info">
                                    <h3 class="stats-team-name"></h3>
                                    <div class="stats-manager">
                                        <span class="manager-label">Manager:</span>
                                        <span class="manager-name"></span>
                                        <img src="icons/verified-badge.svg" 
                                             alt="Verified" 
                                             class="verified-badge"
                                             title="Verified Manager">
                                    </div>
                                </div>
                            </div>
                            <div class="stats-tabs">
                                <button class="stats-tab active" data-tab="overview">Overview</button>
                                <button class="stats-tab" data-tab="matches">Match History</button>
                            </div>
                            <div class="stats-body">
                                <div class="stats-panel active" id="overview">
                                    <div class="season-stats">
                                        <h4>Season Statistics</h4>
                                        <div class="stats-grid">
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Position</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Matches Played</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Wins</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Draws</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Losses</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Goals For</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Goals Against</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Points</span>
                                            </div>
                                            <div class="stat-box win-percentage">
                                                <span class="stat-value">0.0%</span>
                                                <span class="stat-label">Win %</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-stats">
                                        <h4>Form</h4>
                                        <div class="form-indicators">
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="stats-panel" id="matches">
                                    <div class="match-history">
                                        <h4>Recent Matches</h4>
                                        <div class="match-list">
                                            <!-- Match history will be populated here -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

        case 'search':
            return `
                <section class="search-section">
                    <div class="search-container mobile-search" style="max-width:1200px;margin:0 auto;padding:0 1rem;">
                        <div class="search-header">
                            <h2>Search</h2>
                            <div class="search-input-wrapper" style="width:100%;max-width:800px;margin:0 auto;">
                                <input type="text" id="searchInput" placeholder="Search teams, matches, news..." class="search-input">
                                <button class="search-submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="search-filters" style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin:1rem 0;">
                            <button class="filter-btn active" data-filter="all">All</button>
                            <button class="filter-btn" data-filter="teams">Teams</button>
                            <button class="filter-btn" data-filter="matches">Matches</button>
                            <button class="filter-btn" data-filter="news">News</button>
                        </div>
                        <div class="search-results">
                            <div class="results-container" style="max-width:1000px;margin:0 auto;">
                                <!-- Results will be populated here -->
                            </div>
                        </div>
                    </div>
                    <div class="team-stats-modal">
                        <div class="stats-content" style="max-width: 1000px; width: 100%;">
                            <button class="close-stats-btn" onclick="this.closest('.team-stats-modal').classList.remove('active')">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="stats-header">
                                <img src="" alt="" class="stats-team-logo">
                                <div class="stats-team-info">
                                    <h3 class="stats-team-name"></h3>
                                    <div class="stats-manager">
                                        <span class="manager-label">Manager:</span>
                                        <span class="manager-name"></span>
                                        <img src="icons/verified-badge.svg" 
                                             alt="Verified" 
                                             class="verified-badge"
                                             title="Verified Manager">
                                    </div>
                                </div>
                            </div>
                            <div class="stats-tabs">
                                <button class="stats-tab active" data-tab="overview">Overview</button>
                                <button class="stats-tab" data-tab="matches">Match History</button>
                            </div>
                            <div class="stats-body">
                                <div class="stats-panel active" id="overview">
                                    <div class="season-stats">
                                        <h4>Season Statistics</h4>
                                        <div class="stats-grid">
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Position</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Matches Played</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Wins</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Draws</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Losses</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Goals For</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Goals Against</span>
                                            </div>
                                            <div class="stat-box">
                                                <span class="stat-value">0</span>
                                                <span class="stat-label">Points</span>
                                            </div>
                                            <div class="stat-box win-percentage">
                                                <span class="stat-value">0.0%</span>
                                                <span class="stat-label">Win %</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-stats">
                                        <h4>Form</h4>
                                        <div class="form-indicators">
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                            <span class="form-indicator">-</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="stats-panel" id="matches">
                                    <div class="match-history">
                                        <h4>Recent Matches</h4>
                                        <div class="match-list">
                                            <!-- Match history will be populated here -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

        case 'hall-of-fame':
            return `
                <section class="hall-of-fame-section" style="max-width:1200px;margin:0 auto;padding:2rem 1rem;">
                    <div class="hall-of-fame-header" style="text-align:center;margin-bottom:3rem;">
                        <h2 style="color:var(--text-color);font-size:2.5rem;font-weight:800;margin-bottom:1rem;text-transform:uppercase;letter-spacing:1px;">Hall of Fame</h2>
                        <p style="color:var(--secondary-text);font-size:1.1rem;max-width:600px;margin:0 auto;">Celebrating the greatest achievements in Elite League history</p>
                    </div>
                    
                    <div class="season-selector" style="display:flex;justify-content:center;margin-bottom:3rem;">
                        <div class="select-wrapper" style="position:relative;min-width:250px;">
                            <select id="seasonSelect" style="width:100%;padding:1rem 1.5rem;border:2px solid var(--border-color);border-radius:12px;background:var(--card-bg);color:var(--text-color);cursor:pointer;transition:all 0.3s ease;font-size:1.1rem;font-weight:600;appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:3rem;">
                                <option value="season-1">First Season</option>
                                <option value="season-2">Second Season</option>
                                <option value="season-3">Third Season</option>
                            </select>
                            <div class="select-arrow" style="position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--accent-color);">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    <div class="hall-of-fame-content">
                        <!-- Third Season -->
                        <div class="season-content" data-season="season-3" style="display:none;">
                            <h3 style="text-align:center;margin-bottom:2rem;color:var(--text-color);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Third Season</h3>
                            <div class="hall-of-fame-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
                                <!-- Same structure as first Season -->
                                <!-- ... Copy the same cards structure ... -->
                            </div>
                        </div>

                        <!-- Second Season -->
                        <div class="season-content" data-season="season-2" style="display:none;">
                            <h3 style="text-align:center;margin-bottom:2rem;color:var(--text-color);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Second Season</h3>
                            <div class="hall-of-fame-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
                                <!-- Same structure as firt Season -->
                                <!-- ... Copy the same cards structure ... -->
                            </div>
                        </div>

                        <!-- First Season -->
                        <div class="season-content active" data-season="season-1">
                            <h3 style="text-align:center;margin-bottom:2rem;color:var(--text-color);font-size:1.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Third Season</h3>
                            <div class="hall-of-fame-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
                                <!-- League Champions -->
                                <div class="achievement-card" style="background:var(--card-bg);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow);transition:transform 0.3s ease;">
                                    <div class="achievement-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:2px solid var(--border-color);">
                                        <i class="fas fa-trophy" style="font-size:2.5rem;color:var(--accent-color);"></i>
                                        <h3 style="margin:0;color:var(--text-color);font-size:1.4rem;font-weight:700;">League Champions</h3>
                                    </div>
                                    <div class="winner-item" data-team-id="ghost" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;transition:all 0.3s ease;">
                                        <div class="placeholder-logo" style="width:50px;height:50px;border-radius:50%;background:var(--card-bg);display:flex;align-items:center;justify-content:center;border:2px solid var(--accent-color);">
                                            <i class="fas fa-trophy" style="font-size:1.5rem;color:var(--accent-color);"></i>
                                        </div>
                                        <div class="winner-info" style="flex:1;">
                                            <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- YTY Cup Winners -->
                                <div class="achievement-card" style="background:var(--card-bg);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow);transition:transform 0.3s ease;">
                                    <div class="achievement-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:2px solid var(--border-color);">
                                        <i class="fas fa-cup" style="font-size:2.5rem;color:var(--accent-color);"></i>
                                        <h3 style="margin:0;color:var(--text-color);font-size:1.4rem;font-weight:700;">YTY Cup Winners</h3>
                                    </div>
                                    <div class="winner-item" data-team-id="kenno" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;transition:all 0.3s ease;">
                                        <div class="placeholder-logo" style="width:50px;height:50px;border-radius:50%;background:var(--card-bg);display:flex;align-items:center;justify-content:center;border:2px solid var(--accent-color);">
                                            <i class="fas fa-trophy" style="font-size:1.5rem;color:var(--accent-color);"></i>
                                        </div>
                                        <div class="winner-info" style="flex:1;">
                                            <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Champions League Winners -->
                                <div class="achievement-card" style="background:var(--card-bg);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow);transition:transform 0.3s ease;">
                                    <div class="achievement-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:2px solid var(--border-color);">
                                        <i class="fas fa-star" style="font-size:2.5rem;color:var(--accent-color);"></i>
                                        <h3 style="margin:0;color:var(--text-color);font-size:1.4rem;font-weight:700;">Champions League Winners</h3>
                                    </div>
                                    <div class="winner-item" data-team-id="thor" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;transition:all 0.3s ease;">
                                        <div class="placeholder-logo" style="width:50px;height:50px;border-radius:50%;background:var(--card-bg);display:flex;align-items:center;justify-content:center;border:2px solid var(--accent-color);">
                                            <i class="fas fa-trophy" style="font-size:1.5rem;color:var(--accent-color);"></i>
                                        </div>
                                        <div class="winner-info" style="flex:1;">
                                            <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Super Cup Winners -->
                                <div class="achievement-card" style="background:var(--card-bg);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow);transition:transform 0.3s ease;">
                                    <div class="achievement-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:2px solid var(--border-color);">
                                        <i class="fas fa-crown" style="font-size:2.5rem;color:var(--accent-color);"></i>
                                        <h3 style="margin:0;color:var(--text-color);font-size:1.4rem;font-weight:700;">Super Cup Winners</h3>
                                    </div>
                                    <div class="winner-item" data-team-id="ghost" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;transition:all 0.3s ease;">
                                        <div class="placeholder-logo" style="width:50px;height:50px;border-radius:50%;background:var(--card-bg);display:flex;align-items:center;justify-content:center;border:2px solid var(--accent-color);">
                                            <i class="fas fa-trophy" style="font-size:1.5rem;color:var(--accent-color);"></i>
                                        </div>
                                        <div class="winner-info" style="flex:1;">
                                            <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Overall Best Team -->
                                <div class="achievement-card" style="background:var(--card-bg);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow);transition:transform 0.3s ease;grid-column:1/-1;">
                                    <div class="achievement-header" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:2px solid var(--border-color);">
                                        <i class="fas fa-medal" style="font-size:2.5rem;color:var(--accent-color);"></i>
                                        <h3 style="margin:0;color:var(--text-color);font-size:1.4rem;font-weight:700;">Overall Best Team</h3>
                                    </div>
                                    <div class="winner-item" data-team-id="ghost" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--light-bg);border-radius:12px;transition:all 0.3s ease;">
                                        <div class="placeholder-logo" style="width:50px;height:50px;border-radius:50%;background:var(--card-bg);display:flex;align-items:center;justify-content:center;border:2px solid var(--accent-color);">
                                            <i class="fas fa-trophy" style="font-size:1.5rem;color:var(--accent-color);"></i>
                                        </div>
                                        <div class="winner-info" style="flex:1;">
                                            <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

        case 'friendlies': {
            // Group fixtures by round
            const rounds = Array.from(new Set(friendlyFixtures.map(f => f.round))).sort();
            return `
                <section class="friendlies-section" style="max-width:1200px;margin:0 auto;padding:2rem 1rem;">
                    <h2 style="color:var(--text-color);font-size:2.5rem;font-weight:800;margin-bottom:2rem;text-align:center;">Friendly Matches</h2>
                    <div class="round-selector-bar" style="display:flex;gap:1em;margin-bottom:2em;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--card-bg);padding:1.5em;border-radius:12px;box-shadow:var(--shadow);">
                        <div class="selector-group" style="display:flex;align-items:center;gap:0.5em;">
                            <label for="friendliesRoundSelect" style="color:var(--text-color);font-weight:600;">Round:</label>
                            <select id="friendliesRoundSelect" style="padding:0.8em;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-color);color:var(--text-color);min-width:150px;">
                                <option value="all">All Rounds</option>
                                ${rounds.map(round => `<option value="${round}">${round}</option>`).join('')}
                            </select>
                        </div>
                        <div class="selector-group" style="display:flex;align-items:center;gap:0.5em;">
                            <label for="friendliesTeamSelect" style="color:var(--text-color);font-weight:600;">Team:</label>
                            <select id="friendliesTeamSelect" style="padding:0.8em;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-color);color:var(--text-color);min-width:200px;">
                                <option value="all">All Teams</option>
                                ${Object.values(teamsData).map(team => `<option value="${team.name}">${team.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="friendlies-container">
                        <div class="no-friendlies-message" style="display:none;text-align:center;color:var(--secondary-text);padding:2em 0;font-size:1.1em;background:var(--card-bg);border-radius:12px;margin:2em 0;">No friendly matches found for the selected filters.</div>
                        ${rounds.map(round => {
                            const roundFixtures = friendlyFixtures.filter(f => f.round === round && f.status !== 'scheduled');
                            if (roundFixtures.length === 0) return ''; // Skip rounds with no completed matches
                            return `
                                <div class="fixture-week" data-round="${round}" style="margin-bottom:2em;">
                                    <h3 style="color:var(--primary-color);font-size:1.5em;font-weight:700;margin-bottom:1em;padding-bottom:0.5em;border-bottom:2px solid var(--border-color);">${round}</h3>
                                    <div class="fixture-list" style="display:grid;gap:1em;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));">
                                        ${roundFixtures.map(match => {
                                            const homeTeam = teamsData[match.homeTeam];
                                            const awayTeam = teamsData[match.awayTeam];
                                            return `
                                                <div class="fixture-card ${match.status}"
                                                     data-home="${homeTeam.name}"
                                                     data-away="${awayTeam.name}"
                                                     data-round="${match.round}"
                                                     style="background:var(--card-bg);border-radius:12px;padding:1.5em;box-shadow:var(--shadow);">
                                                    <div class="match-details" style="display:flex;flex-direction:column;gap:1em;margin-bottom:1em;">
                                                        <div class="team home" style="display:flex;align-items:center;gap:0.8em;">
                                                            <img src="${homeTeam.logo}" 
                                                                 alt="${homeTeam.name}" 
                                                                 class="team-logo-small"
                                                                 style="width:32px;height:32px;border-radius:50%;background:#fff;">
                                                            <span style="font-weight:600;color:var(--text-color);">${homeTeam.name}</span>
                                                        </div>
                                                        <div class="score" style="text-align:center;font-size:1.5em;font-weight:700;color:var(--accent-color);">${match.score.home} - ${match.score.away}</div>
                                                        <div class="team away" style="display:flex;align-items:center;gap:0.8em;">
                                                            <img src="${awayTeam.logo}" 
                                                                 alt="${awayTeam.name}" 
                                                                 class="team-logo-small"
                                                                 style="width:32px;height:32px;border-radius:50%;background:#fff;">
                                                            <span style="font-weight:600;color:var(--text-color);">${awayTeam.name}</span>
                                                        </div>
                                                    </div>
                                                    <div class="match-info" style="display:flex;justify-content:space-between;align-items:center;font-size:0.9em;color:var(--secondary-text);">
                                                        <div class="date">${match.date} ${match.time}</div>
                                                        <div class="venue">${homeTeam.stadium}</div>
                                                        <div class="match-status completed" style="color:#4caf50;">Completed</div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>
            `;
        }

        default:
            return '<div class="error">Page not found</div>';
    }
}

// Function to load page content
function loadPage(pageId) {
    document.querySelector('main').innerHTML = getPageContent(pageId);
    updateActiveState(pageId);
    history.pushState({ page: pageId }, '', `#${pageId}`);
    window.scrollTo(0, 0);

    if (pageId === 'teams') {
        initializeTeamStats();
        initializeTeamSearch();
    }
    if (pageId === 'fixtures' || pageId === 'results') {
        initializeMatchdaySelectors();
    }
    if (pageId === 'search') {
        initializeTeamStats();
    }
    if (pageId === 'chatbot') {
        // Initialize chatbot after a short delay to ensure DOM is ready
        setTimeout(initializeChatbot, 100);
    }
    if (pageId === 'hall-of-fame') {
        initializeHallOfFame();
    }
    if (pageId === 'friendlies') {
        initializeFriendliesFilters();
    }
}

// Function to update active states in navigation
function updateActiveState(pageId) {
    // Update desktop navigation
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Update mobile navigation
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Handle navigation clicks
function handleNavigation(e) {
    e.preventDefault();
    const pageId = e.currentTarget.getAttribute('href').substring(1);
    if (pageId !== currentPage) {
        currentPage = pageId;
        loadPage(pageId);
    }
}

// Initialize navigation
function initializeNavigation() {
    // Add click handlers to all navigation links
    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        const pageId = e.state?.page || 'home';
        currentPage = pageId;
        loadPage(pageId);
    });

    // Use event delegation for all internal links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            if (pageId !== currentPage) {
                currentPage = pageId;
                loadPage(pageId);
            }
        }
    });

    // Load initial page based on URL hash or default to home
    const initialPage = window.location.hash.substring(1) || 'home';
    currentPage = initialPage;
    loadPage(initialPage);
}

// Theme management
const themes = {
    light: {
        '--primary-color': '#4a148c',
        '--secondary-color': '#6a1b9a',
        '--accent-color': '#ff1493',
        '--text-color': '#1a1a1a',
        '--secondary-text': '#333333',
        '--light-bg': '#ecf0f1',
        '--card-bg': '#ffffff',
        '--shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    dark: {
        '--primary-color': '#9c27b0',
        '--secondary-color': '#ba68c8',
        '--accent-color': '#ff1493',
        '--text-color': '#ffffff',
        '--secondary-text': '#e0e0e0',
        '--light-bg': '#1a1a1a',
        '--card-bg': '#242424',
        '--shadow': '0 2px 4px rgba(0, 0, 0, 0.2)'
    }
};

// Theme management functions
const themeManager = {
    currentTheme: 'light',

    init() {
        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        this.createThemeToggle();
    },

    createThemeToggle() {
        const toggleHTML = `
            <div class="header-controls">
                <button class="search-btn" id="search-btn">
                    <i class="fas fa-search"></i>
                </button>
                <a href="#chatbot" class="chatbot-btn" style="background:rgba(255,255,255,0.2);color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;transition:all 0.3s ease;display:flex;align-items:center;justify-content:center;font-size:1.1rem;border:2px solid rgba(255,255,255,0.3);box-shadow:0 2px 5px rgba(0,0,0,0.2);text-decoration:none;">
                    <i class="fas fa-robot"></i>
                </a>
                <button class="theme-toggle-btn" id="theme-toggle">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        `;

        // Add toggle to header
        const header = document.querySelector('header');
        header.insertAdjacentHTML('beforeend', toggleHTML);

        // Add click handler for theme toggle
        const toggleBtn = document.querySelector('.theme-toggle-btn');
        toggleBtn.addEventListener('click', () => {
            const currentTheme = this.currentTheme;
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
            this.updateToggleButton(newTheme);
        });

        // Add click handler for search
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.addEventListener('click', () => {
            currentPage = 'search';
            loadPage('search');
            // Focus the search input when the page loads
            setTimeout(() => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        });

        // Set initial button state
        this.updateToggleButton(this.currentTheme);
    },

    updateToggleButton(theme) {
        const toggleBtn = document.querySelector('.theme-toggle-btn');
        if (!toggleBtn) return;
        
        if (theme === 'light') {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            toggleBtn.title = 'Switch to Dark Theme';
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            toggleBtn.title = 'Switch to Light Theme';
        }
    },

    setTheme(themeName) {
        const theme = themes[themeName];
        if (!theme) return;

        // Apply theme variables
        Object.entries(theme).forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });

        // Update current theme
        this.currentTheme = themeName;
        localStorage.setItem('theme', themeName);

        // Update toggle button
        this.updateToggleButton(themeName);
    }
};

// Search functionality
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            currentPage = 'search';
            loadPage('search');
            // Focus the search input when the page loads
            setTimeout(() => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        });
    }

    // Add search functionality
    document.addEventListener('input', (e) => {
        if (e.target.id === 'searchInput') {
            performSearch(e.target.value);
        }
    });

    // Add filter functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const filter = e.target.dataset.filter;
            updateActiveFilter(filter);
            performSearch(document.getElementById('searchInput')?.value || '', filter);
        }
    });
}

function updateActiveFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
}

function performSearch(query, filter = 'all') {
    const resultsContainer = document.querySelector('.results-container');
    if (!resultsContainer) return;

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (!query.trim()) {
        resultsContainer.innerHTML = '<div class="no-results">Start typing to search...</div>';
        return;
    }

    const searchResults = searchContent(query, filter);
    
    if (searchResults.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    // Display results
    searchResults.forEach(result => {
        const resultCard = createResultCard(result);
        resultsContainer.appendChild(resultCard);
    });

    // Make View Info button open the View Stats modal for the selected team
    document.querySelectorAll('.view-info-btn').forEach(btn => {
        btn.onclick = function() {
            const teamId = btn.getAttribute('data-team');
            // Open the View Stats modal for this team
            const statsModal = document.querySelector('.team-stats-modal');
            statsModal.classList.add('active');
            loadTeamStats(teamId);
        };
    });
}

function searchContent(query, filter) {
    const results = [];
    const searchQuery = query.toLowerCase();

    // Search teams
    if (filter === 'all' || filter === 'teams') {
        Object.entries(teamsData).forEach(([teamId, team]) => {
            if (team.name.toLowerCase().includes(searchQuery) ||
                team.stadium.toLowerCase().includes(searchQuery) ||
                team.manager.toLowerCase().includes(searchQuery)) {
                results.push({
                    type: 'team',
                    data: team,
                    id: teamId
                });
            }
        });
    }

    // Search matches (fixtures and results) - dynamic from all competitions
    if (filter === 'all' || filter === 'matches') {
        // League
        matchData.fixtures.forEach(match => {
            const home = teamsData[match.homeTeam]?.name || match.homeTeam;
            const away = teamsData[match.awayTeam]?.name || match.awayTeam;
            const venue = teamsData[match.homeTeam]?.stadium || '';
            if (
                home.toLowerCase().includes(searchQuery) ||
                away.toLowerCase().includes(searchQuery) ||
                venue.toLowerCase().includes(searchQuery)
            ) {
                let resultColor = '';
                if (match.status === 'completed' && match.score) {
                    // If the searched team is the home team
                    if (home.toLowerCase().includes(searchQuery)) {
                        if (match.score.home > match.score.away) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.home < match.score.away) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                    // If the searched team is the away team
                    else if (away.toLowerCase().includes(searchQuery)) {
                        if (match.score.away > match.score.home) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.away < match.score.home) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                }

                results.push({
                    type: 'match',
                    competition: 'League',
                    data: {
                        homeTeam: home,
                        awayTeam: away,
                        date: match.date + ' ' + match.time,
                        venue,
                        score: match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : undefined,
                        status: match.status,
                        resultColor: resultColor,
                        homeScore: match.status === 'completed' ? match.score.home : undefined,
                        awayScore: match.status === 'completed' ? match.score.away : undefined
                    }
                });
            }
        });
        // YTY Cup
        ytyCupFixtures.forEach(match => {
            const home = teamsData[match.homeTeam]?.name || (match.homeTeam === 'tbd' ? 'TBD' : match.homeTeam);
            const away = teamsData[match.awayTeam]?.name || (match.awayTeam === 'tbd' ? 'TBD' : match.awayTeam);
            if (
                home.toLowerCase().includes(searchQuery) ||
                away.toLowerCase().includes(searchQuery)
            ) {
                let resultColor = '';
                if (match.status === 'completed' && match.score) {
                    // If the searched team is the home team
                    if (home.toLowerCase().includes(searchQuery)) {
                        if (match.score.home > match.score.away) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.home < match.score.away) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                    // If the searched team is the away team
                    else if (away.toLowerCase().includes(searchQuery)) {
                        if (match.score.away > match.score.home) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.away < match.score.home) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                }

                results.push({
                    type: 'match',
                    competition: 'YTY Cup',
                    data: {
                        homeTeam: home,
                        awayTeam: away,
                        date: match.date + ' ' + (match.time || ''),
                        venue: match.homeTeam !== 'tbd' && teamsData[match.homeTeam] ? teamsData[match.homeTeam].stadium : 'TBD',
                        score: match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : undefined,
                        homeScore: match.status === 'completed' ? match.score.home : undefined,
                        awayScore: match.status === 'completed' ? match.score.away : undefined,
                        status: match.status,
                        resultColor: resultColor
                    }
                });
            }
        });
        // Super Cup
        const sc = superCupFixture;
        const home = teamsData[sc.homeTeam]?.name || (sc.homeTeam === 'tbd' ? 'TBD' : sc.homeTeam);
        const away = teamsData[sc.awayTeam]?.name || (sc.awayTeam === 'tbd' ? 'TBD' : sc.awayTeam);
        if (
            home.toLowerCase().includes(searchQuery) ||
            away.toLowerCase().includes(searchQuery)
        ) {
            let resultColor = '';
            if (sc.status === 'completed' && sc.score) {
                // If the searched team is the home team
                if (home.toLowerCase().includes(searchQuery)) {
                    if (sc.score.home > sc.score.away) {
                        resultColor = '#4caf50'; // Win - Green
                    } else if (sc.score.home < sc.score.away) {
                        resultColor = '#f44336'; // Loss - Red
                    } else {
                        resultColor = '#ffc107'; // Draw - Yellow
                    }
                }
                // If the searched team is the away team
                else if (away.toLowerCase().includes(searchQuery)) {
                    if (sc.score.away > sc.score.home) {
                        resultColor = '#4caf50'; // Win - Green
                    } else if (sc.score.away < sc.score.home) {
                        resultColor = '#f44336'; // Loss - Red
                    } else {
                        resultColor = '#ffc107'; // Draw - Yellow
                    }
                }
            }

            results.push({
                type: 'match',
                competition: 'Super Cup',
                data: {
                    homeTeam: home,
                    awayTeam: away,
                    date: sc.date + ' ' + (sc.time || ''),
                    venue: sc.homeTeam !== 'tbd' && teamsData[sc.homeTeam] ? teamsData[sc.homeTeam].stadium : 'TBD',
                    score: sc.status === 'completed' && sc.score ? `${sc.score.home} - ${sc.score.away}` : undefined,
                    homeScore: sc.status === 'completed' ? sc.score.home : undefined,
                    awayScore: sc.status === 'completed' ? sc.score.away : undefined,
                    status: sc.status,
                    resultColor: resultColor
                }
            });
        }
        // Champions League
        const clFixtures = getChampionsLeagueFixtures();
        clFixtures.forEach(match => {
            const home = teamsData[match.homeTeam]?.name || (match.homeTeam === 'tbd' ? 'TBD' : match.homeTeam);
            const away = teamsData[match.awayTeam]?.name || (match.awayTeam === 'tbd' ? 'TBD' : match.awayTeam);
            if (
                home.toLowerCase().includes(searchQuery) ||
                away.toLowerCase().includes(searchQuery)
            ) {
                let resultColor = '';
                if (match.status === 'completed' && match.score) {
                    // If the searched team is the home team
                    if (home.toLowerCase().includes(searchQuery)) {
                        if (match.score.home > match.score.away) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.home < match.score.away) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                    // If the searched team is the away team
                    else if (away.toLowerCase().includes(searchQuery)) {
                        if (match.score.away > match.score.home) {
                            resultColor = '#4caf50'; // Win - Green
                        } else if (match.score.away < match.score.home) {
                            resultColor = '#f44336'; // Loss - Red
                        } else {
                            resultColor = '#ffc107'; // Draw - Yellow
                        }
                    }
                }

                results.push({
                    type: 'match',
                    competition: 'Champions League',
                    data: {
                        homeTeam: home,
                        awayTeam: away,
                        date: match.date + ' ' + (match.time || ''),
                        venue: match.homeTeam !== 'tbd' && teamsData[match.homeTeam] ? teamsData[match.homeTeam].stadium : 'TBD',
                        score: match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : undefined,
                        homeScore: match.status === 'completed' ? match.score.home : undefined,
                        awayScore: match.status === 'completed' ? match.score.away : undefined,
                        status: match.status,
                        resultColor: resultColor
                    }
                });
            }
        });
        // Add Champions League Final
        const clFinal = championsLeagueFinal;
        const clFinalHome = teamsData[clFinal.homeTeam]?.name || (clFinal.homeTeam === 'tbd' ? 'TBD' : clFinal.homeTeam);
        const clFinalAway = teamsData[clFinal.awayTeam]?.name || (clFinal.awayTeam === 'tbd' ? 'TBD' : clFinal.awayTeam);
        if (
            clFinalHome.toLowerCase().includes(searchQuery) ||
            clFinalAway.toLowerCase().includes(searchQuery)
        ) {
            let resultColor = '';
            if (clFinal.status === 'completed' && clFinal.score) {
                // If the searched team is the home team
                if (clFinalHome.toLowerCase().includes(searchQuery)) {
                    if (clFinal.score.home > clFinal.score.away) {
                        resultColor = '#4caf50'; // Win - Green
                    } else if (clFinal.score.home < clFinal.score.away) {
                        resultColor = '#f44336'; // Loss - Red
                    } else {
                        resultColor = '#ffc107'; // Draw - Yellow
                    }
                }
                // If the searched team is the away team
                else if (clFinalAway.toLowerCase().includes(searchQuery)) {
                    if (clFinal.score.away > clFinal.score.home) {
                        resultColor = '#4caf50'; // Win - Green
                    } else if (clFinal.score.away < clFinal.score.home) {
                        resultColor = '#f44336'; // Loss - Red
                    } else {
                        resultColor = '#ffc107'; // Draw - Yellow
                    }
                }
            }

            results.push({
                type: 'match',
                competition: 'Champions League Final',
                data: {
                    homeTeam: clFinalHome,
                    awayTeam: clFinalAway,
                    date: clFinal.date + ' ' + (clFinal.time || ''),
                    venue: clFinal.homeTeam !== 'tbd' && teamsData[clFinal.homeTeam] ? teamsData[clFinal.homeTeam].stadium : 'TBD',
                    score: clFinal.status === 'completed' && clFinal.score ? `${clFinal.score.home} - ${clFinal.score.away}` : undefined,
                    homeScore: clFinal.status === 'completed' ? clFinal.score.home : undefined,
                    awayScore: clFinal.status === 'completed' ? clFinal.score.away : undefined,
                    status: clFinal.status,
                    resultColor: resultColor
                }
            });
        }

        // Sort matches by date
        results.sort((a, b) => {
            if (a.type === 'match' && b.type === 'match') {
                const dateA = new Date(a.data.date);
                const dateB = new Date(b.data.date);
                return dateA - dateB;
            }
            // Keep non-match results at the top
            if (a.type !== 'match') return -1;
            if (b.type !== 'match') return 1;
            return 0;
        });
    }

    // Search news (if you have a news array, use it; else keep demo)
    if (filter === 'all' || filter === 'news') {
        news.forEach(item => {
            if (item.title.toLowerCase().includes(searchQuery) ||
                item.content.toLowerCase().includes(searchQuery)) {
                results.push({
                    type: 'news',
                    data: item
                });
            }
        });
    }

    return results;
}

function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';

    switch (result.type) {
        case 'team':
            const team = result.data;
            const overview = getTeamOverview(result.id);
            const leagueTable = computeLeagueTable();
            const teamPosition = leagueTable.findIndex(t => t.teamId === result.id) + 1;
            const teamStats = leagueTable.find(t => t.teamId === result.id) || {};
            
            card.innerHTML = `
                <div class="team-result" style="display:flex;align-items:center;gap:1.2em;padding:1.2em;background:var(--card-bg);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
                    <div class="team-badge" style="flex-shrink:0;">
                        <img src="${team.logo}" alt="${team.name} logo" class="team-logo" style="width:64px;height:64px;border-radius:50%;background:white;padding:0.3em;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                        </div>
                    <div class="result-content" style="flex-grow:1;">
                        <h3 style="margin:0 0 0.3em 0;font-size:1.2em;color:var(--accent-color);font-weight:700;">${team.name}</h3>
                        <p style="margin:0 0 0.8em 0;color:var(--secondary-text);font-size:0.95em;">
                            ${team.stadium} • ${team.manager} • Founded: ${team.founded} • Capacity: ${team.capacity.toLocaleString()}
                        </p>
                        <p style="margin:0 0 0.8em 0;color:var(--text-color);font-size:0.95em;">
                            <strong>League Position:</strong> ${teamPosition} • <strong>Points:</strong> ${teamStats.points || 0} • 
                            <strong>Record:</strong> <span style="color:#4caf50;font-weight:600;">W${teamStats.won || 0}</span> <span style="color:#ffc107;font-weight:600;">D${teamStats.drawn || 0}</span> <span style="color:#f44336;font-weight:600;">L${teamStats.lost || 0}</span> • 
                            <strong>Goals:</strong> ${teamStats.goalsFor || 0}-${teamStats.goalsAgainst || 0}
                        </p>
                        <p style="margin:0 0 0.8em 0;color:var(--text-color);font-size:0.95em;">
                            <strong>Champions League:</strong> ${overview.championsLeague.inCompetition ? 
                                `${overview.championsLeague.progression || 'Group Stage'} (Position: ${overview.championsLeague.groupPosition || '-'})` : 
                                'Not in competition'} • 
                            <strong>YTY Cup:</strong> ${overview.ytyCup.inCompetition ? 
                                overview.ytyCup.progression || 'In Progress' : 
                                'Not in competition'}
                        </p>
                        <button class="view-info-btn" data-team="${result.id}" style="background:var(--primary-color);color:white;border:none;padding:0.6em 1.2em;border-radius:6px;font-size:0.95em;font-weight:500;cursor:pointer;transition:all 0.2s;display:inline-flex;align-items:center;gap:0.5em;">
                            <i class="fas fa-info-circle"></i>
                            View Detailed Stats
                        </button>
                    </div>
                </div>
            `;
            break;

        case 'match':
            const competitionColors = {
                'League': 'var(--primary-color)',
                'Champions League': '#1a237e',
                'Champions League Final': '#1a237e',
                'YTY Cup': '#ff1493',
                'Super Cup': '#ffd700'
            };
            const competitionColor = competitionColors[result.competition] || 'var(--primary-color)';
            
            // Determine result color based on score
            let resultColor = '';
            if (result.data.status === 'completed' && result.data.homeScore !== undefined && result.data.awayScore !== undefined) {
                if (result.data.homeScore > result.data.awayScore) {
                    resultColor = '#4caf50'; // Win - Green
                } else if (result.data.homeScore < result.data.awayScore) {
                    resultColor = '#f44336'; // Loss - Red
                } else {
                    resultColor = '#ffc107'; // Draw - Yellow
                }
            }
            
            card.innerHTML = `
                <div class="match-result" style="background:var(--card-bg);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);overflow:hidden;${result.data.status === 'completed' ? `border-left:4px solid ${result.data.resultColor};` : ''}">
                    <div class="match-header" style="background:${competitionColor};color:white;padding:0.8em 1.2em;font-weight:600;font-size:0.95em;display:flex;align-items:center;justify-content:space-between;">
                        <span>${result.competition}</span>
                        <span class="match-status ${result.data.status}" style="font-size:0.9em;opacity:0.9;padding:0.2em 0.6em;border-radius:4px;background:${result.data.status === 'completed' ? `rgba(${result.data.resultColor === '#4caf50' ? '76, 175, 80' : result.data.resultColor === '#f44336' ? '244, 67, 54' : '255, 193, 7'}, 0.1)` : 'rgba(33, 150, 243, 0.1)'};color:${result.data.status === 'completed' ? result.data.resultColor : '#2196f3'};">${result.data.status.charAt(0).toUpperCase() + result.data.status.slice(1)}</span>
                    </div>
                    <div class="match-content" style="padding:1.2em;">
                        <div class="teams" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1em;">
                            <div class="team home" style="display:flex;align-items:center;gap:0.8em;flex:1;">
                                <span style="font-weight:600;color:var(--text-color);">${result.data.homeTeam}</span>
                            </div>
                            <div class="score-container" style="display:flex;align-items:center;gap:0.5em;padding:0 1em;">
                                ${result.data.status === 'completed' && result.data.score ?
                                    `<span style="font-size:1.2em;font-weight:700;color:${result.data.resultColor};">${result.data.score}</span>` :
                                    `<span style="font-size:1.1em;color:var(--secondary-text);">vs</span>`
                                }
                            </div>
                            <div class="team away" style="display:flex;align-items:center;gap:0.8em;flex:1;justify-content:flex-end;">
                                <span style="font-weight:600;color:var(--text-color);">${result.data.awayTeam}</span>
                            </div>
                        </div>
                        <div class="match-info" style="display:flex;align-items:center;justify-content:space-between;font-size:0.9em;color:var(--secondary-text);border-top:1px solid var(--light-bg);padding-top:0.8em;">
                            <div class="date" style="display:flex;align-items:center;gap:0.5em;">
                                <i class="fas fa-calendar"></i>
                                <span>${result.data.date}</span>
                            </div>
                            <div class="venue" style="display:flex;align-items:center;gap:0.5em;">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${result.data.venue}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'news':
            card.innerHTML = `
                <div class="news-result" style="background:var(--card-bg);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);padding:1.2em;">
                    <h3 style="margin:0 0 0.5em 0;font-size:1.2em;color:var(--text-color);">${result.data.title}</h3>
                    <p style="margin:0 0 0.8em 0;color:var(--secondary-text);font-size:0.95em;">${result.data.content}</p>
                    <div class="news-date" style="color:var(--accent-color);font-size:0.85em;font-weight:500;">${result.data.date}</div>
                </div>
            `;
            break;
    }

    return card;
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add logo to header
    const header = document.querySelector('header');
    const headerLeftHTML = `
        <div class="header-left">
            <img src="images/logo.svg" alt="Elite League Logo" class="header-logo">
            <h1>Elite League</h1>
        </div>
    `;
    header.insertAdjacentHTML('afterbegin', headerLeftHTML);

    themeManager.init();
    initializeNavigation();
    initializeSearch();

    // Initialize team stats functionality
    initializeTeamStats();

    // Initialize team search functionality
    initializeTeamSearch();

    // Initialize matchday selectors
    initializeMatchdaySelectors();
});

// Add this new function
function initializeTeamStats() {
    const viewStatsBtns = document.querySelectorAll('.view-stats-btn');
    const statsModal = document.querySelector('.team-stats-modal');
    const closeStatsBtn = document.querySelector('.close-stats-btn');
    const statsTabs = document.querySelectorAll('.stats-tab');

    viewStatsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const teamId = btn.dataset.team;
            const team = teamUtils.getTeamById(teamId);
            
            // Update modal content
            document.querySelector('.stats-team-logo').src = team.logo;
            document.querySelector('.stats-team-logo').alt = `${team.name} logo`;
            document.querySelector('.stats-team-name').textContent = team.name;
            
            // Update manager info in stats modal
            document.querySelector('.manager-name').textContent = team.manager;
            
            // Show modal
            statsModal.classList.add('active');
            
            // Load team stats
            loadTeamStats(teamId);
        });
    });

    closeStatsBtn.addEventListener('click', () => {
        statsModal.classList.remove('active');
    });

    statsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            statsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding panel
            const panelId = tab.dataset.tab;
            document.querySelectorAll('.stats-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            document.getElementById(panelId).classList.add('active');
        });
    });
}

function getTeamStatsAndForm(teamId) {
    let stats = {
        matchesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        form: [], // all results, newest last
        recentMatches: []
    };
    // Get all completed matches involving this team, sorted by date
    const matches = matchData.fixtures
        .filter(m => m.status === 'completed' && m.score && (m.homeTeam === teamId || m.awayTeam === teamId))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    matches.forEach(match => {
        stats.matchesPlayed++;
        let isHome = match.homeTeam === teamId;
        let goalsFor = isHome ? match.score.home : match.score.away;
        let goalsAgainst = isHome ? match.score.away : match.score.home;
        stats.goalsFor += goalsFor;
        stats.goalsAgainst += goalsAgainst;
        let result;
        if (goalsFor > goalsAgainst) {
            stats.wins++;
            stats.points += 3;
            result = 'W';
        } else if (goalsFor < goalsAgainst) {
            stats.losses++;
            result = 'L';
        } else {
            stats.draws++;
            stats.points++;
            result = 'D';
        }
        stats.form.push(result);
        stats.recentMatches.push({
            date: match.date,
            opponent: isHome ? match.awayTeam : match.homeTeam,
            isHome,
            goalsFor,
            goalsAgainst,
            result,
            matchday: match.matchday
        });
    });
    // Calculate win percentage
    stats.winPercentage = stats.matchesPlayed > 0 ? 
        ((stats.wins / stats.matchesPlayed) * 100).toFixed(1) : '0.0';
    
    // Keep all form results, no slicing
    stats.recentMatches = stats.recentMatches.reverse(); // newest first
    return stats;
}

function loadTeamStats(teamId) {
    const team = teamUtils.getTeamById(teamId);
    const stats = getTeamStatsAndForm(teamId);
    // Get team's position from league table
    const leagueTable = computeLeagueTable();
    const teamPosition = leagueTable.findIndex(t => t.teamId === teamId) + 1;
    
    // Create manager rankings
    const managerRankings = Object.entries(teamsData).map(([id, teamData]) => {
        const teamStats = leagueTable.find(t => t.teamId === id) || {};
        // Calculate form points (3 for W, 1 for D, 0 for L)
        const formPoints = (teamStats.form || []).reduce((sum, result) => {
            switch(result) {
                case 'W': return sum + 3;
                case 'D': return sum + 1;
                default: return sum;
            }
        }, 0);
        return {
            manager: teamData.manager,
            team: teamData.name,
            points: teamStats.points || 0,
            position: leagueTable.findIndex(t => t.teamId === id) + 1,
            goalDiff: teamStats.goalDiff || 0,
            form: teamStats.form || [],
            formPoints: formPoints
        };
    }).sort((a, b) => {
        // Sort by form points (recent performance)
        if (b.formPoints !== a.formPoints) return b.formPoints - a.formPoints;
        // If form points are equal, sort by goal difference
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        // If goal difference is equal, sort by points
        if (b.points !== a.points) return b.points - a.points;
        // If points are equal, sort by position
        return a.position - b.position;
    });

    // Find this manager's ranking
    const managerRank = managerRankings.findIndex(r => r.manager === team.manager) + 1;

    // Set the team logo in the correct modal
    const modal = document.querySelector('.team-stats-modal.active') || document.querySelector('.team-stats-modal');
    if (modal) {
        const logoImg = modal.querySelector('.stats-team-logo');
        if (logoImg) {
            logoImg.src = team.logo;
            logoImg.alt = `${team.name} logo`;
        }
    }
    
    // Update manager info with ranking
    document.querySelector('.manager-name').textContent = team.manager;
    const managerInfo = document.querySelector('.stats-manager');
    if (managerInfo) {
        managerInfo.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 0.3rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="manager-label">Manager:</span>
                    <span class="manager-name">${team.manager}</span>
                    <img src="icons/verified-badge.svg" 
                         alt="Verified" 
                         class="verified-badge"
                         title="Verified Manager">
                </div>
                <span style="color: var(--accent-color); font-weight: 600; font-size: 0.95em;">Manager Ranking: #${managerRank}</span>
            </div>
        `;
    }
    
    // Update stats display
    document.querySelector('.stat-box:nth-child(1) .stat-value').textContent = teamPosition;
    document.querySelector('.stat-box:nth-child(2) .stat-value').textContent = stats.matchesPlayed;
    document.querySelector('.stat-box:nth-child(3) .stat-value').textContent = stats.wins;
    document.querySelector('.stat-box:nth-child(4) .stat-value').textContent = stats.draws;
    document.querySelector('.stat-box:nth-child(5) .stat-value').textContent = stats.losses;
    document.querySelector('.stat-box:nth-child(6) .stat-value').textContent = stats.goalsFor;
    document.querySelector('.stat-box:nth-child(7) .stat-value').textContent = stats.goalsAgainst;
    document.querySelector('.stat-box:nth-child(8) .stat-value').textContent = stats.points;
    document.querySelector('.stat-box:nth-child(9) .stat-value').textContent = `${stats.winPercentage}%`;
    
    // Update form indicators with symbols
    const formIndicatorsContainer = document.querySelector('.form-indicators');
    const formSymbol = { 'w': '✔', 'd': '–', 'l': '✗' };
    
    // Clear existing indicators
    formIndicatorsContainer.innerHTML = '';
    
    // Add indicators for all results
    stats.form.forEach((result, idx) => {
        const indicator = document.createElement('span');
        indicator.className = `form-indicator ${result.toLowerCase()}`;
        indicator.textContent = formSymbol[result.toLowerCase()] || '-';
        formIndicatorsContainer.appendChild(indicator);
    });
    
    // Update recent matches
    const matchList = document.querySelector('.match-list');
    if (matchList) {
        matchList.innerHTML = stats.recentMatches.length === 0 ? 
            '<div class="no-results">No recent matches</div>' :
            stats.recentMatches.map(m => {
                const oppName = teamUtils.getTeamName(m.opponent);
                const oppLogo = teamUtils.getTeamById(m.opponent).logo;
                const matchDate = new Date(m.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
            return `
                    <div class="recent-match">
                        <span class="matchday">MD${m.matchday}</span>
                        <div class="opponent">
                            <img src="${oppLogo}" alt="${oppName} logo" class="team-logo-small">
                            <span>${m.isHome ? 'vs' : '@'} ${oppName}</span>
                        </div>
                        <span class="scoreline ${m.result.toLowerCase()}">${m.goalsFor} - ${m.goalsAgainst}</span>
                        <span class="result-badge ${m.result.toLowerCase()}">${m.result}</span>
                    </div>
                `;
            }).join('');
    }
}

// Add this new function
function initializeTeamSearch() {
    const searchInput = document.getElementById('teamsSearch');
    const filterBtns = document.querySelectorAll('.teams-search .filter-btn');
    const teamsGrid = document.querySelector('.teams-grid');
    const noResults = document.querySelector('.no-results');
    let currentFilter = 'all';

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterTeams(e.target.value, currentFilter);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;

            // Re-apply current search with new filter
            if (searchInput) {
                filterTeams(searchInput.value, currentFilter);
            }
        });
    });

    function filterTeams(query, filter) {
        const searchQuery = query.toLowerCase().trim();
        const teamCards = document.querySelectorAll('.team-card');
        let visibleCount = 0;

        teamCards.forEach(card => {
            let shouldShow = false;

            if (searchQuery === '') {
                shouldShow = true;
            } else {
                switch (filter) {
                    case 'name':
                        shouldShow = card.dataset.name.includes(searchQuery);
                        break;
                    case 'stadium':
                        shouldShow = card.dataset.stadium.includes(searchQuery);
                        break;
                    case 'manager':
                        shouldShow = card.dataset.manager.includes(searchQuery);
                        break;
                    default: // 'all'
                        shouldShow = 
                            card.dataset.name.includes(searchQuery) ||
                            card.dataset.stadium.includes(searchQuery) ||
                            card.dataset.manager.includes(searchQuery);
                }
            }

            card.style.display = shouldShow ? '' : 'none';
            if (shouldShow) visibleCount++;
        });

        // Show/hide no results message
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
        }

        // Add animation to visible cards
        teamCards.forEach(card => {
            if (card.style.display === 'block') {
                card.style.animation = 'fadeIn 0.5s ease-out';
            }
        });
    }
}

// Utility to compute league table from matchData
function computeLeagueTable(uptoMatchday = null) {
    // Initialize stats for each team
    const table = {};
    Object.keys(teamsData).forEach(teamId => {
        table[teamId] = {
            teamId,
            name: teamsData[teamId].name,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDiff: 0,
            points: 0,
            form: [] // Array of 'W', 'D', 'L'
        };
    });
    // Process completed matches in chronological order
    let completedMatches = matchData.fixtures
        .filter(match => match.status === 'completed' && match.score)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    if (uptoMatchday !== null) {
        completedMatches = completedMatches.filter(match => match.matchday <= uptoMatchday);
    }
    completedMatches.forEach(match => {
        const home = table[match.homeTeam];
        const away = table[match.awayTeam];
        home.played++;
        away.played++;
        home.goalsFor += match.score.home;
        home.goalsAgainst += match.score.away;
        away.goalsFor += match.score.away;
        away.goalsAgainst += match.score.home;
        if (match.score.home > match.score.away) {
            home.won++;
            away.lost++;
            home.points += 3;
            home.form.push('W');
            away.form.push('L');
        } else if (match.score.home < match.score.away) {
            away.won++;
            home.lost++;
            away.points += 3;
            home.form.push('L');
            away.form.push('W');
        } else {
            home.drawn++;
            away.drawn++;
            home.points++;
            away.points++;
            home.form.push('D');
            away.form.push('D');
        }
    });
    // Only keep last 5 results for form
    Object.values(table).forEach(team => {
        team.goalDiff = team.goalsFor - team.goalsAgainst;
        team.form = team.form.slice(-5);
    });
    // Return as sorted array
    return Object.values(table).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        return a.name.localeCompare(b.name);
    });
}

// Extend initializeMatchdaySelectors to also filter by team and status
function initializeMatchdaySelectors() {
    document.addEventListener('change', function(e) {
        // Fixtures page
        if (e.target && (e.target.id === 'fixturesMatchdaySelect' || e.target.id === 'fixturesTeamSelect' || e.target.id === 'fixturesStatusSelect')) {
            const matchdayVal = document.getElementById('fixturesMatchdaySelect')?.value || 'all';
            const teamVal = document.getElementById('fixturesTeamSelect')?.value || 'all';
            const statusVal = document.getElementById('fixturesStatusSelect')?.value || 'all';
            let anyVisible = false;
            document.querySelectorAll('.fixture-week').forEach(week => {
                // Show/hide week by matchday
                if (matchdayVal !== 'all' && week.getAttribute('data-matchday') !== matchdayVal) {
                    week.style.display = 'none';
                } else {
                    week.style.display = '';
                    // Now filter fixture-cards inside
                    let weekHasVisible = false;
                    week.querySelectorAll('.fixture-card').forEach(card => {
                        const home = card.getAttribute('data-home');
                        const away = card.getAttribute('data-away');
                        const status = card.getAttribute('data-status');
                        let show = true;
                        if (teamVal !== 'all' && teamVal !== home && teamVal !== away) show = false;
                        if (statusVal !== 'all' && statusVal !== status) show = false;
                        card.style.display = show ? '' : 'none';
                        if (show) weekHasVisible = true;
                    });
                    if (!weekHasVisible) week.style.display = 'none';
                    else anyVisible = true;
                }
            });
            const msg = document.querySelector('.no-fixtures-message');
            if (msg) msg.style.display = anyVisible ? 'none' : 'block';
        }
        // Results page
        if (e.target && (e.target.id === 'resultsMatchdaySelect' || e.target.id === 'resultsTeamSelect' || e.target.id === 'resultsStatusSelect')) {
            const matchdayVal = document.getElementById('resultsMatchdaySelect')?.value || 'all';
            const teamVal = document.getElementById('resultsTeamSelect')?.value || 'all';
            const statusVal = document.getElementById('resultsStatusSelect')?.value || 'all';
            let anyVisible = false;
            document.querySelectorAll('.result-week').forEach(week => {
                // Show/hide week by matchday
                if (matchdayVal !== 'all' && week.getAttribute('data-matchday') !== matchdayVal) {
                    week.style.display = 'none';
                } else {
                    week.style.display = '';
                    // Now filter result-cards inside
                    let weekHasVisible = false;
                    week.querySelectorAll('.result-card').forEach(card => {
                        const home = card.getAttribute('data-home');
                        const away = card.getAttribute('data-away');
                        const status = card.getAttribute('data-status');
                        let show = true;
                        if (teamVal !== 'all' && teamVal !== home && teamVal !== away) show = false;
                        if (statusVal !== 'all' && statusVal !== status) show = false;
                        
                        // Apply color based on selected team's result
                        if (show && status === 'completed' && teamVal !== 'all') {
                            const score = card.querySelector('.score').textContent;
                            const [homeScore, awayScore] = score.split(' - ').map(Number);
                            let resultColor = '';
                            
                            if (teamVal === home) {
                                if (homeScore > awayScore) {
                                    resultColor = '#4caf50'; // Win - Green
                                } else if (homeScore < awayScore) {
                                    resultColor = '#f44336'; // Loss - Red
                                } else {
                                    resultColor = '#ffc107'; // Draw - Yellow
                                }
                            } else if (teamVal === away) {
                                if (awayScore > homeScore) {
                                    resultColor = '#4caf50'; // Win - Green
                                } else if (awayScore < homeScore) {
                                    resultColor = '#f44336'; // Loss - Red
                                } else {
                                    resultColor = '#ffc107'; // Draw - Yellow
                                }
                            }
                            
                            // Apply colors
                            card.style.borderLeft = resultColor ? `4px solid ${resultColor}` : '';
                            card.querySelector('.score').style.color = resultColor || '';
                            const statusBadge = card.querySelector('.match-status');
                            if (statusBadge) {
                                statusBadge.style.background = resultColor ? `rgba(${resultColor === '#4caf50' ? '76, 175, 80' : resultColor === '#f44336' ? '244, 67, 54' : '255, 193, 7'}, 0.1)` : '';
                                statusBadge.style.color = resultColor || '';
                            }
                        } else {
                            // Reset colors if not showing or no team selected
                            card.style.borderLeft = '';
                            card.querySelector('.score').style.color = '';
                            const statusBadge = card.querySelector('.match-status');
                            if (statusBadge) {
                                statusBadge.style.background = '';
                                statusBadge.style.color = '';
                            }
                        }
                        
                        card.style.display = show ? '' : 'none';
                        if (show) weekHasVisible = true;
                    });
                    if (!weekHasVisible) week.style.display = 'none';
                    else anyVisible = true;
                }
            });
            const msg = document.querySelector('.no-results-message');
            if (msg) msg.style.display = anyVisible ? 'none' : 'block';
        }
    });
}

//allfixtures

// --- YTY Cup Fixtures ---
const ytyCupFixtures = [
    // Quarter Finals
    { id: 'yqf1', round: 'Quarter Final', date: '2025-06-17', time: '22:00', homeTeam: 'thor', awayTeam: 'imoizy', status: 'completed', score: { home: 4, away: 1 }, penalties: { home: 0, away: 0 } },
    { id: 'yqf2', round: 'Quarter Final', date: '2025-06-17', time: '22:00', homeTeam: 'smiles', awayTeam: 'newton', status: 'completed', score: { home: 1, away: 5 }, penalties: null },
    { id: 'yqf3', round: 'Quarter Final', date: '2025-06-17', time: '22:00', homeTeam: 'offer', awayTeam: 'ghost', status: 'completed', score: { home: 0, away: 3 }, penalties: { home: 0, away: 0 } },
    { id: 'yqf4', round: 'Quarter Final', date: '2025-06-17', time: '22:00', homeTeam: 'cook', awayTeam: 'kenno', status: 'completed', score: { home: 1, away: 2 }, penalties: { home: 0, away: 0 } },
    // Semi Finals (Home & Away) - use 'tbd' for placeholders
    { id: 'ysf1a', round: 'Semi Final - 1st Leg', date: '2025-06-22', time: '22:00', homeTeam: 'ghost', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 }, penalties: { home: 0, away: 0 } },
    { id: 'ysf1b', round: 'Semi Final - 2nd Leg', date: '2025-06-22', time: '22:00', homeTeam: 'kenno', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 }, penalties: { home: 0, away: 0 } },
    { id: 'ysf2a', round: 'Semi Final - 1st Leg', date: '2025-06-22', time: '22:00', homeTeam: 'newton', awayTeam: 'thor', status: 'scheduled', score: { home: 0, away: 0 }, penalties: { home: 0, away: 0 } },
    { id: 'ysf2b', round: 'Semi Final - 2nd Leg', date: '2025-06-22', time: '22:00', homeTeam: 'thor', awayTeam: 'newton', status: 'scheduled', score: { home: 0, away: 0 }, penalties: { home: 0, away: 0 } },
    // Final
    { id: 'yfinal', round: 'Final', date: '2025-06-26', time: '22:00', homeTeam: 'tbd', awayTeam: 'tbd', status: 'scheduled', score: { home: 0, away: 0 }, penalties: { home: 0, away: 0 } }
];

// --- Super Cup Fixture ---
const superCupFixture = {
    id: 'supercup',
    round: 'Super Cup',
    date: '2025-06-30',
    time: '22:00',
    homeTeam: 'tbd', // League winner
    awayTeam: 'tbd', // YTY Cup winner
    status: 'scheduled',
    score: { home: 0, away: 0 },
    penalties: { home: 0, away: 0 }
};

// --- Friendly Fixtures ---
const friendlyFixtures = [
    // Pre-season Friendlies
    { id: 'ff1', round: 'Pre-season', date: '2025-05-01', time: '19:00', homeTeam: 'cook', awayTeam: 'imoizy', status: 'completed', score: { home: 3, away: 2 } },
    { id: 'ff2', round: 'Pre-season', date: '2025-05-02', time: '19:00', homeTeam: 'ghost', awayTeam: 'cook', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'ff3', round: 'Pre-season', date: '2025-05-03', time: '19:00', homeTeam: 'kenno', awayTeam: 'offer', status: 'completed', score: { home: 5, away: 6 } },
    { id: 'ff4', round: 'Pre-season', date: '2025-05-04', time: '19:00', homeTeam: 'ghost', awayTeam: 'smiles', status: 'completed', score: { home: 2, away: 2 } },
    
    // Mid-season Friendlies
    { id: 'ff5', round: 'Mid-season', date: '2025-05-20', time: '19:00', homeTeam: 'offer', awayTeam: 'cook', status: 'completed', score: { home: 2, away: 2 } },
    { id: 'ff6', round: 'Mid-season', date: '2025-05-21', time: '19:00', homeTeam: 'kenno', awayTeam: 'smiles', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'ff7', round: 'Mid-season', date: '2025-05-22', time: '19:00', homeTeam: 'newton', awayTeam: 'ghost', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'ff8', round: 'Mid-season', date: '2025-05-23', time: '19:00', homeTeam: 'cook', awayTeam: 'imoizy', status: 'completed', score: { home: 1, away: 5 } }
];

// Function to get Champions League fixtures
function getChampionsLeagueFixtures() {
    return [
        // Matchday 1
        { id: 'clf1', matchday: 1, date: '2025-06-18', time: '20:00', homeTeam: 'kenno', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf2', matchday: 1, date: '2025-06-18', time: '22:00', homeTeam: 'ghost', awayTeam: 'thor', status: 'completed', score: { home: 2, away: 1 } },
        // Matchday 2
        { id: 'clf3', matchday: 2, date: '2025-06-21', time: '20:00', homeTeam: 'thor', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf4', matchday: 2, date: '2025-06-21', time: '22:00', homeTeam: 'imoizy', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 3
        { id: 'clf5', matchday: 3, date: '2025-06-23', time: '20:00', homeTeam: 'kenno', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf6', matchday: 3, date: '2025-06-23', time: '22:00', homeTeam: 'imoizy', awayTeam: 'thor', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 4
        { id: 'clf7', matchday: 4, date: '2025-06-25', time: '20:00', homeTeam: 'thor', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf8', matchday: 4, date: '2025-06-25', time: '22:00', homeTeam: 'ghost', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 5
        { id: 'clf9', matchday: 5, date: '2025-06-27', time: '20:00', homeTeam: 'ghost', awayTeam: 'imoizy', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf10', matchday: 5, date: '2025-06-27', time: '22:00', homeTeam: 'kenno', awayTeam: 'thor', status: 'scheduled', score: { home: 0, away: 0 } },
        // Matchday 6
        { id: 'clf11', matchday: 6, date: '2025-06-29', time: '20:00', homeTeam: 'thor', awayTeam: 'ghost', status: 'scheduled', score: { home: 0, away: 0 } },
        { id: 'clf12', matchday: 6, date: '2025-06-29', time: '22:00', homeTeam: 'imoizy', awayTeam: 'kenno', status: 'scheduled', score: { home: 0, away: 0 } }
    ];
}

// --- Champions League Final ---
const championsLeagueFinal = {
    id: 'clfinal',
    matchday: 7,
    date: '2025-06-30',
    time: '20:00',
    homeTeam: 'tbd',
    awayTeam: 'tbd',
    status: 'scheduled',
    score: { home: 0, away: 0 },
    penalties: { home: 0, away: 0 }
};

// Add responsive style for table legend
if (!document.getElementById('responsive-table-legend-style')) {
    const style = document.createElement('style');
    style.id = 'responsive-table-legend-style';
    style.innerHTML = `
    @media (max-width: 600px) {
        .table-legend-simple {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.5em !important;
            font-size: 1em !important;
            text-align: center !important;
            margin-top: 1.5em !important;
        }
        .league-table td, .league-table th {
            padding: 1em 0.7em !important;
            font-size: 1.08em !important;
        }
        .cl-table-scroll {
            overflow-x: auto !important;
        }
        .cl-table-scroll .league-table {
            min-width: 600px !important;
        }
    }
    .table-legend-simple {
        margin-top: 2.5em !important;
    }

    @media (max-width: 768px) {
        .header-controls {
            top: 0.75rem;
            right: 0.75rem;
            gap: 0.4rem;
        }

        .search-btn,
        .theme-toggle-btn,
        .chatbot-btn {
            width: 32px;
            height: 32px;
            font-size: 1rem;
        }
    }

    .chatbot-btn:hover {
        background: rgba(255,255,255,0.3) !important;
        transform: rotate(15deg);
    }
    `;
    document.head.appendChild(style);
}

// --- Team Overview Function ---
function getTeamOverview(teamId) {
    const team = teamsData[teamId];
    if (!team) return null;
    // League stats and position
    const leagueTable = computeLeagueTable();
    const leaguePos = leagueTable.findIndex(t => t.teamId === teamId) + 1;
    const leagueStats = leagueTable.find(t => t.teamId === teamId) || {};
    
    // Champions League status
    let inCL = false, clGroup = null, clGroupPos = null, clProgression = null;
    
    // Get Champions League fixtures
    const championsLeagueFixtures = getChampionsLeagueFixtures();
    // Get unique team IDs from the fixtures
    const clTeamIds = Array.from(new Set(championsLeagueFixtures.flatMap(f => [f.homeTeam, f.awayTeam])));
    
    // Check if team is in CL group
    inCL = clTeamIds.includes(teamId);
    
    if (inCL) {
        // Compute CL group table
        const clTable = (function() {
            const table = {};
            clTeamIds.forEach(tid => {
                table[tid] = {
                    teamId: tid,
                    name: teamsData[tid]?.name || tid,
                    played: 0,
                    won: 0,
                    drawn: 0,
                    lost: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    points: 0
                };
            });
            championsLeagueFixtures.forEach(fix => {
                if (fix.status === 'completed' && fix.score) {
                    const home = table[fix.homeTeam];
                    const away = table[fix.awayTeam];
                    home.played++;
                    away.played++;
                    home.goalsFor += fix.score.home;
                    home.goalsAgainst += fix.score.away;
                    away.goalsFor += fix.score.away;
                    away.goalsAgainst += fix.score.home;
                    if (fix.score.home > fix.score.away) {
                        home.won++;
                        home.points += 3;
                        away.lost++;
                    } else if (fix.score.home < fix.score.away) {
                        away.won++;
                        away.points += 3;
                        home.lost++;
                    } else {
                        home.drawn++;
                        away.drawn++;
                        home.points++;
                        away.points++;
                    }
                }
            });
            return Object.values(table).sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points;
                const gdA = a.goalsFor - a.goalsAgainst;
                const gdB = b.goalsFor - b.goalsAgainst;
                if (gdB !== gdA) return gdB - gdA;
                if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
                return a.name.localeCompare(b.name);
            });
        })();
        clGroup = clTable;
        clGroupPos = clTable.findIndex(t => t.teamId === teamId) + 1;
        
        // Check if team is in the final
        const isInFinal = championsLeagueFinal.homeTeam === teamId || championsLeagueFinal.awayTeam === teamId;
        if (isInFinal) {
            clProgression = 'Final';
        } else {
            // Progression: top 2 go to final
            clProgression = clGroupPos > 0 && clGroupPos <= 2 ? 'Final' : 'Group Stage';
        }
    }
    
    // YTY Cup progression
    let inYTY = false, ytyProgression = null;
    const ytyMatches = ytyCupFixtures.filter(f => f.homeTeam === teamId || f.awayTeam === teamId);
    inYTY = ytyMatches.length > 0;
    if (inYTY) {
        // Find furthest round reached
        const rounds = ['Quarter Final', 'Semi Final - 1st Leg', 'Semi Final - 2nd Leg', 'Final'];
        let maxIdx = -1;
        ytyMatches.forEach(m => {
            const idx = rounds.indexOf(m.round);
            if (idx > maxIdx) maxIdx = idx;
        });
        ytyProgression = maxIdx >= 0 ? rounds[maxIdx] : null;
    }
    
    return {
        teamDetails: team,
        league: {
            position: leaguePos,
            stats: leagueStats
        },
        championsLeague: {
            inCompetition: inCL,
            groupPosition: clGroupPos,
            progression: clProgression,
            groupTable: clGroup
        },
        ytyCup: {
            inCompetition: inYTY,
            progression: ytyProgression
        }
    };
}

function showTeamStats(teamId) {
    const team = teamsData[teamId];
    if (!team) return;

    const stats = getTeamStatsAndForm(teamId);
    const winPercentage = ((stats.wins / (stats.wins + stats.losses + stats.draws)) * 100).toFixed(1);

    const modalContent = `
        <div class="team-stats-modal">
            <div class="modal-header">
                <h3>${team.name} Statistics</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="stats-grid">
                <div class="stat-box">
                    <span class="stat-value">${stats.wins}</span>
                    <span class="stat-label">Wins</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value">${stats.losses}</span>
                    <span class="stat-label">Losses</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value">${stats.draws}</span>
                    <span class="stat-label">Draws</span>
                </div>
                <div class="stat-box win-percentage">
                    <span class="stat-value">${winPercentage}%</span>
                    <span class="stat-label">Win Rate</span>
                </div>
            </div>
            // ... existing code ...
        </div>
    `;

    // Update the modal content
    document.querySelector('.team-stats-modal').innerHTML = modalContent;
}

// Initialize chatbot functionality
function initializeChatbot() {
    console.log('Initializing chatbot...');
    const showQuestionsBtn = document.getElementById('show-questions');
    const closeQuestionsBtn = document.getElementById('close-questions');
    const questionsOverlay = document.getElementById('questions-overlay');
    const messagesContainer = document.querySelector('.chatbot-messages');
    
    if (!showQuestionsBtn || !closeQuestionsBtn || !questionsOverlay || !messagesContainer) {
        console.error('Chatbot elements not found');
        return;
    }

    // Show questions overlay
    showQuestionsBtn.addEventListener('click', () => {
        questionsOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close questions overlay
    closeQuestionsBtn.addEventListener('click', () => {
        questionsOverlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Close overlay when clicking outside
    questionsOverlay.addEventListener('click', (e) => {
        if (e.target === questionsOverlay) {
            questionsOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Handle question selection
    const questionButtons = document.querySelectorAll('.question-btn');
    questionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedValue = button.dataset.value;
            const questionText = button.textContent.trim();
            
            // Add user message
            addMessage(questionText, false);
            
            // Process the query and add bot response
            let response;
            if (selectedValue === 'table') {
                response = processUserQuery('show me the league table');
            } else if (selectedValue === 'recent') {
                response = processUserQuery('show recent results');
            } else if (selectedValue === 'upcoming') {
                response = processUserQuery('show upcoming matches');
            } else if (selectedValue === 'champions') {
                response = processUserQuery('tell me about the champions league');
            } else if (selectedValue === 'cups') {
                response = processUserQuery('show cup progression');
            } else if (selectedValue === 'managers') {
                response = processUserQuery('show manager rankings');
            } else if (selectedValue.startsWith('team_')) {
                const teamId = selectedValue.replace('team_', '');
                const team = teamsData[teamId];
                if (team) {
                    response = processUserQuery(`how is ${team.name} performing`);
                }
            }

            if (response) {
                addMessage(response);
            }

            // Close the overlay
            questionsOverlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    // Add hover effects
    questionButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.background = 'var(--primary-color)';
            button.style.color = 'white';
        });
        button.addEventListener('mouseout', () => {
            button.style.background = 'var(--bg-color)';
            button.style.color = 'var(--text-color)';
        });
    });
}

function addMessage(content, isBot = true) {
    console.log('Adding message:', { content, isBot });
    const messagesContainer = document.querySelector('.chatbot-messages');
    if (!messagesContainer) {
        console.error('Messages container not found');
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;
    messageDiv.style.cssText = `
        display: flex;
        gap: 0.8rem;
        max-width: 85%;
        margin-bottom: 1.5rem;
        align-self: ${isBot ? 'flex-start' : 'flex-end'};
        flex-direction: ${isBot ? 'row' : 'row-reverse'};
        animation: fadeIn 0.3s ease-out;
    `;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.style.cssText = `
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${isBot ? 'var(--primary-color)' : 'var(--accent-color)'};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1rem;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    avatar.innerHTML = isBot ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.style.cssText = `
        background: ${isBot ? 'var(--light-bg)' : 'var(--accent-color)'};
        padding: 1rem;
        border-radius: 16px;
        color: ${isBot ? 'var(--text-color)' : 'white'};
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        width: 100%;
    `;

    // Format the content with proper styling
    if (isBot) {
        // Split content into sections if it contains bullet points
        const sections = content.split('\n\n');
        if (sections.length > 1) {
            contentDiv.innerHTML = sections.map(section => {
                const lines = section.trim().split('\n');
                const firstLine = lines[0];
                const restLines = lines.slice(1);
                
                // Check if first line is a header (contains emoji)
                const isHeader = firstLine.match(/[🏆🌟📊📈⚽📅]/);
                
                return `
                    <div style="margin-bottom: 1rem;">
                        ${isHeader ? 
                            `<div style="font-size: 1.1em; font-weight: 700; color: var(--primary-color); margin-bottom: 0.5rem;">
                                ${firstLine}
                            </div>` : 
                            `<div style="margin-bottom: 0.5rem;">${firstLine}</div>`
                        }
                        ${restLines.map(line => {
                            // Check if line is a bullet point
                            if (line.startsWith('•')) {
                                return `<div style="margin: 0.3rem 0; padding-left: 1rem; position: relative;">
                                    <span style="position: absolute; left: 0; color: var(--primary-color);">•</span>
                                    ${line.substring(1)}
                                </div>`;
                            }
                            // Check if line is a stat or metric
                            else if (line.includes(':') && !line.includes('vs')) {
                                const [label, value] = line.split(':');
                                return `<div style="margin: 0.3rem 0;">
                                    <span style="font-weight: 600; color: var(--primary-color);">${label}:</span>
                                    <span style="margin-left: 0.3rem;">${value}</span>
                                </div>`;
                            }
                            // Regular line
                            return `<div style="margin: 0.3rem 0;">${line}</div>`;
                        }).join('')}
                    </div>
                `;
            }).join('');
        } else {
            contentDiv.textContent = content;
        }
    } else {
        contentDiv.textContent = content;
    }

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Add fade-in animation
    messageDiv.style.opacity = '0';
    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 50);
}

// Add this CSS to the existing styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .message {
        transition: all 0.3s ease;
    }

    .message:hover {
        transform: translateY(-2px);
    }

    .message-content {
        transition: all 0.3s ease;
    }

    .message:hover .message-content {
        box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }
`;
document.head.appendChild(style);

// Make sure chatbot is initialized when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing chatbot...');
    // Initialize chatbot after a short delay to ensure DOM is ready
    setTimeout(initializeChatbot, 100);
});

// Also initialize chatbot when switching to the chatbot page
function loadPage(pageId) {
    console.log('Loading page:', pageId);
    document.querySelector('main').innerHTML = getPageContent(pageId);
    updateActiveState(pageId);
    history.pushState({ page: pageId }, '', `#${pageId}`);
    window.scrollTo(0, 0);

    if (pageId === 'teams') {
        initializeTeamStats();
        initializeTeamSearch();
    }
    if (pageId === 'fixtures' || pageId === 'results') {
        initializeMatchdaySelectors();
    }
    if (pageId === 'search') {
        initializeTeamStats();
    }
    if (pageId === 'chatbot') {
        console.log('Initializing chatbot for chatbot page');
        // Initialize chatbot after a short delay to ensure DOM is ready
        setTimeout(initializeChatbot, 100);
    }
    if (pageId === 'hall-of-fame') {
        initializeHallOfFame();
    }
    if (pageId === 'friendlies') {
        initializeFriendliesFilters();
    }
}

function processUserQuery(query) {
    // Convert query to lowercase for easier matching
    const lowerQuery = query.toLowerCase();
    
    // League table related queries
    if (lowerQuery.includes('table') || lowerQuery.includes('standings') || lowerQuery.includes('position')) {
        const leagueTable = computeLeagueTable();
        const top4 = leagueTable.slice(0, 4);
        const bottom2 = leagueTable.slice(-2);
        
        let response = 'Here\'s a detailed analysis of the current league standings:\n\n';
        response += '🏆 Top 4 (Champions League Qualification):\n';
        top4.forEach((team, idx) => {
            const form = team.form.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ');
            response += `${idx + 1}. ${team.name} - ${team.points} points (${team.played} played)\n`;
            response += `   Form: ${form}\n`;
            response += `   Goals: ${team.goalsFor}-${team.goalsAgainst} (GD: ${team.goalDiff > 0 ? '+' : ''}${team.goalDiff})\n`;
        });
        
        response += '\n⚠️ Bottom 2 (Relegation Zone):\n';
        bottom2.forEach((team, idx) => {
            const form = team.form.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ');
            response += `${leagueTable.length - 1 + idx}. ${team.name} - ${team.points} points (${team.played} played)\n`;
            response += `   Form: ${form}\n`;
            response += `   Goals: ${team.goalsFor}-${team.goalsAgainst} (GD: ${team.goalDiff > 0 ? '+' : ''}${team.goalDiff})\n`;
        });

        // Add league insights
        const avgGoalsPerGame = leagueTable.reduce((sum, team) => sum + team.goalsFor + team.goalsAgainst, 0) / 
                            (leagueTable.reduce((sum, team) => sum + team.played, 0) * 2);
        const highestScorer = leagueTable.reduce((max, team) => team.goalsFor > max.goalsFor ? team : max);
        const bestDefense = leagueTable.reduce((min, team) => team.goalsAgainst < min.goalsAgainst ? team : min);
        
        response += '\n📊 League Insights:\n';
        response += `• Average goals per game: ${avgGoalsPerGame.toFixed(2)}\n`;
        response += `• Highest scoring team: ${highestScorer.name} (${highestScorer.goalsFor} goals)\n`;
        response += `• Best defense: ${bestDefense.name} (${bestDefense.goalsAgainst} goals conceded)\n`;
        
        return response;
    }

    // Team specific queries
    const teamMatch = lowerQuery.match(/(?:how is|what about|tell me about|show|analyze) (.*?)(?:doing|performing|stats|form|analysis)/);
    if (teamMatch) {
        const teamName = teamMatch[1].trim();
        console.log('Looking for team:', teamName);
        
        // Find team ID by name (case-insensitive)
        const teamId = Object.entries(teamsData).find(([_, data]) => 
            data.name.toLowerCase() === teamName.toLowerCase() ||
            data.shortName.toLowerCase() === teamName.toLowerCase()
        )?.[0];

        console.log('Found team ID:', teamId);

        if (teamId) {
            const overview = getTeamOverview(teamId);
            if (overview) {
                const team = overview.teamDetails;
                const stats = overview.league.stats;
                const form = stats.form.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ');
                
                let response = `📊 Detailed Analysis of ${team.name}:\n\n`;
                response += `League Position: ${overview.league.position}${overview.league.position === 1 ? 'st' : overview.league.position === 2 ? 'nd' : overview.league.position === 3 ? 'rd' : 'th'}\n`;
                response += `Points: ${stats.points} (${stats.won}W ${stats.drawn}D ${stats.lost}L)\n`;
                response += `Form: ${form}\n`;
                response += `Goals: ${stats.goalsFor}-${stats.goalsAgainst} (GD: ${stats.goalDiff > 0 ? '+' : ''}${stats.goalDiff})\n\n`;
                
                // Performance analysis
                const winRate = ((stats.won / stats.played) * 100).toFixed(1);
                const avgGoalsScored = (stats.goalsFor / stats.played).toFixed(2);
                const avgGoalsConceded = (stats.goalsAgainst / stats.played).toFixed(2);
                
                response += '📈 Performance Metrics:\n';
                response += `• Win Rate: ${winRate}%\n`;
                response += `• Average Goals Scored: ${avgGoalsScored} per game\n`;
                response += `• Average Goals Conceded: ${avgGoalsConceded} per game\n`;
                
                // Recent form analysis
                const recentForm = stats.form.slice(-5);
                const wins = recentForm.filter(f => f === 'W').length;
                const draws = recentForm.filter(f => f === 'D').length;
                const losses = recentForm.filter(f => f === 'L').length;
                
                response += '\n🔄 Recent Form Analysis:\n';
                response += `• Last 5 matches: ${wins}W ${draws}D ${losses}L\n`;
                if (wins >= 3) response += '• Strong recent form with multiple wins\n';
                else if (losses >= 3) response += '• Struggling with recent results\n';
                else response += '• Mixed results in recent matches\n';
                
                // Champions League status if applicable
                if (overview.championsLeague.inCompetition) {
                    response += '\n🏆 Champions League Status:\n';
                    response += `• Current Stage: ${overview.championsLeague.progression}\n`;
                    response += `• Group Position: ${overview.championsLeague.groupPosition}\n`;
                }
                
                console.log('Generated response:', response);
                return response;
            }
        }
        return `I couldn't find information about ${teamName}. Please make sure you've spelled the team name correctly.`;
    }

    // Champions League queries
    if (lowerQuery.includes('champions league') || lowerQuery.includes('cl')) {
        const clFixtures = getChampionsLeagueFixtures();
        const completedMatches = clFixtures.filter(f => f.status === 'completed');
        const upcomingMatches = clFixtures.filter(f => f.status === 'scheduled');
        
        let response = '🏆 Champions League Update\n\n';
        
        // Group stage analysis
        const clTeamIds = Array.from(new Set(clFixtures.flatMap(f => [f.homeTeam, f.awayTeam])));
        const groupTable = {};
        clTeamIds.forEach(teamId => {
            groupTable[teamId] = {
                teamId,
                name: teamsData[teamId]?.name || teamId,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            };
        });
        
        completedMatches.forEach(match => {
            const home = groupTable[match.homeTeam];
            const away = groupTable[match.awayTeam];
            home.played++;
            away.played++;
            home.goalsFor += match.score.home;
            home.goalsAgainst += match.score.away;
            away.goalsFor += match.score.away;
            away.goalsAgainst += match.score.home;
            
            if (match.score.home > match.score.away) {
                home.won++;
                home.points += 3;
                away.lost++;
            } else if (match.score.home < match.score.away) {
                away.won++;
                away.points += 3;
                home.lost++;
            } else {
                home.drawn++;
                away.drawn++;
                home.points++;
                away.points++;
            }
        });
        
        const sortedTable = Object.values(groupTable).sort((a, b) => {
            // First sort by points (descending)
            if (b.points !== a.points) return b.points - a.points;
            
            // Then by goal difference (descending)
            const gdA = a.goalsFor - a.goalsAgainst;
            const gdB = b.goalsFor - b.goalsAgainst;
            if (gdB !== gdA) return gdB - gdA;
            
            // Then by total goals scored (descending)
            if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
            
            // Finally by head-to-head results or alphabetically if tied
            if (a.headToHead && b.headToHead) {
                if (a.headToHead[b.id] !== b.headToHead[a.id]) {
                    return b.headToHead[a.id] - a.headToHead[b.id];
                }
            }
            
            // If everything else is equal, sort alphabetically by team name
            return a.name.localeCompare(b.name);
        });
        
        // Group Stage Table
        response += '📊 Group Stage Standings:\n';
        sortedTable.forEach((team, idx) => {
            const form = team.form ? team.form.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ') : '';
            response += `${idx + 1}. ${team.name}\n`;
            response += `   Points: ${team.points} (${team.won}W ${team.drawn}D ${team.lost}L)\n`;
            response += `   Goals: ${team.goalsFor}-${team.goalsAgainst}\n`;
            if (form) response += `   Form: ${form}\n`;
        });
        
        // Recent Results
        if (completedMatches.length > 0) {
            response += '\n⚽ Recent Results:\n';
            const recentMatches = completedMatches
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3);
                
            recentMatches.forEach(match => {
                const homeTeam = teamsData[match.homeTeam];
                const awayTeam = teamsData[match.awayTeam];
                response += `• ${homeTeam.name} ${match.score.home}-${match.score.away} ${awayTeam.name}\n`;
                response += `  ${match.date} at ${match.time}\n`;
            });
        }
        
        // Upcoming Matches
        if (upcomingMatches.length > 0) {
            response += '\n📅 Upcoming Matches:\n';
            const nextMatches = upcomingMatches
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 3);
                
            nextMatches.forEach(match => {
                const homeTeam = teamsData[match.homeTeam];
                const awayTeam = teamsData[match.awayTeam];
                response += `• ${homeTeam.name} vs ${awayTeam.name}\n`;
                response += `  ${match.date} at ${match.time}\n`;
            });
        }
        
        // Final Information
        if (championsLeagueFinal) {
            response += '\n🏆 Final:\n';
            const homeTeam = championsLeagueFinal.homeTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.homeTeam].name;
            const awayTeam = championsLeagueFinal.awayTeam === 'tbd' ? 'TBD' : teamsData[championsLeagueFinal.awayTeam].name;
            
            if (championsLeagueFinal.status === 'completed') {
                response += `• ${homeTeam} ${championsLeagueFinal.score.home}-${championsLeagueFinal.score.away} ${awayTeam}`;
                if (championsLeagueFinal.penalties) {
                    response += ` (pens ${championsLeagueFinal.penalties.home}-${championsLeagueFinal.penalties.away})`;
                }
            } else {
                response += `• ${homeTeam} vs ${awayTeam}\n`;
                response += `  ${championsLeagueFinal.date} at ${championsLeagueFinal.time}\n`;
                response += `  Venue: ${championsLeagueFinal.homeTeam !== 'tbd' && teamsData[championsLeagueFinal.homeTeam] ? teamsData[championsLeagueFinal.homeTeam].stadium : 'TBD'}`;
            }
        }
        
        return response;
    }

    // Match results queries
    if (lowerQuery.includes('recent results') || lowerQuery.includes('last matches')) {
        const recentMatches = matchData.fixtures
            .filter(m => m.status === 'completed')
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
        
        let response = '📊 Recent Match Analysis:\n\n';
        recentMatches.forEach(match => {
            const homeTeam = teamsData[match.homeTeam];
            const awayTeam = teamsData[match.awayTeam];
            const homeForm = computeLeagueTable().find(t => t.teamId === match.homeTeam)?.form.slice(-3) || [];
            const awayForm = computeLeagueTable().find(t => t.teamId === match.awayTeam)?.form.slice(-3) || [];
            
            response += `🏟️ ${homeTeam.name} ${match.score.home} - ${match.score.away} ${awayTeam.name}\n`;
            response += `📅 ${match.date} at ${match.time}\n`;
            response += `📈 Form:\n`;
            response += `   ${homeTeam.name}: ${homeForm.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ')}\n`;
            response += `   ${awayTeam.name}: ${awayForm.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ')}\n\n`;
        });
        
        // Add match statistics
        const totalGoals = recentMatches.reduce((sum, match) => sum + match.score.home + match.score.away, 0);
        const avgGoals = (totalGoals / recentMatches.length).toFixed(2);
        const homeWins = recentMatches.filter(m => m.score.home > m.score.away).length;
        const awayWins = recentMatches.filter(m => m.score.away > m.score.home).length;
        const draws = recentMatches.filter(m => m.score.home === m.score.away).length;
        
        response += '📈 Match Statistics:\n';
        response += `• Average goals per game: ${avgGoals}\n`;
        response += `• Home wins: ${homeWins}\n`;
        response += `• Away wins: ${awayWins}\n`;
        response += `• Draws: ${draws}\n`;
        
        return response;
    }

    // Upcoming matches queries
    if (lowerQuery.includes('upcoming matches') || lowerQuery.includes('next matches')) {
        const upcomingMatches = matchData.fixtures
            .filter(m => m.status === 'scheduled')
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 5);
        
        let response = '📅 Upcoming Match Schedule:\n\n';
        upcomingMatches.forEach(match => {
            const homeTeam = teamsData[match.homeTeam];
            const awayTeam = teamsData[match.awayTeam];
            const homeForm = computeLeagueTable().find(t => t.teamId === match.homeTeam)?.form.slice(-3) || [];
            const awayForm = computeLeagueTable().find(t => t.teamId === match.awayTeam)?.form.slice(-3) || [];
            
            response += `🏟️ ${homeTeam.name} vs ${awayTeam.name}\n`;
            response += `📅 ${match.date} at ${match.time}\n`;
            response += `📈 Recent Form:\n`;
            response += `   ${homeTeam.name}: ${homeForm.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ')}\n`;
            response += `   ${awayTeam.name}: ${awayForm.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ')}\n\n`;
        });
        
        // Add match statistics
        const homeTeams = upcomingMatches.map(m => m.homeTeam);
        const awayTeams = upcomingMatches.map(m => m.awayTeam);
        const uniqueTeams = [...new Set([...homeTeams, ...awayTeams])];
        
        response += '📊 Team Form Analysis:\n';
        uniqueTeams.forEach(teamId => {
            const team = teamsData[teamId];
            const form = computeLeagueTable().find(t => t.teamId === teamId)?.form.slice(-5) || [];
            const wins = form.filter(f => f === 'W').length;
            const draws = form.filter(f => f === 'D').length;
            const losses = form.filter(f => f === 'L').length;
            
            response += `• ${team.name}: ${wins}W ${draws}D ${losses}L in last 5 matches\n`;
        });
        
        return response;
    }

    // Cup progression queries
    if (lowerQuery.includes('cup progression') || lowerQuery.includes('show cups')) {
        let response = '🏆 Cup Competitions Progress:\n\n';
        
        // Champions League progression
        response += '🌟 Champions League:\n';
        const clFixtures = getChampionsLeagueFixtures();
        const clCompleted = clFixtures.filter(m => m.status === 'completed').length;
        const clTotal = clFixtures.length;
        const clProgress = Math.round((clCompleted / clTotal) * 100);
        
        response += `• Progress: ${clProgress}% (${clCompleted}/${clTotal} matches played)\n`;
        response += `• Current Stage: Group Stage\n`;
        response += `• Next Stage: Final\n\n`;
        
        // YTY Cup progression
        response += '🏆 YTY Cup:\n';
        const ytyCompleted = ytyCupFixtures.filter(m => m.status === 'completed').length;
        const ytyTotal = ytyCupFixtures.length;
        const ytyProgress = Math.round((ytyCompleted / ytyTotal) * 100);
        
        // Find current stage
        const completedRounds = ytyCupFixtures.filter(m => m.status === 'completed')
            .map(m => m.round);
        const currentStage = completedRounds.length > 0 ? 
            completedRounds[completedRounds.length - 1] : 'Not started';
        
        // Find next stage
        const nextStage = ytyCupFixtures.find(m => m.status === 'scheduled')?.round || 'Final';
        
        response += `• Progress: ${ytyProgress}% (${ytyCompleted}/${ytyTotal} matches played)\n`;
        response += `• Current Stage: ${currentStage}\n`;
        response += `• Next Stage: ${nextStage}\n\n`;
        
        // Upcoming cup matches
        const upcomingMatches = [
            ...clFixtures.filter(m => m.status === 'scheduled'),
            ...ytyCupFixtures.filter(m => m.status === 'scheduled')
        ].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
        
        if (upcomingMatches.length > 0) {
            response += '📅 Next Cup Matches:\n';
            upcomingMatches.forEach(match => {
                const homeTeam = teamsData[match.homeTeam];
                const awayTeam = teamsData[match.awayTeam];
                const competition = match.round === 'Final' ? 'YTY Cup Final' : 
                    match.round ? 'YTY Cup' : 'Champions League';
                response += `• ${competition}: ${homeTeam.name} vs ${awayTeam.name}\n`;
                response += `  ${match.date} at ${match.time}\n`;
            });
        }
        
        return response;
    }

    // Manager rankings query
    if (lowerQuery.includes('manager rankings') || lowerQuery.includes('manager points')) {
        // Get league table to calculate manager points
        const leagueTable = computeLeagueTable();
        
        // Create manager rankings array
        const managerRankings = leagueTable.map(team => {
            const teamData = teamsData[team.teamId];
            // Calculate form points (3 for W, 1 for D, 0 for L)
            const formPoints = (team.form || []).reduce((sum, result) => {
                switch(result) {
                    case 'W': return sum + 3;
                    case 'D': return sum + 1;
                    default: return sum;
                }
            }, 0);
            return {
                name: teamData.manager,
                team: teamData.name,
                points: team.points,
                formPoints: formPoints,
                wins: team.won,
                draws: team.drawn,
                losses: team.lost,
                goalsFor: team.goalsFor,
                goalsAgainst: team.goalsAgainst,
                goalDiff: team.goalDiff,
                form: team.form
            };
        }).sort((a, b) => b.formPoints - a.formPoints);

        let response = '👔 Manager Rankings (Based on Form):\n\n';
        
        // Top 3 managers
        response += '🏆 Top 3 Managers:\n';
        managerRankings.slice(0, 3).forEach((manager, idx) => {
            const form = manager.form.map(f => f === 'W' ? '✅' : f === 'D' ? '➖' : '❌').join(' ');
            response += `${idx + 1}. ${manager.name} (${manager.team})\n`;
            response += `   • Form Points: ${manager.formPoints}\n`;
            response += `   • Total Points: ${manager.points}\n`;
            response += `   • Record: ${manager.wins}W ${manager.draws}D ${manager.losses}L\n`;
            response += `   • Goals: ${manager.goalsFor}-${manager.goalsAgainst} (GD: ${manager.goalDiff > 0 ? '+' : ''}${manager.goalDiff})\n`;
            response += `   • Form: ${form}\n\n`;
        });

        // Manager statistics
        const totalFormPoints = managerRankings.reduce((sum, m) => sum + m.formPoints, 0);
        const avgFormPoints = (totalFormPoints / managerRankings.length).toFixed(1);
        const highestScoring = managerRankings.reduce((max, m) => m.goalsFor > max.goalsFor ? m : max);
        const bestDefense = managerRankings.reduce((min, m) => m.goalsAgainst < min.goalsAgainst ? m : min);
        const mostWins = managerRankings.reduce((max, m) => m.wins > max.wins ? m : max);

        response += '📊 Manager Statistics:\n';
        response += `• Average Form Points: ${avgFormPoints}\n`;
        response += `• Highest Scoring: ${highestScoring.name} (${highestScoring.goalsFor} goals)\n`;
        response += `• Best Defense: ${bestDefense.name} (${bestDefense.goalsAgainst} goals conceded)\n`;
        response += `• Most Wins: ${mostWins.name} (${mostWins.wins} wins)\n\n`;

        // Full rankings
        response += '📋 Full Rankings:\n';
        managerRankings.forEach((manager, idx) => {
            response += `${idx + 1}. ${manager.name} (${manager.team}) - ${manager.formPoints} form points\n`;
        });

        return response;
    }

    // Default response for unrecognized queries
    return "I'm not sure I understand. You can ask me about:\n- League standings and detailed statistics\n- Team performance analysis and form\n- Match results and trends\n- Champions League progress and predictions\n- Player statistics and comparisons\n\nTry asking something like:\n• 'Show me the league table'\n• 'How is [team name] performing?'\n• 'Analyze recent results'\n• 'Tell me about the Champions League'";
}

function initializeSeasonSelector() {
    const seasonSelect = document.getElementById('seasonSelect');
    const seasonContents = document.querySelectorAll('.season-content');

    if (seasonSelect) {
        seasonSelect.addEventListener('change', () => {
            const selectedSeason = seasonSelect.value;
            
            // Show selected season content
            seasonContents.forEach(content => {
                content.style.display = 'none';
            });
            const selectedContent = document.querySelector(`.season-content[data-season="${selectedSeason}"]`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });

        // Set initial value to First Season
        seasonSelect.value = 'season-1';
    }
}

function updateHallOfFameWinners(seasonId, winners) {
    const seasonContent = document.querySelector(`.season-content[data-season="${seasonId}"]`);
    if (!seasonContent) return;

    const winnerItems = seasonContent.querySelectorAll('.winner-item');
    winnerItems.forEach(item => {
        const teamId = item.getAttribute('data-team-id');
        const winnerInfo = item.querySelector('.winner-info');
        const winnerName = winnerInfo.querySelector('.winner-name');

        if (teamId === 'tbd') {
            // Show TBD logo for placeholder
            item.innerHTML = `
                <img src="images/club-logos/tbd.svg" alt="TBD" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid var(--accent-color);">
                <div class="winner-info" style="flex:1;">
                    <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">TBD</div>
                </div>
            `;
        } else {
            // Show actual team data
            const team = teamsData[teamId];
            if (team) {
                item.innerHTML = `
                    <img src="${team.logo}" alt="${team.name}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid var(--accent-color);">
                    <div class="winner-info" style="flex:1;">
                        <div class="winner-name" style="font-weight:700;color:var(--text-color);font-size:1.1rem;">${team.name}</div>
                    </div>
                `;
            }
        }
    });
}

function initializeHallOfFame() {
    const seasonSelect = document.getElementById('seasonSelect');
    const seasonContents = document.querySelectorAll('.season-content');
    const achievementCards = document.querySelectorAll('.achievement-card');

    // Add hover effects to achievement cards
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    if (seasonSelect) {
        seasonSelect.addEventListener('change', () => {
            const selectedSeason = seasonSelect.value;
            
            // Show selected season content
            seasonContents.forEach(content => {
                content.style.display = 'none';
            });
            const selectedContent = document.querySelector(`.season-content[data-season="${selectedSeason}"]`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
                // Update winners for the selected season
                updateHallOfFameWinners(selectedSeason);
            }
        });

        // Set initial value to First Season
        seasonSelect.value = 'season-1';
        // Update winners for the first season
        updateHallOfFameWinners('season-1');
    }
}

// Initialize friendlies page filters
function initializeFriendliesFilters() {
    const roundSelect = document.getElementById('friendliesRoundSelect');
    const teamSelect = document.getElementById('friendliesTeamSelect');
    const fixtureWeeks = document.querySelectorAll('.fixture-week');
    const fixtureCards = document.querySelectorAll('.fixture-card');
    const noFriendliesMessage = document.querySelector('.no-friendlies-message');

    function filterFixtures() {
        const selectedRound = roundSelect.value;
        const selectedTeam = teamSelect.value;
        let visibleFixtures = 0;

        fixtureWeeks.forEach(week => {
            const weekRound = week.dataset.round;
            const weekCards = week.querySelectorAll('.fixture-card');
            let weekVisible = false;

            weekCards.forEach(card => {
                const homeTeam = card.dataset.home;
                const awayTeam = card.dataset.away;
                const round = card.dataset.round;

                // Check if the round matches (if a specific round is selected)
                const roundMatch = selectedRound === 'all' || round === selectedRound;
                
                // Check if the team matches (if a specific team is selected)
                const teamMatch = selectedTeam === 'all' || 
                    homeTeam.toLowerCase() === selectedTeam.toLowerCase() || 
                    awayTeam.toLowerCase() === selectedTeam.toLowerCase();

                // Show the card only if both round and team match
                if (roundMatch && teamMatch) {
                    card.style.display = 'block';
                    weekVisible = true;
                    visibleFixtures++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show/hide the entire week section based on whether it has any visible cards
            week.style.display = weekVisible ? 'block' : 'none';
        });

        // Show/hide the "no matches" message
        if (noFriendliesMessage) {
            noFriendliesMessage.style.display = visibleFixtures === 0 ? 'block' : 'none';
        }
    }

    // Add event listeners to both selectors
    if (roundSelect) {
        roundSelect.addEventListener('change', filterFixtures);
    }
    if (teamSelect) {
        teamSelect.addEventListener('change', filterFixtures);
    }

    // Apply initial filtering when the page loads
    filterFixtures();
}

// Initialize all page-specific functionality
function initializePageFunctionality() {
    initializeMatchdaySelectors();
    initializeFriendliesFilters();
    // ... existing code ...
}


