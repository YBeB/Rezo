// Importer les modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Initialiser l'application Express
const app = express();

// Utiliser les middlewares
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Analyser les requêtes JSON

// Définir une route de test pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connecter à MongoDB en utilisant Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Démarrer le serveur en écoutant sur le port défini dans les variables d'environnement
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
