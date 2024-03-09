
-- --------------------------------------------------------

--
-- Structure for view `agloa_team_player_registrations`
--
DROP TABLE IF EXISTS `agloa_team_player_registrations`;

DROP VIEW IF EXISTS `agloa_team_player_registrations`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_team_player_registrations`  AS SELECT `aatcp`.`team_id` AS `team_id`, `aatcp`.`competition` AS `competition`, `aapcp`.`contact_id` AS `player_id` FROM (`agloa_active_player_competitions_pivoted` `aapcp` join `agloa_active_team_competitions_pivoted` `aatcp` on((`aapcp`.`competition` = `aatcp`.`competition`))) ;
