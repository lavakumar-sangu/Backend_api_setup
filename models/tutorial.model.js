module.exports = (sequelize, Sequelize) => {
const Tutorial = sequelize.define("tutorial", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },
    });
    return Tutorial;
  };
