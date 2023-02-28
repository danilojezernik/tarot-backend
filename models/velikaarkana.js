'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VelikaArkana extends Model {
    }

    VelikaArkana.init({
        tarotKarta: DataTypes.STRING,
        rekLevo: DataTypes.STRING,
        rekDesno: DataTypes.STRING,
        opisKarte: DataTypes.STRING,
        opisPokoncna: DataTypes.STRING,
        besedePokoncna: DataTypes.STRING,
        opisObrnjena: DataTypes.STRING,
        besedeObrnjena: DataTypes.STRING,
        meditacija: DataTypes.STRING,
        modrostiKartePrva: DataTypes.STRING,
        modrostiKarteDva: DataTypes.STRING,
        modrostiKarteTri: DataTypes.STRING,
        modrostiKarteStiri: DataTypes.STRING,
        vprasanje: DataTypes.STRING,
        barve: DataTypes.STRING,
        numerologija: DataTypes.STRING,
        cakre: DataTypes.STRING,
        elementi: DataTypes.STRING,
        zodiak: DataTypes.STRING,
        planet: DataTypes.STRING,
        cas: DataTypes.STRING,
        kristali: DataTypes.STRING,
        telo: DataTypes.STRING,
        opisSimbolov: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'VelikaArkana',
        freezeTableName: true,
    });
    return VelikaArkana;
};
