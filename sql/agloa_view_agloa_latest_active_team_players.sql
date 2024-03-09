
-- --------------------------------------------------------

--
-- Structure for view `agloa_latest_active_team_players`
--
DROP TABLE IF EXISTS `agloa_latest_active_team_players`;

DROP VIEW IF EXISTS `agloa_latest_active_team_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_latest_active_team_players`  AS SELECT `alatpd`.`team_id` AS `team_id`, `alatpd`.`team_name` AS `team_name`, `alatpd`.`created_by` AS `created_by`, `alatpd`.`modified_by` AS `modified_by`, `alatpd`.`team_EQ` AS `EQ`, `alatpd`.`team_OS` AS `OS`, `alatpd`.`team_LI` AS `LING`, `alatpd`.`team_PROP` AS `PROP`, `alatpd`.`team_PREZ` AS `PRES`, `alatpd`.`team_THEME` AS `Theme`, `alatpd`.`team_CE` AS `CE`, `alatpd`.`team_WFF` AS `Wff`, `alatpd`.`player_id` AS `player_id`, `alatpd`.`player_name` AS `player_name`, `argc`.`title` AS `registration_group` FROM (`agloa_latest_active_team_player_data` `alatpd` left join `active_registration_group_contacts` `argc` on((`alatpd`.`player_id` = `argc`.`contact_id`))) ;
