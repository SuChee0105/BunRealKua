const { SlashCommandBuilder, PermissionFlagsBits, Client, EmbedBuilder, ChatInputCommandInteraction, version, channelLink } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vouch')
		.setDescription("Đánh giá dịch vụ")
        .addStringOption((option) =>
      option
        .setName("stars")
        .setDescription("Hãy Cho Tôi Đánh Giá của bạn ")
        .setRequired(true)
        .addChoices(
          { name: "⭐", value: "⭐" },
          { name: "⭐⭐", value: "⭐⭐" },
          { name: "⭐⭐⭐", value: "⭐⭐⭐" },
          { name: "⭐⭐⭐⭐", value: "⭐⭐⭐⭐" },
          { name: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Ý Kiến Của Bạn Như Thế Nào?")
        .setRequired(true)
    ),
			async execute(interaction, client) {
				const { options, guild } = interaction;
                const stars = options.getString("stars");
                const desc = options.getString("description");

                
				const ID = "1061358778085277808"; //id channel
				const ROLE = "1063829419841572864"; //id role

				if (!interaction.member.roles.cache.has(ROLE)) {
                    return interaction.reply({
                      content: " Hãy là khách hàng để dùng lệnh này !",
                      ephemeral: true,
                    });
                  }
              
                  const embed = new EmbedBuilder()
                    .setAuthor({
                      name: interaction.user.tag,
                      iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
                    })
                    .addFields([
                      {
                        name: " Đánh giá của tôi ❤ ",
                        value: `${stars}`,
                      },
                      {
                        name: "Phản hồi",
                        value: `${desc}`,
                      },
                    ])
                    .setColor("Yellow")
                    .setTimestamp();
              
                  guild.channels.cache.get(ID).send({
                    embeds: [embed],
                  });
              
                  await interaction.reply({
                    embeds: [
                      new EmbedBuilder()
                        .setDescription("Đã gửi feedback thành công! Cảm ơn bạn đã ủng hộ")
                        .setFooter("")
                        .setColor("Green"),
                    ],
                    ephemeral: true,
                  });
                },
              };