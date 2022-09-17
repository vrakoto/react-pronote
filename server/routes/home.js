const express = require('express');
const router = express.Router();

const Utilisateur = require('../models/Utilisateur');
const { createTokens, validateToken, getAuthenticated } = require("../functions/auth");

router.get("/profile", validateToken, (req, res) => {
    return res.json(getAuthenticated(req.cookies["access-token"]));
});

// Connexion
router.post('/connexion', async (req, res) => {
    const accessToken = createTokens(req.body);
    res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
    });

    return res.send('connecté !')
});

// Inscription
router.post('/inscription', async (req, res) => {
    const { identifiant, nom, prenom, status, mdp } = req.body

    Utilisateur.create({
        identifiant,
        nom,
        prenom,
        status,
        mdp
    }).then((success) => {
        return res.json({success: 'Utilisateur créé !'})
    }).catch((error) => {
        return res.json({error: "Echec lors de l'inscription de l'utilisateur"})
    })
});

module.exports = router;