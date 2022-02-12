module.exports = function(sequelize, DataTypes) {
  const Stock = sequelize.define("Stock", {
    stock_symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    buying_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    current_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock_gain: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    is_sold: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Stock.associate = function(models) {
    Stock.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Stock.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Stock;
};
