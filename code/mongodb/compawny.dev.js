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
        date: '2025-11-08'
    },
    {
        name: 'Lucas',
        email: 'user4@user.com',
        message: 'Je ne savais pas trop par où commencer pour aider, puis j’ai trouvé une action locale sur le site. L’accueil a été super bienveillant et je me suis tout de suite senti utile. C’est devenu un vrai rendez-vous régulier pour moi.',
        date: '2025-10-05'
    },
    {
        name: 'Celya',
        email: 'user5@user.com',
        message: 'J’ai adopté une petite perruche en situation d’urgence grâce au site. Elle était dans un état fragile, mais avec un peu de patience et beaucoup d’attention, elle a repris des forces. Aujourd’hui, elle est en pleine forme et fait partie de la famille.',
        date: '2025-08-19'
    },
    {
        name: 'Edson',
        email: 'user6@user.com',
        message: 'Grâce aux associations internationales présentées sur le site, j’ai pu voyager et m’engager dans plusieurs projets à l’étranger. Chaque expérience a été unique et enrichissante, autant sur le plan humain que pour la cause animale.',
        date: '2026-01-27'
},
])




