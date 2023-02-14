const { Client, SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tongmember')
    .setDescription('Xem tổng thành viên của server')
    .setDMPermission(false),
    async execute(interaction, client) {
        const { guild } = interaction;
        const membercount = guild.memberCount

        const Embed = new EmbedBuilder()
        .setTitle('👥 Bún Real Kua')
        .setDescription(`Server có ${membercount} thành viên!`)
        .setTimestamp(Date.now());

        interaction.reply({embeds: [Embed]});
    }
}