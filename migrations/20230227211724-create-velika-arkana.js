/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VelikaArkana', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tarotKarta: {
        type: Sequelize.STRING
      },
      rekLevo: {
        type: Sequelize.STRING
      },
      rekDesno: {
        type: Sequelize.STRING
      },
      opisKarte: {
        type: Sequelize.STRING
      },
      opisPokoncna: {
        type: Sequelize.STRING
      },
      besedePokoncna: {
        type: Sequelize.STRING
      },
      opisObrnjena: {
        type: Sequelize.STRING
      },
      besedeObrnjena: {
        type: Sequelize.STRING
      },
      meditacija: {
        type: Sequelize.STRING
      },
      modrostiKartePrva: {
        type: Sequelize.STRING
      },
      modrostiKarteDva: {
        type: Sequelize.STRING
      },
      modrostiKarteTri: {
        type: Sequelize.STRING
      },
      modrostiKarteStiri: {
        type: Sequelize.STRING
      },
      vprasanje: {
        type: Sequelize.STRING
      },
      barve: {
        type: Sequelize.STRING
      },
      numerologija: {
        type: Sequelize.STRING
      },
      cakre: {
        type: Sequelize.STRING
      },
      elementi: {
        type: Sequelize.STRING
      },
      zodiak: {
        type: Sequelize.STRING
      },
      planet: {
        type: Sequelize.STRING
      },
      cas: {
        type: Sequelize.STRING
      },
      kristali: {
        type: Sequelize.STRING
      },
      telo: {
        type: Sequelize.STRING
      },
      opisSimbolov: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('VelikaArkana');
  }
};
