"use strict";

const { User } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await User.findAll();

    if (users.length === 0) {
      throw new Error("Run the users seeder before seeding articles.");
    }

    const articles = Array(55)
      .fill(null)
      .map((_, index) => {
        const user = users[index % users.length];

        return {
          slug: `lorem-ipsum-${index + 1}`,
          title: `Lorem Ipsum ${index + 1}`,
          description: `${
            index + 1
          } - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ante lacinia magna ultricies cursus nec non lacus. Praesent blandit sodales semper. Mauris eget leo non erat molestie faucibus luctus sed ex. Duis sollicitudin tellus vitae aliquam cursus. Integer ultricies ultricies erat. Vivamus egestas ac augue nec mattis. Duis posuere bibendum ex vitae placerat. Duis in odio vestibulum, pellentesque odio vitae, egestas nibh.`,
          userId: user.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });

    await queryInterface.bulkInsert("Articles", articles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
