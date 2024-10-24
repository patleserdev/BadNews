// https://newsapi.org/v2/top-headlines/sources?language=fr&apiKey=${process.env.API_KEY}
{
sources: [
    {
      id: 'google-news-fr',
      name: 'Google News (France)',
      description: 'Informations complètes et à jour, compilées par Google Actualités à partir de sources d&#39;actualités du monde entier.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'fr',
      country: 'fr'
    },
    {
      id: 'le-monde',
      name: 'Le Monde',
      description: "Les articles du journal et toute l'actualit&eacute; en continu : International, France, Soci&eacute;t&eacute;, Economie, Culture, Environnement, Blogs ...",
      url: 'http://www.lemonde.fr',
      category: 'general',
      language: 'fr',
      country: 'fr'
    },
    {
      id: 'lequipe',
      name: "L'equipe",
      description: "Le sport en direct sur L'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !",   
      url: 'https://www.lequipe.fr',
      category: 'sports',
      language: 'fr',
      country: 'fr'
    },
    {
      id: 'les-echos',
      name: 'Les Echos',
      description: "Toute l'actualité économique, financière et boursière française et internationale sur Les Echos.fr",
      url: 'https://www.lesechos.fr',
      category: 'business',
      language: 'fr',
      country: 'fr'
    },
    {
      id: 'liberation',
      name: 'Libération',
      description: "Toute l'actualité en direct - photos et vidéos avec Libération",
      url: 'http://www.liberation.fr',
      category: 'general',
      language: 'fr',
      country: 'fr'
    }
  ]
}

const sources=[
  {id:'google-news-fr',name:'Google News (France)'},
  {id:'le-monde',name:'Le Monde'},
  {id:'lequipe',name:'L\'equipe'},
  {id:'les-echos',name:'Les Echos'},
  {id:'liberation',name:'Libération'}
]
