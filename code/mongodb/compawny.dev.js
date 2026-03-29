// mongosh -u root -p --authenticationDatabase admin
// use compawny_dev
// db.dropDatabase()
// load("compawny.dev.js")
// db.contact.find()

db.contact.insertMany([
    { 
        name: 'Svetlana',
        email: 'user1@user.com',
        message: 'Grâce à Compawny, j’ai rencontré Nino, un chien senior qui attendait depuis longtemps au refuge. Aujourd’hui, il fait partie de ma famille et je ne remercierai jamais assez ce site de m’avoir permis de le trouver.',
        date: '2026-02-20'
    },
    { 
        name: 'Camille',
        email: 'user2@user.com',
        message: 'Je cherchais une façon concrète de me rendre utile près de chez moi. J’ai découvert une action locale grâce au site, j’y suis allée une première fois… et depuis, j’y retourne presque chaque week-end avec énormément de plaisir.',
        date: '2025-04-17'
    },
    { 
        name: 'Sofiane',
        email: 'user3@user.com',
        message: 'J’ai trouvé une association internationale via Compawny et je suis parti vivre une aventure humaine incroyable. Cette expérience m’a profondément marqué, et j’ai déjà hâte de préparer ma prochaine mission.',
        date: '2025-09-04'
    }
])