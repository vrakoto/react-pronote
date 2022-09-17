const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/config');

class Utilisateur extends Model {}
Utilisateur.init({
    identifiant: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    mdp: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
},
    {
        timestamps: false,
        sequelize,
        modelName: 'Utilisateur',
    }
)

async function generate() {
    await sequelize.sync({alter: true});
}

generate().then(() => {
    console.log("Request done.");
}).catch((err) => {
    console.log("ERR: ", err);
})

module.exports = Utilisateur;