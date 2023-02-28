/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('VelikaArkana', [
            {
                tarotKarta: '0 - The Fool',
                rekLevo: 'rekLevo',
                rekDesno: 'rekDesno',
                opisKarte: 'opisKarte',
                opisPokoncna: 'opisPokoncna',
                besedePokoncna: 'besedePokoncna',
                opisObrnjena: 'opisObrnjena',
                besedeObrnjena: 'besedeObrnjena',
                meditacija: 'meditacija',
                modrostiKartePrva: 'modrostiKartePrva',
                modrostiKarteDva: 'modrostiKarteDva',
                modrostiKarteTri: 'modrostiKarteTri',
                modrostiKarteStiri: 'modrostiKarteStiri',
                vprasanje: 'vprasanje',
                barve: 'barve',
                numerologija: 'numerologija',
                cakre: 'cakre',
                elementi: 'elementi',
                zodiak: 'zodiak',
                planet: 'planet',
                cas: 'cas',
                kristali: 'kristali',
                telo: 'telo',
                opisSimbolov: 'opisSimbolov',
            },
            {
                tarotKarta: 'I - Magician',
                rekLevo: 'rekLevo',
                rekDesno: 'rekDesno',
                opisKarte: 'opisKarte',
                opisPokoncna: 'opisPokoncna',
                besedePokoncna: 'besedePokoncna',
                opisObrnjena: 'opisObrnjena',
                besedeObrnjena: 'besedeObrnjena',
                meditacija: 'meditacija',
                modrostiKartePrva: 'modrostiKartePrva',
                modrostiKarteDva: 'modrostiKarteDva',
                modrostiKarteTri: 'modrostiKarteTri',
                modrostiKarteStiri: 'modrostiKarteStiri',
                vprasanje: 'vprasanje',
                barve: 'barve',
                numerologija: 'numerologija',
                cakre: 'cakre',
                elementi: 'elementi',
                zodiak: 'zodiak',
                planet: 'planet',
                cas: 'cas',
                kristali: 'kristali',
                telo: 'telo',
                opisSimbolov: 'opisSimbolov',
            }].map((obj) => ({
            ...obj, createdAt: new Date(), updatedAt: new Date(),
        })), {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('VelikaArkana', null, {});
    }
};
