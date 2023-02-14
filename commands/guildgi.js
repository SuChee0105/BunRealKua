const { SlashCommandBuilder, PermissionFlagsBits, Client, EmbedBuilder, ChatInputCommandInteraction, version, channelLink } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guild')
		.setDescription("Tìm hướng build nhân vật")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
			option.setName("char")
			.setDescription("ChỌn Nhân Vật Bạn Muốn Build)")
			.addChoices(
				{ name: 'Nilou', value: 'Nilou'},
				{ name: "HuTao", value: "HuTao" },
			)
		),
			async execute(interaction, client) {
				const { options, guild } = interaction;
				const char = option.getString("char");

				const ID = "1061371180231164086";
				const ROLE = "1058092868432056470";

				if (!interaction.member.roles.cache.has(ROLE)) {
					return interaction.reply({
					  content: ":x: You do not have permission to use this command.",
					  ephemeral: true,
					});
				}

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("your review was submitted successfully.")
          .setColor("Green"),
      ],
      ephemeral: true,
    });
		},
};