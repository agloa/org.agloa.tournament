
-- --------------------------------------------------------

--
-- Structure for view `latest_active_tournament_players`
--
DROP TABLE IF EXISTS `latest_active_tournament_players`;

DROP VIEW IF EXISTS `latest_active_tournament_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_tournament_players`  AS SELECT `latp`.`id` AS `id`, `latp`.`contact_id` AS `contact_id`, `latp`.`sort_name` AS `sort_name`, `latp`.`display_name` AS `display_name` FROM (`latest_active_tournament_participants` `latp` join `player_participant_role` `ppr` on((`latp`.`role_id` = `ppr`.`value`))) ;
