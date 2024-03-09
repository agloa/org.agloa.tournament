
-- --------------------------------------------------------

--
-- Structure for view `team_player_key_codes`
--
DROP TABLE IF EXISTS `team_player_key_codes`;

DROP VIEW IF EXISTS `team_player_key_codes`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `team_player_key_codes`  AS SELECT `agloa_latest_active_team_players`.`team_id` AS `Team`, `agloa_latest_active_team_players`.`player_id` AS `Player`, `agloa_latest_active_team_players`.`registration_group` AS `registration_group`, '' AS `key_code` FROM `agloa_latest_active_team_players` ;
