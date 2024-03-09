
-- --------------------------------------------------------

--
-- Structure for view `agloa_orphaned_players`
--
DROP TABLE IF EXISTS `agloa_orphaned_players`;

DROP VIEW IF EXISTS `agloa_orphaned_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_orphaned_players`  AS SELECT DISTINCT `alapd`.`player_id` AS `player_id`, `alapd`.`player_name` AS `player_name`, `alapd`.`competition_key` AS `competition_key`, `rpnot`.`registration_group` AS `registration_group` FROM (`agloa_latest_active_player_data` `alapd` join `registered_players_not_on_team` `rpnot` on((`alapd`.`player_id` = `rpnot`.`contact_id`))) ;
